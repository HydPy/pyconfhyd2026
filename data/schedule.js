import { SPEAKERS } from '@/speakers';

export const getSpeaker = (slug) => {
  return SPEAKERS.find((speaker) => speaker.slug === slug);
};

export const SCHEDULE = {
  day1: {
    title: 'Conference',
    date: '15 Mar',
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
    ],
  },
  day2: {
    title: 'Workshop',
    date: '14 Mar',
    day: 'Saturday',
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
          time: '10:20 - 11:50 AM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1342141517514539089',
          title:
            'Mastering Test Driven Development in Django: A Comprehensive Guide with factory_boy and faker',
          location: 'Track 1 | 10th Floor',
          speakers: [getSpeaker('kuldeep-pisda')],
        },
        {
          time: '10:20 - 11:50 AM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1342143026528649309',
          title:
            'Causal Inference & Uplift Modeling in Python: Beyond Correlation',
          speakers: [getSpeaker('sonu-kumar')],
          location: 'Track 2 | 11th Floor',
        },
        {
          time: '10:20 - 11:50 AM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1342142649888542815',
          title: 'Writing bug free python code with functional programming',
          speakers: [getSpeaker('siddharta-govindaraj')],
          location: 'Track 3 | 12th Floor',
        },
      ],
      [
        {
          title: 'Quick Break',
          time: '11:50 - 12:00 PM',
          location: 'Cafeteria',
        },
      ],
      [
        {
          time: '12:00 - 01:30 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1342141020963606580',
          title:
            'Duckdb: In-Process Analytics Database that saves you millions and makes you look smart',
          speakers: [getSpeaker('ankur-gupta')],
          location: 'Track 1 | 10th Floor',
        },
        {
          time: '12:00 - 01:30 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1342143270284820521',
          title: 'Building AI Agents',
          location: 'Track 2 | 11th Floor',
          speakers: [getSpeaker('anthony-shaw')],
        },
        {
          time: '12:00 - 01:30 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1342141907618500730',
          title:
            'Unveiling the lazy execution benefit of FireDucks - A Multithreaded DataFrame Library with JIT compiler',
          location: 'Track 3 | 12th Floor',
          speakers: [getSpeaker('sourav-saha')],
        },
      ],
      [
        {
          title: 'Lunch',
          time: '1:30 - 2:30 PM',
          location: 'Cafeteria - 11th Floor, Orwell 3',
        },
      ],
      [
        {
          time: '2:30 - 4:00 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1342142824757330000',
          title: 'Debugging Python applications like a Pro',
          location: 'Track 1 | 10th Floor',
          speakers: [getSpeaker('satyam-soni')],
        },
        {
          time: '2:30 - 4:00 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1342143456226578454',
          title: ' Building with Snowflake Cortex AI: A Hands-On Workshop',
          location: 'Track 2 | 11th Floor',
          speakers: [getSpeaker('kamesh-sampath')],
        },
        {
          time: '2:30 - 4:00 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1342143135483957259',
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
          time: '4:00 - 5:00 PM',
          title: 'Networking',
          location: 'Workshop Venue',
        },
      ],
    ],
  },
};
