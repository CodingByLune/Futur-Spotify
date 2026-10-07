#!/usr/bin/env node
/**
 * npm run check:lancement
 * Liste ce qui manque avant la mise en ligne : informations légales, droits de diffusion, contenus provisoires.
 * Code de sortie 1 s'il reste un point bloquant.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const read = (p) => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const site = read('src/data/site.json');
const PUBLISHABLE = new Set(['personnel', 'accorde']);
const asset = (src) =>
  ['public', 'prive'].map((d) => path.join(root, 'src/assets', d, src)).find((f) => fs.existsSync(f));

const bloquant = [];
const important = [];
const info = [];

// Configuration
if (!process.env.SITE_URL) bloquant.push('SITE_URL non défini (URL définitive du site, voir .env.example).');
if (!site.email) important.push('Email professionnel non renseigné (site.json → email) : seul le formulaire, Instagram et LinkedIn sont affichés.');
for (const k of ['BREVO_API_KEY', 'CONTACT_TO', 'CONTACT_FROM']) {
  if (!process.env[k]) bloquant.push(`Variable ${k} absente : le formulaire de contact ne peut pas envoyer d'email.`);
}
if (process.env.PUBLIC_PREVIEW === 'true') bloquant.push('PUBLIC_PREVIEW=true : à désactiver en production.');

// Légal
const L = site.legal;
if (!L.status) bloquant.push('Mentions légales : statut (particulier, micro-entrepreneur…) manquant.');
if (!L.address) bloquant.push('Mentions légales : adresse de domiciliation manquante.');
if (!L.contactEmail) bloquant.push('Mentions légales : email de contact manquant.');
if (!L.host?.name || !L.host?.address || !L.host?.phone) bloquant.push("Mentions légales : coordonnées complètes de l'hébergeur manquantes.");
if (L.status && L.status !== 'particulier' && !L.siret) bloquant.push('Mentions légales : SIRET manquant pour une activité professionnelle.');
if (!L.retention) important.push('Confidentialité : durée de conservation des messages non définie.');
if (!L.updated) important.push('Pages légales : date de mise à jour non renseignée.');

// Contenus provisoires
if (site.about.draft) important.push('Texte « À propos » provisoire (about.draft = true) : à valider ou réécrire.');
if (!site.portrait) important.push('Portrait HD absent (site.json → portrait).');
if (!site.cv) info.push('CV PDF non fourni (site.json → cv, fichier dans public/).');
if (!site.hero.video && !site.hero.videoMobile) info.push('Hero sans vidéo : une photo est affichée (site.json → hero.video / hero.videoMobile).');
if (site.methode.steps.some((s) => !s.text)) important.push('Section « Méthode » masquée : décris tes 4 étapes réelles (site.json → methode).');
if (!site.highlight.publishable) important.push('Chiffre « Cave du Georges » masqué : accord du restaurant requis (site.json → highlight.publishable).');
site.parcours.formations.filter((f) => !f.period).forEach((f) => important.push(`Parcours : dates de « ${f.org} » à confirmer.`));

// Projets
const projDir = path.join(root, 'src/content/projets');
for (const file of fs.readdirSync(projDir).filter((f) => f.endsWith('.json'))) {
  const p = read(`src/content/projets/${file}`);
  const status = p.rights.status;
  const medias = [p.cover, ...p.chapters.flatMap((c) => c.media)];
  const hidden = medias.filter((m) => !PUBLISHABLE.has(m.rights ?? status));
  const missing = medias.filter((m) => !asset(m.src));
  if (!PUBLISHABLE.has(status)) {
    important.push(`${p.title} : droits « ${status} » — ${hidden.length} média(s) masqué(s) en production. ${p.rights.notes ?? ''}`.trim());
  } else if (hidden.length) {
    important.push(`${p.title} : ${hidden.length} média(s) au statut non publiable (masqués).`);
  }
  if (missing.length) info.push(`${p.title} : ${missing.length} fichier(s) absent(s) sur cette machine (${missing.map((m) => m.src).join(', ')}).`);
  if (!p.context && p.template === 'etude') important.push(`${p.title} : contexte & mission non rédigés.`);
  const unpublishedResults = (p.results ?? []).filter((r) => !r.publishable);
  if (unpublishedResults.length) info.push(`${p.title} : ${unpublishedResults.length} chiffre(s) masqué(s) en attente d'accord.`);
}

// Archives
const archDir = path.join(root, 'src/content/archives');
const archHidden = fs.readdirSync(archDir).filter((f) => f.endsWith('.json')).map((f) => read(`src/content/archives/${f}`)).filter((a) => !PUBLISHABLE.has(a.rights.status));
if (archHidden.length) important.push(`Archives : ${archHidden.length} projet(s) académique(s) masqué(s) (origine des images à confirmer).`);

const print = (title, list) => {
  if (!list.length) return;
  console.log(`\n${title}`);
  list.forEach((l) => console.log(`  • ${l}`));
};
console.log('Vérification avant mise en ligne — portfolio Kelyan Ferreira-Macias');
print('🔴 Bloquant', bloquant);
print('🟠 Important', important);
print('🟢 Information', info);
console.log(bloquant.length ? `\n${bloquant.length} point(s) bloquant(s) : ne pas mettre en ligne.` : '\nAucun point bloquant.');
process.exit(bloquant.length ? 1 : 0);
