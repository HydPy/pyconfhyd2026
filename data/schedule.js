import { SPEAKERS } from '@/speakers';

export const getSpeaker = (slug) => {
  return SPEAKERS.find((speaker) => speaker.slug === slug);
};

export const SCHEDULE = {
  day1: {
    title: 'Conference',
    date: '',
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
    ] 
  },
};