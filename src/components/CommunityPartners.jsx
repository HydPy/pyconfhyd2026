import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Heading, Paragraph } from '@/components/Typography';
import {
  COMMUNITY_PARTNERS_INFO,
  COMMUNITY_PARTNERS,
} from '@/communityPartners';
import CTAButton from './CTAButton';
import { KEY_LINKS } from '@/conference';

const PartnerLogo = ({ imgUrl, imgAlt }) => {
  return (
    <div className="flex w-100 flex-col p-4 items-center bg-gray-50 dark:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
      <div className="w-32 h-32">
        <div className="relative h-full w-full">
          <Image className="object-contain" src={imgUrl} alt={imgAlt} fill />
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

const CommunityDescription = () => {
  return (
    <>
      <Paragraph className="text-center text-gray-800 dark:text-gray-300 lg:w-11/12">
        {COMMUNITY_PARTNERS_INFO.description}
      </Paragraph>
      <div className="flex flex-col sm:flex-row items-center mt-4">
        <CTAButton
          href={KEY_LINKS.CommunityPartnersProspectusUrl}
          label={KEY_LINKS.CommunityPartnersProspectusLabel}
          iconSize={20}
          variant="secondary"
        />
        <CTAButton
          href={KEY_LINKS.CommunityPartnersProspectusRegisterFormUrl}
          label={KEY_LINKS.CommunityPartnersProspectusRegisterFormLabel}
          iconSize={20}
          variant="accent"
        />
      </div>
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
        className="text-center mt-8 mb-10 text-primary-600 dark:text-primary-400"
      >
        {COMMUNITY_PARTNERS_INFO.title}
      </Heading>
      <CommunityDescription />
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
