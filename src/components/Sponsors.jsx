import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Heading, Paragraph, Span } from '@/components/Typography';
import { SPONSORS, SPONSORS_INFO } from '@/sponsors';
import { KEY_LINKS } from '@/conference';

const SponsorCard = ({ name, description, hyperLink, logoUrl }) => {
  return (
    <Link
      href={hyperLink}
      className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col p-4 items-center bg-gray-50 dark:bg-gray-950 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
        <figure className="w-48 h-48 lg:w-64 lg:h-64 ">
          <div className="relative shadow-md top-[-10%] h-full w-full rounded-xl">
            <Image
              className="object-cover rounded-xl"
              src={logoUrl}
              alt={`${name} logo`}
              fill
            />
          </div>
          <figcaption className="sr-only">{`${name} logo`}</figcaption>
        </figure>
        <Heading
          tagLevel={4}
          level={6}
          className="my-1 text-gray-950 dark:text-gray-50"
        >
          {name}
        </Heading>
        <Paragraph level={4} className="text-gray-600 dark:text-gray-400">
          {description}
        </Paragraph>
      </div>
    </Link>
  );
};

const SponsorsSection = () => {
  return (
    <section
      id="sponsors"
      className="scroll-mt-20 flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        {SPONSORS_INFO.title}
      </Heading>
      <div className="flex flex-col items-center">
        <Paragraph className="lg:text-center text-gray-600 dark:text-gray-400 lg:w-11/12">
          {SPONSORS_INFO.description}
        </Paragraph>
        <div className="flex flex-col sm:flex-row justify-center items-center my-2">
          <Link
            href={KEY_LINKS.sponsorshipProspectusUrl}
            target="_blank"
            className="mt-2 sm:mr-4 px-5 py-3 bg-secondary-600 hover:bg-secondary-700 border rounded-lg"
            rel="noopener noreferrer"
          >
            <div className="inline-flex items-center font-medium text-gray-50">
              <Span>{KEY_LINKS.sponsorshipProspectusLabel}</Span>
            </div>
          </Link>
          <Link
            href={KEY_LINKS.interestedInSponsoringUrl}
            target="_blank"
            className="mt-2 sm:mr-4 px-5 py-3 bg-primary-700 hover:bg-primary-800 border rounded-lg"
            rel="noopener noreferrer"
          >
            <div className="inline-flex items-center font-medium text-gray-50 ">
              <Span>{KEY_LINKS.interestedInSponsoringLabel}</Span>
            </div>
          </Link>
        </div>
        {SPONSORS &&
          Object.keys(SPONSORS).map((type) => (
            <div key={type} className="my-8">
              <Heading
                tagLevel={3}
                level={3}
                className="text-center mb-8 text-secondary-600 dark:text-secondary-400 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:w-16 after:h-1 after:bg-primary-500 after:transform after:-translate-x-1/2"
              >
                {type}
              </Heading>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 ld:gap-x-8 gap-y-6 md:gap-y-8 lg:gap-y-10">
                {SPONSORS[type].map((sponsor) => (
                  <SponsorCard key={sponsor.id} {...sponsor} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
