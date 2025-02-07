import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Heading, Paragraph, Span } from '@/components/Typography';
import Icon from '@/components/Icon';

import { SPEAKERS } from '@/speakers';
import { SCHEDULE } from '@/schedule';

export function generateStaticParams() {
  return SPEAKERS.map((speaker) => ({ slug: speaker.slug }));
}

const getTalkDetailsBySlug = (slug) => {
  // Find the speaker by slug
  const speaker = SPEAKERS.find(
    (s) => s.slug === slug && s.activeSpeakerPage === true
  );

  // If speaker is not found, return null
  if (!speaker) {
    return null;
  }

  // Iterate over each day and session to find the talk
  const talkDetails = [];

  Object.values(SCHEDULE).forEach((day) => {
    day.sessions.forEach((sessionGroup) => {
      sessionGroup.forEach((session) => {
        // Check if the speaker is assigned to the session
        if (session.speakers) {
          session.speakers.forEach((speaker) => {
            if (speaker.slug === slug) {
              talkDetails.push({
                day: day.title,
                date: day.date,
                type: session.type,
                sessionTitle: session.title,
                time: session.time,
                location: session.location,
              });
            }
          });
        }
      });
    });
  });

  // Return the talk details or null if no matches
  return talkDetails.length > 0 ? talkDetails : null;
};

export default async function SpeakerPage({ params }) {
  const { slug } = await params;
  const speaker = SPEAKERS.find(
    (s) => s.slug === slug && s.activeSpeakerPage === true
  );
  const talks = getTalkDetailsBySlug(slug);

  if (!speaker) return notFound(); // Redirect to 404 if speaker is not found

  return (
    <section className="flex flex-col py-6 mt-8 w-11/12 lg:w-5/6 mx-auto">
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src={speaker.imgUrl}
                alt={speaker.imgAlt || speaker.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <Heading
            level={2}
            tagLevel={1}
            className="mt-6 mb-2 text-center text-secondary-600 dark:text-secondary-400"
          >
            {speaker.name}
          </Heading>
          {speaker.title && (
            <Span
              level={3}
              className="text-center text-gray-950 dark:text-gray-50"
            >
              {speaker.title}
            </Span>
          )}
          {speaker.bio && (
            <>
              <Paragraph
                level={3}
                className="text-left my-2 font-semibold text-gray-950 dark:text-gray-50"
              >
                About
              </Paragraph>
              <Paragraph
                className="mb-2 text-gray-600 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: speaker.bio }}
              ></Paragraph>
            </>
          )}
          {talks && (
            <Paragraph
              level={3}
              className="text-left my-2 font-semibold text-gray-950 dark:text-gray-50"
            >
              Session Details
            </Paragraph>
          )}
          {talks.map((talk, index) => (
            <div key={index} className="mb-2 text-gray-600 dark:text-gray-400">
              <Paragraph>
                {talk.type} - {talk.sessionTitle}
              </Paragraph>
              <ul className="list-disc ml-4">
                <li>
                  <Paragraph>Date: {talk.date}</Paragraph>
                </li>
                <li>
                  <Paragraph>Time: {talk.time}</Paragraph>
                </li>
                <li>
                  <Paragraph>Location: {talk.location}</Paragraph>
                </li>
              </ul>
            </div>
          ))}
          {speaker.socials && (
            <div className="flex my-4 gap-4">
              {speaker.socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-secondary-600 hover:text-secondary-950 dark:text-secondary-400 dark:hover:text-gray-50"
                >
                  <Icon name={social.name} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
