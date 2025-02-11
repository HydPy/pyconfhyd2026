import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Heading, Span } from '@/components/Typography';
import { PARTNERS_INFO, PARTNERS } from '@/partners';

const PartnerCard = ({ name, title, lightLogoUrl, logoAlt, hyperLink }) => {
  return (
    <Link
      href={hyperLink}
      className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col p-4 items-center bg-gray-50 dark:bg-gray-200 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
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
        <Heading
          tagLevel={3}
          level={6}
          className="my-1 text-gray-950"
        >
          {name}
        </Heading>
        <Span className='text-gray-950'>{title}</Span>
      </div>
    </Link>
  );
};

const Partners = () => {
  return (
    <section
      id="partners"
      className="scroll-mt-20 flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        {PARTNERS_INFO.title}
      </Heading>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {PARTNERS &&
          PARTNERS.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
      </div>
    </section>
  );
};

export default Partners;
