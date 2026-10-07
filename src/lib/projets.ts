import { getCollection, type CollectionEntry } from 'astro:content';
import { resolveMedia, resolveAll, type ResolvedMedia, type RightsStatus } from './media';

export type Projet = CollectionEntry<'projets'>;

export const DISCIPLINES: Record<string, string> = {
  social: 'Social media',
  photo: 'Photographie',
  video: 'Vidéo',
  design: 'Design graphique',
  communication: 'Communication',
};

export const disciplineLabel = (d: string) => DISCIPLINES[d] ?? d;

export async function getProjets() {
  const all = await getCollection('projets');
  return all.sort((a, b) => a.data.order - b.data.order);
}

export interface ChapitreRendu {
  title: string;
  accent?: string;
  layout: 'sticky' | 'band' | 'pair' | 'full' | 'grid';
  points: string[];
  tools: string[];
  note?: string;
  media: ResolvedMedia[];
}

/** Prépare un projet pour l'affichage : médias filtrés selon les droits, chapitres vides retirés. */
export function preparer(p: Projet) {
  const status = p.data.rights.status as RightsStatus;
  const cover = resolveMedia(p.data.cover, status);
  const chapters: ChapitreRendu[] = p.data.chapters
    .map((c) => ({ ...c, media: resolveAll(c.media, status) }))
    // Un chapitre de projet pro reste lisible sans média ; un chapitre de série sans image disparaît.
    .filter((c) => c.media.length > 0 || (p.data.template === 'etude' && c.points.length > 0));
  const results = p.data.results.filter((r) => r.publishable || import.meta.env.DEV || import.meta.env.PUBLIC_PREVIEW === 'true');
  return { cover, chapters, results, status };
}

export const href = (slug: string) => `/projets/${slug}`;
