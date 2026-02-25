import { getSponsor } from '@/sponsors';

import AsblPlatinumSponsorMdx from '@/blogs/asbl-platinum-sponsor.mdx';
import StraiveGoldSponsorMdx from '@/blogs/straive-gold-sponsor.mdx';
import M37LabsSilverSponsorMdx from '@/blogs/m37labs-silver-sponsor.mdx';
import EpamGoldSponsorMdx from '@/blogs/epam-gold-sponsor.mdx';

export const BLOGS = [
  {
    slug: 'asbl-platinum-sponsor',
    title: 'Announcing ASBL as our Platinum Sponsor',
    markdownComponent: <AsblPlatinumSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 8, 2026',
    socials: getSponsor('ASBL').socials,
  },
  {
    slug: 'straive-gold-sponsor',
    title: 'Announcing Straive as our Gold Sponsor',
    markdownComponent: <StraiveGoldSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 17, 2026',
    socials: getSponsor('Straive').socials,
  },
  {
    slug: 'm37labs-silver-sponsor',
    title: 'Announcing M37Labs as our Silver Sponsor',
    markdownComponent: <M37LabsSilverSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 22, 2026',
    socials: getSponsor('M37Labs').socials,
  },
  {
    slug: 'epam-gold-sponsor',
    title: 'Announcing EPAM Systems as our Gold Sponsor',
    markdownComponent: <EpamGoldSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 25, 2026',
    socials: getSponsor('EPAM Systems').socials,
  },
];
