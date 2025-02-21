import Image from 'next/image';
import { Heading, Paragraph, Span } from '@/components/Typography';
import { Confetti } from '@/components/Confetti';
import {
  ALL_SPEAKER_VOLUNTEER_IMAGES,
  ALL_SPEAKER_VOLUNTEER_NAMES,
  ALL_SPONSORS,
} from '@/people';

function TextFrame({ names, className }) {
  return (
    <div className={`relative flex flex-wrap justify-start my-4 ${className}`}>
      {names.map((text, index) => (
        <Span key={index} className="mr-3">
          • {text.name}
        </Span>
      ))}
    </div>
  );
}

function PeoplePhotoFrame({ images, className }) {
  return (
    <>
      <Heading
        className="my-6 text-secondary-600 dark:text-secondary-400 border-b-[3px] border-primary-600 dark:border-primary-400 px-10 pb-1"
        level={2}
        tagLevel={2}
      >
        Volunteers
      </Heading>
      <div
        className={`relative flex flex-wrap justify-center gap-2 ${className}`}
      >
        {images.map((image, index) => (
          <figure className="relative w-20 h-20 lg:w-24 lg:h-24" key={index}>
            <Image
              className="object-cover rounded-lg shadow-lg"
              src={image.imgUrl}
              alt={image.imgAlt}
              fill
            />
            <figcaption className="sr-only">{image.imgAlt}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

function SponsorPhotoFrame({ images, className }) {
  return (
    <>
      <Heading
        className="my-6 text-secondary-600 dark:text-secondary-400 border-b-[3px] border-primary-600 dark:border-primary-400 px-10 pb-2"
        level={2}
        tagLevel={2}
      >
        Sponsors
      </Heading>

      <div
        className={`relative flex flex-wrap justify-center gap-2  ${className} lg:w-10/12`}
      >
        {images.map((image, index) => (
          <figure
            className="relative bg-gray-50 dark:bg-gray-100 shadow-md rounded-lg w-24 h-24 lg:w-32 lg:h-32"
            key={index}
          >
            <Image
              className="object-contain rounded-lg shadow-lg px-4"
              src={image.imgUrl}
              alt={image.imgAlt}
              fill
            />
            <figcaption className="sr-only">{image.imgAlt}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

export default function Page() {
  return (
    <section className="flex flex-col items-center py-6 w-11/12 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        🎉 PyConf Hyderabad Turns Five
      </Heading>
      <Confetti trigger={true} />
      <Paragraph className="text-center">
        A heartfelt thank you to all our volunteers, speakers and sponsors who
        have been the driving force behind every edition of PyConf Hyderabad.
        Your dedication, passion, and efforts have made all five editions
        possible, shaping a thriving community for Python enthusiasts. We
        couldn’t have done it without you!
      </Paragraph>
      <PeoplePhotoFrame images={ALL_SPEAKER_VOLUNTEER_IMAGES} />
      <TextFrame names={ALL_SPEAKER_VOLUNTEER_NAMES} />
      <SponsorPhotoFrame images={ALL_SPONSORS} />
    </section>
  );
}
