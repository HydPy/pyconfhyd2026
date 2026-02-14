import { SPEAKERS } from '@/speakers';

export const getSpeaker = (slug) => {
  return SPEAKERS.find((speaker) => speaker.slug === slug);
};

export const SCHEDULE = {
  // day1: {
  //   title: 'Workshop',
  //   date: '14 Mar',
  //   day: 'Saturday',
  //   sessions: [
  //     [
  //       {
  //         title: 'Registrations',
  //         time: '09:00 - 10:00 AM',
  //         location: 'TBA',
  //       },
  //     ],
  //     [
  //       {
  //         time: '10:00 - 12:50 PM',
  //         type: 'Workshop',
  //         discordChannelLink: 'https://discord.com/invite/C3pnRHMyWJ',
  //         title: 'Workshop 1',
  //         location: 'Track 1',
  //         speakers: [getSpeaker('manivannan-elangovan')],
  //       },
  //       {
  //         time: '10:20 - 12:50 PM',
  //         type: 'Workshop',
  //         discordChannelLink: 'https://discord.com/invite/C3pnRHMyWJ',
  //         title: 'Workshop 2',
  //         speakers: [getSpeaker('manivannan-elangovan')],
  //         location: 'Track 2',
  //       },
  //       {
  //         time: '10:20 - 12:50 PM',
  //         type: 'Workshop',
  //         discordChannelLink: 'https://discord.com/invite/C3pnRHMyWJ',
  //         title: 'Workshop 3',
  //         speakers: [getSpeaker('manivannan-elangovan')],
  //         location: 'Track 3',
  //       },
  //     ],
  //     [
  //       {
  //         title: 'Lunch Break',
  //         time: '12:50 - 02:00 PM',
  //         location: 'TBA',
  //       },
  //     ],
  //     [
  //       {
  //         time: '02:00 - 04:50 PM',
  //         type: 'Workshop',
  //         discordChannelLink: 'https://discord.com/invite/C3pnRHMyWJ',
  //         title: 'Workshop 4',
  //         location: 'Track 1',
  //         speakers: [getSpeaker('manivannan-elangovan')],
  //       },
  //       {
  //         time: '02:00 - 04:50 PM',
  //         type: 'Workshop',
  //         discordChannelLink: 'https://discord.com/invite/C3pnRHMyWJ',
  //         title: 'Workshop 5',
  //         speakers: [getSpeaker('manivannan-elangovan')],
  //         location: 'Track 2',
  //       },
  //       {
  //         time: '02:00 - 04:50 PM',
  //         type: 'Workshop',
  //         discordChannelLink: 'https://discord.com/invite/C3pnRHMyWJ',
  //         title: 'Workshop 6',
  //         speakers: [getSpeaker('manivannan-elangovan')],
  //         location: 'Track 3',
  //       },
  //     ],
  //   ],
  // },
  // day2: {
  //   title: 'Conference',
  //   date: '15 Mar',
  //   day: 'Sunday',
  //   sessions: [],
  // },
};
