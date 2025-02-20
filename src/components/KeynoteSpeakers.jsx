import { Heading } from '@/components/Typography';
import Speaker from '@/components/Speaker';

export default function KeynoteSpeakers({ speakers }) {
  return (
    <section
      id="keynote-speakers"
      className="scroll-mt-20 flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto"
    >
      <Heading
        tagLevel={2}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        Keynote Speakers
      </Heading>
      <div className="flex flex-wrap justify-center mt-10 gap-20">
        {speakers.map((speaker, index) => (
          <Speaker key={index} speaker={speaker} />
        ))}
      </div>
    </section>
  );
}
