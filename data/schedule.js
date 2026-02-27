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
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1475140722394136768',
          title: 'Optimizing Pytorch Models',
          location: 'Track 1',
          speakers: [getSpeaker('jaidev-deshpande')],
        },
        {
          time: '10:00 - 12:50 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1475140876203331645',
          title: 'PEP 684 + 554 + 669 True Parallelism in Python',
          speakers: [getSpeaker('ramachandra-vikas-chamarthi')],
          location: 'Track 2',
        },
        {
          time: '10:00 - 12:50 PM',
          type: 'Workshop',
          discordChannelLink: '',
          title: 'TBA',
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
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1475141021699539205',
          title: 'Designing Reliable Agentic AI for Real-World Systems',
          location: 'Track 1',
          speakers: [getSpeaker('sonu-kumar')],
        },
        {
          time: '02:00 - 04:50 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1475141172174262416',
          title:
            'Mastering the Multi-Stack: Orchestrated Debugging with Python and Beyond',
          speakers: [getSpeaker('satyam-soni')],
          location: 'Track 2',
        },
        {
          time: '02:00 - 04:50 PM',
          type: 'Workshop',
          discordChannelLink:
            'https://discord.com/channels/1301212203336073226/1475141262482083964',
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
          location: 'Registration Desk',
        },
      ],
      [
        {
          title: 'Opening Note',
          time: '09:00 - 09:15 AM',
          location: 'Auditorium | Main Stage',
          speakers: [getSpeaker('pyconf-hyderabad-team')],
        },
      ],
      [
        {
          title: '',
          type: 'Talk',
          keynote: true,
          time: '09:15 - 10:15 AM',
          location: 'Auditorium | Main Stage',
          speakers: [getSpeaker('parul-pandey')],
        },
      ],
      [
        {
          title: 'Making Agents Behave: Building Deterministic LLM Workflows',
          type: 'Talk',
          time: '10:20 - 10:50 AM',
          location: 'Auditorium | Main Stage',
          speakers: [getSpeaker('asha-holla')],
        },
        {
          title: "Developing a Python SDK for AI Agent's Observability",
          type: 'Talk',
          time: '10:20 - 10:50 AM',
          location: 'Hall 2',
          speakers: [getSpeaker('soumendra-kumar-sahoo')],
        },
        {
          title:
            'Debugging in Production: What Unit Tests Did Not Save You From',
          type: 'Talk',
          time: '10:20 - 10:50 AM',
          location: 'Hall 3',
          speakers: [getSpeaker('syed-fahad')],
        },
      ],
      [
        {
          title: 'TBA',
          type: 'Talk',
          time: '10:55 - 11:25 AM',
          location: 'Auditorium | Main Stage',
        },
        {
          title:
            'Good Systems, Good Sleep: Teaching Your Systems to Fix Themselves (Using Python, Not Magic)',
          type: 'Talk',
          time: '10:55 - 11:25 AM',
          location: 'Hall 2',
          speakers: [getSpeaker('ria-bhatia')],
        },
        {
          title: 'TBA',
          type: 'Talk',
          time: '10:55 - 11:25 AM',
          location: 'Hall 3',
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
          title: 'How AI Agents Go Rogue: A Security First Python Walkthrough',
          type: 'Talk',
          time: '11:45 - 12:15 PM',
          location: 'Auditorium | Main Stage',
          speakers: [getSpeaker('nitin-sharma')],
        },
        {
          title: 'Asyncio Upgrade Playbook: 3.10–3.14 Changes You Can’t Ignore',
          type: 'Talk',
          time: '11:45 - 12:15 PM',
          location: 'Hall 2',
          speakers: [getSpeaker('atul-bhosale')],
        },
        {
          title: 'Beyond Texts: Pouring Life into Multilingual Chatbots',
          type: 'Talk',
          time: '11:45 - 12:15 PM',
          location: 'Hall 3',
          speakers: [
            getSpeaker('ritesh-chintakindi'),
            getSpeaker('benjamin-alladi'),
          ],
        },
      ],
      [
        {
          title: 'TBA',
          type: 'Talk',
          time: '12:20 - 12:50 PM',
          location: 'Auditorium | Main Stage',
        },
        {
          title: 'Apache Ray: Scaling and Distributing ML Applications',
          type: 'Talk',
          time: '12:20 - 12:50 PM',
          location: 'Hall 2',
          speakers: [getSpeaker('karthikeyan-vk')],
        },
        {
          title:
            'From Python to Pocket: Fine-Tuning Gemma with LoRA for On-Device AI',
          type: 'Talk',
          time: '12:20 - 12:50 PM',
          location: 'Hall 3',
          speakers: [getSpeaker('dinoy-raj-k')],
        },
      ],
      [
        {
          title: 'Lunch Break',
          break: true,
          time: '12:50 - 02:10 PM',
          location: 'Cafeteria',
        },
      ],
      [
        {
          title: 'Panel Discussion - TBA',
          type: 'Panel',
          time: '02:10 - 02:40 PM',
          location: 'Auditorium | Main Stage',
        },
        {
          title: 'TBA',
          type: 'Talk',
          time: '02:10 - 02:40 PM',
          location: 'Hall 2',
          // speakers: [getSpeaker('kuldeep-pal')],
        },
        {
          title: 'Streaming Protocols for Conversational AI',
          type: 'Talk',
          time: '02:10 - 02:40 PM',
          location: 'Hall 3',
          speakers: [getSpeaker('muhammed-mizaj')],
        },
      ],
      [
        {
          title: 'Lightning Talks - TBA',
          type: 'Talk',
          time: '02:45 - 03:15 PM',
          location: 'Auditorium | Main Stage',
        },
        {
          title: 'Python + Rust for High-Performance Systems',
          type: 'Talk',
          time: '02:45 - 03:15 PM',
          location: 'Hall 2',
          speakers: [getSpeaker('ponnam-karthik')],
        },
        {
          title: 'Learn Async programming by playing Soccer',
          type: 'Talk',
          time: '02:45 - 03:15 PM',
          location: 'Hall 3',
          speakers: [getSpeaker('akhil-teja')],
        },
      ],
      [
        {
          title: 'Tea Break',
          break: true,
          time: '03:20 - 03:40 PM',
          location: 'Cafeteria',
        },
      ],
      [
        {
          title: 'How students learn Python',
          type: 'Talk',
          time: '03:40 - 04:10 PM',
          location: 'Auditorium | Main Stage',
          speakers: [getSpeaker('anand-s')],
        },
        {
          title:
            'Context Engineering: The Make-or-Break Skill for Production AI',
          type: 'Talk',
          time: '03:40 - 04:10 PM',
          location: 'Hall 2',
          speakers: [getSpeaker('tezan-sahu')],
        },
        {
          title:
            'DeepSwingr - A Differentiable Framework for Cricket Ball Swing Optimization',
          type: 'Talk',
          time: '03:40 - 04:10 PM',
          location: 'Hall 3',
          speakers: [getSpeaker('pavan-b-govindaraju')],
        },
      ],
      [
        {
          title: 'Lightning Talks - TBA',
          type: 'Talk',
          time: '04:15 - 04:45 PM',
          location: 'Auditorium | Main Stage',
        },
      ],
      [
        {
          title: '',
          type: 'Talk',
          keynote: true,
          time: '04:45 - 05:45 PM',
          location: 'Auditorium | Main Stage',
          speakers: [getSpeaker('manivannan-elangovan')],
        },
      ],
      [
        {
          title: 'Closing Note + HydPy 10 years Celebrations',
          time: '05:45 - 06:00 PM',
          location: 'Auditorium | Main Stage',
          speakers: [getSpeaker('pyconf-hyderabad-team')],
        },
      ],
    ],
  },
};
