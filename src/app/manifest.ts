import type { MetadataRoute } from 'next'

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PyConfHyd 2026',
    short_name: 'PyConfHyd 2026',
    description:
      'PyConf Hyderabad 2026 is the regional gathering of Pythonistas and the largest Python Conference in Hyderabad.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF8F3',
    theme_color: '#E68D00',
    icons: [
      {
        src: '/images/pyconf-icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/pyconf-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}