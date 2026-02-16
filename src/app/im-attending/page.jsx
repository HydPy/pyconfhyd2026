import IAmAttendingFrame from '@/components/IAmAttendingFrame';
import { Heading } from '@/components/Typography';
import { CONFERENCE } from '@/conference';

export const metadata = {
  title: "I'm Attending",
  description:
    "Create your 'I'm Attending PyConf Hyderabad 2026' frame photo. Upload your picture, add your name, and share on social media!",
  openGraph: {
    title: "I'm Attending PyConf Hyderabad 2026",
    description:
      "Create your 'I'm Attending' frame photo and share on social media!",
  },
};

export default function IAmAttendingPage() {
  return (
   <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
          <Heading
            tagLevel={1}
            level={1}
            className="text-center my-8 text-primary-600 dark:text-primary-400"
          >
             I&apos;m Attending {CONFERENCE.title}
          </Heading>
          <IAmAttendingFrame />
        </section>
      );
}
