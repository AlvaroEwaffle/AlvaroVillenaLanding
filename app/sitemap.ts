import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://alvarovillena.cl';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-04-19');
  const pages = [
    ['', 1],
    ['/servicios', 0.9],
    ['/sobre-mi', 0.8],
    ['/contacto', 0.9],
    ['/coaching', 0.5],
    ['/privacidad', 0.2],
    ['/terminos', 0.2],
  ] as const;

  return pages.map(([path, priority]) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: priority >= 0.8 ? 'weekly' : 'yearly',
    priority,
  }));
}
