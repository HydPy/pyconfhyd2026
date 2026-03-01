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
    {
      name: 'DP World',
      imgUrl: '/images/sponsors/dp-world.png',
      imgAlt: 'DP World logo',
      hyperLink: '/blogs/dp-world-platinum-sponsor/',
      socials: [
        {
          name: 'X',
          url: 'https://x.com/dp_world?s=21',
          ariaLabel: 'Hyperlink to DP World X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/dp-world/',
          ariaLabel: 'Hyperlink to DP World LinkedIn page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/showcase/dp-world-technology/?viewAsMember=true',
          ariaLabel: 'Hyperlink to DP World Technology LinkedIn page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/dpworld?igsh=MTgxdWlubnh3MGg4dw==',
          ariaLabel: 'Hyperlink to DP World Instagram page.',
        },
        {
          name: 'Globe',
          url: 'https://www.dpworld.com/en',
          ariaLabel: 'Hyperlink to DP World website.',
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
    {
      name: 'EPAM Systems',
      imgUrl: '/images/sponsors/epam.png',
      imgAlt: 'EPAM Systems logo',
      hyperLink: '/blogs/epam-gold-sponsor/',
      socials: [
        {
          name: 'X',
          url: 'https://x.com/EPAMSystems/',
          ariaLabel: 'Hyperlink to EPAM Systems X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/epam-systems',
          ariaLabel: 'Hyperlink to EPAM Systems LinkedIn page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/EPAMSystems/',
          ariaLabel: 'Hyperlink to EPAM Systems Instagram page.',
        },
        {
          name: 'Globe',
          url: 'https://welcome.epam.in/',
          ariaLabel: 'Hyperlink to EPAM Systems website.',
        },
      ],
    },
  ],
  Silver: [
    {
      name: 'M37Labs',
      imgUrl: '/images/sponsors/m37labs.png',
      imgAlt: 'M37Labs logo',
      hyperLink: '/blogs/m37labs-silver-sponsor/',
      socials: [
        {
          name: 'X',
          url: 'https://x.com/m37labs',
          ariaLabel: 'Hyperlink to M37Labs X page.',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/company/m37labs/',
          ariaLabel: 'Hyperlink to M37Labs LinkedIn page.',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/m37labs',
          ariaLabel: 'Hyperlink to M37Labs Instagram page.',
        },
        {
          name: 'Globe',
          url: 'https://www.m37labs.com/',
          ariaLabel: 'Hyperlink to M37Labs website.',
        },
      ],
    },
  ],
};
