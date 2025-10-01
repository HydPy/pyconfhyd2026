import COCMdx from '@/coc.mdx';
import MdxLayout from '@/components/MdxLayout';
import { Heading } from '@/components/Typography';

export const metadata = {
  title: 'Code Of Conduct',
  description: 'Code of Conduct for PyConf Hyderabad 2026',
  openGraph: {
    title: 'Code Of Conduct',
    description: 'Code of Conduct for PyConf Hyderabad 2026',
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
        Code Of Conduct
      </Heading>
      <MdxLayout>
        <COCMdx />
      </MdxLayout>
    </section>
  );
}
