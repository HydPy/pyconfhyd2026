'use client';

import { useEffect, useState } from 'react';
import { Heading, Span } from '@/components/Typography';
import Icon from '@/components/Icon';
import Image from 'next/image';
import SpeakerInitials from '@/components/SpeakerInitials';
import { SCHEDULE } from '@/schedule';
import Link from 'next/link';

const TimeBadge = ({ time }) => (
  <div className="inline-flex items-center px-3 py-1.5 bg-accent-900 dark:bg-accent-500 text-gray-50 dark:text-gray-950 rounded-full md:text-md text-xs">
    <Icon name="Clock" size={16} className="mr-2" />
    <Span level={6} className="font-medium md:text-md text-xs">
      {time}
    </Span>
  </div>
);

const LocationBadge = ({ location, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center px-3 py-1.5 bg-accent-900 dark:bg-accent-500 text-gray-50 dark:text-gray-950 shadow-sm rounded-full ${className}`}
    >
      <Span level={6} className="font-medium md:text-md text-xs">
        {location}
      </Span>
    </div>
  );
};

const DiscordBadge = ({ channelLink, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center px-3 py-1.5 bg-accent-900 dark:bg-accent-500 text-gray-50 dark:text-gray-950 shadow-sm rounded-full ${className}`}
    >
      <Span level={6} className="font-medium md:text-md text-xs">
        <Link
          href={channelLink}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord Channel
        </Link>
      </Span>
    </div>
  );
};

const KeynoteBadge = ({ className = '' }) => {
  return (
    <div
      className={`inline-flex justify-center items-center py-2 bg-primary-800 dark:bg-primary-800 text-gray-50 ${className}`}
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
          {speaker.imgUrl ? (
            <Image
              className="object-cover rounded-sm"
              src={speaker.imgUrl}
              alt={`Image of ${speaker.name}`}
              title={`Image of ${speaker.name}`}
              loading="lazy"
              fill
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-primary-600 dark:bg-primary-700 text-white font-semibold text-2xl">
              <SpeakerInitials speaker={speaker} />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col ml-2">
        {speaker.name && (
          <Span className="text-gray-950 dark:text-gray-50" level={4}>
            {speaker.name}
          </Span>
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

const TbaPanel = () => (
  <div className="w-full md:w-3/4 bg-gray-50 dark:bg-gray-900 border rounded-md p-6 text-center shadow-sm">
    <Heading
      tagLevel={3}
      level={4}
      className="text-primary-700 dark:text-primary-300"
    >
      To Be Announced
    </Heading>
    <Span level={4} className="text-gray-700 dark:text-gray-300">
      Sessions for this day will be published soon.
    </Span>
  </div>
);

const ScheduleItem = ({
  time,
  title,
  discordChannelLink,
  location,
  speakers,
  isKeynote,
  isBreak,
}) => {
  const getBGColor = () => {
    if (isKeynote) {
      return 'bg-gray-50 dark:bg-gray-900 border-primary-800 border-x-4 border-b-4';
    }
    if (isBreak) {
      return 'bg-gray-50 dark:bg-gray-900 border-primary-800 border-l-4';
    }
    return 'bg-gray-50 dark:bg-gray-900 border-primary-800 border-l-4';
  };
  return (
    <article
      tabIndex="0"
      className={`flex flex-col justify-between w-full focus:outline-none focus:ring-2 focus:ring-primary-600 mb-6 shadow-md rounded-sm transition-transform transform hover:scale-[1.02] ${getBGColor()}`}
    >
      {isKeynote && <KeynoteBadge className="" />}
      <div className="md:px-6 md:pt-6 md:pb-4 p-4">
        <header className="flex flex-wrap justify-between items-center mb-3 gap-2">
          <TimeBadge time={time} />
          <LocationBadge location={location} />
        </header>
        <Span
          level={2}
          className="text-gray-800 dark:text-gray-200 font-semibold"
        >
          {title}
        </Span>
        <div className="flex flex-col my-1">
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
      <div className="flex justify-end mb-4 pr-4">
        {discordChannelLink && (
          <DiscordBadge channelLink={discordChannelLink} />
        )}
      </div>
    </article>
  );
};

export default function ScheduleContent() {
  const [activeDay, setActiveDay] = useState(() => {
    if (typeof window === 'undefined') return 'day1';

    try {
      const savedDay = window.localStorage.getItem('schedule-active-day');
      return savedDay && SCHEDULE[savedDay] ? savedDay : 'day1';
    } catch {
      return 'day1';
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('schedule-active-day', activeDay);
    } catch {
      // Ignore storage errors in restricted environments.
    }
  }, [activeDay]);

  const { sessions } = SCHEDULE[activeDay];
  const isScheduleEmpty = !sessions || sessions.length === 0;

  return (
    <div className="my-8 w-full">
      <div className="flex justify-center gap-4 mb-8">
        {Object.keys(SCHEDULE).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`flex flex-col items-center px-6 md:px-12 py-3 border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
              activeDay === day
                ? 'bg-primary-800 dark:bg-primary-800 text-white dark:text-gray-50 border-4 -translate-y-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
                : 'bg-background-light dark:bg-gray-900 text-gray-950 dark:text-gray-50 opacity-85 hover:opacity-100 hover:bg-accent-50 dark:hover:bg-gray-700'
            }`}
          >
            <Heading tagLevel={2} level={5}>
              {SCHEDULE[day].title}
            </Heading>
            <Span level={3}>
              {SCHEDULE[day].date} &#x2022; {SCHEDULE[day].day}
            </Span>
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-4">
        {isScheduleEmpty ? (
          <TbaPanel />
        ) : (
          sessions.map((session, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-4 w-full ${session.length == 1 ? 'md:w-3/4' : ''}`}
            >
              {session.map((parallelSession, subIndex) => (
                <ScheduleItem
                  key={subIndex}
                  time={parallelSession.time}
                  title={parallelSession.title}
                  discordChannelLink={parallelSession.discordChannelLink}
                  location={parallelSession.location}
                  speakers={parallelSession.speakers}
                  isKeynote={parallelSession.keynote}
                  isBreak={parallelSession.break}
                />
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
