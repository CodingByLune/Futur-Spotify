import type { APIRoute } from 'astro';

const preview = import.meta.env.PUBLIC_PREVIEW === 'true';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('/sitemap-index.xml', site).toString();
  const body = preview
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /contact/merci\nDisallow: /contact/erreur\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
};
