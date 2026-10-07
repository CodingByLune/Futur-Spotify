# Étape 2 — Direction artistique, design system & architecture des pages

**Kelyan Ferreira-Macias** — portfolio
Statut : **conception, aucun code du site.** En attente de ta validation avant le développement.
Date : 7 octobre 2026

> **Planches visuelles** (6 fichiers JPG) : envoyées dans la conversation. Elles ne sont **pas** dans le dépôt, volontairement : le dépôt est public, et elles contiennent tes photos ainsi que des contenus IGOA Moto et Le Georges, dont la diffusion n'est pas encore autorisée (voir §11). Les images qu'elles utilisent sont extraites du PDF, en basse définition : le rendu final utilisera tes fichiers HD.
>
> | Planche | Contenu |
> |---|---|
> | 01 — Fondations | Palette, typographie, monogramme KF |
> | 02 — Grille & compositions | Grilles desktop / tablette / mobile, espacements, formats, 8 modules |
> | 03 — Accueil desktop | La page d'accueil complète, du hero au footer |
> | 04 — Mobile | 5 écrans : hero, projets, lecteur vertical, menu, formulaire |
> | 05 — Étude de cas | Gabarit de page projet, illustré avec IGOA Moto |
> | 06 — Index, archives, composants & mouvement | Index des projets, archives académiques, états des composants, chorégraphie d'animation |

---

## 0. Décisions de l'étape 1 intégrées

| # | Décision | Application |
|---|---|---|
| 1 | Nom public **Kelyan Ferreira-Macias** | Partout : hero, `<title>`, données structurées, footer, mentions |
| 2 | **Responsable Communication — IGOA Moto** | Intitulé affiché. ⚠️ **Écart signalé, non modifié** : ton CV indique « Chargé de communication / Photographe — IGOA MOTO — Jan. 2026 (Alternance) ». Les deux valeurs restent distinctes dans le modèle de contenu (§10) : `roleDisplayed` (affiché) et `roleSource` (interne, jamais affiché). Un recruteur qui compare le site à ton CV ou à ton LinkedIn verra la différence : je te conseille d'harmoniser les trois, mais c'est ta décision |
| 3 | Objectif triple : emploi, freelance, collaborations | Aucun vocabulaire de recherche d'emploi (« je recherche », « disponible pour alternance »). Le site **vend un savoir-faire** ; le formulaire propose les 3 objets |
| 4 | Direction **« Cuir »** | Noir, blanc, gris ; cognac en **accent ≤ 5 %** de la surface ; aucun traitement chaud ou vintage |
| 5 | Monogramme **KF** | Favicon, navigation, signature de fin de projet, footer, micro-branding |
| 6 | Hitman / Dior / Cars 4 hors vitrine | Rangés dans **Archives → Exercices de détournement**, avec une mention obligatoire. Rien n'est supprimé |
| 7 | Contact : email pro + Instagram + LinkedIn ; téléphone en réserve | Le téléphone est prévu dans le modèle de contenu (`phone`, `showPhone: false`) : il s'active sans toucher au design |
| 8 | **Moto** = collection à part entière ; pas d'automobile | Filtre « Collection Moto » en accent, signature visuelle (hero vidéo moto) |
| 9 | Projets pros au premier plan, droits jamais présumés | Matrice des droits par sous-projet (§11) ; chaque contenu a un statut de publication qui **bloque** sa mise en ligne tant qu'il n'est pas validé |

---

## 1. Direction artistique

### 1.1 Concept : « Garage de nuit »

Un écrin **noir, silencieux, éditorial**, où la lumière vient des images, comme dans tes shootings nocturnes : un sujet net, un fond qui s'efface, des reflets. L'interface se comporte comme une **fiche technique** (typographie mono, numérotation, filets fins) posée à côté d'**images très grandes**.

**Cinq principes**
1. **L'image d'abord.** Une photo ou une vidéo occupe au moins 60 % de chaque écran de projet.
2. **Le silence autour.** Pas de cadres, d'ombres, de coins arrondis, d'ornements ni de dégradés décoratifs.
3. **Une seule voix typographique**, avec deux registres : une grotesque large (affirmée, mécanique) et une serif italique (sensible), utilisée avec parcimonie.
4. **Le cognac signale, il ne décore pas** : focus, page active, numéros, curseur.
5. **La vérité des contenus** : aucun chiffre, outil ou rôle affiché sans source ; un visuel graphique n'est jamais recadré.

### 1.2 Ce qu'on évite explicitement
- Tout ce qui rappelle l'ancien site : timbres, papier, script, fleurs, beige, brun.
- Les tics « template » : cartes à coins arrondis, ombres portées, dégradés violets, icônes 3D, emojis, jauges.
- Les mockups de téléphone pour présenter les reels : la vidéo est montrée **nue**, au format 9:16.
- Les filtres sépia, les teintes chaudes appliquées aux photos, le grain vintage.

### 1.3 Traitement des médias
| Type | Règle |
|---|---|
| **Photos** | Couleurs d'origine, aucun filtre global. Recadrage autorisé, mais **choisi par toi** pour les formats clés (2,39:1, 16:9, 4:5, 9:16) |
| **Visuels graphiques** (affiches, publications, encarts, stories) | **Jamais recadrés** : affichés entiers, au format d'origine, sur fond Noir 900 si nécessaire |
| **Vidéos** | Boucles muettes pour l'ambiance ; lecteur avec son, sous-titres et contrôles pour les vraies vidéos |
| **Captures d'écran** (statistiques, Leboncoin) | Uniquement comme preuve, petites, avec masquage des données personnelles |
| **Textes posés sur image** | Voile dégradé noir sous le texte (contraste ≥ 4,5:1 garanti) |

---

## 2. Design system

### 2.1 Palette exacte

| Jeton | Hex | Contraste sur Noir 950 | Rôle |
|---|---|---|---|
| `noir-950` | `#0B0B0C` | — | Fond principal (≈ 90 % des sections) |
| `noir-900` | `#121214` | — | Surfaces : menu mobile, emplacements média, bloc résultats |
| `noir-800` | `#1C1C1F` | — | Survol de ligne, champ actif |
| `gris-700` | `#2B2B2F` | 1,4:1 | Filets 1 px, bordures (jamais du texte) |
| `gris-600` | `#46464C` | 2,1:1 | Filets forts, désactivé ; texte **sur fond clair** (8,5:1) |
| `gris-500` | `#6E6E76` | 3,9:1 | Grands textes ≥ 24 px uniquement, numéros décoratifs |
| `gris-400` | `#9A9AA2` | **7,0:1** | Texte secondaire, légendes, métadonnées |
| `gris-300` | `#C4C4CA` | **11,3:1** | Paragraphes longs |
| `gris-100` | `#E6E6E8` | — | Filets sur sections claires |
| `blanc-50` | `#F4F4F2` | **17,9:1** | Titres, texte principal, fond des sections claires |
| `cognac-300` | `#E0A57C` | 9,2:1 | Survol de l'accent sur fond noir |
| `cognac-500` | `#C6814F` | **6,2:1** | **Accent principal** (utilisable en texte) |
| `cognac-700` | `#8E5129` | 5,7:1 sur blanc | Accent sur les sections claires |
| `erreur` | `#F0625A` / `#B42318` | 6,2:1 / 6,0:1 sur blanc | Erreurs du formulaire uniquement |

**Répartition cible** (hors photos) : noirs 78 % · blanc 12 % · gris 7 % · cognac ≤ 3 à 5 %.

**Usages du cognac (exhaustifs)** : contour de focus clavier · indicateur de page active · numérotation éditoriale · flèches des liens d'action · soulignement au survol · barre de progression de lecture (2 px) · curseur personnalisé · « Collection Moto » · un mot en serif italique par écran au maximum.
**Interdits** : aplats, fonds de section, boutons pleins, dégradés, teinte appliquée aux photos, texte courant.

**Thème** : le site est **sombre par défaut**, sans bouton de bascule. Les sections claires (Manifeste, Parcours) sont des respirations éditoriales, pas un thème clair. Une version claire complète n'est pas prévue (choix de direction artistique).

### 2.2 Typographie

| Famille | Licence | Rôle | Fichiers |
|---|---|---|---|
| **Archivo** (variable, largeur 62–125 %, graisse 100–900) | OFL, gratuite | Display, titres, chiffres | 1 woff2, latin |
| **Instrument Serif** (romain + italique) | OFL | Accent éditorial (italique) | 2 woff2 |
| **Inter** (variable) | OFL | Texte, interface | 1 woff2 |
| **Geist Mono** (400, 500) | OFL | Métadonnées, fiches techniques, filtres | 2 woff2 |

Toutes **hébergées sur le site** (aucun appel à Google Fonts), sous-ensemble latin, `font-display: swap`. Seules Archivo et Inter sont préchargées.

**Échelle fluide** (mobile 360 px → desktop 1440 px)

| Style | Police / réglages | Taille | Interligne | Approche |
|---|---|---|---|---|
| Display XL | Archivo 118 %, 600, capitales | `clamp(56px, 12.4vw, 200px)` | 0,86 | −3,5 % |
| Display L | Archivo 110 %, 500 (+ serif italique) | `clamp(44px, 7.8vw, 112px)` | 0,95 | −3 % |
| H2 | Archivo 110 %, 500 | `clamp(32px, 4.4vw, 64px)` | 1,0 | −3 % |
| H3 | Archivo 105 %, 500 | `clamp(22px, 2.1vw, 30px)` | 1,15 | −2 % |
| Lead | Inter 400 | `clamp(20px, 1.8vw, 26px)` | 1,4 | −1 % |
| Texte | Inter 400 | `clamp(17px, 1.25vw, 18px)` | 1,6 | 0 |
| Petit | Inter 400 | 14–15 px | 1,5 | 0 |
| Méta | Geist Mono 400, capitales | 12 px (11 px minimum) | 1,5 | +8 % |

**Règles**
- Serif italique : 1 à 3 mots par titre, jamais en texte courant ni en capitales.
- Graisses limitées à 400, 500 et 600.
- Largeur de lecture : 62 caractères maximum pour le texte, 36 pour le lead.
- Grands chiffres en Archivo ; dates et formats en Geist Mono.
- Texte courant en `gris-300` sur noir, moins éblouissant que le blanc pur.

### 2.3 Grille, espacements, formes

| | Desktop ≥ 1024 | Tablette 768–1023 | Mobile < 768 |
|---|---|---|---|
| Colonnes | 12 | 8 | 4 |
| Gouttière | 24 px | 20 px | 16 px |
| Marges | `clamp(20px, 4.4vw, 64px)` | 32 px | 20 px |

- Largeur maximale du texte : 1440 px ; **les médias peuvent aller bord à bord**.
- Espacements, base 4 : `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192`.
- Espace entre sections : `clamp(96px, 14vh, 192px)`.
- Formats d'image : 2,39:1 · 16:9 · 3:2 · 4:5 · 9:16.
- Rayons : **0 partout** (exception : le curseur rond et la barre « home » du mobile, qui relève du système).
- Bordures : 1 px `gris-700` ; focus : contour 2 px `cognac-500`, décalé de 4 à 6 px.
- Iconographie : uniquement des flèches typographiques (→ ↗ ↓ ←), ❚❚ / ▶ pour la vidéo, ✓ / ✕ pour les états. Aucune bibliothèque d'icônes.

### 2.4 Monogramme KF

- **Piste A (recommandée)** : Instrument Serif, « K » romain et « F » italique, crénage serré. C'est un héritage direct de ton « F » serif actuel, sans le côté vintage.
- **Piste B** : Archivo extra-large + point cognac. Plus mécanique, mais plus générique.
- Les deux pistes sont présentées sur la planche 01. Le monogramme final sera **dessiné et vectorisé** (SVG), pas simplement tapé dans une police.
- Déclinaisons : favicon 32 / 180 / 512 px (fond noir, et fond clair pour iOS), navigation (28–34 px), signature de fin d'étude de cas (filet cognac + KF), footer, image Open Graph par défaut.

### 2.5 Composants (planche 06)

| Composant | Spécification |
|---|---|
| **Lien d'action** | Texte 18–22 px + flèche cognac, filet 1 px `gris-600`. Survol : filet cognac, flèche décalée de +6 px. Focus : contour cognac. États désactivé et « Envoi… » |
| **Bouton plein** | **Un seul** dans tout le site : l'envoi du formulaire sur mobile (fond blanc, texte noir, pleine largeur). Partout ailleurs, des liens typographiques |
| **Champ** | Pas de cadre, filet inférieur. Focus : filet cognac. Erreur : filet et message rouges, annoncés aux lecteurs d'écran. Valide : ✓ cognac |
| **Puces d'objet** (mobile) | Bordure 1 px, sélection : bordure cognac |
| **Filtres** | Texte avec compteur en exposant mono ; actif : blanc + soulignement cognac ; « Collection Moto » en cognac-300 |
| **Méta / fiche technique** | Geist Mono 12 px, capitales, séparateur « · » |
| **Bloc chiffre** | Archivo 110–260 px + ligne source en mono, **obligatoire** |
| **Lecteur vidéo** | Contrôles minimalistes en mono : ▶ / ❚❚, son, temps, plein écran, sous-titres ; muet par défaut |
| **Annotation de droits** | Petite ligne en `gris-400` sous un média : « © Le Georges — diffusé avec accord » |

---

## 3. Compositions : 8 modules (planche 02)

| Module | Description | Usage principal |
|---|---|---|
| **M1 · Plein cadre** | Média bord à bord (16:9 ou 2,39:1), légende mono dessous | Ouvertures de projet, transitions |
| **M2 · Paire décalée** | 2 images (7 + 4 colonnes), décalage vertical | Le Georges, photos lifestyle |
| **M3 · Bande 9:16** | Reels et stories côte à côte, sans téléphone ; défilement horizontal piloté au scroll (desktop) | Vidéo, social media |
| **M4 · Texte collant + médias** | 5 colonnes de texte fixe, 6 colonnes de médias qui défilent | Chapitres d'étude de cas |
| **M5 · Énoncé** | Une phrase sur 10 colonnes, section claire | Manifeste, transitions |
| **M6 · Liste index** | Lignes n° / titre / disciplines / année ; aperçu image qui suit le pointeur | Index (vue liste), parcours |
| **M7 · Chiffre** | Très grand chiffre + source | Résultats validés |
| **M8 · Grille d'archives** | Grille régulière, petite échelle | Archives académiques |

**Règle de rythme** : deux modules identiques ne se suivent jamais ; une section claire au maximum tous les 3 blocs sombres.

---

## 4. Navigation

### 4.1 En-tête
- **Desktop** : KF (lien accueil) à gauche · `Projets · À propos · Contact` au centre · « Pays Basque — FR » à droite (méta).
- Transparent sur le hero. Il **se masque quand on descend** et réapparaît quand on remonte, avec un fond noir à 85 % et un flou.
- Page active : filet cognac.
- **Lien d'évitement** « Aller au contenu », visible au premier appui sur Tab.
- **Pages projet** : `← Tous les projets` au centre, « Projet 01 / 05 » à droite, barre de progression cognac de 2 px en haut.

### 4.2 Menu mobile (planche 04)
- Bouton texte « Menu » / « Fermer » (pas d'icône hamburger seule).
- Plein écran `noir-900` : liens numérotés en Archivo 46 px (Projets, À propos, Contact) + Archives en plus petit.
- Contacts directs (email, Instagram, LinkedIn) en bas, à portée du pouce.
- Focus piégé dans le menu, fermeture par Échap ou par le geste retour, défilement de la page bloqué derrière.

### 4.3 Accès au contact
- Lien « Contact » dans l'en-tête.
- **Bouton flottant « Contact »** sur mobile : il apparaît après le hero et disparaît à l'approche du formulaire.
- CTA en fin de chaque étude de cas.
- Page **`/contact` dédiée**, qui reprend la section : c'est le lien idéal pour la bio Instagram.

### 4.4 Footer
KF · Navigation · Réseaux · Légal (mentions, confidentialité) · © 2026 · Pays Basque, puis le nom « FERREIRA-MACIAS » en Display XL, calé sur la largeur, en signature.

### 4.5 Page 404
« Cette page n'existe pas (ou plus). » + `Voir les projets →` + `Retour à l'accueil`. Fond noir, une photo moto en M1.

---

## 5. Arborescence & structure des pages

```
/                         Accueil
/projets                  Index (filtres, vue Images / Liste)
/projets/igoa-moto        Étude de cas — gabarit A
/projets/le-georges       Étude de cas — gabarit A
/projets/shootings-moto   Série photo — gabarit B
/projets/video-moto       Vidéo — gabarit C
/projets/photographie     Série photo — gabarit B (optionnel)
/projets/archives         Archives académiques — gabarit D
/a-propos                 À propos
/contact                  Contact (reprend la section de l'accueil)
/mentions-legales         Légal
/confidentialite          Légal
/404
```

### 5.1 Accueil (planche 03 + planche 04 pour le mobile)

| # | Section | Module | Contenu | Fond |
|---|---|---|---|---|
| 1 | Hero | M1 vidéo | Nom en Display XL · accroche · « Spécialité moto » · « Responsable Communication — IGOA Moto » · Défiler · Pause | Vidéo |
| 2 | Manifeste | M5 | 1 phrase (à valider) | Clair |
| 3 | Projets sélectionnés | M1, M2, bande 3 photos, M3 | IGOA Moto · Le Georges · Shootings moto · Vidéo moto + « Tous les projets » + « Archives » | Noir |
| 4 | Ce que je fais | Liste type M6 | 3 expertises, livrables, outils ; image au survol | Noir |
| 5 | Chiffre | M7 | 2 532 vues — Cave du Georges (**si accord**) | Noir |
| 6 | À propos (court) | Portrait + texte | Portrait HD, 2 paragraphes, « En savoir plus », « CV (PDF) » | Noir |
| 7 | Parcours | M6 clair | Expériences + formations (dates à confirmer) | Clair |
| 8 | Méthode | 4 colonnes | 4 étapes **décrites par toi** | Noir |
| 9 | Contact | Titre + formulaire | « Parlons de votre projet. » · email · Instagram · LinkedIn · formulaire | Noir |
| 10 | Footer | — | Voir §4.4 | Noir |

### 5.2 Index des projets (planche 06)

```
┌──────────────────────────────────────────────────────────────┐
│ KF            Projets  À propos  Contact        Pays Basque │
├──────────────────────────────────────────────────────────────┤
│ PROJETS (Display L)                         [Images] Liste  │
│ Tout⁰⁵ Social⁰³ Photo⁰⁴ Vidéo⁰³ Design⁰² Com⁰² — Moto⁰³      │
│ ┌──────────────────────┐  ┌──────────────────────┐          │
│ │ IGOA Moto            │  │                      │ ← décalé │
│ └──────────────────────┘  │ Le Georges           │          │
│ IGOA Moto          2026   └──────────────────────┘          │
│ ┌──────────────────────┐  ┌──────────────────────┐          │
│ │ Shootings moto       │  │ Vidéo moto           │          │
│ └──────────────────────┘  └──────────────────────┘          │
│ ┌──────────────────────┐  ┌──────────────────────┐          │
│ │ Photographie (opt.)  │  │ ARCHIVES →           │          │
│ └──────────────────────┘  └──────────────────────┘          │
└──────────────────────────────────────────────────────────────┘
```
- Les filtres modifient l'URL (`/projets?filtre=moto`) : une vue filtrée est partageable, et le bouton retour la conserve.
- Vue Liste (M6) : n° · titre · disciplines · année, aperçu au survol.

### 5.3 Étude de cas — gabarit A (planche 05)

```
┌──────────────────────────────────────────────────────────────┐
│▬▬▬▬▬ progression (cognac)                                    │
│ KF          ← Tous les projets                Projet 01 / 05 │
│                                                              │
│   [ HERO : média plein écran ]                               │
│   Disciplines · Collection Moto                              │
│   IGOA MOTO (Display XL)                                     │
│   Rôle — résumé en une phrase                                │
├──────────────────────────────────────────────────────────────┤
│ Entreprise │ Rôle │ Période │ Livrables │ Outils │ Liens     │  ← fiche technique
├──────────────────────────────────────────────────────────────┤
│ Contexte & mission   [3–4 lignes]                            │
├──────────────────────────────────────────────────────────────┤
│ Sommaire (sticky) │                                          │
│ 01 ●              │   [médias du chapitre 01]                │  ← M4
│ Titre chapitre    │                                          │
│ puces             │                                          │
├──────────────────────────────────────────────────────────────┤
│ 02  ▸ bande horizontale de reels 9:16 →                      │  ← M3
├──────────────────────────────────────────────────────────────┤
│ …chapitres suivants (M2, M1, M4)…                            │
├──────────────────────────────────────────────────────────────┤
│ RÉSULTATS (si chiffres réels ET autorisés, sinon absent)     │  ← M7
├──────────────────────────────────────────────────────────────┤
│ Crédits & droits                               —— KF         │
├──────────────────────────────────────────────────────────────┤
│ [ PROJET SUIVANT : image plein écran + titre ]  Voir →       │
└──────────────────────────────────────────────────────────────┘
```

**Chapitres prévus**
- **IGOA Moto** : 01 Reel QJ Motor SRK 921 RR · 02 Reels Instagram · 03 Parutions · 04 Occasion de la semaine · 05 Photos concession · 06 Page Leboncoin.
- **Le Georges** : 01 Identité textile (tenue + casquettes) · 02 Cave du Georges (+ résultat) · 03 Print (encart) · 04 Instagram (reels + feed) · 05 Événements (stories + affiches).

Chaque chapitre ne s'affiche que si ses contenus ont le statut « autorisé » (§10).

### 5.4 Série photo — gabarit B (Shootings moto, Photographie)

```
[ HERO M1 : photo phare ]  SHOOTINGS MOTO · Photographie · Moto · [année]
Intro 2 lignes (optionnel) · Matériel (optionnel)
── Série 1 « Forêt » ── M1 → M2 → 3 photos alignées
── Série 2 « Sunset » ── …
── Série 3 « Nocturne » ── …
[ Projet suivant ]
```
Très peu de texte. Clic sur une photo : **visionneuse plein écran** (flèches, Échap, balayage sur mobile, compteur 3/12).

### 5.5 Vidéo — gabarit C (Vidéo moto)

```
[ HERO : boucle muette ]  VIDÉO MOTO · Vidéo · Social media · Moto
Grille de vidéos 9:16 (M3) → clic = lecteur plein écran avec son,
sous-titres, « Voir sur Instagram ↗ » (simple lien, pas d'intégration)
```

### 5.6 Archives — gabarit D (planche 06)

```
ARCHIVES — Projets académiques
« Travaux réalisés pendant ma formation… » [formation et année par projet]
── Concours & affiches (M8) : Crampotte · Fêtes de Bayonne · Restos du Cœur · Portugal · Tour de France
── Exercices de détournement (M8) : Hitman · Dior · Cars 4
   Mention sous chaque visuel : « Exercice académique — visuel non officiel,
   sans lien avec les marques et œuvres citées. »
```
- Accessible depuis l'index, le menu et le footer, mais **jamais depuis l'accueil**.
- Les pages d'archives ne sont pas mises en avant dans le sitemap (priorité basse). Les « exercices de détournement » sont exclus de l'indexation (`noindex`), pour éviter d'associer ton nom à des marques que tu n'as pas servies.
- Avatar, illustrations et projet jeu vidéo : conservés dans tes fichiers, **absents du site**.

### 5.7 À propos

```
[ Portrait HD (5 col.) ]  │ À PROPOS
                          │ Lead : qui tu es, ce que tu fais (2 phrases)
                          │ Texte : parcours, spécialité moto, façon de travailler
                          │ Langues : Français · Anglais (C1)
                          │ CV (PDF) ↓
── Parcours complet (M6) : expériences + formations, dates validées
── Outils (liste mono, sans niveaux)
── Centres d'intérêt liés au métier (moto, audiovisuel, voyage) — optionnel
── CTA contact
```

### 5.8 Contact (section + page `/contact`)
- Titre « Parlons de *votre projet.* », sous-titre « Missions, collaborations de marque, opportunités professionnelles. »
- Colonne de gauche : email (lien `mailto`), Instagram, LinkedIn ; téléphone **masqué** (activable).
- Formulaire :
  - **Nom** ;
  - **Email** ;
  - **Objet** : Mission freelance / Collaboration de marque / Opportunité professionnelle / Autre (puces sur mobile, liste sur desktop) ;
  - **Message**.
- Notice RGPD courte sous le formulaire + lien vers la politique de confidentialité.

### 5.9 Pages légales
Gabarit texte simple : colonne de 62 caractères, H1 + H2, date de mise à jour. Contenu rédigé **uniquement à partir des informations que tu fourniras**.

---

## 6. Expérience utilisateur

### 6.1 Parcours par profil

| Visiteur | Ce qu'il cherche | Son chemin | Temps visé |
|---|---|---|---|
| **Recruteur** | Niveau réel, expérience, sérieux | Hero → IGOA Moto (1ᵉʳ projet) → Parcours → CV PDF | < 90 s |
| **Marque moto** | Qualité d'image, compréhension du secteur | Hero vidéo → Collection Moto → Shootings / Vidéo → Contact « Collaboration » | < 2 min |
| **Client local** (restaurant, commerce) | Capacité à gérer ses réseaux de A à Z | Le Georges (étude de cas 360°) → Chiffre → Contact « Mission » | < 2 min |
| **Agence / professionnel** | Polyvalence, méthode, outils | Expertises → Méthode → Index projets → LinkedIn | Libre |

### 6.2 Les 5 premières secondes
1. **0 à 0,3 s** : fond noir et nom lisible immédiatement (texte HTML, pas d'image).
2. **0,3 à 1,4 s** : la vidéo apparaît avec un léger zoom arrière, le nom monte ligne par ligne.
3. **1,4 s** : accroche et « Défiler ». Le visiteur sait **qui** tu es, **ce que** tu fais, et que la **moto** est ta signature.

### 6.3 Microcopie (vouvoiement côté visiteur, « je » pour toi)

| Endroit | Texte |
|---|---|
| CTA projet | « Voir le projet → » |
| Fin d'étude de cas | « Un projet similaire ? Parlons-en → » |
| Envoi | « Envoyer le message → » / « Envoi… » |
| Succès | « Message envoyé. Merci, je reviens vers vous rapidement. » (sans délai promis) |
| Erreur d'envoi | « L'envoi n'a pas abouti. Réessayez, ou écrivez directement à [email]. » |
| Email invalide | « Adresse email invalide. » |
| Champ vide | « Ce champ est nécessaire. » |
| Vidéo | « Lire », « Pause », « Activer le son », « Sous-titres » |

### 6.4 États à concevoir
- **Chargement** : aucun écran de chargement ; espaces réservés de la bonne taille (pas de décalage), avec une version floue de l'image (LQIP).
- **Vidéo indisponible ou mode économie de données** : poster fixe + bouton « Lire ».
- **JavaScript désactivé** : tout reste lisible et navigable ; les animations sont absentes et le formulaire reste fonctionnel (envoi serveur classique).
- **Projet sans statistiques** : le bloc Résultats disparaît (pas de bloc vide).

---

## 7. Système d'animations

### 7.1 Jetons

| Jeton | Valeur | Usage |
|---|---|---|
| `ease-out` | `cubic-bezier(.16, 1, .3, 1)` | Tout ce qui apparaît |
| `ease-in-out` | `cubic-bezier(.65, 0, .35, 1)` | Transitions de page, menu |
| `dur-xs` | 120 ms | Couleur, opacité au survol |
| `dur-s` | 240 ms | Liens, champs, curseur |
| `dur-m` | 450 ms | Survol d'image, ouverture du menu |
| `dur-l` | 700 ms | Révélations au scroll |
| `dur-xl` | 1 000 à 1 400 ms | Hero, rideau d'image |
| `stagger` | 60 à 80 ms | Entre les lignes ou les éléments d'un groupe |

### 7.2 Catalogue

| Animation | Comportement | Où |
|---|---|---|
| Arrivée du hero | Chorégraphie de 0 à 1 400 ms (planche 06) | Accueil, une seule fois par session |
| Révélation de titre | Lignes qui montent derrière un masque (100 % → 0), décalage de 80 ms | Titres de section |
| Rideau d'image | `clip-path` du bas vers le haut + dézoom interne de 1,08 à 1 | Images de projet |
| Fondu léger | Opacité 0 → 1 + 12 px | Paragraphes, méta |
| Parallax interne | L'image se déplace de 6 à 10 % **dans** son cadre | Grandes images M1 (desktop) |
| Bande horizontale | Défilement horizontal piloté par le scroll vertical | M3, desktop uniquement |
| Survol projet | Image × 1,03, titre souligné, curseur « Voir » | Accueil, index |
| Survol liste | Aperçu image qui suit le pointeur avec inertie | Expertises, vue liste |
| Transition de page | L'image cliquée devient le hero de la page projet (View Transitions) ; fondu de 300 ms pour le reste | Accueil / index vers projet |
| Projet suivant | Survol : léger éclaircissement ; clic : l'image s'étend en hero | Fin d'étude de cas |
| En-tête | Masquage / réapparition selon le sens du scroll | Global |
| Menu mobile | Fondu + liens décalés de 60 ms | Mobile |
| Curseur | Point de 10 px qui suit avec inertie ; grossit sur les liens ; « Voir » / « Lire » sur les médias | Desktop, souris |
| Formulaire | Filet focus 240 ms, ✓ de validation, bouton « Envoi… » puis succès | Contact |

### 7.3 Règles
- Uniquement `transform`, `opacity` et `clip-path` (60 images/s).
- Chaque révélation ne se joue **qu'une fois**, quand l'élément est visible à 15 %.
- **Défilement natif** : pas de lissage forcé du scroll ; seule la bande M3 est pilotée, sur desktop.
- Aucune animation ne retarde l'affichage du contenu principal (LCP).
- Vidéos : lecture quand elles sont visibles, pause quand elles sortent de l'écran.
- **`prefers-reduced-motion`** : fondus de 150 ms seulement ; pas de parallax, de bande pilotée, de zoom, de curseur personnalisé ni de vidéo automatique (poster + bouton Lire).
- Budget : 1 bibliothèque d'animation, chargée seulement sur les pages qui en ont besoin.

---

## 8. Comportement mobile (planche 04)

| Élément | Desktop | Mobile |
|---|---|---|
| Hero | Vidéo 16:9, nom sur 3 lignes à 178 px | **Vidéo 9:16 dédiée**, nom sur 3 lignes à 58 px |
| Navigation | Liens visibles | Bouton « Menu » + plein écran |
| Projets sélectionnés | Compositions M1 / M2 / bande | Une image bord à bord par projet, légende dessous |
| Reels | Bande horizontale pilotée | **Lecteur plein écran façon story** (balayage, progression, ✕) |
| Expertises | Image au survol | Image fixe sous chaque expertise |
| Galeries photo | Compositions | Carrousel à balayage + compteur |
| Visionneuse | Flèches, Échap | Balayage, pincement pour zoomer |
| Contact | Liste déroulante pour l'objet | Puces sélectionnables, clavier email, bouton pleine largeur |
| Bouton Contact flottant | — | Après le hero, masqué près du formulaire |
| Curseur, aperçus au survol, parallax | Oui | **Non** |
| Vidéo | 1080p | 720p ; image fixe si économie de données ou réseau lent |

Zones tactiles ≥ 44 × 44 px ; texte jamais sous 11 px (méta) ; aucun défilement horizontal de la page.

---

## 9. Présentation des projets

1. **Ordre** : IGOA Moto → Le Georges → Shootings moto → Vidéo moto → (Photographie) → Archives.
2. **Chaque projet ouvre sur un média**, jamais sur du texte.
3. **Fiche technique systématique** : entreprise, rôle, période, livrables, outils, liens.
4. **Chapitres** pour les projets pros (un sous-projet de ton PDF = un chapitre).
5. **Tes puces du PDF sont conservées sur le fond** : je les reformule pour la lisibilité, sans ajouter de fait. Les tournures « Développement des compétences en… » disparaissent.
6. **Résultats** uniquement s'ils sont réels, sourcés et autorisés.
7. **Crédits & droits** en fin de projet.
8. **Visuels graphiques jamais recadrés**, photos recadrées avec ton accord.
9. **Liens Instagram** = simples liens sortants « Voir sur Instagram ↗ » (aucun embed, aucun traceur).

---

## 10. Architecture des pages projet : modèle de contenu

Chaque projet est un dossier (`texte + médias`) décrit par les champs suivants. Ces champs ne sont pas du code : ils définissent ce que je te demanderai pour chaque projet.

| Champ | Exemple (IGOA Moto) | Affiché ? |
|---|---|---|
| `title` | IGOA Moto | Oui |
| `slug` | igoa-moto | URL |
| `template` | A (étude de cas) · B (série) · C (vidéo) · D (archives) | — |
| `type` | pro · perso · académique | Filtre interne |
| `client` / `location` | IGOA Moto · Anglet | Oui |
| `roleDisplayed` | Responsable Communication | **Oui** |
| `roleSource` | Chargé de communication / Photographe — alternance (CV) | **Jamais** (traçabilité) |
| `period` | Depuis janvier 2026 | Oui |
| `disciplines` | social, vidéo, photo, design | Oui (filtres) |
| `collection` | moto | Oui |
| `tools` | CapCut, … | Oui |
| `summary` | 1 phrase | Oui |
| `context` | 3–4 lignes | Oui |
| `chapters[]` | titre, texte, médias, outils | Oui |
| `results[]` | valeur · libellé · source · date · `publishable` | Seulement si `publishable = true` |
| `credits` | « Contenus réalisés pour… » | Oui |
| `rights.owner` | IGOA Moto | Non |
| `rights.status` | `à demander` · `demandé` · `accordé` · `refusé` | Non : **bloque la publication** si différent d'« accordé » |
| `rights.notes` | personnes identifiables, marques, musique | Non |
| `media[].rights` | statut propre à chaque média (ex. photo floutée) | Non |
| `cover`, `ogImage` | image de couverture, image de partage 1200 × 630 | Oui |
| `next` | le-georges | Oui |
| `noindex` | false (true pour les exercices de détournement) | — |

**Garde-fou** : un média ou un chapitre dont le statut de droits n'est pas « accordé » **n'est pas publié**. Il reste dans le projet, invisible, jusqu'à validation.

---

## 11. Matrice des droits : IGOA Moto et Le Georges

> Ceci n'est **pas un avis juridique**. La titularité des droits sur des créations réalisées en entreprise ou en alternance dépend de ton contrat et de la nature de l'œuvre. Dans tous les cas, je recommande un **accord écrit de chaque entreprise** (un email suffit souvent) avant publication. Ce n'est pas parce que tu as créé un contenu qu'il est libre de diffusion.

### 11.1 IGOA Moto

| Sous-projet | Ce que tu as réalisé (d'après le PDF) | Ce qui appartient à l'entreprise ou à des tiers | Autorisation nécessaire | Statistiques publiables | À vérifier avant publication |
|---|---|---|---|---|---|
| **Reel QJ Motor SRK 921 RR** | Création et montage du reel (9:16, 4K) | Compte @igoamoto et publication ; marque et produit QJ Motor ; musique éventuelle | **IGOA Moto** | Aucune fournie. Celles du reel = données du compte IGOA → accord requis | Qui a filmé ? Propriété des rushes ; licence de la musique (version sans musique conseillée) |
| **Reels Instagram (3)** | Montage (CapCut) | Idem ; marques visibles (QJ Motor, autres modèles) | **IGOA Moto** | Idem | Ton rôle exact (tournage ?) ; musique |
| **Parutions (5)** | Rôle **non précisé** dans le PDF | Visuels contenant des offres et logos KTM, un partenariat avec une école de moto (stage trail), photos de modèles | **IGOA Moto** + vérifier les visuels fournis par les marques | — | Quels visuels sont de toi (et lesquels viennent des marques) ? Offres datées → mention « offre passée » |
| **Occasion de la semaine (2)** | Création des visuels | Photos des motos (auteur ?), logos BMW / Sherco, prix | **IGOA Moto** | — | Auteur des photos ; prix et offres datés → mention « archive » |
| **Photos concession** | Photographie (à confirmer) | Banque d'images de la concession ; les motos (produits) | **IGOA Moto** (usage d'images réalisées pour elle) | — | Es-tu l'auteur de toutes les photos ? Cession de droits prévue au contrat ? |
| **Page Leboncoin** | Refonte de la page | Page et annonces d'IGOA ; prix ; **la capture montre ton nom, ton email et ton téléphone** dans le formulaire | **IGOA Moto** | — | **Masquer tes données personnelles** sur la capture ; avant/après nécessaires |

### 11.2 Le Georges (Biarritz)

| Sous-projet | Ce que tu as réalisé (d'après le PDF) | Ce qui appartient à l'entreprise ou à des tiers | Autorisation nécessaire | Statistiques publiables | À vérifier avant publication |
|---|---|---|---|---|---|
| **Tenue** | Tenue, modernisation du logo, visuels face/dos, couleurs | **Logo et marque du restaurant** ; photos de l'équipe portant la tenue | **Le Georges** + **chaque personne reconnaissable** (ou photos de dos / floutées) | — | Qui a pris les photos ? Accord de l'équipe |
| **Cave du Georges** | Visuel InDesign, retouche Photoshop | Marque du restaurant ; étiquette de vin visible (marque tierce) ; compte Instagram | **Le Georges** | **Candidates** : 2 532 vues, 1 119 comptes touchés, 71,8 % de non-abonnés (données du compte du restaurant → **accord requis**, avec la date). Je te conseille de ne pas mettre en avant les 17 J'aime | Date de la publication (pour la source) |
| **Encart publicitaire** | Création et mise en page | **Photo du cuisinier** (personne identifiable) ; coordonnées du restaurant | **Le Georges** + **la personne photographiée** | — | Support de parution ; auteur de la photo |
| **Casquettes (2)** | Deux designs, déclinaison du logo | Logo du restaurant ; **mockups** (licence du modèle utilisé ?) | **Le Georges** | — | Casquettes produites ou maquettes ? Licence des mockups |
| **Reels (3)** | Rôle à préciser | **Clients et personnel identifiables** (soirée, « la patronne ») ; **un avis client avec un nom visible** ; musique | **Le Georges** + **personnes identifiables** | Aucune fournie | **Flouter le nom de l'avis client** ; licence de la musique |
| **Feed Instagram (6 photos)** | Photographie (Lightroom / Photoshop) | Clients en terrasse identifiables ; étiquettes de vin (marques) | **Le Georges** + personnes identifiables | — | Choisir des photos sans visages, ou obtenir les accords |
| **Stories événements (3)** | Création (Photoshop, Canva) | **Photos de sportifs** (rugby, tennis) qui ne t'appartiennent pas ; logos de clubs et de tournoi | — | — | **À exclure du site** (recommandé), ou à refaire sans photos tierces |
| **Divers productions (≈ 10)** | Création (Canva, Lightroom) | Noms d'artistes et de partenaires, photos de personnes (DJ, cuisinier), éléments Canva | **Le Georges** + personnes identifiables + partenaires | — | Conditions de licence des éléments Canva pour un usage portfolio ; sélectionner 4–6 visuels maximum |

### 11.3 Ce que je ferai côté site
- Le statut de droits est **obligatoire** pour chaque média ; sans « accordé », rien n'est publié (§10).
- Ligne de crédit sous chaque projet pro.
- Floutage et masquage faits **sur tes fichiers sources** avant import (jamais par un simple effet CSS, qui laisserait l'image d'origine récupérable).

---

## 12. À valider de ton côté

1. **Planches 01 à 06** : direction générale, palette, typographies.
2. **Monogramme** : piste A (serif, recommandée) ou B.
3. **Accroche du hero** : « Communication digitale & production visuelle — photo, vidéo, social media. » ?
4. **Manifeste** : « Je pense la communication et je fabrique les images qui la portent. » ?
5. **Méthode** : décris-moi tes 4 étapes réelles (les intitulés des planches sont provisoires).
6. **Section Chiffre** sur l'accueil : à garder si Le Georges donne son accord, sinon retirée.
7. **Page `/contact` dédiée** (pour ta bio Instagram) : oui / non ?
8. **Projet « Photographie »** (paysage / nature) : publié ou non ?
9. **Écart d'intitulé IGOA** (§0) : on laisse tel quel, ou tu harmonises ton CV et ton LinkedIn ?
10. **Instagram affiché** : `@kxre_lune`, confirmé ?

**Toujours nécessaires avant le développement des contenus** (rappel de l'étape 1, partie F) : médias HD, portrait, email professionnel, accords écrits d'IGOA Moto et du Georges, dates exactes des formations, outils réels par projet.

*Aucun développement ne commencera sans ta validation de cette étape 2.*
