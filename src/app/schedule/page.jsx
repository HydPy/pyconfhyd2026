'use client';
import { useState } from 'react';
import { Heading, Span } from '@/components/Typography';
import Icon from '@/components/Icon';
import Image from 'next/image';

import { SCHEDULE } from '@/schedule';
import Link from 'next/link';
import { CONFERENCE } from '@/conference';
import Script from 'next/script';

const TimeBadge = ({ time }) => (
  <div className="inline-flex items-center px-3 py-1.5 bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-200 rounded-full md:text-md text-xs">
    <Icon name="Clock" size={16} className="mr-2" />
    <Span level={6} className="font-medium md:text-md text-xs">
      {time}
    </Span>
  </div>
);

const LocationBadge = ({ location, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center px-3 py-1.5 bg-primary-700 dark:bg-primary-700 text-gray-50 shadow-sm rounded-full ${className}`}
    >
      {/* <Icon name="LocationDot" className="w-4 h-4 mr-2" /> */}
      <Span level={6} className="font-medium md:text-md text-xs">
        {location}
      </Span>
    </div>
  );
};

const KeynoteBadge = ({ className = '' }) => {
  return (
    <div
      className={`inline-flex justify-center items-center py-2 mb-2 bg-secondary-600 dark:bg-secondary-700 text-gray-50 ${className}`}
    >
      <Span className="font-semibold" level={4}>
        KEYNOTE
      </Span>
    </div>
  );
};

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="flex flex-row items-center my-1">
      <div className="w-12 h-12 md:w-16 md:h-16">
        <div className="relative shadow-md h-full w-full rounded-full overflow-hidden border-1">
          <Image
            className="object-cover rounded-sm"
            src={speaker.imgUrl}
            alt={`Placeholder image of ${speaker.name}`}
            title={`Image of ${speaker.name}`}
            loading="lazy"
            fill
          />
        </div>
      </div>
      <div className="flex flex-col ml-2">
        {speaker.name && (
          <Heading
            className="text-gray-950 dark:text-gray-50"
            level={6}
            tagLevel={4}
          >
            {speaker.name}
          </Heading>
        )}
        {speaker.title && (
          <Span className="text-gray-700 dark:text-gray-200" level={5}>
            {speaker.title}
          </Span>
        )}
      </div>
    </div>
  );
};

const ScheduleItem = ({
  time,
  title,
  location,
  speakers,
  isKeynote,
  isBreak,
}) => {
  const getBGColor = () => {
    if (isKeynote) {
      return 'bg-gray-50 dark:bg-gray-900 border-secondary-600 dark:border-secondary-700 border-l-4 border-r-4';
    }
    if (isBreak) {
      return 'bg-gray-50 dark:bg-gray-900 border-secondary-600 border-l-4';
    }
    return 'bg-gray-50 dark:bg-gray-900 border-primary-600 dark:border-primary-400 border-l-4';
  };
  return (
    <article
      tabIndex="0"
      className={`w-full focus:outline-none focus:ring-2 focus:ring-primary-600 flex flex-col mb-6 shadow-md rounded-sm transition-transform transform hover:scale-[1.02] ${getBGColor()}`}
    >
      {isKeynote && <KeynoteBadge className="" />}
      <div className="md:p-6 p-4">
        <header className="flex flex-wrap justify-between items-center mb-4 gap-2">
          <TimeBadge time={time} />
          <LocationBadge location={location} />
        </header>
        <Heading
          level={4}
          tagLevel={3}
          className="text-gray-800 dark:text-gray-200 mb-3 font-semibold"
        >
          {title}
        </Heading>
        <div className="flex flex-col">
          {speakers &&
            speakers.map((speaker, index) =>
              speaker.activeSpeakerPage ? (
                <Link
                  href={`/speakers/${speaker.slug}`}
                  target="_self"
                  className="flex flex-col space-y-2 my-1"
                  key={index}
                  title={`Hyperlink to Speaker Details of ${speaker.name}`}
                >
                  <SpeakerCard key={index} speaker={speaker} />
                </Link>
              ) : (
                <SpeakerCard key={index} speaker={speaker} />
              )
            )}
        </div>
      </div>
    </article>
  );
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');
  const { sessions } = SCHEDULE[activeDay];

  return (
    <div className="my-8 w-full">
      <div className="flex justify-center gap-4 mb-8">
        {Object.keys(SCHEDULE).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`flex flex-col items-center px-6 md:px-12 py-2 border border-secondary-800 focus:ring-2 shadow-md rounded-xl ${
              activeDay === day
                ? 'bg-secondary-600 dark:bg-secondary-700 text-gray-50 dark:text-gray-50'
                : 'bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-gray-50'
            }`}
          >
            <Heading tagLevel={2} level={5}>
              {SCHEDULE[day].title}
            </Heading>
            <Span level={4}>
              {SCHEDULE[day].date} &#x2022; {SCHEDULE[day].day}
            </Span>
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-4">
        {sessions.map((session, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-4 w-full ${session.length == 1 ? 'md:w-3/4' : ''}`}
          >
            {session.map((parallelSession, subIndex) => (
              <ScheduleItem
                key={subIndex}
                time={parallelSession.time}
                title={parallelSession.title}
                location={parallelSession.location}
                speakers={parallelSession.speakers}
                isKeynote={parallelSession.keynote}
                isBreak={parallelSession.break}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <>
      <Script
        id="event-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
        <Heading
          tagLevel={1}
          level={1}
          className="text-center md:my-6 my-0 text-secondary-600 dark:text-secondary-400"
        >
          Schedule
        </Heading>
        <Schedule />
      </section>
    </>
  );
}

// structuredData
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: CONFERENCE.title,
  eventStatus: 'https://schema.org/EventScheduled',
  image: ['https://pyconf.hydpy.org/images/logo.svg'],
  description: CONFERENCE.description,
  organizer: {
    '@type': 'Organization',
    name: CONFERENCE.creator,
    url: 'https://hydpy.org',
  },
  subEvent: [
    {
      '@type': 'Event',
      name: 'PyConf Hyderabad 2025 Conference',
      startDate: '2025-02-22',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: CONFERENCE.conferenceVenue,
        address: {
          '@type': 'PostalAddress',
          postalCode: '500032',
          addressLocality: 'Hyderabad',
          addressCountry: 'IN',
        },
      },
    },
    {
      '@type': 'Event',
      name: 'PyConf Hyderabad 2025 Workshop',
      startDate: '2025-02-23',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: CONFERENCE.workshopVenue,
        address: {
          '@type': 'PostalAddress',
          postalCode: '500032',
          addressLocality: 'Hyderabad',
          addressCountry: 'IN',
        },
      },
    },
  ],
};
