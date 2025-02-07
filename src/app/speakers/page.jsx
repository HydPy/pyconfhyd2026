import Speaker from '@/components/Speaker';
import { Heading } from '@/components/Typography';
import { SPEAKERS } from '@/speakers';

const getSessionSpeakers = (SPEAKERS) => {
  const speakers = new Map();
  Object.values(SPEAKERS).forEach((speaker) => {
    const { name, type, activeSpeakerPage } = speaker;
    if (
      !speakers.has(name) &&
      type == 'Session' &&
      activeSpeakerPage === true
    ) {
      speakers.set(name, speaker);
    }
  });
  return Array.from(speakers.values());
};

export default function Page() {
  const ALL_SPEAKERS = getSessionSpeakers(SPEAKERS);
  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        Speakers
      </Heading>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {ALL_SPEAKERS.map((speaker, index) => (
          <Speaker key={index} speaker={speaker} />
        ))}
      </div>
    </section>
  );
}
