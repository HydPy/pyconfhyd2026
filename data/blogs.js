import { getSponsor } from '@/sponsors';

import SnowflakePlatinumSponsorMdx from '@/blogs/snowflake-platinum-sponsor.mdx';
import LangDBAIGoldSponsorMdx from '@/blogs/langdb-ai-gold-sponsor.mdx';
import CognidaAIGoldSponsorMdx from '@/blogs/cognida-ai-gold-sponsor.mdx';
import TigerAnalyticsGoldSponsorMdx from '@/blogs/tiger-analytics-gold-sponsor.mdx';
import StorableIndiaGoldSponsorMdx from '@/blogs/storable-india-gold-sponsor.mdx';
import GridlexSilverSponsorMdx from '@/blogs/gridlex-silver-sponsor.mdx';
import GlueOpsAssociateSponsorMdx from '@/blogs/glueops-associate-sponsor.mdx';
import SporoHealthAssociateSponsorMdx from '@/blogs/sporo-health-associate-sponsor.mdx';
import WrappingUpPyConfHyderabad2025 from '@/blogs/pyconf-hyderabad-2025-wrap-up.mdx';

export const BLOGS = [
  {
    slug: 'pyconf-hyderabad-2025-wrap-up',
    title: 'PyConf Hyderabad 2025: A Wrap-Up',
    markdownComponent: <WrappingUpPyConfHyderabad2025 />,
    author: 'Bhanu K',
    publishedAt: 'February 27, 2025',
    socials: [
        {
          name: 'X',
          url: 'https://github.com/hydpy',
          ariaLabel: 'Hyperlink to HydPy X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/pyconf-hyderabad/',
          ariaLabel: 'Hyperlink to PyConf Hyderabad LinkedIn page.',
        },
        {
          name: 'GitHub',
          url: 'https://github.com/HydPy/',
          ariaLabel: 'Hyperlink to HydPy GitHub page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/pyconfhyd/',
          ariaLabel: 'Hyperlink to PyConf Hyderabad Instagram page.',
        },
        {
          name: 'Telegram',
          url: 'https://t.me/HydPy',
          ariaLabel: 'Hyperlink to HydPy Telegram channel.',
        },
        {
          name: 'Meetup',
          url: 'https://www.meetup.com/HydPyGroup/',
          ariaLabel: 'Hyperlink to HydPy Meetup page.',
        },
        {
          name: 'Envelope',
          url: 'https://mail.python.org/mailman3/lists/hydpy.python.org/',
          ariaLabel: 'Hyperlink to HydPy Mailing List.',
        },
      ],
  },
  {
    slug: 'sporo-health-associate-sponsor',
    title: 'Announcing Sporo Health as our Associate Sponsor',
    markdownComponent: <SporoHealthAssociateSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 19, 2025',
    socials: getSponsor('Sporo Health').socials,
  },
  {
    slug: 'glueops-associate-sponsor',
    title: 'Announcing GlueOps as our Associate Sponsor',
    markdownComponent: <GlueOpsAssociateSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 15, 2025',
    socials: getSponsor('GlueOps').socials,
  },
  {
    slug: 'gridlex-silver-sponsor',
    title: 'Announcing Gridlex as our Silver Sponsor',
    markdownComponent: <GridlexSilverSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 15, 2025',
    socials: getSponsor('Gridlex').socials,
  },
  {
    slug: 'storable-india-gold-sponsor',
    title: 'Announcing Storable India as our Gold Sponsor',
    markdownComponent: <StorableIndiaGoldSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 15, 2025',
    socials: getSponsor('Storable India').socials,
  },
  {
    slug: 'tiger-analytics-gold-sponsor',
    title: 'Announcing Tiger Analytics as our Gold Sponsor',
    markdownComponent: <TigerAnalyticsGoldSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 15, 2025',
    socials: getSponsor('Tiger Analytics').socials,
  },
  {
    slug: 'cognida-ai-gold-sponsor',
    title: 'Announcing Cognida.ai as our Gold Sponsor',
    markdownComponent: <CognidaAIGoldSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 14, 2025',
    socials: getSponsor('Cognida.ai').socials,
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
    slug: 'snowflake-platinum-sponsor',
    title: 'Announcing Snowflake as our Platinum Sponsor',
    markdownComponent: <SnowflakePlatinumSponsorMdx />,
    author: 'PyConf Hyderabad Team',
    publishedAt: 'February 13, 2025',
    socials: getSponsor('Snowflake').socials,
  },
];
