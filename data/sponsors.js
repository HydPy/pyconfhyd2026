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

export const SPONSORS = {};
