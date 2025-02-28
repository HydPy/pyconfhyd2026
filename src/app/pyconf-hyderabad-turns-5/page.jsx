import { Heading, Paragraph } from '@/components/Typography';
import {
  PeoplePhotoFrame,
  TextFrame,
  SponsorPhotoFrame,
} from '@/components/Frames';
import { Confetti } from '@/components/Confetti';
import {
  ALL_SPEAKER_VOLUNTEER_IMAGES,
  ALL_SPEAKER_VOLUNTEER_NAMES,
  ALL_SPONSORS,
} from '@/people';

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
      <Heading
        className="my-6 text-secondary-600 dark:text-secondary-400 border-b-[3px] border-primary-600 dark:border-primary-400 px-10 pb-1"
        level={2}
        tagLevel={2}
      >
        Volunteers & Speakers
      </Heading>
      <PeoplePhotoFrame images={ALL_SPEAKER_VOLUNTEER_IMAGES} />
      <TextFrame names={ALL_SPEAKER_VOLUNTEER_NAMES} />
      <Heading
        className="my-6 text-secondary-600 dark:text-secondary-400 border-b-[3px] border-primary-600 dark:border-primary-400 px-10 pb-2"
        level={2}
        tagLevel={2}
      >
        Sponsors
      </Heading>
      <SponsorPhotoFrame images={ALL_SPONSORS} />
    </section>
  );
}
