import JobBoardRulesGuidelinesMdx from '@/job-board-rules-guidelines.mdx';
import MdxLayout from '@/components/MdxLayout';
import { Heading } from '@/components/Typography';

export const metadata = {
  title: 'Job Board Rules and Guidelines',
  description: 'Job Board Rules and Guidelines for PyConf Hyderabad 2025',
  openGraph: {
    title: 'Job Board Rules and Guidelines',
    description: 'Job Board Rules and Guidelines for PyConf Hyderabad 2025',
  },
};

export default function Page() {
  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        Job Board Rules and Guidelines
      </Heading>
      <MdxLayout>
        <JobBoardRulesGuidelinesMdx />
      </MdxLayout>
    </section>
  );
}
