import Link from 'next/link';
import React from 'react';

import Icon from '@/components/Icon';
import { CONFERENCE, SOCIALS, ASSETS } from '@/conference';
import { PAST_EDITIONS, PYCON_INDIA_HYDPY_PAST_EDITIONS } from '@/pastEditions';
import { Paragraph, Span } from '@/components/Typography';

const Footer = () => (
  <footer id="footer">
    <div
      className="mt-4 h-[100px] bg-center"
      style={{ backgroundImage: `url(${ASSETS.monumentsSketchUrl})` }}
      aria-label={ASSETS.monumentsSketchAlt}
    />
    <div className="bg-gradient-to-r from-secondary-700 to-secondary-800 p-4">
      <div className="sm:w-9/12 flex flex-wrap justify-between mx-auto gap-3">
        {/* Contact Section */}
        <div className="flex flex-col mt-2">
          <Span className="font-medium text-gray-50">Contact Us On</Span>
          <div className="flex flex-wrap mt-2">
            {SOCIALS.map(({ url, ariaLabel, name }, index) => (
              <Link
                key={index}
                className="text-gray-300 hover:text-gray-50 mr-2"
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
                  className="text-gray-300 hover:text-gray-50 mt-1"
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

      <hr className="h-px my-4 text-gray-50" />
      <Paragraph className="text-center text-gray-100">
        {CONFERENCE.copyrightTitle}
      </Paragraph>
    </div>
  </footer>
);

export default Footer;
