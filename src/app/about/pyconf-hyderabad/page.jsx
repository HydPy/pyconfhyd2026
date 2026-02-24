import PyConfHyderabadMdx from '@/pyconf-hyderabad.mdx';
import MdxLayout from '@/components/MdxLayout';
import { Heading } from '@/components/Typography';
import { isFeatureEnabled } from '@/config/featureFlags';
import WhyYouShouldAttend from '@/components/WhyYouShouldAttend';
import EpicFrames from '@/components/EpicFrames';

export const metadata = {
  title: 'PyConf Hyderabad',
  description:
    'Learn about PyConf Hyderabad and what to expect at the 2026 edition.',
  openGraph: {
    title: 'PyConf Hyderabad',
    description:
      'Learn about PyConf Hyderabad and what to expect at the 2026 edition.',
  },
};

export default function Page() {
  const showWhyYouShouldAttend = isFeatureEnabled('WHY_YOU_SHOULD_ATTEND');
  const showEpicFrames = isFeatureEnabled('EPIC_FRAMES');

  return (
    <>
      <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
        <Heading
          tagLevel={1}
          level={1}
          className="text-center my-8 text-primary-600 dark:text-primary-400"
        >
          PyConf Hyderabad
        </Heading>
        <MdxLayout>
          <PyConfHyderabadMdx />
        </MdxLayout>
      </section>
      {showWhyYouShouldAttend && <WhyYouShouldAttend />}
      {showEpicFrames && <EpicFrames />}
    </>
  );
}
