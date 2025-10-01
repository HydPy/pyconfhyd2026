import type { MetadataRoute } from 'next';
import { SPEAKERS } from '@/speakers';

export const dynamic = 'force-static';
export const revalidate = 60; // Revalidate every 60 seconds

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: 'https://2026.pyconfhyd.org/',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: 'https://2026.pyconfhyd.org/code-of-conduct',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: 'https://2026.pyconfhyd.org/schedule',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: 'https://2026.pyconfhyd.org/travel',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://2026.pyconfhyd.org/faq',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://2026.pyconfhyd.org/reporting-guide',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // sitemap for speaker pages
  const speakerPages = SPEAKERS.map((speaker) => ({
    url: `https://2026.pyconfhyd.org/speakers/${speaker.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...speakerPages];
}
