import Image from 'next/image';
import Link from 'next/link';

import { Heading, Paragraph, Span } from '@/components/Typography';
import { ABOUT_HYDPY } from '@/hydPy';

export default function MeetOrganizer() {
  return (
    <section
      id="organizer"
      className="scroll-mt-20 flex flex-col items-center pt-10 lg:pt-16 pb-6 lg:pb-10 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center my-8 text-primary-600 dark:text-primary-400"
      >
        {ABOUT_HYDPY.title}
      </Heading>
      <div className="flex flex-col gap-3 items-center">
        <div className="flex flex-col items-center gap-3">
          <Image
            className="rounded-lg"
            src={ABOUT_HYDPY.hydPyLogoUrl}
            alt={ABOUT_HYDPY.hydPyimgAlt}
            width={500}
            height={500}
          />
        </div>
        <Paragraph
          className="text-gray-600 dark:text-gray-300 lg:w-11/12"
          level={2}
        >
          <Link
            className="text-gray-600 dark:text-gray-300 underline pr-1"
            href={ABOUT_HYDPY.hydPyUrl}
            target="_blank"
          >
            <Span level={2}>{ABOUT_HYDPY.hydPyLinkText}</Span>
          </Link>
          {ABOUT_HYDPY.description}
        </Paragraph>
      </div>
    </section>
  );
}
