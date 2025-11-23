import Link from 'next/link';
import React from 'react';

import Icon from '@/components/Icon';
import { CONFERENCE, SOCIALS, ASSETS } from '@/conference';
import { PAST_EDITIONS, PYCON_INDIA_HYDPY_PAST_EDITIONS } from '@/pastEditions';
import { Paragraph, Span } from '@/components/Typography';

const Footer = () => (
  <footer
    id="footer"
    className="
        w-screen
        p-4
        mt-4
        bg-secondary-700
        sm:bg-center
        md:bg-right-bottom
        "
    style={{
      backgroundImage: `url(${ASSETS.footerBgUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}
    aria-label={ASSETS.footerBgAlt}
  >
    <div className="sm:w-9/12 flex flex-wrap justify-between mx-auto gap-3">
      {/* Contact Section */}
      <div className="flex flex-col mt-2">
        <Span className="font-medium text-gray-50">Contact Us On</Span>
        <div className="flex flex-wrap mt-2">
          {SOCIALS.map(({ url, ariaLabel, name }, index) => (
            <Link
              key={index}
              className="text-gray-200 hover:text-gray-50 mr-2"
              href={url}
              target="_blank"
              aria-label={ariaLabel}
              rel="noopener noreferrer"
            >
              <Icon name={name} />
            </Link>
          ))}
        </div>
      </div>

      {/* Past Editions Section */}
      {[PAST_EDITIONS, PYCON_INDIA_HYDPY_PAST_EDITIONS].map(
        ({ sectionTitle, editions }, idx) => (
          <div key={idx} className="flex flex-col mt-2">
            <Span className="font-medium text-gray-50">{sectionTitle}</Span>
            {editions.map(({ url, ariaLabel, year }, index) => (
              <Link
                key={index}
                className="text-gray-200 hover:text-gray-50 mt-1"
                href={url}
                target="_blank"
                aria-label={ariaLabel}
              >
                <Span>{year}</Span>
              </Link>
            ))}
          </div>
        )
      )}
    </div>

    <Paragraph className="text-center my-4 text-gray-100">
      {CONFERENCE.copyrightTitle}
    </Paragraph>
  </footer>
);

export default Footer;
