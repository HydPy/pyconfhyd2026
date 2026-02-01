import Image from 'next/image';
import Link from 'next/link';

import { Heading, Paragraph } from '@/components/Typography';

const Speaker = ({ speaker }) => {
  return (
    <div className="flex flex-col items-center px-6 py-8 transition-transform duration-300 hover:-translate-y-2 scale-[0.98] -translate-x-[5%]">
      <Link
        className="flex flex-col items-center"
        href={`/speakers/${speaker.slug}`}
      >
        <figure className="relative w-48 lg:w-56">
          <Image
          src="/images/speakers/manivannanElangovan.png"
          alt={speaker.imgAlt}
          width={400}
          height={600}
          className="object-contain"
          priority
          />
        </figure>

        <div className="relative -mt-7">
          <div className="relative z-10 bg-gray-50 border-4 border-black px-3 py-3 pb-6 text-right">
            <Heading
            tagLevel={3}
            level={5}
            className="mt-2.5 text-right font-normal text-gray-950"
            >
              {speaker.name}
            </Heading>
            <Paragraph
            level={2}
            className="text-right font-semibold text-gray-950">
              {speaker.title}
              </Paragraph>
          </div>
        <div className="absolute left-0 right-0 bottom-0 top-0 translate-x-4 translate-y-5 bg-gray-950 -z-0"></div>
        </div>
      </Link>
    </div>
  );
};

export default Speaker;
