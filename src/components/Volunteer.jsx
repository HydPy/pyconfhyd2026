import Image from 'next/image';
import Link from 'next/link';

import { Heading, Paragraph } from './Typography';
import Icon from '@/components/Icon';

export default function Volunteer({ volunteer }) {
  const { name, imgUrl, imgAlt, role, socials, bio } = volunteer;

  return (
    <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 gap-4 shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
      {/* Avatar on left */}
      <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden flex-shrink-0">
        <Image
          className="object-cover"
          src={imgUrl}
          alt={imgAlt}
          fill={true}
          priority
        />
      </div>
      {/* Content on right */}
      <div className="flex flex-col items-center">
        <Heading
          tagLevel={2}
          level={5}
          className="font-semibold text-secondary-600 dark:text-secondary-400"
        >
          {name}
        </Heading>
        <Paragraph className="text-center text-gray-600 dark:text-gray-300 mt-1">
          {role}
        </Paragraph>
        <Paragraph className="text-gray-600 dark:text-gray-400 mt-1 p-4 line-clamp-5" level={5}>
          {bio}
        </Paragraph>
        {/* Social Icons */}
        {socials && (
          <div className="py-4 flex flex-wrap gap-2">
            {socials.map((social, index) => (
              <Link
                key={index}
                className="text-secondary-600 hover:text-secondary-950 dark:text-secondary-400 dark:hover:text-gray-50 mr-1"
                href={social.url}
                target="_blank"
                aria-label={social.ariaLabel}
                rel="noopener noreferrer"
              >
                <Icon name={social.name} size={28} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
