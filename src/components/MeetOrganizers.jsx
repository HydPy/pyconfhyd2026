import Image from 'next/image';
import Link from 'next/link';

import { Heading, Paragraph, Span } from '@/components/Typography';
import { ABOUT_HYDPY } from '@/hydPy';

export default function MeetOrganizers() {
  return (
    <section
      id="organizers"
      className="scroll-mt-20 flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
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
          <Link
            className="text-gray-950 dark:text-gray-50 underline"
            href={ABOUT_HYDPY.hydPyUrl}
            target="_blank"
          >
            <Span>{ABOUT_HYDPY.hydPyLinkText}</Span>
          </Link>
        </div>
        <Paragraph className="text-gray-600 dark:text-gray-400 lg:w-11/12">
          {ABOUT_HYDPY.description}
        </Paragraph>
      </div>
    </section>
  );
}
