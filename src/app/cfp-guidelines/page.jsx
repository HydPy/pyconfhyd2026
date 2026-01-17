import CFPGuidelinesMdx from '@/cfpGuidelines.mdx';
import MdxLayout from '@/components/MdxLayout';
import { Heading } from '@/components/Typography';

export const metadata = {
  title: 'Call for Proposals Guidelines',
  description: 'Call for Proposals Guidelines for PyConf Hyderabad 2026',
  openGraph: {
    title: 'Call for Proposals Guidelines',
    description: 'Call for Proposals Guidelines for PyConf Hyderabad 2026',
  },
};

export default function Page() {
  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-primary-600 dark:text-primary-400"
      >
        Call for Proposals Guidelines: Talks & Workshops
      </Heading>
      <MdxLayout>
        <CFPGuidelinesMdx />
      </MdxLayout>
    </section>
  );
}
