'use client';
import { useEffect } from 'react';

import Hero from '@/components/Hero';
import KeynoteSpeakers from '@/components/KeynoteSpeakers';
import MeetOrganizers from '@/components/MeetOrganizers';
import SponsorsSection from '@/components/Sponsors';
import CommunityPartners from '@/components/CommunityPartners';
import { useFeatureFlag } from '@/hooks/useFeatureFlag';

import { SPEAKERS } from '@/speakers';

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
  const isKeynoteSpeakersEnabled = useFeatureFlag('KEYNOTE_SPEAKERS');
  const isSponsorsEnabled = useFeatureFlag('SPONSORS');
  const isCommunityPartnersEnabled = useFeatureFlag('COMMUNITY_PARTNERS');
  const isMeetOrganizersEnabled = useFeatureFlag('MEET_ORGANIZERS');

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
      <Hero />
      {isKeynoteSpeakersEnabled && (
        <KeynoteSpeakers speakers={getKeynoteSpeakers(SPEAKERS)} />
      )}
      {isSponsorsEnabled && <SponsorsSection />}
      {isCommunityPartnersEnabled && <CommunityPartners />}
      {isMeetOrganizersEnabled && <MeetOrganizers />}
    </>
  );
}
