import { Heading } from '@/components/Typography';
import { CONFERENCE } from '@/conference';
import Script from 'next/script';
import ScheduleContent from './ScheduleContent';

export const metadata = {
  title: 'Schedule',
  description: 'Conference schedule for PyConf Hyderabad 2026',
  openGraph: {
    title: 'Schedule',
    description: 'Conference schedule for PyConf Hyderabad 2026',
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="event-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
        <Heading
          tagLevel={1}
          level={1}
          className="text-center md:my-6 my-0 text-primary-600 dark:text-primary-400"
        >
          Schedule
        </Heading>
        <ScheduleContent />
      </section>
    </>
  );
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: CONFERENCE.title,
  startDate: '2026-03-14',
  endDate: '2026-03-15',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  image: ['https://2026.pyconfhyd.org/images/navbarLogo.svg'],
  description: CONFERENCE.description,
  location: {
    '@type': 'Place',
    name: `${CONFERENCE.conferenceVenue} and ${CONFERENCE.workshopVenue}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${CONFERENCE.conferenceVenueAddress} and ${CONFERENCE.workshopVenueAddress}`,
      addressLocality: 'Hyderabad',
      addressCountry: 'IN',
    },
  },
  performer: {
    '@type': 'Organization',
    name: CONFERENCE.creator,
    url: 'https://hydpy.org',
  },
  offers: {
    '@type': 'Offer',
    url: `${CONFERENCE.siteURL}/tickets`,
    availability: 'https://schema.org/InStock',
    priceCurrency: 'INR',
    price: '2800',
  },
  organizer: {
    '@type': 'Organization',
    name: CONFERENCE.creator,
    url: 'https://hydpy.org',
  },
  subEvent: [
    {
      '@type': 'Event',
      name: 'PyConf Hyderabad 2026 Conference',
      startDate: '2026-03-15',
      endDate: '2026-03-15',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      description:
        'Conference day schedule and talks for PyConf Hyderabad 2026.',
      performer: {
        '@type': 'Organization',
        name: CONFERENCE.creator,
        url: 'https://hydpy.org',
      },
      offers: {
        '@type': 'Offer',
        url: `${CONFERENCE.siteURL}/tickets`,
        availability: 'https://schema.org/InStock',
        priceCurrency: 'INR',
        price: '2000',
      },
      location: {
        '@type': 'Place',
        name: CONFERENCE.conferenceVenue,
        address: {
          '@type': 'PostalAddress',
          streetAddress: CONFERENCE.conferenceVenueAddress,
          addressLocality: 'Hyderabad',
          addressCountry: 'IN',
        },
      },
    },
    {
      '@type': 'Event',
      name: 'PyConf Hyderabad 2026 Workshop',
      startDate: '2026-03-14',
      endDate: '2026-03-14',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      description: 'Workshop day schedule for PyConf Hyderabad 2026.',
      performer: {
        '@type': 'Organization',
        name: CONFERENCE.creator,
        url: 'https://hydpy.org',
      },
      offers: {
        '@type': 'Offer',
        url: `${CONFERENCE.siteURL}/tickets`,
        availability: 'https://schema.org/InStock',
        priceCurrency: 'INR',
        price: '1350',
      },
      location: {
        '@type': 'Place',
        name: CONFERENCE.workshopVenue,
        address: {
          '@type': 'PostalAddress',
          streetAddress: CONFERENCE.workshopVenueAddress,
          addressLocality: 'Hyderabad',
          addressCountry: 'IN',
        },
      },
    },
  ],
};
