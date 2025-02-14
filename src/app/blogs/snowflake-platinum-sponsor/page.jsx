import SnowflakePlatinumSponsor1Mdx from '@/snowflake-platinum-sponsor-1.mdx';
import SnowflakePlatinumSponsor2Mdx from '@/snowflake-platinum-sponsor-2.mdx';
import MdxLayout from '@/components/MdxLayout';
import { Heading } from '@/components/Typography';
import Link from 'next/link';
import Icon from '@/components/Icon';
import Image from 'next/image';

const socials = [
  {
    name: 'X',
    url: 'https://twitter.com/SnowflakeDB',
    ariaLabel: 'Hyperlink to Snowflake X page.',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/snowflake-computing',
    ariaLabel: 'Hyperlink to Snowflake LinkedIn page.',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Snowflake-Computing-709171695819345/',
    ariaLabel: 'Hyperlink to Snowflake Facebook page.',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/_snowflake_inc/?hl=en',
    ariaLabel: 'Hyperlink to Snowflake Instagram page.',
  },
];

export default function Page() {
  return (
    <section className="flex flex-col items-center py-6 w-10/12 lg:w-9/12 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        Announcing Snowflake as our Platinum Sponsor
      </Heading>
      <div className="flex w-full">
        <MdxLayout>
          <SnowflakePlatinumSponsor1Mdx />
        </MdxLayout>
      </div>
      <div className="flex flex-col w-full my-4">
        <figure className="w-5/6 h-40 lg:w-50% lg:h-60 p-6 bg-gray-50 dark:bg-gray-100 rounded-lg shadow-xl">
          <div className="relative h-full w-full">
            <Image
              className="object-contain"
              src="/images/sponsors/snowflake.svg"
              alt=""
              fill
            />
          </div>
          <figcaption className="sr-only"></figcaption>
        </figure>
      </div>
      <MdxLayout>
        <SnowflakePlatinumSponsor2Mdx />
      </MdxLayout>
      <div className="flex mt-8 mb-4 gap-4">
        {socials.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className="text-secondary-600 hover:text-secondary-950 dark:text-secondary-400 dark:hover:text-gray-50"
          >
            <Icon name={social.name} />
          </Link>
        ))}
      </div>
    </section>
  );
}
