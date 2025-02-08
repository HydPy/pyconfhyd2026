import Image from 'next/image';
import Link from 'next/link';

import Icon from '@/components/Icon';
import { Heading, Paragraph } from '@/components/Typography';

const Speaker = ({ speaker }) => {
  return (
    <div className="flex flex-col px-10 items-center border rounded-3xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
      <Link
        className="flex flex-col items-center"
        href={`/speakers/${speaker.slug}`}
      >
        <figure className="w-48 h-48 lg:w-64 lg:h-64 ">
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
            level={5}
            className="my-2 text-center text-secondary-600 dark:text-secondary-400"
          >
            {speaker.name}
          </Heading>
          <Paragraph className="my-2 text-center text-gray-950 dark:text-gray-50">
            {speaker.title}
          </Paragraph>
        </div>
      </Link>
      {speaker.socials && (
        <div className="py-4 flex gap-5 items-center justify-center">
          {speaker.socials.map((social, index) => (
            <Link
              key={index}
              className="text-secondary-600 hover:text-secondary-950 dark:text-secondary-400 dark:hover:text-gray-50 mr-1"
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

export default Speaker;
