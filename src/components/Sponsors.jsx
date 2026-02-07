import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Heading, Paragraph } from '@/components/Typography';
import { SPONSORS, SPONSORS_INFO } from '@/sponsors';
import CTAButton from '@/components/CTAButton';
import { KEY_LINKS } from '@/conference';

const SpeakerCreative = () => {
  return (
    <Image
      src="/images/speakerCreative.svg"
      alt="Decorative speaker creative"
      width={240}
      height={240}
      className="pointer-events-none hidden xl:block absolute bottom-[-120px] w-60 h-60"
      style={{
        right: 'calc((100% - 100vw) / 2)', // Align to the viewport's right edge
      }}
    />
  );
};

const SponsorLogoCard = ({ slug, hyperLink, imgUrl, imgAlt }) => {
  return (
    <Link
      href={`${hyperLink}`}
      className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex flex-col px-4 items-center bg-gray-50 dark:bg-gray-100 rounded-lg shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
        <figure className="w-48 h-48 lg:w-64 lg:h-64 ">
          <div className="relative h-full w-full">
            <Image className="object-contain" src={imgUrl} alt={imgAlt} fill />
          </div>
          <figcaption className="sr-only">{imgAlt}</figcaption>
        </figure>
      </div>
    </Link>
  );
};

const SponsorCategoryGrid = () => {
  return (
    <div className="flex flex-col items-center">
      {SPONSORS &&
        Object.keys(SPONSORS).map((type) => (
          <div key={type} className="my-8">
            <Heading
              tagLevel={3}
              level={3}
              className="text-center mb-8 text-primary-600 dark:text-primary-400 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:w-16 after:h-1 after:bg-primary-500 after:transform after:-translate-x-1/2"
            >
              {type}
            </Heading>
            <div className="flex flex-wrap justify-center gap-5">
              {SPONSORS[type].map((sponsor, index) => (
                <SponsorLogoCard key={index} {...sponsor} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

const SponsorDescription = () => {
  return (
    <>
      <Paragraph className="text-center text-gray-800 dark:text-gray-300 lg:w-11/12">
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
      className="scroll-mt-32 relative flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center my-8 text-primary-600 dark:text-primary-400"
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
