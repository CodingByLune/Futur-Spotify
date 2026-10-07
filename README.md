# Portfolio — Kelyan Ferreira-Macias

Communication digitale & production visuelle — photo, vidéo, social media. Spécialité moto.

Site construit avec [Astro](https://astro.build) : HTML statique, très peu de JavaScript, aucun cookie, aucun traceur. Il suit la conception validée aux étapes 1 et 2 (`docs/`).

---

## Démarrer

Prérequis : [Node.js](https://nodejs.org) 22 ou plus.

```bash
npm install            # une seule fois
npm run dev            # aperçu local sur http://localhost:4321 (tous les contenus, avec badges « Aperçu »)
npm run build          # version de production dans dist/
npm run check:lancement  # liste de ce qui manque avant la mise en ligne
```

---

## Où modifier quoi

| Je veux… | Fichier |
|---|---|
| Changer l'accroche, la bio, le parcours, les expertises, les contacts, les mentions légales | `src/data/site.json` |
| Modifier un projet (textes, chapitres, médias, droits) | `src/content/projets/<projet>.json` |
| Ajouter un projet | Copier un fichier de `src/content/projets/`, changer `title`, `order` et les médias |
| Modifier les archives académiques | `src/content/archives/*.json` |
| Ajouter des photos personnelles | `src/assets/public/<projet>/` |
| Ajouter des contenus d'entreprise (IGOA, Le Georges…) | `src/assets/prive/<projet>/` (jamais envoyé sur GitHub) |
| Ajouter des vidéos | `public/videos/` + champ `video` du média (ex. `"video": "videos/reel-qj.mp4"`) |
| Ajouter le CV | `public/cv-kelyan-ferreira-macias.pdf` + `"cv": "cv-kelyan-ferreira-macias.pdf"` dans `site.json` |
| Ajouter le portrait | `src/assets/public/portrait.jpg` + `"portrait": "portrait.jpg"` |
| Afficher le téléphone | `site.json` → `"phone": { "value": "…", "show": true }` |

### Types de médias
- `photo` : peut être recadrée ;
- `graphic` : affiche, publication, encart… **jamais recadré** ;
- `video` : affiche une image (poster) et lit le fichier vidéo s'il existe dans `public/videos/`.

---

## Droits de diffusion : le garde-fou

Chaque projet et chaque média a un **statut** :

| Statut | Signification | En production |
|---|---|---|
| `personnel` | Ta création personnelle | ✅ publié |
| `accorde` | Autorisation écrite obtenue | ✅ publié |
| `a-demander` | Autorisation à obtenir | ❌ masqué |
| `a-confirmer` | Origine ou contexte à vérifier | ❌ masqué |
| `refuse` | À ne jamais publier | ❌ masqué (même en aperçu) |

- Un contenu masqué **n'est pas supprimé** : il reste dans le projet et réapparaît dès que tu passes son statut à `accorde`.
- Les chiffres (`results`, `highlight`) ne s'affichent que si `"publishable": true`.
- Les fichiers de `src/assets/prive/` sont exclus de Git (`.gitignore`) : ils ne partent jamais sur GitHub (dépôt public).
- **Aperçu privé** : `npm run dev`, ou `PUBLIC_PREVIEW=true npm run build`, affiche tout avec des badges « Aperçu » et bloque l'indexation. À ne jamais utiliser en production.

**Quand IGOA Moto donne son accord** : dans `src/content/projets/igoa-moto.json`, passe `"status": "a-demander"` à `"accorde"` (bloc `rights`). Fais de même pour Le Georges, et pour les médias marqués individuellement.

---

## Images actuelles : provisoires

Les images du site viennent de ton PDF Canva : elles sont en **basse définition** (≈ 400 à 900 px). Remplace-les par tes fichiers originaux **sous le même nom** (JPG pleine résolution, idéalement ≥ 2400 px de large pour les grandes images). Astro génère automatiquement les versions AVIF / WebP à la bonne taille.

---

## Formulaire de contact

Le formulaire envoie un email via [Brevo](https://www.brevo.com) (service français). Rien n'est stocké sur le site.

1. Crée un compte Brevo, vérifie ton **nom de domaine** (enregistrements SPF / DKIM / DMARC fournis par Brevo).
2. Crée une **clé d'API** (Paramètres → SMTP & API).
3. Renseigne chez ton hébergeur (Netlify → Site configuration → Environment variables) :
   - `BREVO_API_KEY` : la clé ;
   - `CONTACT_TO` : l'adresse qui reçoit les messages ;
   - `CONTACT_FROM` : l'expéditeur, sur ton domaine vérifié (ex. `formulaire@ton-domaine.fr`) ;
   - `SITE_URL` : l'URL définitive du site.
4. **Teste un envoi réel** depuis le site en ligne, et vérifie le dossier spam.

Protections : champ piège invisible, délai minimal de 3 s, limitation à 5 envois / 10 min, validation côté serveur. Sans JavaScript, le formulaire fonctionne aussi (pages `/contact/merci` et `/contact/erreur`).

---

## Mise en ligne (Netlify)

1. Sur [Netlify](https://www.netlify.com) : *Add new site → Import from Git* → choisis ce dépôt.
2. Les réglages sont lus dans `netlify.toml` (commande `npm run build`, dossier `dist`, Node 22).
3. Ajoute les variables d'environnement (voir ci-dessus).
4. **Important** : les médias de `src/assets/prive/` ne sont pas sur GitHub. Tant qu'ils ne sont pas autorisés, c'est voulu : le site en ligne ne les affiche pas. Une fois autorisés, déplace-les dans `src/assets/public/` (ils seront alors versionnés et publiés).
5. Branche ton nom de domaine (Domain management).
6. Lance `npm run check:lancement` : il doit indiquer « Aucun point bloquant ».

Pour un hébergeur européen avec Node.js, remplace `@astrojs/netlify` par `@astrojs/node` dans `astro.config.mjs` (une ligne).

---

## Ce qui est en place

- **Pages** : accueil, projets (filtres + vue liste), 5 pages projet (étude de cas, série photo, vidéo), archives académiques, à propos, contact, mentions légales, confidentialité, 404.
- **Design system « Cuir »** : noir / blanc / gris, accent cognac ≤ 5 %, Archivo + Instrument Serif + Inter + Geist Mono (hébergées sur le site).
- **Animations** : révélations au scroll, rideau sur les images, bande horizontale de reels pilotée au scroll (desktop), transitions entre pages (View Transitions), curseur personnalisé (souris uniquement), aperçu au survol. Toutes désactivées si l'appareil demande moins de mouvement.
- **Mobile** : menu plein écran, bouton Contact flottant, carrousels à balayage, formulaire tactile.
- **SEO** : titres et descriptions par page, Open Graph (image par projet), sitemap, robots.txt, données structurées (Person, WebSite, ProfilePage, CreativeWork, BreadcrumbList).
- **Accessibilité** : lien d'évitement, focus visible, navigation clavier, visionneuse au clavier, textes alternatifs, contrastes AA, `prefers-reduced-motion`.
- **RGPD** : aucun cookie, aucun traceur, aucune intégration tierce, polices et médias auto-hébergés.

Mesures Lighthouse (version production, mobile simulé) : Performance 94–98 · Accessibilité 100 · Bonnes pratiques 100 · SEO 100.
