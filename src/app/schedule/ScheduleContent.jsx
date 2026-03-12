'use client';

import { useEffect, useMemo, useState } from 'react';
import { Heading, Span } from '@/components/Typography';
import Icon from '@/components/Icon';
import Image from 'next/image';
import SpeakerInitials from '@/components/SpeakerInitials';
import { SCHEDULE } from '@/schedule';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const extractTrackKey = (location = '') => {
  if (!location) return null;

  const trackMatch = location.match(/track\s*(\d+)/i);
  if (trackMatch) return `track${trackMatch[1]}`;

  return null;
};

const parseTrackParam = (rawTrack) => {
  if (!rawTrack) return null;

  const normalizedTrack = rawTrack.toString().trim().toLowerCase();

  return /^track\d+$/.test(normalizedTrack) ? normalizedTrack : null;
};

const parseDayParam = (rawDay) => {
  if (!rawDay) return null;

  const normalizedDay = rawDay.toString().trim().toLowerCase();

  return Object.prototype.hasOwnProperty.call(SCHEDULE, normalizedDay)
    ? normalizedDay
    : null;
};

const TimeBadge = ({ time, size = 'md' }) => (
  <div
    className={`self-start inline-flex items-center bg-accent-900 dark:bg-accent-500 text-gray-50 dark:text-gray-950 rounded-full ${size === 'sm' ? 'px-2 py-0.5' : 'px-3 py-1.5'}`}
  >
    <Icon
      name="Clock"
      size={size === 'sm' ? 12 : 16}
      className={size === 'sm' ? 'mr-1' : 'mr-2'}
    />
    <Span
      level={6}
      className={`font-medium ${size === 'sm' ? 'text-xs' : 'md:text-md text-xs'}`}
    >
      {time}
    </Span>
  </div>
);

const LocationBadge = ({ location, className = '', href = null }) => {
  const badgeClasses = `inline-flex items-center px-3 py-1.5 bg-accent-900 dark:bg-accent-500 text-gray-50 dark:text-gray-950 shadow-sm rounded-full ${className}`;

  if (href) {
    return (
      <Link href={href} className={`${badgeClasses} underline`}>
        <Span level={6} className="font-medium md:text-md text-xs">
          {location}
        </Span>
      </Link>
    );
  }

  return (
    <div className={badgeClasses}>
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
      <div className="w-12 h-12 md:w-16 md:h-16 shrink-0">
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

const OpenSpaceItem = ({ time, location, locationHref, company, logo }) => (
  <article
    tabIndex="0"
    className="flex flex-col justify-between w-full focus:outline-none focus:ring-2 focus:ring-primary-600 mb-6 shadow-md rounded-sm transition-transform transform hover:scale-[1.02] bg-gray-50 dark:bg-gray-900 border-primary-800 border-l-4"
  >
    <div className="md:px-6 md:pt-6 md:pb-4 p-4 flex flex-col flex-1 justify-center">
      <header className="flex flex-wrap justify-between items-center mb-3 gap-2">
        <TimeBadge time={time} />
        <LocationBadge location={location} href={locationHref} />
      </header>
      <div className="flex flex-row items-center justify-center gap-4 mt-2 md:flex-1">
        {logo && (
          <div className="relative w-16 h-16 shrink-0">
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              className="dark:bg-gray-100 object-contain"
            />
          </div>
        )}
        {company && (
          <Span
            level={2}
            className="text-gray-800 dark:text-gray-200 font-semibold"
          >
            {company}
          </Span>
        )}
      </div>
    </div>
  </article>
);
const LightningTalkItem = ({ time, location, locationHref, title, talks }) => (
  <article
    tabIndex="0"
    className="flex flex-col w-full focus:outline-none focus:ring-2 focus:ring-primary-600 mb-6 shadow-md rounded-sm transition-transform transform hover:scale-[1.02] bg-gray-50 dark:bg-gray-900 border-primary-800 border-l-4"
  >
    <div className="md:px-6 md:pt-6 md:pb-4 p-4">
      <header className="flex flex-wrap justify-between items-center mb-3 gap-2">
        <TimeBadge time={time} />
        <LocationBadge location={location} href={locationHref} />
      </header>
      <Span
        level={2}
        className="text-gray-800 dark:text-gray-200 font-semibold"
      >
        {title}
      </Span>
      {talks && talks.length > 0 && (
        <div className="flex flex-col mt-3 divide-y divide-gray-200 dark:divide-gray-700">
          {talks.map((talk) => (
            <div key={talk.title} className="flex flex-col pt-3 pb-2 gap-2">
              <TimeBadge time={talk.time} size="sm" />
              <Span
                level={4}
                className="text-gray-800 dark:text-gray-200 font-medium"
              >
                {talk.title}
              </Span>
              {talk.speaker &&
                (talk.speaker.activeSpeakerPage ? (
                  <Link
                    href={`/speakers/${talk.speaker.slug}`}
                    className="flex flex-row items-center gap-3"
                    title={`Speaker details of ${talk.speaker.name}`}
                  >
                    <SpeakerCard speaker={talk.speaker} />
                  </Link>
                ) : (
                  <SpeakerCard speaker={talk.speaker} />
                ))}
            </div>
          ))}
        </div>
      )}
    </div>
  </article>
);

const ScheduleItem = ({
  time,
  title,
  discordChannelLink,
  location,
  locationHref,
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
          <LocationBadge location={location} href={locationHref} />
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
                  key={speaker.slug}
                  title={`Hyperlink to Speaker Details of ${speaker.name}`}
                >
                  <SpeakerCard
                    key={`speaker-card-${speaker.slug}`}
                    speaker={speaker}
                  />
                </Link>
              ) : (
                <SpeakerCard
                  key={`speaker-card-${speaker.slug}`}
                  speaker={speaker}
                />
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
  const searchParams = useSearchParams();
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

  const selectedDay = parseDayParam(searchParams.get('day'));
  const currentDay = selectedDay || activeDay;
  const visibleDays = selectedDay ? [selectedDay] : Object.keys(SCHEDULE);

  useEffect(() => {
    if (selectedDay && selectedDay !== activeDay) {
      setActiveDay(selectedDay);
    }
  }, [selectedDay, activeDay]);

  const { sessions } = SCHEDULE[currentDay];
  const selectedTrack = parseTrackParam(searchParams.get('track'));

  const buildTrackHref = (location) => {
    const trackKey = extractTrackKey(location);
    if (!trackKey) return null;

    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.set('day', currentDay);
    nextParams.set('track', trackKey);

    return `/schedule?${nextParams.toString()}`;
  };

  const clearFiltersHref = useMemo(() => {
    const hasFilter = selectedTrack || selectedDay;
    if (!hasFilter) return null;

    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete('day');
    nextParams.delete('track');

    return `/schedule?${nextParams.toString()}`;
  }, [searchParams, selectedDay, selectedTrack]);

  const filteredSessions = useMemo(() => {
    if (!sessions || sessions.length === 0 || !selectedTrack) {
      return sessions;
    }

    return sessions
      .map((sessionGroup) => {
        return sessionGroup.filter((session) => {
          const sessionTrack = extractTrackKey(session.location);
          // For locations like “Cafeteria”, extractTrackKey returns null
          // (it only matches Track <number>), so !sessionTrack is true.
          return sessionTrack === selectedTrack || !sessionTrack;
        });
      })
      .filter((sessionGroup) => sessionGroup.length > 0);
  }, [sessions, selectedTrack]);

  const isScheduleEmpty = !filteredSessions || filteredSessions.length === 0;

  return (
    <div className="my-8 w-full">
      {clearFiltersHref && (
        <div className="flex justify-end mb-4">
          <Link
            href={clearFiltersHref}
            className="text-base md:text-lg underline text-primary-800 dark:text-primary-300 font-semibold"
          >
            Reset Filters
          </Link>
        </div>
      )}
      <div className="flex justify-center gap-4 mb-8">
        {visibleDays.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
              className={`flex flex-col items-center px-6 md:px-12 py-3 border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
                currentDay === day
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
              <Span level={4}>{SCHEDULE[day].venueName}</Span>
            </button>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-4">
        {isScheduleEmpty ? (
          <TbaPanel />
        ) : (
          filteredSessions.map((session, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-4 w-full ${session.length == 1 ? 'md:w-3/4' : ''}`}
            >
              {session.map((parallelSession, subIndex) => {
                if (parallelSession.type === 'Lightning Talk') {
                  return (
                    <LightningTalkItem
                      key={parallelSession.title}
                      time={parallelSession.time}
                      title={parallelSession.title}
                      location={parallelSession.location}
                      locationHref={buildTrackHref(parallelSession.location)}
                      talks={parallelSession.talks}
                    />
                  );
                }
                if (parallelSession.type === 'Open Space') {
                  return (
                    <OpenSpaceItem
                      key={parallelSession.company}
                      time={parallelSession.time}
                      location={parallelSession.location}
                      locationHref={buildTrackHref(parallelSession.location)}
                      company={parallelSession.company}
                      logo={parallelSession.logo}
                    />
                  );
                }

                return (
                  <ScheduleItem
                    key={subIndex}
                    time={parallelSession.time}
                    title={parallelSession.title}
                    discordChannelLink={parallelSession.discordChannelLink}
                    location={parallelSession.location}
                    locationHref={buildTrackHref(parallelSession.location)}
                    speakers={parallelSession.speakers}
                    isKeynote={parallelSession.keynote}
                    isBreak={parallelSession.break}
                  />
                );
              })}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
