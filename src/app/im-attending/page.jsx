import IAmAttendingFrame from '@/components/IAmAttendingFrame';

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
  return <IAmAttendingFrame />;
}
