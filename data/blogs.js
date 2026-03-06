import { getSponsor } from '@/sponsors';

import AsblPlatinumSponsorMdx from '@/blogs/asbl-platinum-sponsor.mdx';
import StraiveGoldSponsorMdx from '@/blogs/straive-gold-sponsor.mdx';
import M37LabsSilverSponsorMdx from '@/blogs/m37labs-silver-sponsor.mdx';
import DPWorldPlatinumSponsorMdx from '@/blogs/dp-world-platinum-sponsor.mdx';
import EpamGoldSponsorMdx from '@/blogs/epam-gold-sponsor.mdx';
import ZentropyTechnologiesSilverSponsorMdx from '@/blogs/zentropy-technologies-silver-sponsor.mdx';
import TigerAnalyticsGoldSponsorMdx from '@/blogs/tiger-analytics-gold-sponsor.mdx';

export const BLOGS = [
  {
    slug: 'tiger-analytics-gold-sponsor',
    title: 'Announcing Tiger Analytics as our Gold Sponsor',
    markdownComponent: <TigerAnalyticsGoldSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'March 6, 2026',
    socials: getSponsor('Tiger Analytics').socials,
  },
  {
    slug: 'zentropy-technologies-silver-sponsor',
    title: 'Announcing Zentropy Technologies as our Silver Sponsor',
    markdownComponent: <ZentropyTechnologiesSilverSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'March 3, 2026',
    socials: getSponsor('Zentropy Technologies').socials,
  },
  {
    slug: 'dp-world-platinum-sponsor',
    title: 'Announcing DP World as our Platinum Sponsor',
    markdownComponent: <DPWorldPlatinumSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 27, 2026',
    socials: getSponsor('DP World').socials,
  },
  {
    slug: 'epam-gold-sponsor',
    title: 'Announcing EPAM Systems as our Gold Sponsor',
    markdownComponent: <EpamGoldSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 25, 2026',
    socials: getSponsor('EPAM Systems').socials,
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
    slug: 'straive-gold-sponsor',
    title: 'Announcing Straive as our Gold Sponsor',
    markdownComponent: <StraiveGoldSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 17, 2026',
    socials: getSponsor('Straive').socials,
  },
  {
    slug: 'asbl-platinum-sponsor',
    title: 'Announcing ASBL as our Platinum Sponsor',
    markdownComponent: <AsblPlatinumSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 8, 2026',
    socials: getSponsor('ASBL').socials,
  },
];
