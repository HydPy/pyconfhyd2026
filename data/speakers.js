export const getActiveSpeakers = () => {
  return SPEAKERS.filter((speaker) => speaker.activeSpeakerPage);
};

export const SPEAKERS = [
  {
    name: 'Manivannan Elangovan',
    slug: 'manivannan-elangovan',
    activeSpeakerPage: true,
    type: 'Keynote',
    title: 'Founder & CEO @ Limemint',
    bio: `Manivannan “Mani” Elangovan is the founder & CEO of Limemint, an InsurTech MGA modernizing Paid Family Leave insurance through automation, AI-driven workflows, and cloud-native engineering. Mani has held senior engineering leadership roles at ADP and Bank of America, where he led global teams and architected cloud-native, mission-critical enterprise systems at scale including distributed platforms, high-throughput applications, and database reliability frameworks. He began his career at Texas Instruments designing semiconductor chips for early-generation smartphones—an experience that shaped his systems-thinking approach across both hardware and enterprise software.</br></br>
          Beyond his engineering career, Mani is a long-standing open-source contributor and community advocate. He revived the Hyderabad Python Meetup, founded PyConf Hyderabad, and served as Conference Chair for PyCon India, helping strengthen the Python ecosystem in India.</br></br>
          At Limemint, Mani is reimagining Paid Family Leave insurance through a human-first, AI-powered platform. By embedding AI into compliance, claims, and decision workflows, his team is building scalable infrastructure that removes complexity and creates a more intuitive, supportive experience for employers, carriers, and families.</br></br>
          He is passionate about developer experience, community building, and the role of AI in reshaping how software and entire industries will be built in the decade ahead.`,
    imgUrl: '/images/speakers/manivannan-elangovan.jpg',
    imgAlt: "Manivannan Elangovan's picture",
    socials: [
      {
        name: 'X',
        url: 'https://x.com/ManithaE',
        ariaLabel: "Hyperlink to Manivannan Elangovan's X page.",
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/manivannanelangovan/',
        ariaLabel: "Hyperlink to Manivannan Elangovan's LinkedIn page.",
      },
    ],
  },
  {
    name: 'PyConf Hyderabad Team',
    slug: 'pyconf-hyderabad-team',
    activeSpeakerPage: false,
    title: 'Organizers',
    imgUrl: '/images/speakers/placeholder-1.svg',
    imgAlt: 'Placeholder image',
  },
];
