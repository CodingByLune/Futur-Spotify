import type { APIRoute } from 'astro';
import { z } from 'astro/zod';

/**
 * Formulaire de contact — exécuté côté serveur (fonction Netlify).
 * - Aucune donnée n'est stockée : le message est transmis par email puis oublié.
 * - Anti-spam sans traceur : champ piège, délai minimal, limitation de débit.
 * - Rien de personnel n'est écrit dans les journaux.
 */
export const prerender = false;

const OBJETS = ['Mission freelance', 'Collaboration de marque', 'Opportunité professionnelle', 'Autre'] as const;

const schema = z.object({
  nom: z.string().trim().min(2).max(120),
  email: z.string().trim().max(200).pipe(z.email()),
  objet: z.enum(OBJETS).catch('Autre'),
  message: z.string().trim().min(10).max(5000),
});

// Limitation de débit « au mieux » (mémoire de l'instance) : 5 envois / 10 min / adresse.
const hits = new Map<string, number[]>();
function limited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > 5;
}

const env = (k: string) => (process.env[k] ?? (import.meta.env as Record<string, string | undefined>)[k])?.trim() || undefined;

function reply(request: Request, ok: boolean, status: number, error?: string) {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  if (wantsJson) {
    return new Response(JSON.stringify(ok ? { ok: true } : { ok: false, error }), {
      status,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
    });
  }
  // Sans JavaScript : redirection vers une page de confirmation statique.
  return new Response(null, { status: 303, headers: { location: ok ? '/contact/merci' : '/contact/erreur' } });
}

const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return reply(request, false, 400, 'format');
  }

  // Champ piège rempli ou envoi trop rapide (< 3 s) : réponse « OK » silencieuse, rien n'est envoyé.
  const honeypot = String(form.get('site_web') ?? '');
  const started = Number(form.get('started') ?? 0);
  if (honeypot || (started > 0 && Date.now() - started < 3000)) return reply(request, true, 200);

  let ip = 'inconnu';
  try { ip = clientAddress; } catch { /* adresse indisponible */ }
  if (limited(ip)) return reply(request, false, 429, 'limite');

  const parsed = schema.safeParse({
    nom: form.get('nom'),
    email: form.get('email'),
    objet: form.get('objet'),
    message: form.get('message'),
  });
  if (!parsed.success) return reply(request, false, 422, 'validation');

  const apiKey = env('BREVO_API_KEY');
  const to = env('CONTACT_TO');
  const from = env('CONTACT_FROM');
  if (!apiKey || !to || !from) {
    console.error('[contact] configuration incomplète : BREVO_API_KEY, CONTACT_TO ou CONTACT_FROM manquant');
    return reply(request, false, 503, 'config');
  }

  const { nom, email, objet, message } = parsed.data;
  const subject = `[Portfolio] ${objet} — ${nom}`;
  const text = `Nouveau message depuis le portfolio\n\nNom : ${nom}\nEmail : ${email}\nObjet : ${objet}\n\n${message}\n`;
  const html = `<p><strong>Nouveau message depuis le portfolio</strong></p>
<p>Nom : ${escapeHtml(nom)}<br>Email : ${escapeHtml(email)}<br>Objet : ${escapeHtml(objet)}</p>
<p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`;

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        sender: { email: from, name: 'Portfolio — formulaire' },
        to: [{ email: to }],
        replyTo: { email, name: nom },
        subject,
        textContent: text,
        htmlContent: html,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error(`[contact] échec d'envoi Brevo : HTTP ${res.status}`);
      return reply(request, false, 502, 'envoi');
    }
  } catch {
    console.error("[contact] échec d'envoi Brevo : réseau ou délai dépassé");
    return reply(request, false, 502, 'envoi');
  }

  return reply(request, true, 200);
};

export const ALL: APIRoute = () => new Response(null, { status: 405, headers: { allow: 'POST' } });
