import { Metadata } from 'next';
import { ASSETS, CONFERENCE } from './conference';

export const metadata: Metadata = {
  title: { default: CONFERENCE.title, template: `%s | ${CONFERENCE.title}` },
  description: CONFERENCE.description,
  keywords: CONFERENCE.keywords,
  generator: CONFERENCE.generator,
  verification: { google: 'SDiASvij4kTElFGJgQPndWo3eYgk5yHmr417E_6wu7A' },
  metadataBase: new URL(CONFERENCE.siteURL),
  alternates: {
    canonical: CONFERENCE.siteURL,
  },
  icons: {
    icon: [
      { url: ASSETS.navbarLogoUrl },
      { url: ASSETS.navbarLogoUrl, sizes: '16x16', type: 'image/svg+xml' },
      { url: ASSETS.navbarLogoUrl, sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: { url: ASSETS.navbarLogoUrl },
  },
  openGraph: {
    title: {
      default: CONFERENCE.openGraph.title,
      template: `%s | ${CONFERENCE.openGraph.title}`,
    },
    description: CONFERENCE.description,
    url: CONFERENCE.siteURL,
    siteName: CONFERENCE.title,
    images: [
      {
        url: '/images/navbarLogo.svg',
        width: 800,
        height: 600,
        alt: CONFERENCE.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pyconfhyd',
    title: CONFERENCE.title,
    description: CONFERENCE.description,
    images: [
      {
        url: '/images/navbarLogo.png',
        alt: CONFERENCE.title,
      },
    ],
  },
};
