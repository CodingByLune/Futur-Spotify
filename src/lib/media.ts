import fs from 'node:fs';
import path from 'node:path';
import type { ImageMetadata } from 'astro';

/**
 * Médias :
 * - src/assets/public/ : contenus personnels, versionnés sur GitHub ;
 * - src/assets/prive/  : contenus soumis à autorisation, exclus de Git (.gitignore).
 * Un fichier absent n'empêche pas la construction du site : le média est simplement ignoré.
 */
const publicImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/public/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);
const privateImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/prive/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export type RightsStatus = 'personnel' | 'accorde' | 'a-demander' | 'a-confirmer' | 'refuse';

/**
 * Aperçu : en développement (npm run dev) ou si PUBLIC_PREVIEW=true, les contenus non autorisés
 * sont affichés avec un badge. En production, ils ne sont jamais rendus.
 */
export const PREVIEW = import.meta.env.DEV || import.meta.env.PUBLIC_PREVIEW === 'true';

export const isPublishable = (status: RightsStatus) => status === 'personnel' || status === 'accorde';

/** Un statut « refusé » n'apparaît jamais, même en aperçu. */
export const isVisible = (status: RightsStatus) => isPublishable(status) || (PREVIEW && status !== 'refuse');

export function resolveImage(src: string): ImageMetadata | null {
  return (
    publicImages[`/src/assets/public/${src}`]?.default ??
    privateImages[`/src/assets/prive/${src}`]?.default ??
    null
  );
}

export function publicFileExists(file: string | undefined | null): boolean {
  if (!file) return false;
  return fs.existsSync(path.join(process.cwd(), 'public', file));
}

export interface MediaInput {
  src: string;
  alt: string;
  kind?: 'photo' | 'graphic' | 'video';
  video?: string;
  captions?: string;
  ratio?: string;
  caption?: string;
  href?: string;
  rights?: RightsStatus;
}

export interface ResolvedMedia extends MediaInput {
  kind: 'photo' | 'graphic' | 'video';
  image: ImageMetadata;
  status: RightsStatus;
  /** Affiché uniquement grâce au mode aperçu (droits non accordés). */
  pending: boolean;
  videoSrc: string | null;
}

/** Retourne le média prêt à afficher, ou null s'il ne doit pas (ou ne peut pas) être affiché. */
export function resolveMedia(m: MediaInput, inherited: RightsStatus): ResolvedMedia | null {
  const status = m.rights ?? inherited;
  if (!isVisible(status)) return null;
  const image = resolveImage(m.src);
  if (!image) return null;
  return {
    ...m,
    kind: m.kind ?? 'photo',
    image,
    status,
    pending: !isPublishable(status),
    videoSrc: publicFileExists(m.video) ? `/${m.video}` : null,
  };
}

export const resolveAll = (list: MediaInput[], inherited: RightsStatus) =>
  list.map((m) => resolveMedia(m, inherited)).filter((m): m is ResolvedMedia => m !== null);
