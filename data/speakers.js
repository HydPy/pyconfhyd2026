export const getActiveSpeakers = () => {
  return SPEAKERS.filter((speaker) => speaker.activeSpeakerPage);
};

// Social media icons sequence
// ----------------------------
// X
// LinkedIn
// Youtube
// Github
// Medium
// NewsLetter
// Web
export const SPEAKERS = [
  {
    name: 'Manivannan Elangovan',
    slug: 'manivannan-elangovan',
    activeSpeakerPage: true,
    type: 'Keynote',
    title: 'Founder & CEO @ Limemint',
    bio: `
          Manivannan “Mani” Elangovan is the founder & CEO of Limemint, an InsurTech MGA modernizing Paid Family Leave insurance through automation, AI-driven workflows, and cloud-native engineering. Mani has held senior engineering leadership roles at ADP and Bank of America, where he led global teams and architected cloud-native, mission-critical enterprise systems at scale including distributed platforms, high-throughput applications, and database reliability frameworks. He began his career at Texas Instruments designing semiconductor chips for early-generation smartphones—an experience that shaped his systems-thinking approach across both hardware and enterprise software.</br></br>
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
    name: 'Parul Pandey',
    slug: 'parul-pandey',
    activeSpeakerPage: true,
    type: 'Keynote',
    title: 'Data Scientist',
    bio: `
        Parul is an author and a Data Scientist having previously worked at H2O.ai as a Principal Data Scientist and at Weights and Biases as a Machine Learning Engineer.</br>
        She co-authored the O’Reilly book Machine Learning for High-Risk Applications and is a Kaggle Grandmaster in the Notebooks category, earning the title in 2020 as the first woman in India and the second worldwide. She speaks at events, mentors community groups and writes often about her work in the data science space.`,
    imgUrl: '/images/speakers/parul-pandey.jpg',
    imgAlt: "Parul Pandey's picture",
    socials: [
      {
        name: 'X',
        url: 'https://x.com/pandeyparul',
        ariaLabel: "Hyperlink to Parul Pandey's X page.",
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/parulpandeyindia/',
        ariaLabel: "Hyperlink to Parul Pandey's LinkedIn page.",
      },
      {
        name: 'Medium',
        url: 'https://medium.com/@pandeyparul',
        ariaLabel: "Hyperlink to Parul Pandey's Medium page.",
      },
      {
        name: 'Globe',
        url: 'https://parulpandey.com',
        ariaLabel: "Hyperlink to Parul Pandey's website.",
      },
    ],
  },
  {
    name: 'Ramachandra Vikas Chamarthi',
    slug: 'ramachandra-vikas-chamarthi',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'CEO at NavyaAI Private Limited',
    bio: 'Vikas is an AI systems engineer and founder of NavyaAI, focused on building scalable, high-performance agentic systems in Python. His work emphasizes parallel execution, isolation, and runtime observability for production AI infrastructure.',
    imgUrl: '/images/speakers/vikas-ramachandra-chamarthi.jpg',
    imgAlt: 'Picture of Ramachandra Vikas Chamarthi.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ramachandravikas',
        ariaLabel: "Hyperlink to Ramachandra Vikas Chamarthi's LinkedIn page.",
      },
      {
        name: 'Globe',
        url: 'https://navyaai.com',
        ariaLabel: "Hyperlink to Ramachandra Vikas Chamarthi's website.",
      },
    ],
  },
  {
    name: 'Jaidev Deshpande',
    slug: 'jaidev-deshpande',
    type: 'Session',
    activeSpeakerPage: true,
    title: '',
    bio: 'Jaidev currently does MLOps at Aftershoot. He has a decade of experience in machine learning and software development. You are likely to run into him at various tech events.',
    imgUrl: '/images/speakers/jaidev-deshpande.jpg',
    imgAlt: 'Picture of Jaidev Deshpande.',
    socials: [
      {
        name: 'X',
        url: 'https://x.com/jaidevd',
        ariaLabel: "Hyperlink to Jaidev Deshpande's X page.",
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/jaidevd',
        ariaLabel: "Hyperlink to Jaidev Deshpande's LinkedIn page.",
      },
      {
        name: 'GitHub',
        url: 'https://github.com/jaidevd',
        ariaLabel: "Hyperlink to Jaidev Deshpande's GitHub page.",
      },
      {
        name: 'EnvelopeOpenText',
        url: 'https://beingbayesian.in',
        ariaLabel: "Hyperlink to Jaidev Deshpande's newsletter.",
      },
      {
        name: 'Globe',
        url: 'https://jaidevd.com',
        ariaLabel: "Hyperlink to Jaidev Deshpande's website.",
      },
    ],
  },
  {
    name: 'Sonu Kumar',
    slug: 'sonu-kumar',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Founder at AI Anytime & Kodryx AI',
    bio: 'Sonu is the Founder of AI Anytime, an AI education and community platform, and Kodryx AI, a deeptech startup building applied AI systems. He previously built and exited a healthtech startup in the USA.',
    imgUrl: '/images/speakers/sonu-kumar.jpg',
    imgAlt: 'Picture of Sonu Kumar.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sonukr0/',
        ariaLabel: "Hyperlink to Sonu Kumar's LinkedIn page.",
      },
      {
        name: 'Youtube',
        url: 'https://www.youtube.com/@AIAnytime',
        ariaLabel: "Hyperlink to Sonu Kumar's youtube page.",
      },
      {
        name: 'GitHub',
        url: 'https://github.com/AIAnytime',
        ariaLabel: "Hyperlink to Sonu Kumar's GitHub page.",
      },
    ],
  },
  {
    name: 'Satyam Soni',
    slug: 'satyam-soni',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Software Architect at EPAM',
    bio: '8+ yrs in AI, data & integrations. Open-source lover (dev-accelerator creator). Passionate about teaching practical hacks & "aha!" moments. Let\'s code, share & level up! 🚀👨‍💻',
    imgUrl: '/images/speakers/satyam-soni.jpg',
    imgAlt: 'Picture of Satyam Soni.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/-satyamsoni',
        ariaLabel: "Hyperlink to Satyam Soni's LinkedIn page.",
      },
      {
        name: 'X',
        url: 'https://x.com/_satyamsoni_',
        ariaLabel: "Hyperlink to Satyam Soni's X page.",
      },
      {
        name: 'GitHub',
        url: 'https://github.com/satyamsoni2211',
        ariaLabel: "Hyperlink to Satyam Soni's GitHub page.",
      },
      {
        name: 'Globe',
        url: 'https://www.satyamsoni.in',
        ariaLabel: "Hyperlink to Satyam Soni's website.",
      },
    ],
  },
  {
    name: 'Sourav Roy',
    slug: 'sourav-roy',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Associate Director @ S&P Global India',
    bio: 'Sourav Roy is a cloud-native data platform expert and Python professional with 12+ years of experience. He is an Associate Director at S&P Global, working on lakehouse and streaming platforms, and enjoys hiking in the Himalayas.',
    imgUrl: '/images/speakers/sourav-roy.jpg',
    imgAlt: 'Picture of Sourav Roy.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sourav-roy-315a8455/',
        ariaLabel: "Hyperlink to Sourav Roy's LinkedIn page.",
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
