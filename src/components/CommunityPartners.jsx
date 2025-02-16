import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Heading } from '@/components/Typography';
import {
  COMMUNITY_PARTNERS_INFO,
  COMMUNITY_PARTNERS,
} from '@/communityPartners';

const PartnerLogo = ({ lightLogoUrl, logoAlt }) => {
  return (
    <div className="flex w-100 flex-col p-4 items-center bg-gray-50 dark:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
      <div className="w-32 h-32">
        <div className="relative h-full w-full">
          <Image
            className="object-contain"
            src={lightLogoUrl}
            alt={logoAlt}
            fill
          />
        </div>
      </div>
    </div>
  );
};

const PartnerCard = (details) => {
  return (
    <>
      {details.hyperLink ? (
        <Link
          href={details.hyperLink}
          target="_blank"
          rel="noopener noreferrer"
          className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg shadow-md"
        >
          <PartnerLogo {...details} />
        </Link>
      ) : (
        <div className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg shadow-md">
          <PartnerLogo {...details} />
        </div>
      )}
    </>
  );
};

const CommunityPartners = () => {
  return (
    <section
      id="community-partners"
      className="scroll-mt-20 flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center mt-8 mb-10 text-secondary-600 dark:text-secondary-400"
      >
        {COMMUNITY_PARTNERS_INFO.title}
      </Heading>
      <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-10">
        {COMMUNITY_PARTNERS &&
          COMMUNITY_PARTNERS.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
      </div>
    </section>
  );
};

export default CommunityPartners;
