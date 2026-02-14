import type { MetadataRoute } from 'next';
import { SPEAKERS } from '@/speakers';
import { BLOGS } from '@/blogs';
import { NAV_ITEMS } from '@/navItems';
import { isFeatureEnabled } from '@/config/featureFlags';

export const dynamic = 'force-static';
export const revalidate = 60; // Revalidate every 60 seconds

const SITE_URL = 'https://2026.pyconfhyd.org';
type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';
const CHANGE_FREQUENCIES = new Set<ChangeFrequency>([
  'always',
  'hourly',
  'daily',
  'weekly',
  'monthly',
  'yearly',
  'never',
]);

const normalizePath = (path: string) => {
  if (path === '/') {
    return path;
  }

  return path.replace(/\/+$/, '');
};

const isStandalonePath = (path?: string) => {
  return Boolean(path && path.startsWith('/') && !path.includes('#'));
};

const getChangeFrequency = (value?: unknown): ChangeFrequency => {
  if (
    typeof value === 'string' &&
    CHANGE_FREQUENCIES.has(value as ChangeFrequency)
  ) {
    return value as ChangeFrequency;
  }

  return 'weekly';
};

// Define all static pages with their optional feature flag
export default function sitemap(): MetadataRoute.Sitemap {
  const extraPages = [
    {
      path: '/',
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 1.0,
    },
    {
      path: '/cfp-guidelines',
      changeFrequency: 'weekly' as ChangeFrequency,
      priority: 0.8,
    },
  ];

  const navItemsSource = Array.isArray(NAV_ITEMS) ? NAV_ITEMS : [];
  const navItems = (navItemsSource as Array<Record<string, unknown>>).flatMap(
    (item) =>
      item && Array.isArray(item.children)
        ? (item.children as Array<Record<string, unknown>>)
        : [item]
  );

  const navPages = navItems
    .filter((item) => Boolean(item))
    .filter((item) => isStandalonePath(item.path as string | undefined))
    .filter(
      (item) =>
        !item.featureFlag || isFeatureEnabled(item.featureFlag as string)
    )
    .map((item) => ({
      url: `${SITE_URL}${normalizePath((item.path as string) || '/')}`,
      lastModified: new Date(),
      changeFrequency: getChangeFrequency(item.changeFrequency),
      priority: (item.priority as number | undefined) ?? 0.7,
    }));

  const extraPagesSitemap = extraPages.map((page) => ({
    url: `${SITE_URL}${normalizePath(page.path)}`,
    lastModified: new Date(),
    changeFrequency: getChangeFrequency(page.changeFrequency),
    priority: page.priority,
  }));

  const staticPages = [...extraPagesSitemap, ...navPages].filter(
    (page, index, pages) =>
      pages.findIndex((candidate) => candidate.url === page.url) === index
  );

  // sitemap for speaker pages
  const speakerPages = isFeatureEnabled('SPEAKERS_PAGE')
    ? SPEAKERS.map((speaker) => ({
        url: `https://2026.pyconfhyd.org/speakers/${speaker.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    : [];

  // sitemap for blog pages
  const blogPages = isFeatureEnabled('BLOG_POSTS')
    ? BLOGS.map((blog) => ({
        url: `https://2026.pyconfhyd.org/blogs/${blog.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    : [];

  return [...staticPages, ...speakerPages, ...blogPages];
}
