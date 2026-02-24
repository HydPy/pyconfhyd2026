'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Heading, Paragraph } from '@/components/Typography';
import CTAButton from '@/components/CTAButton';
import { CONFERENCE } from '@/conference';

const venues = {
  workshop: {
    key: 'workshop',
    title: 'Workshop Venue',
    date: CONFERENCE.workshopDate,
    venue: CONFERENCE.workshopVenue,
    address: CONFERENCE.workshopVenueAddress,
    mapsLink: CONFERENCE.workshopMapsLink,
    imageLink: CONFERENCE.workshopImageLink,
    imageAlt: 'Workshop venue image',
  },
  conference: {
    key: 'conference',
    title: 'Conference Venue',
    date: CONFERENCE.conferenceDate,
    venue: CONFERENCE.conferenceVenue,
    address: CONFERENCE.conferenceVenueAddress,
    mapsLink: CONFERENCE.conferenceMapsLink,
    imageLink: CONFERENCE.conferenceImageLink,
    imageAlt: 'Conference venue image',
  },
};

const VenueTabCard = ({ venueData, isActive, onSelect }) => {
  const activeStateClass =
    'bg-primary-800 dark:bg-primary-800 text-white dark:text-gray-50 border-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] -translate-y-1';
  const inactiveStateClass =
    'opacity-85 hover:opacity-100 hover:bg-accent-50 dark:hover:bg-gray-700';

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`w-full text-left border-2 border-gray-900 px-6 py-8 h-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${isActive ? activeStateClass : inactiveStateClass}`}
    >
      <Heading tagLevel={2} level={3} className="text-center sm:text-left">
        {venueData.title}
      </Heading>
      <Paragraph level={2} className="mt-2 text-center sm:text-left">
        {venueData.date}
      </Paragraph>
      <Paragraph
        level={2}
        className="mt-2 font-semibold text-center sm:text-left"
      >
        {venueData.venue}
      </Paragraph>
    </button>
  );
};

const VenueDetailCard = ({ venueData }) => {
  return (
    <div className="w-full border-2 border-gray-900 p-6 lg:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <Heading
            tagLevel={3}
            level={3}
            className="text-gray-900 dark:text-gray-50"
          >
            {venueData.venue}
          </Heading>
          <Paragraph
            level={2}
            className="mt-3 text-gray-700 dark:text-gray-200"
          >
            {venueData.address}
          </Paragraph>
          <CTAButton
            href={venueData.mapsLink}
            label="View on Google Maps"
            icon="ArrowCircleRight"
            iconSize={20}
            variant="accent"
            className="mt-6"
            containerClassName="flex justify-start"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-0 translate-x-3 -translate-y-3 border-2 border-gray-900 bg-primary-800 dark:bg-primary-800" />
          <div className="relative border-2 border-gray-900 bg-gray-100 dark:bg-gray-700 h-72 lg:h-[28rem]">
            <Image
              src={venueData.imageLink}
              alt={venueData.imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function VenueContent() {
  const [selectedVenueKey, setSelectedVenueKey] = useState('workshop');

  return (
    <>
      <div
        className="w-10/12 md:w-8/12 grid md:grid-cols-2 gap-6 mt-2"
        role="tablist"
        aria-label="Venue selection"
      >
        <VenueTabCard
          venueData={venues.workshop}
          isActive={selectedVenueKey === 'workshop'}
          onSelect={() => setSelectedVenueKey('workshop')}
        />
        <VenueTabCard
          venueData={venues.conference}
          isActive={selectedVenueKey === 'conference'}
          onSelect={() => setSelectedVenueKey('conference')}
        />
      </div>

      <div className="w-full mt-8">
        <VenueDetailCard venueData={venues[selectedVenueKey]} />
      </div>
    </>
  );
}
