// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// L'URL définitive sera fournie par la variable SITE_URL (voir .env.example).
const site = process.env.SITE_URL || 'http://localhost:4321';

export default defineConfig({
  site,
  output: 'static',
  // Seul /api/contact est exécuté côté serveur ; tout le reste est du HTML statique.
  adapter: netlify({ imageCDN: false }),
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  // CSS intégré à chaque page : aucune feuille de style bloquante au premier affichage.
  build: { format: 'directory', inlineStylesheets: 'always' },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  image: { responsiveStyles: false },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/projets/archives') &&
        !page.includes('/contact/') &&
        !page.includes('/mentions-legales') &&
        !page.includes('/confidentialite'),
    }),
  ],
});
