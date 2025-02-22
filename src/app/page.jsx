'use client';
import { useEffect } from 'react';

import Hero from '@/components/Hero';
import InfoAlert from '@/components/InfoAlert';
import KeynoteSpeakers from '@/components/KeynoteSpeakers';
import MeetOrganizers from '@/components/MeetOrganizers';
import SponsorsSection from '@/components/Sponsors';
import CommunityPartners from '@/components/CommunityPartners';

import { SPEAKERS } from '@/speakers';
import { CONFERENCE } from '@/conference';

const getKeynoteSpeakers = (SPEAKERS) => {
  const speakers = new Map();
  Object.values(SPEAKERS).forEach((speaker) => {
    const { name, type, activeSpeakerPage } = speaker;
    if (
      !speakers.has(name) &&
      type == 'Keynote' &&
      activeSpeakerPage === true
    ) {
      speakers.set(name, speaker);
    }
  });
  return Array.from(speakers.values());
};

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>
      <InfoAlert />
      <Hero />
      <KeynoteSpeakers speakers={getKeynoteSpeakers(SPEAKERS)} />
      <SponsorsSection />
      <CommunityPartners />
      <MeetOrganizers />
    </>
  );
}
