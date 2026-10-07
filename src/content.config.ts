import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Statut de diffusion d'un contenu.
 * - personnel : ta création personnelle, publiable.
 * - accorde   : autorisation écrite obtenue (entreprise, personnes, ayants droit).
 * - a-demander / a-confirmer / refuse : jamais publié en production.
 */
export const rightsStatus = z.enum(['personnel', 'accorde', 'a-demander', 'a-confirmer', 'refuse']);

const media = z.object({
  /** Chemin relatif à src/assets/public/ ou src/assets/prive/ (ex. « igoa-moto/reel-qj.jpg »). */
  src: z.string(),
  alt: z.string(),
  /** photo : recadrable · graphic : jamais recadré · video : poster + fichier vidéo éventuel */
  kind: z.enum(['photo', 'graphic', 'video']).default('photo'),
  /** Fichier vidéo dans public/videos/ (ex. « videos/reel-qj.mp4 »). */
  video: z.string().optional(),
  /** Sous-titres WebVTT dans public/videos/. */
  captions: z.string().optional(),
  ratio: z.enum(['239/100', '16/9', '3/2', '1/1', '4/5', '9/16']).optional(),
  caption: z.string().optional(),
  /** Lien externe (ex. publication Instagram) — simple lien, jamais d'intégration. */
  href: z.url().optional(),
  /** Si absent, le statut du projet s'applique. */
  rights: rightsStatus.optional(),
});

const result = z.object({
  value: z.string(),
  label: z.string(),
  source: z.string(),
  /** false tant que l'entreprise n'a pas accepté la publication du chiffre. */
  publishable: z.boolean().default(false),
});

const chapter = z.object({
  title: z.string(),
  accent: z.string().optional(),
  layout: z.enum(['sticky', 'band', 'pair', 'full', 'grid']).default('sticky'),
  points: z.array(z.string()).default([]),
  tools: z.array(z.string()).default([]),
  note: z.string().optional(),
  media: z.array(media).default([]),
});

const projets = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projets' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    featured: z.boolean().default(false),
    template: z.enum(['etude', 'serie', 'video']),
    type: z.enum(['pro', 'perso']),
    client: z.string().optional(),
    location: z.string().optional(),
    /** Intitulé affiché sur le site. */
    roleDisplayed: z.string().optional(),
    /** Intitulé figurant dans tes documents sources (CV) — jamais affiché, conservé pour traçabilité. */
    roleSource: z.string().optional(),
    period: z.string().optional(),
    year: z.string().nullable().optional(),
    disciplines: z.array(z.enum(['social', 'photo', 'video', 'design', 'communication'])),
    collection: z.enum(['moto']).nullable().default(null),
    tools: z.array(z.string()).default([]),
    summary: z.string(),
    context: z.string().nullable().default(null),
    deliverables: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    cover: media,
    chapters: z.array(chapter).default([]),
    results: z.array(result).default([]),
    credits: z.string().optional(),
    rights: z.object({
      owner: z.string(),
      status: rightsStatus,
      notes: z.string().optional(),
    }),
    next: z.string().optional(),
  }),
});

const archives = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/archives' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    group: z.enum(['etudes', 'detournement']),
    label: z.string(),
    context: z.string().nullable().default(null),
    media: z.array(media),
    rights: z.object({ status: rightsStatus, notes: z.string().optional() }),
  }),
});

export const collections = { projets, archives };
