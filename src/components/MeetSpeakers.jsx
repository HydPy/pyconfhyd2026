import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Heading, Paragraph } from './Typography';
import { SPEAKERS } from '../../data/speakers';
import CTAButton from './CTAButton';

const getActiveSpeakers = () => {
  return SPEAKERS.filter((speaker) => speaker.activeSpeakerPage);
};

const SpeakerAvatar = ({ speaker }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/speakers/${speaker.slug}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleNavigate();
    }
  };

  return (
    <div
      className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-primary-600 dark:border-primary-400 flex-shrink-0 cursor-pointer"
      onClick={handleNavigate}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`View ${speaker.name}'s profile`}
    >
      <Image
        src={speaker.imgUrl}
        alt={speaker.imgAlt || speaker.name}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 96px, 112px"
      />
    </div>
  );
};

const SpeakerAvatarGrid = ({ speakers }) => {
  return (
    <div className="mt-10 mb-6 flex flex-wrap justify-center gap-2 lg:gap-4">
      {speakers.map((speaker) => (
        <SpeakerAvatar key={speaker.slug} speaker={speaker} />
      ))}
    </div>
  );
};

const SpeakersDescription = () => {
  const speakerCount = getActiveSpeakers().length || 20;

  return (
    <div className="flex flex-col gap-3 items-center">
      <Paragraph
        className="text-center text-gray-600 dark:text-gray-300 lg:w-11/12"
        level={2}
      >
        Hear from {speakerCount}+ industry and community speakers sharing practical talks, fresh tools, and real-world stories about Python.
      </Paragraph>
    </div>
  );
};

const ScheduleCTA = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center mt-4">
      <CTAButton
        href={'/schedule'}
        label={'CHECK OUT THE SCHEDULE'}
        iconSize={20}
        variant="secondary"
      />
    </div>
  );
};

export default function MeetSpeakers() {
  const speakers = getActiveSpeakers();

  return (
    <section
      id="meet-our-speakers"
      className="relative z-0 scroll-mt-20 flex flex-col items-center pt-10 lg:pt-16 pb-6 lg:pb-10 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center mb-4 lg:mb-6 text-primary-600 dark:text-primary-400"
      >
        Meet Our Speakers
      </Heading>
      <SpeakersDescription />
      <SpeakerAvatarGrid speakers={speakers} />
      <ScheduleCTA />
    </section>
  );
}
