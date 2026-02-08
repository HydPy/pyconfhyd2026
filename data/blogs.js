import { getSponsor } from '@/sponsors';

import AsblPlatinumSponsorMdx from '@/blogs/asbl-platinum-sponsor.mdx';

export const BLOGS = [
  {
    slug: 'asbl-platinum-sponsor',
    title: 'Announcing ASBL as our Platinum Sponsor',
    markdownComponent: <AsblPlatinumSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 8, 2026',
    socials: getSponsor('ASBL').socials,
  },
];
