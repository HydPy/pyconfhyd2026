export const NAV_ITEMS = [
  {
    name: 'Home',
    children: [
      {
        name: 'Keynote Speakers',
        path: '/#keynote-speakers',
        target: '_self',
        featureFlag: 'KEYNOTE_SPEAKERS',
      },
      {
        name: 'Sponsors',
        path: '/#sponsors',
        target: '_self',
        featureFlag: 'SPONSORS',
      },
      {
        name: 'Community Partners',
        path: '/#community-partners',
        target: '_self',
        featureFlag: 'COMMUNITY_PARTNERS',
      },
      {
        name: 'Meet our Organizers',
        path: '/#organizers',
        target: '_self',
        featureFlag: 'MEET_ORGANIZERS',
      },
    ],
  },
  {
    name: 'Schedule',
    path: '/schedule',
    target: '_self',
    featureFlag: 'SCHEDULE',
  },
  {
    name: 'Speakers',
    path: '/speakers',
    target: '_self',
    featureFlag: 'SPEAKERS_PAGE',
  },
  {
    name: 'Tickets',
    path: '/tickets',
    target: '_self',
    featureFlag: 'TICKETS',
  },
  {
    name: 'Blog',
    path: '/blogs',
    target: '_self',
    featureFlag: 'BLOG_POSTS',
  },
  {
    name: 'Jobs',
    featureFlag: 'JOB_BOARD',
    children: [
      {
        name: 'Job Board',
        path: '/job-board/',
        target: '_self',
        featureFlag: 'JOB_BOARD',
      },
      {
        name: 'Job Board Rules and Guidelines',
        path: '/job-board-rules-guidelines/',
        target: '_self',
        featureFlag: 'JOB_BOARD',
      },
    ],
  },
  {
    name: 'About',
    children: [
      {
        name: 'Welcome Guide',
        path: '/welcome-guide',
        target: '_self',
        featureFlag: 'WELCOME_GUIDE',
      },
      {
        name: 'Our Team',
        path: '/our-team',
        target: '_self',
        featureFlag: 'OUR_TEAM',
      },
      {
        name: 'Travel',
        path: '/travel',
        target: '_self',
        featureFlag: 'TRAVEL',
      },
      {
        name: 'Code Of Conduct Policy',
        path: '/code-of-conduct',
        target: '_self',
        featureFlag: 'COC_REPORTING_GUIDE',
      },
      {
        name: 'Reporting Guide',
        path: '/reporting-guide',
        target: '_self',
        featureFlag: 'COC_REPORTING_GUIDE',
      },
      {
        name: 'FAQ',
        path: '/faq',
        target: '_self',
        featureFlag: 'FAQ',
      },
    ],
  },
];
