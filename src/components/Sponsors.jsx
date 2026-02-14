import React from 'react';
import Image from 'next/image';

import { Heading, Paragraph } from '@/components/Typography';
import { SPONSORS, SPONSORS_INFO } from '@/sponsors';
import CTAButton from '@/components/CTAButton';
import { KEY_LINKS } from '@/conference';
import LogoCard from './LogoCard';

const SpeakerCreative = () => {
  return (
    <Image
      src="/images/speakerCreative.svg"
      alt="Decorative speaker creative"
      width={240}
      height={240}
      className="pointer-events-none hidden xl:block absolute top-[200px] w-60 h-60"
      style={{
        right: 'calc((100% - 100vw) / 2)', // Align to the viewport's right edge
      }}
    />
  );
};

const SponsorCategoryGrid = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      {Object.keys(SPONSORS).map((sponsorType) => {
        const list = SPONSORS[sponsorType] || [];
        if (list.length === 0) return null;

        return (
          <div key={sponsorType} className="my-8">
            <Heading
              tagLevel={3}
              level={3}
              className="text-center mb-8 text-primary-600 dark:text-primary-400 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:w-16 after:h-1 after:bg-primary-500 after:transform after:-translate-x-1/2"
            >
              {sponsorType}
            </Heading>
            <div className="flex flex-wrap justify-center gap-5">
              {list.map((sponsor, index) => (
                <LogoCard key={index} {...sponsor} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SponsorDescription = () => {
  return (
    <>
      <Paragraph
        className="text-center text-gray-600 dark:text-gray-300 lg:w-11/12"
        level={2}
      >
        {SPONSORS_INFO.description}
      </Paragraph>
      <div className="flex flex-col sm:flex-row items-center mt-4">
        <CTAButton
          href={KEY_LINKS.sponsorshipProspectusUrl}
          label={KEY_LINKS.sponsorshipProspectusLabel}
          iconSize={20}
          variant="secondary"
        />
        <CTAButton
          href={KEY_LINKS.interestedInSponsoringUrl}
          label={KEY_LINKS.interestedInSponsoringLabel}
          iconSize={20}
          variant="accent"
        />
      </div>
    </>
  );
};

const SponsorsSection = () => {
  return (
    <section
      id="sponsors"
      className="scroll-mt-20 relative flex flex-col items-center pt-10 lg:pt-16 pb-6 lg:pb-10 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center mb-4 lg:mb-6 text-primary-600 dark:text-primary-400"
      >
        {SPONSORS_INFO.title}
      </Heading>
      <SponsorDescription />
      {SPONSORS && <SponsorCategoryGrid />}
      <SpeakerCreative />
    </section>
  );
};

export default SponsorsSection;
