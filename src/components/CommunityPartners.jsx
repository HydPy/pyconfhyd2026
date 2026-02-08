import React from 'react';

import { Heading, Paragraph } from '@/components/Typography';
import {
  COMMUNITY_PARTNERS_INFO,
  COMMUNITY_PARTNERS,
} from '@/communityPartners';
import CTAButton from './CTAButton';
import { KEY_LINKS } from '@/conference';
import LogoCard from './LogoCard';

const CommunityDescription = () => {
  return (
    <>
      <Paragraph className="text-center text-gray-800 dark:text-gray-300 lg:w-11/12">
        {COMMUNITY_PARTNERS_INFO.description}
      </Paragraph>
      {/* <div className="flex flex-col sm:flex-row items-center mt-4">
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
      </div> */}
    </>
  );
};

const CommunityPartners = () => {
  return (
    <section
      id="community-partners"
      className="scroll-mt-32 flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center mt-8 mb-10 text-primary-600 dark:text-primary-400"
      >
        {COMMUNITY_PARTNERS_INFO.title}
      </Heading>
      {/* <CommunityDescription /> */}
      <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-10">
        {COMMUNITY_PARTNERS &&
          COMMUNITY_PARTNERS.map((partner) => {
            // size is for the image size in the LogoCard component,
            const prop = { ...partner, size: 110 };
            return <LogoCard key={partner.name} {...prop} />;
          })}
      </div>
    </section>
  );
};

export default CommunityPartners;
