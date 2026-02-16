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

export const getSponsors = () => {
  const sponsors = [];
  for (const category in SPONSORS) {
    SPONSORS[category].forEach((sponsor) => {
      sponsors.push(sponsor);
    });
  }
  return sponsors;
};

export const SPONSORS = {
  Platinum: [
    {
      name: 'ASBL',
      imgUrl: '/images/sponsors/asbl.png',
      imgAlt: 'ASBL logo',
      hyperLink: '/blogs/asbl-platinum-sponsor/',
      socials: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/asblindia/',
          ariaLabel: 'Hyperlink to ASBL LinkedIn page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/asblindia/',
          ariaLabel: 'Hyperlink to ASBL Instagram page.',
        },
        {
          name: 'Globe',
          url: 'https://asbl.in/',
          ariaLabel: 'Hyperlink to ASBL website.',
        },
      ],
    },
  ],
  Gold: [
    {
      name: 'Straive',
      imgUrl: '/images/sponsors/straive.png',
      imgAlt: 'Straive logo',
      hyperLink: '/blogs/straive-gold-sponsor/',
      socials: [
        {
          name: 'X',
          url: 'https://x.com/Straive_',
          ariaLabel: 'Hyperlink to Straive X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/straive_/',
          ariaLabel: 'Hyperlink to Straive LinkedIn page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/straive__/?hl=en',
          ariaLabel: 'Hyperlink to Straive Instagram page.',
        },
        {
          name: 'Globe',
          url: 'https://www.straive.com/',
          ariaLabel: 'Hyperlink to Straive website.',
        },
      ],
    },
  ],
  Silver: [],
};
