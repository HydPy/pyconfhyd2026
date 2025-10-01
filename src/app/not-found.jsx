import Link from 'next/link';
import Image from 'next/image';

import { ASSETS } from '@/conference';

import { Heading, Paragraph, Span } from '@/components/Typography';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center  justify-center py-6 w-11/12 lg:w-5/6 mx-auto h-[70vh]">
      <div className="relative">
        <Image
          className="animate-bounce"
          src={ASSETS.navbarLogoUrl}
          alt="PyConf Hyderabad 2026 Logo"
          width={100}
          height={100}
        />
      </div>
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-3 text-secondary-600 dark:text-secondary-400"
      >
        404 - Page Not Found
      </Heading>
      <Paragraph className="text-center text-gray-900 dark:text-gray-100 ">
        This page slipped through our Pythonic loops — let’s get you back on
        track!
      </Paragraph>
      <Link
        href={'/'}
        className="mt-5 px-6 py-3 bg-secondary-600 hover:bg-secondary-700 border rounded-lg"
      >
        <div className="inline-flex items-center font-medium text-gray-50">
          <Span>main.py 🐍</Span>
        </div>
      </Link>
    </section>
  );
};
export default NotFound;
