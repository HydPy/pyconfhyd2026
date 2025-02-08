import TravelMdx from '@/travel.mdx';
import MdxLayout from '@/components/MdxLayout';
import { Heading } from '@/components/Typography';

export const metadata = {
  title: 'Travel',
  description: 'Travel for PyConf Hyderabad 2025',
  openGraph: {
    title: 'Travel',
    description: 'Travel for PyConf Hyderabad 2025',
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
        Travel
      </Heading>
      <MdxLayout>
        <TravelMdx />
      </MdxLayout>
    </section>
  );
}
