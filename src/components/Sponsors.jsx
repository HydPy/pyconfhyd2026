import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Heading } from '@/components/Typography';
import { SPONSORS, SPONSORS_INFO } from '@/sponsors';

const SponsorCard = ({ hyperLink, lightLogoUrl, logoAlt }) => {
  return (
    <Link
      href={hyperLink}
      className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col px-4 items-center bg-gray-50 dark:bg-gray-100 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
        <figure className="w-48 h-48 lg:w-64 lg:h-64 ">
          <div className="relative h-full w-full">
            <Image
              className="object-contain"
              src={lightLogoUrl}
              alt={logoAlt}
              fill
            />
          </div>
          <figcaption className="sr-only">{logoAlt}</figcaption>
        </figure>
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
              <div className="flex justify-center gap-5">
                {SPONSORS[type].map((sponsor, index) => (
                  <SponsorCard key={index} {...sponsor} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
