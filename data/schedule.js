import { SPEAKERS } from '@/speakers';

export const getSpeaker = (slug) => {
  return SPEAKERS.find((speaker) => speaker.slug === slug);
};

export const SCHEDULE = {
  day1: {
    title: 'Workshop',
    date: '14 Mar',
    day: 'Saturday',
    sessions: [
      [
        {
          title: 'Registrations',
          time: '09:00 - 10:00 AM',
          location: 'TBA',
        },
      ],
      [
        {
          time: '10:00 - 12:50 PM',
          type: 'Workshop',
          // TODO: Update the Discord channel link
          discordChannelLink: '',
          title: 'Optimizing Pytorch Models',
          location: 'Track 1',
          speakers: [getSpeaker('jaidev-deshpande')],
        },
        {
          time: '10:00 - 12:50 PM',
          type: 'Workshop',
          // TODO: Update the Discord channel link
          discordChannelLink: '',
          title: 'PEP 684 + 554 + 669 True Parallelism in Python',
          speakers: [getSpeaker('ramachandra-vikas-chamarthi')],
          location: 'Track 2',
        },
        {
          time: '10:00 - 12:50 PM',
          type: 'Workshop',
          // TODO: Update the Discord channel link
          discordChannelLink: '',
          title: 'TBA',
          // TODO: Update the speakers once the session title is finalized.
          // speakers: [getSpeaker('manivannan-elangovan')],
          location: 'Track 3',
        },
      ],
      [
        {
          title: 'Lunch Break',
          time: '12:50 - 02:00 PM',
          location: 'TBA',
        },
      ],
      [
        {
          time: '02:00 - 04:50 PM',
          type: 'Workshop',
          // TODO: Update the Discord channel link
          discordChannelLink: '',
          title:
            'Designing Reliable Agentic AI for Real-World Systems',
          location: 'Track 1',
          speakers: [getSpeaker('sonu-kumar')],
        },
        {
          time: '02:00 - 04:50 PM',
          type: 'Workshop',
          // TODO: Update the Discord channel link
          discordChannelLink: '',
          title:
            'Mastering the Multi-Stack: Orchestrated Debugging with Python and Beyond',
          speakers: [getSpeaker('satyam-soni')],
          location: 'Track 2',
        },
        {
          time: '02:00 - 04:50 PM',
          type: 'Workshop',
          // TODO: Update the Discord channel link
          discordChannelLink: '',
          title:
            'Zero to Lakehouse Hero: Your Entire Data Lakehouse in Docker — Powered by Python & Apache',
          speakers: [getSpeaker('sourav-roy')],
          location: 'Track 3',
        },
      ],
    ],
  },
  day2: {
    title: 'Conference',
    date: '15 Mar',
    day: 'Sunday',
    sessions: [
      [
        {
          title: 'Registrations',
          time: '08:00 - 09:00 AM',
          location: 'Registration Desk - TBA',
        },
      ],
      [
        {
          title: 'Opening Note',
          time: '09:00 - 09:15 AM',
          location: 'TBA',
          speakers: [getSpeaker('pyconf-hyderabad-team')],
        },
      ],
      [
        {
          title: '',
          type: 'Talk',
          keynote: true,
          time: '09:15 - 10:15 AM',
          location: 'Auditorium',
          speakers: [getSpeaker('parul-pandey')],
        },
      ],
      [
        {
          title:'Platinum sponsor talk 1: TBA',
          type: 'Talk',
          time: '10:20 - 10:50 AM',
          location: 'Auditorium',
          // TODO: Update the speaker and their details once the session title is finalized.
          speakers: [getSpeaker('pyconf-hyderabad-team')],
        },
      ],
      [
        {
          title: 'T1 - TBA',
          type: 'Talk',
          time: '10:20 - 10:50 AM',
          location: 'Hall 1',
          // TODO: Update the speaker and their details once the session title is finalized.
          speakers: [getSpeaker('pyconf-hyderabad-team')],
        },
      ],
      [
        {
          title: 'Debugging in Production: What Unit Tests Did Not Save You From',
          type: 'Talk',
          time: '10:20 - 10:50 AM',
          location: 'Hall 2',
          speakers: [getSpeaker('syed-fahad')],
        },
      ],
      [
        {
          title:'Platinum sponsor talk 2: TBA',
          type: 'Talk',
          time: '10:55 - 11:25 AM',
          location: 'Auditorium',
          // TODO: Update the speaker and their details once the session title is finalized.
          speakers: [getSpeaker('pyconf-hyderabad-team')],
        },
      ],
      [
        {
          title: 'Good Systems, Good Sleep: Teaching Your Systems to Fix Themselves (Using Python, Not Magic)',
          type: 'Talk',
          time: '10:55 - 11:25 AM',
          location: 'Hall 1',
          speakers: [getSpeaker('ria-bhatia')],
        },
      ],
      [
        {
          title: 'T3 - TBA',
          type: 'Talk',
          time: '10:55 - 11:25 AM',
          location: 'Hall 2',
          // TODO: Update the speaker and their details once the session title is finalized.
          speakers: [getSpeaker('pyconf-hyderabad-team')],
        },
      ],
      [
        {
          title: 'Tea Break',
          break: true,
          time: '11:25 - 11:45 AM',
          location: 'Cafeteria',
        },
      ],
      [
        {
          title: 'Making Agents Behave: Building Deterministic LLM Workflows',
          type: 'Talk',
          time: '11:45 - 12:15 PM',
          location: 'Auditorium',
          speakers: [getSpeaker('asha-holla')],
        },
      ],
      // [
      //   {
      //     title: 'Spicing Up Automation: A Taste of Python and SaltStack',
      //     type: 'Talk',
      //     time: '11:30 - 12:00 PM',
      //     location: 'Marvel Hall',
      //     speakers: [getSpeaker('ria-bhatia')],
      //   },
      // ],
      // [
      //   {
      //     title: "Let's enhance our technical writing by reading PEPs",
      //     type: 'Talk',
      //     time: '12:00 - 12:30 PM',
      //     location: 'Marvel Hall',
      //     speakers: [getSpeaker('sai-rahul-poruri')],
      //   },
      // ],
      // [
      //   {
      //     title: '🍱 Lunch Break',
      //     break: true,
      //     time: '12:30 - 01:30 PM',
      //     location: 'Cafeteria',
      //   },
      // ],
      // [
      //   {
      //     title: '⚡️ Lightning Talks',
      //     time: '01:30 - 02:25 PM',
      //     location: 'Marvel Hall',
      //   },
      // ],
      // [
      //   {
      //     title:
      //       'Organized Chaos: Demystifying Memory Management & Garbage Collection in Python',
      //     type: 'Talk',
      //     time: '02:25 - 02:55 PM',
      //     location: 'Marvel Hall',
      //     speakers: [getSpeaker('sejal-gupta'), getSpeaker('sidhant-gupta')],
      //   },
      // ],
      // [
      //   {
      //     title: 'uv - MEGA: Make Environments Great Again',
      //     type: 'Talk',
      //     time: '02:55 - 03:25 PM',
      //     location: 'Marvel Hall',
      //     speakers: [getSpeaker('s-anand')],
      //   },
      // ],
      // [
      //   {
      //     title: 'Understanding API dispatching',
      //     type: 'Talk',
      //     time: '03:25 - 03:55 PM',
      //     location: 'Marvel Hall',
      //     speakers: [getSpeaker('aditi-juneja')],
      //   },
      // ],
      // [
      //   {
      //     title: 'Open Source: One Idea, Many Journeys',
      //     keynote: true,
      //     time: '03:55 - 04:45 PM',
      //     speakers: [getSpeaker('bowrna-prabhakaran')],
      //     location: 'Marvel Hall',
      //   },
      // ],
      // [
      //   {
      //     title: '☕️ Tea/Coffee Break',
      //     break: true,
      //     time: '04:45 - 05:00 PM',
      //     location: 'Marvel Hall',
      //   },
      // ],
      // [
      //   {
      //     title: 'Multimodal Agents RAG Workflow',
      //     type: 'Talk',
      //     time: '05:00 - 05:30 PM',
      //     location: 'Marvel Hall',
      //     speakers: [getSpeaker('tarun-jain')],
      //   },
      // ],
      // [
      //   {
      //     title: 'Turn your old laptop to a home server',
      //     type: 'Talk',
      //     time: '05:30 - 06:00 PM',
      //     location: 'Marvel Hall',
      //     speakers: [getSpeaker('g-r-akhil-teja')],
      //   },
      // ],
      // [
      //   {
      //     title: '🎉 PyConf Hyderabad 5th Edition Celebration',
      //     time: '06:00 - 06:15 PM',
      //     location: 'Marvel Hall',
      //     speakers: [getSpeaker('pyconf-hyderabad-team')],
      //   },
      // ],
      // [
      //   {
      //     title: 'Closing Note',
      //     time: '06:15 - 06:25 PM',
      //     location: 'Marvel Hall',
      //   },
      // ],
    ],
  },
};
