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

export const SPONSORS_CATEGORIES = ['platinum', 'gold', 'silver'];

export const SPONSORS = {
  platinum: [
    {
      name: 'Hyderabad DAO',
      imgUrl: '/images/community-partners/hyderabadDao.png',
      imgAlt: 'Hyderabad DAO logo',
      hyperLink: 'https://linktr.ee/hyddao',
    },
    {
      name: 'Cloud Native Hyderabad',
      imgUrl: '/images/community-partners/cloudNativeHyderabad.png',
      imgAlt: 'Cloud Native Hyderabad logo',
      hyperLink: 'https://community.cncf.io/cloud-native-hyderabad/',
    },
    {
      name: 'NEXTGEN NEXUS',
      imgUrl: '/images/community-partners/nextgenNexus.png',
      imgAlt: 'NEXTGEN NEXUS logo',
      hyperLink: 'https://bento.me/nextgen-nexus',
    },
  ],
  gold: [
    {
      name: 'SciPy India',
      imgUrl: '/images/community-partners/scipyIndia.svg',
      imgAlt: 'SciPy India logo',
      hyperLink: 'https://scipy-india.github.io/',
    },
    {
      name: 'PyDelhi',
      imgUrl: '/images/community-partners/pyDelhi.png',
      imgAlt: 'PyDelhi logo',
      hyperLink: 'https://pydelhi.org/',
    },
    {
      name: 'Django India',
      imgUrl: '/images/community-partners/djangoIndia.png',
      imgAlt: 'Django India logo',
      hyperLink: 'https://www.djangoindia.org',
    },
    {
      name: 'GDG Hyderabad',
      imgUrl: '/images/community-partners/gdgHyderabad.png',
      imgAlt: 'GDG Hyderabad logo',
      hyperLink: 'https://gdg.community.dev/gdg-hyderabad/',
    },
  ],
  silver: [
    {
      name: 'Microsoft AI Innovators Hub',
      imgUrl: '/images/community-partners/microsoftAiInnovatorsHub.png',
      imgAlt: 'Microsoft AI Innovators Hub logo',
      hyperLink: 'https://meetup.com/microsoft-ai?member_id=428247001',
    },
    {
      name: 'The Hackers Meetup',
      imgUrl: '/images/community-partners/theHackersMeetup.png',
      imgAlt: 'The Hackers Meetup logo',
      hyperLink: 'https://thehackersmeetup.org/',
    },
    {
      name: 'NEXUS Swarm',
      imgUrl: '/images/community-partners/nexusSwarm.png',
      imgAlt: 'NEXUS Swarm logo',
      hyperLink: 'https://linktr.ee/nexus_swarm',
    },
    {
      name: 'Kubernetes Over Koffee',
      imgUrl: '/images/community-partners/kubernetesOverKoffee.png',
      imgAlt: 'Kubernetes Over Koffee logo',
      hyperLink: 'https://www.meetup.com/kubernetes-over-koffee/',
    },
    {
      name: 'Open Source Weekend',
      imgUrl: '/images/community-partners/openSourceWeekend.png',
      imgAlt: 'Open Source Weekend logo',
      hyperLink: 'https://osd.opensourceweekend.org/',
    },
  ],
};
