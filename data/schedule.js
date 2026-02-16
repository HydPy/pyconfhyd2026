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
            'Context Engineering in Python: Building Production-Grade Agentic AI System',
          location: 'Track 1',
          speakers: [getSpeaker('sonu-kumar')],
        },
        {
          time: '02:00 - 04:50 PM',
          type: 'Workshop',
          // TODO: Update the Discord channel link
          discordChannelLink: '',
          title: 'Build Your First Key-Value Database in Python',
          speakers: [getSpeaker('pradhvan-bisht')],
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
    sessions: [],
  },
};
