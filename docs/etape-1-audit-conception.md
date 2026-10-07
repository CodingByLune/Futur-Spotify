# Étape 1 — Audit & conception du nouveau portfolio

**Kelyan Ferreira-Macias** — Communication · Community management · Création de contenu · Photographie · Vidéo

> Statut : document de conception, **aucun code**. À valider avant développement.
> Date : 7 octobre 2026.

---

## ⚠️ Limite de cette version : le site actuel n'a pas pu être consulté

Le site `https://kelyanferreiramacias.my.canva.site/kf` n'est **pas accessible** depuis l'environnement de travail : le domaine `kelyanferreiramacias.my.canva.site` est bloqué par la politique réseau de l'environnement cloud. Le compte Canva connecté à cette session ne contient pas non plus le design du portfolio (recherches « portfolio Kelyan », « Ferreira Macias », etc. sans résultat). Aucune trace publique indexée n'a été trouvée non plus.

Conformément à la règle « ne suppose jamais qu'une information est vraie si elle n'apparaît pas dans mon portfolio », **je n'ai rien inventé** :

- les sections **1 (audit du contenu)** et **6 (inventaire des projets)** sont fournies sous forme de **grille d'analyse prête à remplir**. Elles seront complétées dès que j'aurai accès au contenu ;
- les autres sections (architecture, DA, UX, animations, responsive, SEO, RGPD, stack) reposent uniquement sur ce que tu m'as dit de ton profil. Elles seront ajustées après l'audit réel, notamment la palette si ton identité actuelle contient des éléments à garder.

**Pour me donner accès (une seule option suffit) :**

1. Ajouter `kelyanferreiramacias.my.canva.site` aux domaines autorisés de l'environnement cloud (menu de l'environnement dans la barre de titre de la session → Edit → Network access → Allowed domains). Doc : https://code.claude.com/docs/en/cloud-environments#network-access
2. Partager le design Canva du site avec le compte Canva connecté à Claude, ou m'envoyer son lien d'édition.
3. Exporter le site en PDF depuis Canva et le déposer dans le dépôt (par ex. `docs/source/ancien-portfolio.pdf`), avec si possible les médias originaux.

---

## 1. Audit de l'ancien site

### 1.1 Ce qu'on peut dire sans voir le contenu : les limites de la plateforme Canva Sites

Ces points concernent **la plateforme**, pas ton contenu. Ils justifient à eux seuls la migration :

| Sujet | Limite Canva Sites | Impact |
|---|---|---|
| Domaine | Sous-domaine `*.my.canva.site` + chemin `/kf` | Fait « outil gratuit », peu mémorisable, peu crédible face à une marque |
| SEO | Contrôle limité des balises, pas de pages projet indexables séparément, pas de données structurées | Le site ressort mal sur « Kelyan Ferreira-Macias » et pas du tout sur des requêtes métier |
| Architecture | Essentiellement une page unique | Impossible de faire de vraies études de cas partageables (un lien par projet) |
| Performance | Runtime Canva lourd, médias pas toujours servis en AVIF/WebP adaptés à l'écran | Chargement lent sur mobile, mauvais pour une première impression « image » |
| Responsive | Mise en page mobile dérivée du desktop | Le mobile ressemble à une version réduite, pas à une expérience pensée |
| Typographie / animations | Bibliothèque d'effets génériques et reconnaissables | Effet « template Canva », exactement ce que tu veux éviter |
| Formulaire | Fonctionnalités limitées et non maîtrisées | Peu de contrôle sur l'envoi, l'anti-spam et les données personnelles |
| RGPD | Ressources servies par des tiers (polices, médias, scripts Canva) | Pas de maîtrise fine des traceurs ni des transferts de données |
| Accessibilité | Structure sémantique et ordre de lecture peu maîtrisables | Navigation clavier et lecteurs d'écran aléatoires |

### 1.2 Grille d'audit du contenu (à compléter dès l'accès)

Pour chaque critère, je relèverai ce qui existe **réellement** et le classerai en : ✅ à conserver · ✏️ à réécrire · ❌ à supprimer · ➕ manquant.

| Critère | Ce que je vérifierai |
|---|---|
| Structure | Ordre des sections, longueur, présence d'un fil narratif |
| Sections | Liste exacte et rôle de chacune |
| Textes | Ton, clarté, fautes, clichés (« passionné », « créatif dans l'âme »…), longueur |
| Parcours / formation | Établissements, diplômes, dates |
| Expériences | Structures, postes, dates, missions, résultats chiffrés éventuels |
| Compétences | Hard skills, outils, niveaux affichés (les jauges et pourcentages font amateur) |
| Projets | Nombre, qualité, contexte donné ou non, rôle précisé ou non |
| Images / vidéos | Qualité, cohérence colorimétrique, formats, mockups génériques, vidéos hébergées où |
| Contact | Email, téléphone, réseaux, formulaire, CTA |
| Identité visuelle | Logo / monogramme, couleurs (codes HEX), typographies, iconographie |
| Hiérarchie visuelle | Lisibilité des titres, rythme, respirations, densité |
| Ce qui fonctionne | Éléments forts à transposer dans le nouveau site |
| Ce qui fait amateur / générique | Effets Canva, blocs-cartes, stock photos, emojis, jauges… |
| Informations manquantes | Ce qu'un recruteur ou un client chercherait sans le trouver |

---

## 2. Positionnement

### Ce que je comprends (à partir de ton brief uniquement)

Tu es un **profil hybride** : à la fois **stratège / gestionnaire de communication digitale** (community management, social media, communication) et **producteur d'images** (photo, vidéo, direction artistique). Ton avantage : tu ne fais pas que publier, **tu fabriques toi-même les contenus que tu publies**, avec une sensibilité d'auteur. Le secteur **moto / automobile** est une cible explicite, donc un terrain où tu veux être reconnu.

### Proposition de promesse (à valider, aucune donnée inventée)

> **Je pense la communication et je fabrique les images qui la portent.**

Variantes de ligne d'accroche pour le hero :
- « Communication digitale & production visuelle »
- « Social media, photographie, vidéo : de la stratégie à l'image »

### Les trois piliers du discours

1. **Stratégie & social media** : comprendre une marque, son audience, planifier, animer.
2. **Production visuelle** : photo, vidéo, montage. La qualité d'image comme signature.
3. **Direction artistique** : cohérence, regard, identité.

Avec une **spécialité sectorielle** transversale : **moto / automobile**, si ton portfolio contient effectivement des projets dans ce secteur. Sinon, on la présente comme un intérêt, pas comme une expertise.

### Ce que le site doit éviter

- Le ton « étudiant qui cherche » : on montre du travail, pas des intentions.
- Les auto-qualificatifs (« créatif », « passionné ») : le travail doit le prouver.
- Les jauges de compétences, les icônes de logiciels en grille, les cartes arrondies type SaaS.

### Question ouverte qui change le ton du site

Quel est l'objectif prioritaire : **emploi** (CDI/CDD), **alternance / stage**, **missions freelance**, ou un mélange ? Le CTA principal, le vocabulaire (« recruter » vs « collaborer ») et les mentions légales en dépendent.

---

## 3. Nouvelle arborescence

### 3.1 Analyse de la structure proposée

La structure proposée (Hero → Intro → À propos → Expériences → Portfolio → Compétences → Méthode → Contact → Footer) a un défaut majeur : **les projets arrivent en 5ᵉ position**, après trois sections de texte. C'est la logique d'un CV. Pour un portfolio créatif, le visiteur doit voir **le travail d'abord**, puis comprendre **qui** l'a fait.

J'ai aussi fusionné ce qui se chevauche :
- **Intro + À propos** : une phrase-manifeste courte en haut, le « À propos » complet plus bas.
- **Compétences** en « Expertises » : on présente ce que tu sais **faire pour quelqu'un**, outils inclus, plutôt qu'une liste.

### 3.2 Arborescence proposée

```
/                         Accueil (one-page narrative)
├── /projets              Index de tous les projets + filtres
│   └── /projets/[slug]   Étude de cas (une page par projet)
├── /a-propos             (optionnel : page longue si le contenu le justifie)
├── /mentions-legales
├── /confidentialite
└── /404
```

Le contact reste une **section** de l'accueil, ancrée via `/#contact` et accessible depuis chaque page. Pas besoin d'une page dédiée.

### 3.3 Sections de la page d'accueil (ordre recommandé)

| # | Section | Objectif | Ce que le visiteur comprend | Contenu | Présentation visuelle |
|---|---|---|---|---|---|
| 1 | **Hero** | Impact immédiat | « C'est un créatif de l'image, et c'est sérieux. » | Nom, ligne de positionnement, showreel ou image forte, accès projets / contact | Média plein écran (vidéo muette en boucle ou photo), nom en très grande typo, métadonnées discrètes en mono (localisation, disponibilité si fournies) |
| 2 | **Manifeste** | Donner le ton | Ta vision en une phrase | 1 à 2 phrases maximum | Grand texte éditorial sur fond uni, révélé ligne par ligne au scroll |
| 3 | **Projets sélectionnés** | Le cœur du site | La qualité et la diversité du travail | 4 à 6 projets phares, catégorie, année, rôle | Grandes images pleine largeur ou en composition asymétrique, pas de cartes ; légendes éditoriales numérotées (01, 02…) ; lien « Tous les projets » |
| 4 | **Expertises** | Clarifier l'offre | Ce que tu peux faire pour une marque ou une équipe | 3 piliers (Stratégie & social media / Photo & vidéo / Direction artistique), chacun avec livrables types et outils | Liste typographique en 3 grands blocs, chaque ligne au survol révèle une image du pilier ; aucune jauge |
| 5 | **À propos** | Humaniser | Qui tu es, d'où tu viens, ce qui te distingue | Portrait, texte court à la 1ʳᵉ personne, langues, mobilité, centres d'intérêt liés au métier (moto/auto si pertinent) | Portrait en grand format + texte en colonne étroite |
| 6 | **Parcours** | Rassurer | Expérience réelle et formation | Expériences et formation, dates, structure, rôle, 1 à 2 lignes de missions | Liste chronologique sobre (année · structure · rôle), dépliable ; logos seulement si autorisés et cohérents |
| 7 | **Méthode** | Montrer le professionnalisme | Comment se passe une collaboration | 4 étapes (ex. : Écouter → Concevoir → Produire → Diffuser & mesurer), à valider avec ta vraie façon de travailler | Bande horizontale numérotée, défilement horizontal piloté au scroll sur desktop, empilée sur mobile |
| 8 | **Contact** | Convertir | Comment te joindre facilement | Phrase d'appel, formulaire (nom, email, objet, message), email direct, réseaux | Grand titre (« Travaillons ensemble »), formulaire minimaliste à lignes fines, pas de cadres |
| 9 | **Footer** | Clore et rassurer | Liens utiles | Réseaux, email, mentions légales, confidentialité, © | Une ligne sobre ; nom en très grand en signature visuelle |

**Tests de pertinence** :
- un recruteur pressé voit le travail en 1 scroll et le parcours en 4 ;
- une marque ou une agence voit projets, expertises, méthode et contact sans quitter la page ;
- un lien de projet peut être envoyé seul (page projet autonome).

### 3.4 Page projet (étude de cas)

1. **Ouverture** : visuel plein écran + titre + métadonnées (client/contexte, année, catégorie, rôle).
2. **Contexte & objectif** : 2 à 4 lignes.
3. **Mon rôle** : liste courte.
4. **Galerie** : rythme éditorial alterné (plein écran / deux colonnes / vertical 9:16 pour les contenus social media).
5. **Résultats** : uniquement si des chiffres réels et autorisés existent.
6. **Crédits & outils**.
7. **Projet suivant** : grande image cliquable, transition fluide.

---

## 4. Direction artistique

### 4.1 Concept : « Salle de montage »

Un site qui ressemble à **une table de montage ou à un livre photo** : fond sombre, images lumineuses, typographie très grande, informations techniques en petits caractères mono (comme des métadonnées de fichier ou des données EXIF). Cinématographique sans être démonstratif. L'interface s'efface, les images parlent.

### 4.2 Couleurs (proposition, à confronter à ton identité actuelle)

| Rôle | Nom | Valeur | Usage |
|---|---|---|---|
| Fond principal | Encre | `#0C0C0D` | Fond général (mode sombre par défaut, cinéma) |
| Texte principal | Papier | `#EDEAE4` | Titres et texte (contraste ≈ 16:1 sur l'encre) |
| Texte secondaire | Gris argentique | `#8E8B85` | Métadonnées, légendes (≥ 4,5:1 sur l'encre) |
| Filets | Graphite | `#2A2A2C` | Séparateurs fins |
| Accent unique | Signal | `#FF4A1C` (option A) | CTA, focus, curseur, état actif. Une seule couleur, utilisée avec parcimonie |

- **Option A, « Signal »** (orange-rouge) : énergie, mécanique, sport mécanique.
- **Option B** : reprendre l'accent de ton identité actuelle s'il est fort (à décider après l'audit).
- Les **sections claires** (fond papier, texte encre) servent à créer des respirations, par exemple pour le manifeste ou le parcours, et rythment le scroll.

### 4.3 Typographies (libres de droits, auto-hébergées)

| Rôle | Police | Pourquoi |
|---|---|---|
| Titres / display | **Archivo** (variable, axe de largeur 62 → 125) | Grotesque solide ; les largeurs étendues évoquent l'automobile et le sport mécanique sans cliché ; un seul fichier variable |
| Accent éditorial | **Instrument Serif** (italique) | Touche magazine sur quelques mots-clés : contraste éditorial |
| Texte courant | **Inter** ou **Geist** | Lisibilité maximale en petite taille |
| Métadonnées | **Geist Mono** / **JetBrains Mono** | Numéros de projet, années, légendes « fiche technique » |

Échelle typographique fluide (`clamp()`) : le nom dans le hero peut atteindre 12 à 18vw sur desktop.

### 4.4 Mise en page

- Grille 12 colonnes desktop, 6 tablette, 4 mobile ; marges latérales généreuses (≈ 4 à 6vw).
- **Images à fond perdu** alternées avec des compositions asymétriques. Pas de cartes, pas d'ombres, pas de coins arrondis.
- Numérotation éditoriale (`01 — Projets`, `02 — Expertises`), filets de 1px, beaucoup de vide.
- Ratios d'image respectés : 16:9 et 2.39:1 (vidéo, cinéma), 4:5 et 9:16 (social media), 3:2 (photo).
- Léger grain argentique optionnel en overlay sur les grandes images (CSS, très subtil, désactivable).

### 4.5 Iconographie & ton éditorial

- Pas d'icônes décoratives. Flèches typographiques (→ ↗) uniquement.
- Ton : phrases courtes, 1ʳᵉ personne, verbes d'action, aucun superlatif.

---

## 5. UX : parcours visiteur

### 5.1 Les 5 premières secondes

1. Le site s'affiche **sans écran de chargement** : l'image du hero est prioritaire.
2. Le visiteur voit ton **nom en très grand**, une **ligne de positionnement** et **une image en mouvement** (showreel muet de 10 à 20 s en boucle) ou ta photo la plus forte.
3. En haut : une navigation minimale (`Projets · À propos · Contact`) et un indicateur de disponibilité **seulement si tu me le confirmes**.
4. Un signal discret invite à scroller (« Défiler » + ligne animée).

### 5.2 Découverte du profil

Scroll → le manifeste se révèle ligne par ligne → transition immédiate vers les **projets sélectionnés**. Le profil se découvre **à travers le travail** ; les sections À propos et Parcours viennent confirmer ensuite.

### 5.3 Accès aux projets

- Depuis l'accueil : 4 à 6 projets phares, très visuels.
- Bouton « Tous les projets (N) » → `/projets`, avec **filtres** par discipline et collection Moto/Auto.
- Navigation persistante « Projets » sur toutes les pages.

### 5.4 Consultation d'un projet

- Clic sur l'image → **transition fluide** : l'image s'agrandit et devient le hero du projet (View Transitions).
- Lecture verticale : contexte → rôle → galerie → résultats → crédits.
- En bas : **projet suivant** en grand, pour enchaîner sans revenir en arrière.
- Bouton retour qui préserve la position et le filtre de l'index.

### 5.5 Arrivée au contact

- Lien « Contact » toujours visible (en-tête desktop, bouton flottant discret sur mobile).
- CTA de fin de chaque page projet : « Un projet similaire ? Parlons-en → ».
- Section contact : formulaire + email cliquable + réseaux. Confirmation claire après envoi.

### 5.6 Donner envie de scroller

- Alternance de rythmes : plein écran → texte → composition → plein écran.
- Révélations progressives (texte, images) qui récompensent le scroll.
- Chaque fin de section annonce la suivante (numérotation, titres de section).

---

## 6. Portfolio : organisation des projets

### 6.1 Taxonomie

Les 6 catégories demandées mélangent **disciplines** et **secteur**. Je propose deux axes :

- **Disciplines** (filtres, plusieurs possibles par projet) : Communication · Social media · Photographie · Vidéo · Direction artistique
- **Secteur / collection** : **Moto & Automobile**, présenté comme une collection mise en avant (filtre dédié + bloc spécifique sur l'accueil si le volume le justifie).

Un projet peut ainsi être à la fois « Vidéo + Social media » **et** « Moto & Auto ». Pas de doublons, pas de catégories vides.

### 6.2 Index des projets (`/projets`)

- Vue par défaut : grille éditoriale de grandes images (2 colonnes desktop, 1 colonne mobile).
- Vue alternative « liste » : tableau typographique (n° · titre · catégorie · année), avec aperçu image au survol sur desktop.
- Filtres en ligne de texte (pas de pastilles colorées), avec le compteur de chaque catégorie.

### 6.3 Inventaire des projets de l'ancien portfolio

**Non réalisable pour l'instant** : je n'ai pas pu lire le site. Aucun projet n'est listé pour ne rien inventer. Voici la fiche que je remplirai pour **chaque** projet trouvé :

| Champ | Valeur |
|---|---|
| Nom | |
| Catégorie(s) | Discipline(s) + collection Moto/Auto (oui/non) |
| Contexte | Client / structure / projet personnel / école |
| Objectif | |
| Mon rôle | |
| Contenus produits | Nombre et type (posts, reels, photos, films…) |
| Outils utilisés | Si mentionnés |
| Médias disponibles | Images, vidéos, formats, résolution |
| Autorisation de diffusion | Client / personnes photographiées |
| Résultats | Uniquement si réels et vérifiables |
| Informations manquantes | |

---

## 7. Système d'animations

### 7.1 Principes

- **Rapide** : 200 à 700 ms. Rien ne bloque la lecture.
- **Une seule courbe** pour la cohérence : `cubic-bezier(0.22, 1, 0.36, 1)` (expo-out), plus une variante plus douce pour les grandes images.
- **Uniquement `transform` et `opacity`** (et `clip-path` pour les masques) pour rester à 60 fps.
- **Chaque animation a une raison** : guider, hiérarchiser, faire le lien entre deux états.

### 7.2 Catalogue

| Type | Comportement | Durée |
|---|---|---|
| **Intro de page** | Le nom du hero monte ligne par ligne derrière un masque ; le média passe d'un léger zoom (1.06) à 1 | 900 ms au total, une seule fois |
| **Reveal texte** | Les titres apparaissent ligne par ligne (masque + translation de 100 %) au moment où ils entrent dans l'écran | 600 ms, décalage de 60 ms entre lignes |
| **Reveal image** | Rideau en `clip-path` (bas → haut) + léger dézoom interne | 800 ms |
| **Parallax** | Uniquement à l'intérieur des grandes images (déplacement du contenu de 6 à 10 %), jamais sur le texte | Lié au scroll |
| **Défilement horizontal** | Section Méthode, piloté par le scroll vertical (desktop uniquement) | Lié au scroll |
| **Hover projet** | Image +3 % d'échelle, légende qui glisse, curseur qui affiche « Voir » | 400 ms |
| **Hover liens** | Soulignement qui se dessine de gauche à droite | 250 ms |
| **Hover liste d'expertises** | Image flottante qui suit le pointeur avec inertie | 300 ms |
| **Transition entre pages** | View Transitions : l'image cliquée devient le hero du projet ; fondu court pour le reste | 500 à 600 ms |
| **Projet suivant** | Survol : l'image se dévoile ; clic : elle passe en plein écran | 600 ms |
| **Micro-interactions formulaire** | Label qui remonte au focus, filet qui passe à la couleur accent, bouton qui affiche son état (envoi → envoyé ✓) | 200 ms |
| **Curseur personnalisé** | Desktop avec souris uniquement : petit point accent, qui grossit et affiche un libellé (« Voir », « Lire ») sur les médias ; le curseur natif reste disponible sur les champs de texte | Inertie légère |

### 7.3 Garde-fous

- `prefers-reduced-motion: reduce` → plus de parallax, de défilement horizontal piloté, de zoom ni de curseur personnalisé ; les reveals deviennent de simples fondus de 150 ms ; les vidéos ne démarrent pas seules.
- Pas d'animation au premier rendu du contenu LCP qui retarderait son affichage.
- Le défilement reste **natif** ; un lissage (type Lenis) est possible seulement s'il est léger, désactivable et testé au clavier et au pavé tactile. À trancher en phase de prototype.
- Toute vidéo en lecture automatique a un bouton **pause** visible (WCAG 2.2.2).

---

## 8. Responsive

| Contexte | Largeur | Approche |
|---|---|---|
| **Desktop large** | ≥ 1440 px | Expérience complète : grille 12 col., curseur personnalisé, défilement horizontal de la méthode, aperçus au survol, largeur de texte plafonnée |
| **Laptop** | 1024 à 1439 px | Identique, typographie fluide légèrement réduite, compositions asymétriques simplifiées |
| **Tablette** | 768 à 1023 px | Grille 6 col. ; pas de curseur ni de survol (écran tactile) ; méthode en liste verticale ; galerie en 2 colonnes |
| **Mobile** | < 768 px | **Expérience pensée verticale** (voir ci-dessous) |

### Le mobile comme vraie expérience

- **Vertical d'abord** : les contenus social media (9:16, 4:5) sont **natifs** du mobile ; ils s'y affichent plein écran, comme dans une story.
- **Hero** : une version verticale dédiée du showreel ou de l'image (recadrage pensé, pas un simple rognage automatique).
- **Projets** : une colonne, images bord à bord, légendes sous l'image ; galeries de projet en **carrousel horizontal à balayage** avec indicateur (1/8).
- **Navigation** : menu plein écran typographique (grands liens) + **bouton Contact flottant** discret en bas.
- **Filtres** : ligne défilante horizontalement.
- **Gestes** : zones tactiles ≥ 44 × 44 px ; pas d'interaction qui dépend du survol.
- **Données mobiles** : vidéos plus légères et en résolution adaptée ; si le navigateur signale l'économie de données (`Save-Data`) ou une connexion lente, on affiche l'image fixe (poster) au lieu de la vidéo automatique.

---

## 9. SEO

### 9.1 Balises principales (propositions, à ajuster avec ta ville et ton objectif)

- **Title accueil** : `Kelyan Ferreira-Macias — Communication, social media, photo & vidéo`
- **Meta description accueil** (≈ 150 caractères) : `Portfolio de Kelyan Ferreira-Macias : communication digitale, community management, photographie et vidéo. Projets, parcours et contact.`
- **Title projet** : `[Nom du projet] — [Catégorie] | Kelyan Ferreira-Macias`
- **Title index** : `Projets — Photo, vidéo & social media | Kelyan Ferreira-Macias`

### 9.2 Structure des titres

```
Accueil
H1  Kelyan Ferreira-Macias — [ligne de positionnement]
  H2  Projets sélectionnés
    H3  [Nom de chaque projet]
  H2  Expertises
    H3  Stratégie & social media / Photo & vidéo / Direction artistique
  H2  À propos
  H2  Parcours
  H2  Méthode
  H2  Contact

Page projet
H1  [Nom du projet]
  H2  Contexte · Mon rôle · Réalisations · Résultats · Crédits
```

Un seul H1 par page. Le manifeste est un paragraphe stylé, pas un titre.

### 9.3 Technique

- **URLs** propres en français : `/projets/nom-du-projet`.
- **Canonical** sur chaque page ; **domaine personnel** obligatoire (ex. `kelyanferreiramacias.fr` ou `.com`, disponibilité à vérifier).
- **Open Graph / Twitter Card** : image 1200 × 630 **dédiée par projet**, titre et description propres. Important : ton portfolio sera surtout partagé par lien (LinkedIn, mail, DM).
- **sitemap.xml** généré automatiquement au build, **robots.txt** qui l'indique ; les pages légales en `noindex` sont optionnelles.
- **Données structurées (JSON-LD)** :
  - `Person` (nom, métier, `sameAs` vers tes réseaux, `knowsAbout`) ;
  - `WebSite` + `ProfilePage` sur l'accueil ;
  - `CreativeWork` par projet ; `VideoObject` pour les vidéos (titre, miniature, date, durée) ; `ImageObject` avec auteur et crédits ;
  - `BreadcrumbList` sur les pages projet.
- **Images** : noms de fichiers descriptifs (`shooting-moto-circuit-kelyan-ferreira-macias.avif`), alt pertinents.
- **Version anglaise** : utile pour les marques auto/moto internationales ; à décider (avec `hreflang` si oui).

### 9.4 Mots-clés (à affiner avec ta localisation réelle)

- **Marque** : Kelyan Ferreira-Macias, Kelyan Ferreira Macias, portfolio Kelyan.
- **Métier** : community manager, chargé de communication digitale, créateur de contenu, photographe, vidéaste, social media manager, direction artistique.
- **Combinés** : « community manager photographe vidéaste », « création de contenu réseaux sociaux ».
- **Sectoriels** (si projets réels) : photographe moto, vidéo automobile, contenu social media moto, communication automobile.
- **Local** : « [métier] + [ville / région] » → ville à fournir.

Le site sera surtout trouvé sur ton nom (recruteurs) et partagé directement. Le SEO métier/local est un bonus qui demande du contenu régulier (études de cas détaillées).

---

## 10. RGPD / France : architecture « privacy first »

> Ce qui suit est une analyse technique et organisationnelle, **pas un avis juridique**. Aucune information légale ne sera inventée : les mentions seront rédigées à partir des données que tu fourniras, et il est conseillé de les faire relire.

### 10.1 Objectif : zéro cookie non essentiel → pas de bandeau de consentement

Si le site n'utilise **aucun traceur soumis à consentement**, la CNIL n'impose pas de bandeau cookies. Pour y parvenir :

| Élément | Choix privacy-first |
|---|---|
| **Polices** | **Auto-hébergées** (pas d'appel à Google Fonts depuis le navigateur, ce qui transmet l'adresse IP à Google) |
| **Analytics** | **Option 1 (recommandée au départ) : aucun.** **Option 2** : mesure d'audience sans cookie et hébergée en UE (ex. Plausible, ou Umami auto-hébergé), configurée selon les conditions d'exemption de la CNIL, et mentionnée dans la politique de confidentialité. Pas de Google Analytics, pas de Meta Pixel |
| **Vidéos** | **Auto-hébergées** ou servies par un CDN vidéo européen sans cookie. Pas d'embed YouTube ou Vimeo direct. Si un embed tiers est indispensable : **façade** (image + bouton « Charger la vidéo depuis YouTube », avec mention que YouTube déposera des cookies), l'iframe n'étant chargée qu'au clic |
| **Réseaux sociaux** | **Simples liens** sortants (pas de widgets, pas d'embed Instagram/TikTok qui déposent des traceurs). Les publications sont montrées sous forme de captures/exports hébergés sur le site |
| **Cartes** | Aucune carte interactive (inutile pour un portfolio) |
| **Anti-spam** | Champ piège invisible (honeypot) + contrôle de délai + limitation de débit côté serveur. Pas de reCAPTCHA. Si un captcha devient nécessaire : solution européenne ou sans cookie, à mentionner |
| **Préférences locales** | Si un choix est mémorisé (ex. thème), stockage local strictement fonctionnel, exempté de consentement |
| **Hébergement** | De préférence en UE, ou fournisseur couvert par le Data Privacy Framework ; à déclarer dans la politique de confidentialité (les journaux serveur contiennent des adresses IP) |

### 10.2 Formulaire de contact

- **Minimisation** : nom, email, objet, message. Rien d'autre (pas de téléphone obligatoire).
- **Notice d'information sous le formulaire** : finalité (répondre à ta demande), base légale, destinataire (toi uniquement), durée de conservation, droits (accès, rectification, effacement, opposition), lien vers la politique de confidentialité, droit de réclamation auprès de la CNIL.
- **Pas de case newsletter** ni d'usage commercial des données.
- **Conservation** : aucun stockage en base ; les messages arrivent dans ta boîte mail. Tu fixes une durée de conservation et tu t'y tiens.
- **Sécurité** : HTTPS, validation côté serveur, clés d'API jamais exposées côté navigateur.
- **Sous-traitant** : le service d'envoi d'emails est un sous-traitant ; il doit figurer dans la politique de confidentialité.

### 10.3 Pages légales obligatoires

1. **Mentions légales** (loi pour la confiance dans l'économie numérique, LCEN). Leur contenu **dépend de ton statut** :
   - **activité professionnelle** (ex. micro-entrepreneur) : identité, adresse, SIRET, contact, directeur de la publication, hébergeur (nom, adresse, téléphone) ;
   - **particulier non professionnel** : des règles allégées existent (identification possible auprès de l'hébergeur). À vérifier selon ta situation.
2. **Politique de confidentialité** : responsable du traitement, données collectées, finalités, bases légales, destinataires/sous-traitants, transferts hors UE, durées, droits, contact, CNIL.
3. **Crédits & droits** : propriété des contenus, crédits des collaborateurs, mention « reproduction interdite sans autorisation ».

### 10.4 Point critique : droits sur les images

À valider **projet par projet** avant publication :
- **Autorisation du client ou de l'employeur** pour montrer le travail (contrats, clauses de confidentialité) ;
- **Droit à l'image** des personnes reconnaissables (modèles, pilotes, public) ;
- **Marques et logos** de tiers (constructeurs auto/moto) : contexte de la prestation à préciser ;
- **Musiques** des vidéos : licences valables pour une diffusion sur le site.

---

## 11. Données manquantes : ce que tu dois me fournir

### A. Accès à l'ancien portfolio (bloquant)
- [ ] Une des trois options d'accès décrites en tête de document.

### B. Identité & positionnement
- [ ] Objectif prioritaire : emploi / alternance / stage / freelance / mixte
- [ ] Intitulé de poste visé ou formulation préférée (ex. « Chargé de communication & créateur de contenu »)
- [ ] Localisation (ville / région) et mobilité (déplacements, télétravail, international)
- [ ] Disponibilité (date, type de contrat) si tu veux l'afficher
- [ ] Langues parlées et niveau
- [ ] Logo ou monogramme existant (fichiers vectoriels) ; sinon, on en crée un
- [ ] Ce que tu veux garder de ton identité actuelle (couleur, typo, logo)

### C. Contenus texte
- [ ] Bio actuelle (même brute) et 3 mots qui te définissent selon toi
- [ ] Expériences : structure, poste, dates (mois/année), lieu, missions, résultats chiffrés **réels** (si autorisés)
- [ ] Formation : établissement, diplôme, dates, spécialité
- [ ] Compétences et outils réellement maîtrisés (ex. suite Adobe, DaVinci, CapCut, Meta Business Suite, Canva, Figma, matériel photo/vidéo…)
- [ ] Ta méthode de travail réelle (étapes que tu suis vraiment)
- [ ] Témoignages ou recommandations (avec accord de leurs auteurs)

### D. Projets (pour chacun)
- [ ] Toutes les infos de la fiche de la section 6.3
- [ ] **Médias originaux en haute définition** (pas des captures du site Canva) : photos JPG/TIFF en pleine résolution, vidéos masters (MP4 ou ProRes), publications social media exportées
- [ ] Autorisations de diffusion (client, droit à l'image, musique)
- [ ] Choix des 4 à 6 projets phares pour l'accueil

### E. Médias transverses
- [ ] Showreel (30 à 90 s) ou rushes pour en monter une boucle de hero de 10 à 20 s, en versions horizontale **et** verticale
- [ ] Portrait professionnel (plusieurs choix)
- [ ] Images d'ambiance pour les expertises (optionnel)

### F. Contact & réseaux
- [ ] Email professionnel (idéalement sur ton futur domaine) et adresse qui recevra les messages du formulaire
- [ ] Téléphone : à afficher ou non
- [ ] Liens réseaux : LinkedIn, Instagram, TikTok, YouTube, Behance, Vimeo… (seulement ceux que tu veux montrer)
- [ ] CV PDF téléchargeable : oui / non

### G. Technique & légal
- [ ] Nom de domaine souhaité (et s'il est déjà acheté, chez quel registrar)
- [ ] Préférence d'hébergeur (ou carte blanche)
- [ ] Statut juridique (particulier, micro-entrepreneur…) et, si professionnel : nom, adresse de domiciliation, SIRET
- [ ] Directeur de la publication (a priori toi)
- [ ] Analytics : aucun, ou mesure sans cookie
- [ ] Version anglaise : oui / non / plus tard
- [ ] Ce dépôt s'appelle `Futur-Spotify` : on garde ce dépôt pour le portfolio ou on en crée un dédié (ex. `portfolio`) ?

---

## 12. Architecture technique

### 12.1 Stack recommandée

| Couche | Choix | Pourquoi |
|---|---|---|
| **Framework** | **Astro** (dernière version stable) + TypeScript | Site rapide : HTML statique et zéro JavaScript par défaut, JS ajouté seulement là où il sert ; excellent pour le SEO ; View Transitions intégrées ; optimisation d'images native |
| **Contenus** | **Content Collections** Astro : un fichier Markdown/MDX par projet, schéma validé (Zod) | Ajouter un projet = ajouter un dossier (texte + médias). Données typées, aucune base de données |
| **Édition sans code (optionnel, plus tard)** | CMS « git-based » (ex. Keystatic ou Decap) | Pour ajouter tes projets toi-même via une interface, sans toucher au code |
| **Styles** | CSS natif moderne (variables, `clamp()`, container queries, styles scopés Astro) | Contrôle total d'une DA éditoriale sur mesure ; pas de look « framework » |
| **Animations** | **GSAP** (ScrollTrigger, SplitText ; gratuits depuis 2025) chargé uniquement sur les pages qui l'utilisent, + View Transitions API | Standard pro, fluide, maîtrisé ; repli CSS si le JS ne se charge pas |
| **Images** | `astro:assets` + Sharp : génération AVIF + WebP + `srcset` responsive, dimensions explicites | Images toujours à la bonne taille, pas de décalage de mise en page |
| **Vidéos** | Boucles courtes auto-hébergées (MP4 H.264 + WebM/AV1, sans piste audio) ; vidéos longues en streaming adaptatif (HLS) via un CDN vidéo européen sans cookie | Rapidité + RGPD |
| **Formulaire** | Endpoint serveur (Astro Actions / fonction serverless) → API d'envoi d'email transactionnel (ex. **Brevo**, entreprise française) ; domaine authentifié SPF/DKIM/DMARC | Envoi réel, fiable, sans stockage, clés secrètes côté serveur |
| **Hébergement** | Plateforme avec déploiement continu et fonctions serverless (ex. Netlify, Vercel, Cloudflare Pages) **ou** hébergeur européen | Choix à arbitrer : simplicité vs localisation UE (voir RGPD) |
| **Qualité** | Lighthouse CI, test d'accessibilité automatisé (axe), vérification des liens, typecheck | Qualité vérifiée avant chaque mise en ligne |

### 12.2 Formulaire de contact : ce qu'il faut pour qu'il fonctionne vraiment

Un formulaire qui **existe visuellement n'envoie rien** sans ces éléments :

1. **Un code serveur** qui reçoit la requête (le site statique seul ne peut pas envoyer d'email).
2. **Un service d'envoi d'emails** (compte + clé d'API stockée en variable d'environnement secrète).
3. **Un domaine vérifié** (enregistrements DNS SPF/DKIM/DMARC) pour que les messages n'arrivent pas en spam.
4. **Une validation** côté navigateur (confort) **et** côté serveur (sécurité) : champs requis, format de l'email, longueurs maximales.
5. **Un anti-spam** : honeypot, délai minimal de remplissage, limitation par IP.
6. **Un `Reply-To`** réglé sur l'email du visiteur pour répondre en un clic.
7. **Des états clairs** : envoi en cours / succès / erreur (avec email de secours affiché).
8. **Un test réel de bout en bout** avant la mise en ligne : envoi depuis le site en production, réception vérifiée, y compris dans le dossier spam.

### 12.3 Performance : cibles et pratiques

**Cibles** : LCP < 2 s en 4G, CLS < 0,05, INP < 200 ms, Lighthouse ≥ 95 sur les 4 axes, JS initial < ~80 Ko compressés.

| Sujet | Pratique |
|---|---|
| **Images** | AVIF en priorité, WebP en repli, JPEG en dernier recours ; `srcset` + `sizes` ; `width`/`height` explicites ; placeholder flou léger (LQIP) |
| **Lazy loading** | `loading="lazy"` partout **sauf** l'image/le poster du hero (`fetchpriority="high"`, préchargé) |
| **Vidéos** | Boucle hero ≤ 3 à 4 Mo, 1080p max (720p sur mobile), sans audio, `muted playsinline`, `poster` obligatoire, `preload="none"` hors hero ; lecture uniquement quand visible (IntersectionObserver) ; streaming adaptatif pour les vidéos longues |
| **Fonts** | WOFF2, sous-ensemble latin, polices variables (1 fichier par famille), `font-display: swap`, préchargement des 1 à 2 fichiers critiques, métriques de repli ajustées pour éviter les décalages |
| **JavaScript** | Architecture en îlots : JS seulement pour les animations, le menu et le formulaire ; scripts différés ; pas de jQuery ni de librairies lourdes ; GSAP chargé à la demande |
| **Animations** | `transform`/`opacity` uniquement, `will-change` ponctuel, pas d'écouteur de scroll non optimisé |
| **Réseau** | Cache long sur les ressources versionnées, compression Brotli, HTTP/2-3 via CDN, préchargement des pages projet au survol des liens |

### 12.4 Accessibilité (objectif WCAG 2.2 AA / RGAA)

- **Contraste** : texte ≥ 4,5:1, grands titres ≥ 3:1 ; vérification sur les textes posés sur image (voile dégradé si besoin).
- **Clavier** : tout est utilisable au clavier ; ordre de tabulation logique ; lien d'évitement « Aller au contenu » ; menu mobile avec focus piégé et fermeture par Échap.
- **Focus** : contour visible et contrasté (couleur accent, 2 px + décalage), jamais supprimé ; le curseur personnalisé ne masque jamais le focus.
- **Alt text** : rédigé image par image (descriptif pour les photos, vide pour le décoratif) ; je pourrai proposer des brouillons à valider.
- **Sémantique** : `lang="fr"`, landmarks (`header`, `nav`, `main`, `footer`), hiérarchie de titres stricte, listes pour les listes, `figure`/`figcaption` pour les médias.
- **Formulaire** : labels visibles et associés, erreurs explicites annoncées (`aria-live`), autocomplétion (`autocomplete="name"`, `"email"`), aucun champ indiqué par la seule couleur.
- **Vidéos** : contrôles accessibles, bouton pause sur les boucles automatiques, sous-titres pour toute vidéo avec parole.
- **Mouvement** : respect complet de `prefers-reduced-motion` (section 7.3).
- **Zoom** : mise en page fonctionnelle à 200 % et en largeur 320 px.

---

## Prochaines étapes

1. **Débloquer l'accès** à l'ancien portfolio → je complète les sections 1 et 6 (audit réel + inventaire des projets).
2. **Tes réponses** aux questions de la section 11 (au minimum : objectif, localisation, liste des projets, médias).
3. **Validation** de l'arborescence (§3), de la DA (§4) et du système d'animations (§7).
4. Ensuite seulement : moodboard / maquette du hero et d'une page projet, puis développement.

*Aucun développement ne commencera sans ta validation.*
