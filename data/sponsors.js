export const SPONSORS_INFO = {
  title: 'Sponsors',
  description:
    'PyConf Hyderabad is completely driven by volunteers. Sponsoring the event helps to sustain and grow the conference as well as the Community. Sponsor help in making the conference affordable, and maintaining the inventory for the conference.',
};

export const getSponsor = (name) => {
  for (const category in SPONSORS) {
    const sponsor = SPONSORS[category].find((s) => s.name === name);
    if (sponsor) {
      return sponsor;
    }
  }
  return null;
};

export const SPONSORS = {
  Platinum: [
    {
      name: 'Snowflake',
      hyperLink: '/blogs/snowflake-platinum-sponsor/',
      lightLogoUrl: '/images/sponsors/snowflake.svg',
      logoAlt: 'Snowflake logo',
      socials: [
        {
          name: 'X',
          url: 'https://twitter.com/SnowflakeDB',
          ariaLabel: 'Hyperlink to Snowflake X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/snowflake-computing',
          ariaLabel: 'Hyperlink to Snowflake LinkedIn page.',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/Snowflake-Computing-709171695819345/',
          ariaLabel: 'Hyperlink to Snowflake Facebook page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/_snowflake_inc/?hl=en',
          ariaLabel: 'Hyperlink to Snowflake Instagram page.',
        },
      ],
    },
  ],
  Gold: [
    {
      name: 'LangDB.ai',
      hyperLink: '/blogs/langdb-ai-gold-sponsor/',
      lightLogoUrl: '/images/sponsors/langdb.png',
      logoAlt: 'LangDB.ai logo',
      socials: [
        {
          name: 'X',
          url: 'https://x.com/LangdbAi/',
          ariaLabel: 'Hyperlink to LangDB.ai X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/langdb/',
          ariaLabel: 'Hyperlink to LangDB.ai LinkedIn page.',
        },
      ],
    },
    {
      name: 'Cognida.ai',
      hyperLink: '/blogs/cognida-ai-gold-sponsor/',
      lightLogoUrl: '/images/sponsors/cognidaaai.png',
      logoAlt: 'Cognida.ai logo',
      socials: [
        {
          name: 'X',
          url: 'https://x.com/CognidaInc/',
          ariaLabel: 'Hyperlink to Cognida.ai X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/cognida-ai/',
          ariaLabel: 'Hyperlink to Cognida.ai LinkedIn page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/cognidainc/',
          ariaLabel: 'Hyperlink to Cognida.ai Instagram page.',
        },
      ],
    },
    {
      name: 'Storable India',
      hyperLink: 'https://www.storable.com',
      lightLogoUrl: '/images/sponsors/storable.jpg',
      logoAlt: 'Storable India logo',
      socials: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/storable-india/?viewAsMember=true',
          ariaLabel: 'Hyperlink to Storable India LinkedIn page.',
        },
      ],
    },
    {
      name: 'Tiger Analytics',
      hyperLink: 'https://www.tigeranalytics.com/',
      lightLogoUrl: '/images/sponsors/tiger-analytics-black.png',
      logoAlt: 'Tiger Analytics logo',
      socials: [
        {
          name: 'X',
          url: 'https://twitter.com/tigeranalytics',
          ariaLabel: 'Hyperlink to Tiger Analytics X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/tiger-analytics/posts/?feedView=all',
          ariaLabel: 'Hyperlink to Tiger Analytics LinkedIn page.',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/share/1H4etXYa6C/',
          ariaLabel: 'Hyperlink to Tiger Analytics Facebook page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/tigeranalytics',
          ariaLabel: 'Hyperlink to Tiger Analytics Instagram page.',
        },
      ],
    },
  ],
  Silver: [
    {
      name: 'Gridlex',
      hyperLink: 'https://gridlex.com/',
      lightLogoUrl: '/images/sponsors/gridlex.png',
      logoAlt: 'Gridlex logo',
      socials: [
        {
          name: 'X',
          url: ' https://x.com/Gridlex3/',
          ariaLabel: 'Hyperlink to Gridlex X page.',
        },
        {
          name: 'LinkedIn',
          url: ' https://www.linkedin.com/company/gridlex/',
          ariaLabel: 'Hyperlink to Gridlex LinkedIn page.',
        },
        {
          name: 'Facebook',
          url: ' https://www.facebook.com/GridlexApps/',
          ariaLabel: 'Hyperlink to Gridlex Facebook page.',
        },
        {
          name: 'Instagram',
          url: ' https://www.instagram.com/gridlex_software/',
          ariaLabel: 'Hyperlink to Gridlex Instagram page.',
        },
      ],
    },
  ],
  Associate: [
    {
      name: 'GlueOps',
      hyperLink: 'https://www.glueops.dev/?utm_source=pyconfhyd',
      lightLogoUrl: '/images/sponsors/glueops.png',
      logoAlt: 'GlueOps logo',
      socials: [
        {
          name: 'X',
          url: 'https://x.com/GlueOps',
          ariaLabel: 'Hyperlink to GlueOps X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/glueops',
          ariaLabel: 'Hyperlink to GlueOps LinkedIn page.',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/glueops',
          ariaLabel: 'Hyperlink to GlueOps Facebook page.',
        },
      ],
    },
  ],
  'Workshop Venue': [
    {
      name: 'EPAM Systems',
      lightLogoUrl: '/images/sponsors/epam.svg',
      logoAlt: 'EPAM Systems logo',
      hyperLink: 'https://www.epam.com/',
    },
  ],
};
