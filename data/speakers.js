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
    name: 'Syed Fahad',
    slug: 'syed-fahad',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'DevRel Engineer at BetterBugs',
    bio: 'Syed Fahad is a Developer Relations Engineer at BetterBugs working at the intersection of engineering and community. He drives developer adoption, supports engineering culture, and helps grow developer ecosystems through education and collaboration.',
    imgUrl: '/images/speakers/syed-fahad.jpg',
    imgAlt: 'Picture of Syed Fahad.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/syedfahads/',
        ariaLabel: "Hyperlink to Syed Fahad's LinkedIn page.",
      },
      {
        name: 'X',
        url: 'https://x.com/fahad_developer',
        ariaLabel: "Hyperlink to Syed Fahad's X page.",
      },
      {
        name: 'Globe',
        url: 'https://fahads.dev',
        ariaLabel: "Hyperlink to Syed Fahad's website.",
      },
    ],
  },
  {
    name: 'Ria Bhatia',
    slug: 'ria-bhatia',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Software Engineer at Goldman Sachs',
    bio: 'Ria Bhatia is a software engineer passionate about databases, automation, and system efficiency. An enthusiastic speaker, she enjoys sharing her learnings at tech conferences and mentors aspiring engineers while advocating for diversity in tech.',
    imgUrl: '/images/speakers/ria-bhatia.jpg',
    imgAlt: 'Picture of Ria Bhatia.',
    socials: [
      {
        name: 'X',
        url: 'https://x.com/RiaBhatia24',
        ariaLabel: "Hyperlink to Ria Bhatia's X page.",
      },
    ],
  },
  {
    name: 'Asha Holla',
    slug: 'asha-holla',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Data Engineer at Bloom Value',
    bio: 'Asha Holla is a data engineer, leading AI innovation at Bloom Value. She works at the intersection of data platforms, analytics, and applied AI, with a strong focus on building scalable, governed solutions in the US healthcare space.',
    imgUrl: '/images/speakers/asha-holla.jpg',
    imgAlt: 'Picture of Asha Holla.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/asha-holla/',
        ariaLabel: "Hyperlink to Asha Holla's LinkedIn page.",
      },
      {
        name: 'GitHub',
        url: 'https://github.com/AshaHolla',
        ariaLabel: "Hyperlink to Asha Holla's GitHub page.",
      },
      {
        name: 'Globe',
        url: 'https://open.substack.com/pub/ashaholla',
        ariaLabel: "Hyperlink to Asha Holla's website.",
      },
    ],
  },
  {
    name: 'Nitin Sharma',
    slug: 'nitin-sharma',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Lead Security Engineer at Salesforce',
    bio: 'Nitin is a Lead Security Engineer at Salesforce with around a decade of cybersecurity experience delivering architecture reviews, threat modeling, code reviews and secure coding practices.',
    imgUrl: '/images/speakers/nitin-sharma.jpg',
    imgAlt: 'Picture of Nitin Sharma.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nitinsf/',
        ariaLabel: "Hyperlink to Nitin Sharma's LinkedIn page.",
      },
    ],
  },
  {
    name: 'Tezan Sahu',
    slug: 'tezan-sahu',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Applied Scientist 2 at Microsoft',
    bio: 'Tezan Sahu is an Applied Scientist II, building AI Products at Microsoft. An IIT Bombay topper, he holds five US patents, wrote the bestseller Beyond Code, curates the AI newsletter Low-Pass Filter, and mentors thousands worldwide.',
    imgUrl: '/images/speakers/tezan-sahu.jpg',
    imgAlt: 'Picture of Tezan Sahu.',
    socials: [
      {
        name: 'X',
        url: 'https://x.com/SahuTezan',
        ariaLabel: "Hyperlink to Tezan Sahu's X page.",
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/tezan-sahu/',
        ariaLabel: "Hyperlink to Tezan Sahu's LinkedIn page.",
      },
      {
        name: 'GitHub',
        url: 'https://github.com/tezansahu/',
        ariaLabel: "Hyperlink to Tezan Sahu's GitHub page.",
      },
      {
        name: 'EnvelopeOpenText',
        url: 'https://lowpassfilter.substack.com/',
        ariaLabel: "Hyperlink to Tezan Sahu's newsletter.",
      },
      {
        name: 'Globe',
        url: 'https://www.tezansahu.com/',
        ariaLabel: "Hyperlink to Tezan Sahu's website.",
      },
    ],
  },
  {
    name: 'Ritesh Chintakindi',
    slug: 'ritesh-chintakindi',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Associate Software Engineer at OSI Digital',
    bio: 'Ritesh, an AIML Engineer at OSI Digital with 2+ years of experience has strong Python proficiency building multilingual chatbots and GenAI solutions transforming internal workflows. Being AWS Certified, he develops scalable and cloud based systems.',
    imgUrl: '/images/speakers/ritesh-chintakindi.jpg',
    imgAlt: 'Picture of Ritesh Chintakindi.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'http://www.linkedin.com/in/ritesh-chintakindi-9b03a223b',
        ariaLabel: "Hyperlink to Ritesh Chintakindi's LinkedIn page.",
      },
      {
        name: 'Medium',
        url: 'https://medium.com/@riteshchintakindi',
        ariaLabel: "Hyperlink to Ritesh Chintakindi's Medium page.",
      },
    ],
  },
  {
    name: 'Karthikeyan VK',
    slug: 'karthikeyan-vk',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'CTO',
    bio: 'Learned Python for machine learning and fell in love with the language. Now focused on cloud-native systems, building scalable ML services with Python, containers, and modern DevOps practices.',
    imgUrl: '/images/speakers/karthikeyan-vk.jpg',
    imgAlt: 'Picture of Karthikeyan VK.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/karthikeyanvk/',
        ariaLabel: "Hyperlink to Karthikeyan VK's LinkedIn page.",
      },
      {
        name: 'Globe',
        url: 'https://karthikeyanvk.com/',
        ariaLabel: "Hyperlink to Karthikeyan VK's website.",
      },
    ],
  },
  {
    name: 'Dinoy Raj K',
    slug: 'dinoy-raj-k',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Product Engineer at strollby',
    bio: 'Product Engineer & Droidcon speaker. Expert in Jetpack Compose, Kotlin, and on-device AI. Featured at Droidcon Abu Dhabi/Uganda, DevFest Dubai/Mumbai, and FOSSASIA 26. Dedicated to building modern, AI-driven Android experiences.',
    imgUrl: '/images/speakers/dinoy-raj-k.jpg',
    imgAlt: 'Picture of Dinoy Raj K.',
    socials: [
      {
        name: 'X',
        url: 'https://x.com/dinoy_raj',
        ariaLabel: "Hyperlink to Dinoy Raj K's X page.",
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/dinoy-raj/',
        ariaLabel: "Hyperlink to Dinoy Raj K's LinkedIn page.",
      },
      {
        name: 'GitHub',
        url: 'https://github.com/dinoy-raj',
        ariaLabel: "Hyperlink to Dinoy Raj K's GitHub page.",
      },
      {
        name: 'Globe',
        url: 'https://linktr.ee/dinoyraj',
        ariaLabel: "Hyperlink to Dinoy Raj K's website.",
      },
    ],
  },
  {
    name: 'Muhammed Mizaj',
    slug: 'muhammed-mizaj',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Product Engineer at UST, Strollby',
    bio: 'I’m a Product Engineer specializing in Python and distributed systems, focused on architecting scalable streaming protocols and real-time data pipelines, with an emphasis on performance, reliability, and clean system design.',
    imgUrl: '/images/speakers/muhammed-mizaj.jpg',
    imgAlt: 'Picture of Muhammed Mizaj.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/muhammedmizaj',
        ariaLabel: "Hyperlink to Muhammed Mizaj's LinkedIn page.",
      },
      {
        name: 'GitHub',
        url: 'https://github.com/muhammed-mizaj',
        ariaLabel: "Hyperlink to Muhammed Mizaj's GitHub page.",
      },
    ],
  },
  {
    name: 'Pavan B. Govindaraju',
    slug: 'pavan-b-govindaraju',
    type: 'Session',
    activeSpeakerPage: true,
    title: '',
    bio: 'Pavan Govindaraju is a software architect with 6+ years building distributed systems, ML and GenAI platforms at startups and enterprises. Stanford MS, IIT Bombay B.Tech, 15+ publications/presentations, angel investor and open-source contributor.',
    imgUrl: '/images/speakers/pavan-b-govindaraju.jpg',
    imgAlt: 'Picture of Pavan B. Govindaraju.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/pavan-g-71236420b/',
        ariaLabel: "Hyperlink to Pavan B. Govindaraju's LinkedIn page.",
      },
      {
        name: 'GitHub',
        url: 'http://github.com/gpavanb1',
        ariaLabel: "Hyperlink to Pavan B. Govindaraju's GitHub page.",
      },
      {
        name: 'Medium',
        url: 'http://gpavanb.medium.com',
        ariaLabel: "Hyperlink to Pavan B. Govindaraju's Medium blog.",
      },
    ],
  },
  {
    name: 'Akhil Teja G R',
    slug: 'akhil-teja',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Sr ML Engineer at DBS',
    bio: 'Sr ML Engineer at Singapore’s largest Bank and a passionate open source contributor. A regular speaker at Pycon and he’s currently active in building a multimodal machine learning database',
    imgUrl: '/images/speakers/akhil-teja.jpg',
    imgAlt: 'Picture of Akhil Teja G R.',
    socials: [
      {
        name: 'X',
        url: 'https://x.com/akhildevelops',
        ariaLabel: "Hyperlink to Akhil Teja's X page.",
      },
      {
        name: 'GitHub',
        url: 'https://github.com/akhildevelops',
        ariaLabel: "Hyperlink to Akhil Teja's GitHub page.",
      },
    ],
  },
  {
    name: 'Anand S',
    slug: 'anand-s',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'LLM Psychologist at Straive',
    bio: 'Anand’s an LLM psychologist @ Straive. He hand-transcribed every Calvin & Hobbes strip over 7 years. AI does that now in 7 min. He analyzes how AI thinks. AI has analyzed him back - and knows that he exaggerates. Take his talk with a pinch of salt.',
    imgUrl: '/images/speakers/anand-s.jpg',
    imgAlt: 'Picture of Anand S.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/sanand0/',
        ariaLabel: "Hyperlink to Anand S's LinkedIn page.",
      },
      {
        name: 'GitHub',
        url: 'https://github.com/sanand0',
        ariaLabel: "Hyperlink to Anand S's GitHub page.",
      },
      {
        name: 'Globe',
        url: 'https://www.s-anand.net/',
        ariaLabel: "Hyperlink to Anand S's website.",
      },
    ],
  },
  {
    name: 'Atul Bhosale',
    slug: 'atul-bhosale',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Software Engineer',
    bio: 'Atul Bhosale is a Software Engineer with 10+ years of experience building and scaling software systems. He’s an open-source contributor and an enthusiastic speaker who enjoys sharing practical learnings at tech conferences.',
    imgUrl: '/images/speakers/atul-bhosale.jpg',
    imgAlt: 'Picture of Atul Bhosale.',
    socials: [
      {
        name: 'X',
        url: 'https://x.com/atul1b',
        ariaLabel: "Hyperlink to Atul Bhosale's X page.",
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/atul-bhosale',
        ariaLabel: "Hyperlink to Atul Bhosale's LinkedIn page.",
      },
    ],
  },
  {
    name: 'Ponnam Karthik',
    slug: 'ponnam-karthik',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Software Engineer at GSynergy',
    bio: 'Self-taught software engineer with many years of experience building scalable web, mobile, and backend systems. Experienced in Python, full-stack development, and cloud technologies. Passionate about system design, performance, and sharing',
    imgUrl: '/images/speakers/ponnam-karthik.jpg',
    imgAlt: 'Picture of Ponnam Karthik.',
    socials: [
      {
        name: 'X',
        url: 'https://x.com/PonnamKarthik',
        ariaLabel: "Hyperlink to Ponnam Karthik's X page.",
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/karthikponnam',
        ariaLabel: "Hyperlink to Ponnam Karthik's LinkedIn page.",
      },
      {
        name: 'GitHub',
        url: 'https://github.com/ponnamkarthik/',
        ariaLabel: "Hyperlink to Ponnam Karthik's GitHub page.",
      },
      {
        name: 'Globe',
        url: 'https://karthikponnam.dev/',
        ariaLabel: "Hyperlink to Ponnam Karthik's website.",
      },
    ],
  },
  {
    name: 'Soumendra Kumar Sahoo',
    slug: 'soumendra-kumar-sahoo',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'AI Observability Architect at PepsiCo',
    bio: 'Soumendra is the AI Observability Architect at PepsiCo, where he scales global AI systems & leads sustainability initiatives for AI solutions. He joins us to share insights on building an AI Observability SDK at scale.',
    imgUrl: '/images/speakers/soumendra-kumar-sahoo.jpg',
    imgAlt: 'Picture of Soumendra Kumar Sahoo.',
    socials: [
      {
        name: 'X',
        url: 'https://x.com/soumendrak_',
        ariaLabel: "Hyperlink to Soumendra Kumar Sahoo's X page.",
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/soumendrak/',
        ariaLabel: "Hyperlink to Soumendra Kumar Sahoo's LinkedIn page.",
      },
      {
        name: 'GitHub',
        url: 'https://github.com/soumendrak/',
        ariaLabel: "Hyperlink to Soumendra Kumar Sahoo's GitHub page.",
      },
      {
        name: 'Globe',
        url: 'https://links.soumendrak.com/',
        ariaLabel: "Hyperlink to Soumendra Kumar Sahoo's website.",
      },
    ],
  },
  {
    name: 'Benjamin Alladi',
    slug: 'benjamin-alladi',
    type: 'Session',
    activeSpeakerPage: true,
    title: 'Associate Software Engineer at OSI Digital',
    bio: 'Benjamin is a Full-Stack Developer specializing in Python and JavaScript, building scalable APIs with FastAPI, interactive apps with React and Node.js, and cloud-ready backends, focusing on clean, efficient, production-ready solutions.',
    imgUrl: '/images/speakers/benjamin-alladi.jpg',
    imgAlt: 'Picture of Benjamin Alladi.',
    socials: [
      {
        name: 'LinkedIn',
        url: 'http://www.linkedin.com/in/benjamin-alladi-383511223',
        ariaLabel: "Hyperlink to Benjamin Alladi's LinkedIn page.",
      },
      {
        name: 'Medium',
        url: 'https://medium.com/@benjaminalladi10',
        ariaLabel: "Hyperlink to Benjamin Alladi's Medium page.",
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
