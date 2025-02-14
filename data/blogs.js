import { getSponsor } from '@/sponsors';

import SnowflakePlatinumSponsorMdx from '@/blogs/snowflake-platinum-sponsor.mdx';
import LangDBAIGoldSponsorMdx from '@/blogs/langdb-ai-gold-sponsor.mdx';
import CognidaAIGoldSponsorMdx from '@/blogs/cognida-ai-gold-sponsor.mdx';

export const BLOGS = [
  {
    slug: 'snowflake-platinum-sponsor',
    title: 'Announcing Snowflake as our Platinum Sponsor',
    markdownComponent: <SnowflakePlatinumSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 13, 2025',
    socials: getSponsor('Snowflake').socials,
  },
  {
    slug: 'langdb-ai-gold-sponsor',
    title: 'Announcing LangDB.ai as our Gold Sponsor',
    markdownComponent: <LangDBAIGoldSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 14, 2025',
    socials: getSponsor('LangDB.ai').socials,
  },
  {
    slug: 'cognida-ai-gold-sponsor',
    title: 'Announcing Cognida.ai as our Gold Sponsor',
    markdownComponent: <CognidaAIGoldSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 14, 2025',
    socials: getSponsor('Cognida.ai').socials,
  },
];
