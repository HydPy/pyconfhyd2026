import Image from 'next/image';
import Link from 'next/link';

import { Heading, Paragraph, Span } from '@/components/Typography';
import Icon from '@/components/Icon';
import CTAButton from '@/components/CTAButton';
import EditionBadge from '@/components/EditionBadge';
import { CONFERENCE, ASSETS, KEY_LINKS } from '@/conference';

const Announcement = () => {
  return (
    <Paragraph
      level={1}
      className="text-center text-gray-900 dark:text-gray-50 mt-4"
      dangerouslySetInnerHTML={{ __html: CONFERENCE.announcement }}
    />
  );
};

const VenueInfo = ({ type, date, venue, mapsLink }) => (
  <div className="flex items-center">
    <Span
      level={2}
      className="text-center font-semibold ml-2 mt-2 text-gray-900 dark:text-gray-50"
    >
      {type}: {date} | {venue}
    </Span>

    {mapsLink && (
      <Link
        href={mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${venue} location on map`}
      >
        <Icon name="ExternalLink" size={16} className="ml-2 mt-2" />
      </Link>
    )}
  </div>
);

const ConferenceInfo = () => (
  <>
    <div className="flex items-center">
      <Icon
        name="Calendar"
        size={28}
        className="text-gray-900 dark:text-gray-50"
      />
      <Span
        level={1}
        className="text-center font-semibold ml-2 text-gray-900 dark:text-gray-50"
      >
        {CONFERENCE.dates}
      </Span>
    </div>

    <VenueInfo
      type="Workshop"
      date={CONFERENCE.workshopDate}
      venue={CONFERENCE.workshopVenue}
      mapsLink={CONFERENCE.workshopMapsLink}
    />
    <VenueInfo
      type="Conference"
      date={CONFERENCE.conferenceDate}
      venue={CONFERENCE.conferenceVenue}
      mapsLink={CONFERENCE.conferenceMapsLink}
    />
  </>
);

const Hero = () => {
  return (
    <section
      className="
      w-full
      aspect-[9/16] sm:aspect-[3/4] md:aspect-[4/3] lg:aspect-[21/9]
      bg-primary-400 dark:bg-primary-600
      max-h-screen
      "
      style={{
        backgroundImage: `url(${ASSETS.heroBannerUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      aria-label={ASSETS.heroBannerAlt}
    >
      <div className="flex flex-col py-6 items-center w-11/12 lg:w-5/6 mx-auto">
        {/*  For SEO */}
        <Heading tagLevel={1} level={1} className="hidden">
          {CONFERENCE.title}
        </Heading>
        <EditionBadge />
        <div className="relative w-full md:w-1/2 aspect-video mt-4">
          <Image
            src={ASSETS.logoUrl}
            alt={ASSETS.imgAlt}
            priority={true}
            fill
          />
        </div>

        {/* <Announcement /> */}
        <ConferenceInfo />
        <div className="flex flex-col sm:flex-row mt-8">
          <CTAButton
            href="/tickets"
            label="GET YOUR TICKET"
            icon="Ticket"
            iconSize={24}
            target=""
            variant="secondary"
          />
          {/* <CTAButton
            href={KEY_LINKS.cfpUrl}
            label={KEY_LINKS.cfpLabel}
            icon="MdCampaign"
            iconSize={24}
            variant="accent"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
