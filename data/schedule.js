import { SPEAKERS } from '@/speakers';

export const getSpeaker = (slug) => {
  return SPEAKERS.find((speaker) => speaker.slug === slug);
};

export const SCHEDULE = {
  day1: {
    title: 'Conference',
    date: '22 Feb',
    day: 'Saturday',
    sessions: [
      [
        {
          title: 'Registrations',
          time: '08:00 - 09:00 AM',
          location: 'Registration Desk - 5th Floor, Cafeteria Area',
        },
      ],
      [
        {
          title: 'Opening Note',
          time: '09:00 - 09:10 AM',
          location: 'Marvel Hall',
          speakers: [getSpeaker('pyconf-hyderabad-team')],
        },
      ],
      [
        {
          title:
            'Think, Code, Innovate: Srivardhan’s Logical Leap from Beginner to Advanced Python',
          type: 'Talk',
          time: '09:10 - 09:25 AM',
          location: 'Marvel Hall',
          speakers: [getSpeaker('srivardhan-sainath-talatm')],
        },
      ],
      [
        {
          title: 'When will AI take my job and what can I do about it',
          type: 'Talk',
          keynote: true,
          time: '09:25 - 10:15 AM',
          location: 'Marvel Hall',
          speakers: [getSpeaker('anthony-shaw')],
        },
      ],
      [
        {
          title:
            'Python in IoT and Robotics: Backend Solutions for Connected Systems',
          type: 'Talk',
          time: '10:15 - 10:45 AM',
          location: 'Marvel Hall',
          speakers: [getSpeaker('harsh-mittal')],
        },
      ],
      [
        {
          title: 'Break',
          break: true,
          time: '10:45 - 11:00 AM',
          location: 'Marvel Hall',
        },
      ],
      [
        {
          title:
            'From Raw to Reliable: Automated Data Validation with Great Expectations',
          type: 'Talk',
          time: '11:00 - 11:30 AM',
          location: 'Marvel Hall',
          speakers: [getSpeaker('vivek-keshore')],
        },
      ],

      [
        {
          title: 'Spicing Up Automation: A Taste of Python and SaltStack',
          type: 'Talk',
          time: '11:30 - 12:00 PM',
          location: 'Marvel Hall',
          speakers: [getSpeaker('ria-bhatia')],
        },
      ],
      [
        {
          title: "Let's enhance our technical writing by reading PEPs",
          type: 'Talk',
          time: '12:00 - 12:30 PM',
          location: 'Marvel Hall',
          speakers: [getSpeaker('sai-rahul-poruri')],
        },
      ],
      [
        {
          title: '🍱 Lunch Break',
          break: true,
          time: '12:30 - 01:30 PM',
          location: 'Cafeteria',
        },
      ],
      [
        {
          title: '⚡️ Lightning Talks',
          time: '01:30 - 02:25 PM',
          location: 'Marvel Hall',
        },
      ],
      [
        {
          title:
            'Organized Chaos: Demystifying Memory Management & Garbage Collection in Python',
          type: 'Talk',
          time: '02:25 - 02:55 PM',
          location: 'Marvel Hall',
          speakers: [getSpeaker('sejal-gupta'), getSpeaker('sidhant-gupta')],
        },
      ],
      [
        {
          title: 'uv - MEGA: Make Environments Great Again',
          type: 'Talk',
          time: '02:55 - 03:25 PM',
          location: 'Marvel Hall',
          speakers: [getSpeaker('s-anand')],
        },
      ],
      [
        {
          title: 'Understanding API dispatching',
          type: 'Talk',
          time: '03:25 - 03:55 PM',
          location: 'Marvel Hall',
          speakers: [getSpeaker('aditi-juneja')],
        },
      ],
      [
        {
          title: 'Open Source: One Idea, Many Journeys',
          keynote: true,
          time: '03:55 - 04:45 PM',
          speakers: [getSpeaker('bowrna-prabhakaran')],
          location: 'Marvel Hall',
        },
      ],
      [
        {
          title: '☕️ Tea/Coffee Break',
          break: true,
          time: '04:45 - 05:00 PM',
          location: 'Marvel Hall',
        },
      ],
      [
        {
          title: 'Multimodal Agents RAG Workflow',
          type: 'Talk',
          time: '05:00 - 05:30 PM',
          location: 'Marvel Hall',
          speakers: [getSpeaker('tarun-jain')],
        },
      ],
      [
        {
          title: 'Turn your old laptop to a home server',
          type: 'Talk',
          time: '05:30 - 06:00 PM',
          location: 'Marvel Hall',
          speakers: [getSpeaker('g-r-akhil-teja')],
        },
      ],
      [
        {
          title: '🎉 PyConf Hyderabad 5th Edition Celebration',
          time: '06:00 - 06:15 PM',
          location: 'Marvel Hall',
          speakers: [getSpeaker('pyconf-hyderabad-team')],
        },
      ],
      [
        {
          title: 'Closing Note',
          time: '06:15 - 06:25 PM',
          location: 'Marvel Hall',
        },
      ],
    ],
  },
  day2: {
    title: 'Workshop',
    date: '23 Feb',
    day: 'Sunday',
    sessions: [
      [
        {
          title: 'Registrations',
          time: '09:00 - 10:00 AM',
          location: 'Registration Desk - 11th Floor, Orwell 3',
        },
      ],
      [
        {
          time: '10:00 - 11:30 AM',
          type: 'Workshop',
          discordChannelLink: 'https://discord.com/channels/1301212203336073226/1342141517514539089',
          title:
            'Mastering Test Driven Development in Django: A Comprehensive Guide with factory_boy and faker',
          location: 'Track 1 | 10th Floor',
          speakers: [getSpeaker('kuldeep-pisda')],
        },
        {
          time: '10:00 - 11:30 AM',
          type: 'Workshop',
          discordChannelLink: 'https://discord.com/channels/1301212203336073226/1342143026528649309',
          title:
            'Causal Inference & Uplift Modeling in Python: Beyond Correlation',
          speakers: [getSpeaker('sonu-kumar')],
          location: 'Track 2 | 11th Floor',
        },
        {
          time: '10:00 - 11:30 AM',
          type: 'Workshop',
          discordChannelLink: 'https://discord.com/channels/1301212203336073226/1342142649888542815',
          title: 'Writing bug free python code with functional programming',
          speakers: [getSpeaker('siddharta-govindaraj')],
          location: 'Track 3 | 12th Floor',
        },
      ],
      [
        {
          time: '11:30 - 1:00 PM',
          type: 'Workshop',
          discordChannelLink: 'https://discord.com/channels/1301212203336073226/1342141020963606580',
          title:
            'Duckdb: In-Process Analytics Database that saves you millions and makes you look smart',
          speakers: [getSpeaker('ankur-gupta')],
          location: 'Track 1 | 10th Floor',
        },
        {
          time: '11:30 - 01:00 PM',
          type: 'Workshop',
          discordChannelLink: 'https://discord.com/channels/1301212203336073226/1342143270284820521',
          title: 'Building AI Agents',
          location: 'Track 2 | 11th Floor',
          speakers: [getSpeaker('anthony-shaw')],
        },
        {
          time: '11:30 - 1:00 PM',
          type: 'Workshop',
          discordChannelLink: 'https://discord.com/channels/1301212203336073226/1342141907618500730',
          title:
            'Unveiling the lazy execution benefit of FireDucks - A Multithreaded DataFrame Library with JIT compiler',
          location: 'Track 3 | 12th Floor',
          speakers: [getSpeaker('sourav-saha')],
        },
      ],
      [
        {
          time: '2:00 - 3:30 PM',
          type: 'Workshop',
          discordChannelLink: 'https://discord.com/channels/1301212203336073226/1342142824757330000',
          title: 'Debugging Python applications like a Pro',
          location: 'Track 1 | 10th Floor',
          speakers: [getSpeaker('satyam-soni')],
        },
        {
          time: '2:00 - 3:30 PM',
          type: 'Workshop',
          discordChannelLink: 'https://discord.com/channels/1301212203336073226/1342143456226578454',
          title: ' Building with Snowflake Cortex AI: A Hands-On Workshop',
          location: 'Track 2 | 11th Floor',
          speakers: [getSpeaker('kamesh-sampath')],
        },
        {
          time: '2:00 - 3:30 PM',
          type: 'Workshop',
          discordChannelLink: 'https://discord.com/channels/1301212203336073226/1342143135483957259',
          title:
            'Distributed Computing with Ray: Transforming Local Python Applications into Scalable Systems',
          location: 'Track 3 | 12th Floor',
          speakers: [
            getSpeaker('bhagirathi-hegde'),
            getSpeaker('sarath-srinivas'),
          ],
        },
      ],
      [
        {
          time: '3:30 - 5:00 PM',
          title: 'Networking',
          location: 'Workshop Venue',
        },
      ],
    ],
  },
};
