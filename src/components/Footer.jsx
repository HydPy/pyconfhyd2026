import Link from 'next/link';
import React from 'react';

import Icon from '@/components/Icon';
import { CONFERENCE, SOCIALS, ASSETS } from '@/conference';
import { PAST_EDITIONS, PYCON_INDIA_HYDPY_PAST_EDITIONS } from '@/pastEditions';

const Footer = () => {
  return (
    <footer>
      <div
        className="mt-4"
        style={{
          backgroundImage: `url(${ASSETS.monumentsSketchUrl})`,
          backgroundPosition: 'center',
          height: '100px',
          ariaLabel: ASSETS.monumentsSketchAlt,
        }}
      ></div>
      <div className="bg-gradient-to-r from-secondary-700 to-secondary-800 p-4">
        <div className="sm:w-4/6 flex flex-row flex-wrap justify-between mx-auto gap-3">
          <div className="flex flex-col flex-wrap mt-2">
            <div className="font-medium text-gray-50">Contact Us On</div>
            <div className="flex flex-row flex-wrap mt-2">
              {SOCIALS.map((item, index) => (
                <Link
                  key={index}
                  className="text-gray-300 hover:text-gray-50 mr-2"
                  href={item.url}
                  target="_blank"
                  aria-label={item.ariaLabel}
                  rel="noopener noreferrer"
                  title={item.ariaLabel}
                >
                  <Icon name={item.name} />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <div className="font-medium text-gray-50">
              {PAST_EDITIONS.sectionTitle}
            </div>
            {PAST_EDITIONS.editions.map((item, index) => (
              <Link
                className="text-gray-300 hover:text-gray-50 mt-1"
                key={index}
                href={item.url}
                target="_blank"
                aria-label={item.ariaLabel}
                title={item.ariaLabel}
              >
                {item.year}
              </Link>
            ))}
          </div>
          <div className="flex flex-col mt-2">
            <div className="font-medium text-gray-50">
              {PYCON_INDIA_HYDPY_PAST_EDITIONS.sectionTitle}
            </div>
            {PYCON_INDIA_HYDPY_PAST_EDITIONS.editions.map((item, index) => (
              <Link
                className="text-gray-300 hover:text-gray-50 mt-1"
                key={index}
                href={item.url}
                target="_blank"
                aria-label={item.ariaLabel}
                title={item.ariaLabel}
              >
                {item.year}
              </Link>
            ))}
          </div>
        </div>
        <hr className="h-px mt-4 text-gray-50" />
        <div className="text-center mt-4 text-gray-100">
          {CONFERENCE.copyrightTitle}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
