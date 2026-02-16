import Image from 'next/image';
import Link from 'next/link';

import { Heading, Paragraph } from '@/components/Typography';
import { Icon } from '@/components/Icon';

export const KeynoteSpeaker = ({ speaker }) => {
  return (
    <div className="flex flex-col px-6 sm:px-10 md:px-20 items-center transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
      <Link
        className="flex flex-col items-center"
        href={`/speakers/${speaker.slug}`}
      >
        <figure className="w-64 h-64 lg:w-80 lg:h-80">
          <div className="relative shadow-md h-full w-full rounded-xl">
            <Image
              className="object-cover rounded-xl"
              src={speaker.imgUrl}
              alt={speaker.imgAlt}
              fill
            />
          </div>
          <figcaption className="sr-only">{speaker.imgAlt}</figcaption>
        </figure>
        <div>
          <Heading
            tagLevel={2}
            level={4}
            className="mt-4 text-center text-gray-950 dark:text-gray-50"
          >
            {speaker.name}
          </Heading>
          <Paragraph
            className="mt-2 text-center text-gray-950 dark:text-gray-50"
            level={2}
          >
            {speaker.title}
          </Paragraph>
        </div>
      </Link>
      {speaker.socials && (
        <div className="mt-3 flex gap-5 items-center justify-center">
          {speaker.socials.map((social, index) => (
            <Link
              key={index}
              className="text-secondary-600 dark:text-secondary-400 mr-1"
              href={social.url}
              target="_blank"
              aria-label={social.ariaLabel}
              rel="noopener noreferrer"
            >
              <Icon name={social.name} size={30} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const Speaker = ({ speaker }) => {
  return (
    <div className="flex flex-col px-6 sm:px-10 md:px-20 items-center border rounded-3xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
      <Link
        className="flex flex-col items-center"
        href={`/speakers/${speaker.slug}`}
      >
        <figure className="w-48 h-48 lg:w-64 lg:h-64">
          <div className="relative shadow-md top-[-10%] h-full w-full rounded-xl">
            <Image
              className="object-cover rounded-xl"
              src={speaker.imgUrl}
              alt={speaker.imgAlt}
              fill
            />
          </div>
          <figcaption className="sr-only">{speaker.imgAlt}</figcaption>
        </figure>
        <div>
          <Heading
            tagLevel={2}
            level={4}
            className="mt-4 text-center text-gray-950 dark:text-gray-50"
          >
            {speaker.name}
          </Heading>
          <Paragraph
            className="mt-2 text-center text-gray-950 dark:text-gray-50"
            level={2}
          >
            {speaker.title}
          </Paragraph>
        </div>
      </Link>
      {speaker.socials && (
        <div className="mt-3 mb-5 flex gap-5 items-center justify-center">
          {speaker.socials.map((social, index) => (
            <Link
              key={index}
              className="text-secondary-600 dark:text-secondary-400 mr-1"
              href={social.url}
              target="_blank"
              aria-label={social.ariaLabel}
              rel="noopener noreferrer"
            >
              <Icon name={social.name} size={30} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
