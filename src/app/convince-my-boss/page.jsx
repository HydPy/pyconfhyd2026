import ConviceMyBoss from '@/conviceMyBoss.mdx';
import MdxLayout from '@/components/MdxLayout';
import { Heading } from '@/components/Typography';
import CTAButton from '@/components/CTAButton';

export default function Page() {
  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-primary-600 dark:text-primary-400"
      >
        Convince My Boss
      </Heading>
      <MdxLayout>
        <ConviceMyBoss />
      </MdxLayout>
      <div className="flex gap-5 mt-5">
        <CTAButton
          href="/docs/convince-my-boss.docx"
          label="Download Document"
          icon="Download"
          iconSize={24}
          variant="primary"
        />
        <CTAButton
          href="/docs/convince-my-boss.txt"
          label="Download Plain Text"
          icon="Document"
          iconSize={24}
          variant="secondary"
          download={true}
        />
      </div>
    </section>
  );
}
