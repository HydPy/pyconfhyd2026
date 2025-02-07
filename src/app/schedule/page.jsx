'use client';
import { useState } from 'react';
import { Heading, Span } from '@/components/Typography';
import Icon from '@/components/Icon';
import Image from 'next/image';

import { SCHEDULE } from '@/schedule';
import Link from 'next/link';

const TimeBadge = ({ time, className = '' }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center px-2 py-1 rounded-md bg-secondary-600 dark:bg-secondary-700 text-gray-50 ${className}`}
    >
      <Icon name="Clock" size={16} />
      <Span className="ml-2" level={5}>
        {time}
      </Span>
    </div>
  );
};

const LocationBadge = ({ location, className = '' }) => {
  return (
    <div
      className={`flex flex-row justify-center items-center px-2 py-1 rounded-md bg-secondary-600 dark:bg-secondary-700 text-gray-50 ${className}`}
    >
      <Icon name="LocationDot" size={16} />
      <Span className="ml-2" level={5}>
        {location}
      </Span>
    </div>
  );
};

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="flex flex-row items-center my-1">
      <div className="w-12 h-12 md:w-12 md:h-12">
        <div className="relative shadow-md h-full w-full rounded-full overflow-hidden border-1">
          <Image
            className="object-cover rounded-sm"
            src={speaker.imgUrl}
            alt={`Placeholder image of ${speaker.name}`}
            fill
          />
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

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');
  const { sessions } = SCHEDULE[activeDay];

  return (
    <div className="my-8 w-full">
      <div className="flex justify-center gap-4 mb-6">
        {Object.keys(SCHEDULE).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`flex flex-col items-center px-2 md:px-10 py-2 border-2 border-solid border-gray-400 dark:border-gray-600 rounded ${
              activeDay === day
                ? 'bg-secondary-600 dark:bg-secondary-700 text-gray-50  dark:text-gray-50'
                : 'text-gray-950 dark:text-gray-50'
            }`}
          >
            <Heading tag={2} level={5}>
              {SCHEDULE[day].title}
            </Heading>
            <Span level={4}>{SCHEDULE[day].date}</Span>
            <Span level={5}>{SCHEDULE[day].day}</Span>
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-5">
         
        {sessions.map((session, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-4 w-full ${session.length == 1 ? 'md:w-8/12' : ''}`}
          >
            {session.map((parallelSession, subIndex) => (
              <div
                key={subIndex}
                className="flex-1 p-5 border-2 border-solid border-gray-400 dark:border-gray-600 rounded-md shadow-sm"
              >
                <div className="flex flex-col">
                  <Heading
                    tag={3}
                    level={5}
                    className="my-1 font-normal text-gray-950 dark:text-gray-50 spacing-y-2"
                  >
                    {parallelSession.title}
                  </Heading>
                  {parallelSession.speakers &&
                    parallelSession.speakers.map((speaker, index) =>
                      speaker.activeSpeakerPage ? (
                        <Link
                          href={`/speakers/${speaker.slug}`}
                          target="_self"
                          className="flex flex-col space-y-2 my-1"
                          key={index}
                        >
                          <SpeakerCard speaker={speaker} />
                        </Link>
                      ) : (
                        <div
                          className="flex flex-col space-y-2 my-1"
                          key={index}
                        >
                          <SpeakerCard speaker={speaker} />
                        </div>
                      )
                    )}
                  <div className="flex flex-wrap">
                    <TimeBadge
                      className="my-1 mr-2"
                      time={parallelSession.time}
                    />
                    <LocationBadge
                      className="my-1"
                      location={parallelSession.location}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        Schedule
      </Heading>
      <Schedule />
    </section>
  );
}
