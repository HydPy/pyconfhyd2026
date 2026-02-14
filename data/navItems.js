export const NAV_ITEMS = [
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
        name: 'Why Attend PyConf Hyderabad',
        path: '/#why-attend',
        target: '_self',
        featureFlag: 'WHY_ATTEND',
      },
      {
        name: 'Venue',
        path: '/#venue',
        target: '_self',
        featureFlag: 'VENUE',
      },
      {
        name: 'Travel',
        path: '/travel',
        target: '_self',
        featureFlag: 'TRAVEL',
      },
      {
        name: 'Our Team',
        path: '/our-team',
        target: '_self',
        featureFlag: 'OUR_TEAM',
      },
      {
        name: 'Code of Conduct',
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
  {
    name: 'Sponsors',
    path: '/#sponsors',
    target: '_self',
    featureFlag: 'SPONSORS',
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
    children: [
      {
        name: 'Get Your Ticket',
        path: '/tickets',
        target: '_self',
        featureFlag: 'TICKETS',
      },
      {
        name: 'Convince My Boss',
        path: '/convince-my-boss',
        target: '_self',
        featureFlag: 'TICKETS',
      },
      {
        name: 'Referral Contest',
        path: 'https://referral.konfhub.com/pyconf-hyderabad-2026/referral_contest_url_1',
        target: '_blank',
        featureFlag: 'TICKETS',
      },
      {
        name: 'Tickets FAQ',
        path: '/faq#tickets',
        target: '_self',
        featureFlag: 'TICKETS',
      },
    ],
  },
  {
    name: 'Jobs',
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
    name: 'Blog',
    path: '/blogs',
    target: '_self',
    featureFlag: 'BLOG_POSTS',
  },
];
