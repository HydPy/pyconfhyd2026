import WelcomeGuideMdx from '@/welcomeGuide.mdx';
import MdxLayout from '@/components/MdxLayout';
import { Heading } from '@/components/Typography';

export const metadata = {
  title: 'Welcome Guide',
  description: 'Welcome Guide for PyConf Hyderabad 2025',
  openGraph: {
    title: 'Welcome Guide',
    description: 'Welcome Guide for PyConf Hyderabad 2025',
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
        Welcome Guide
      </Heading>
      <MdxLayout>
        <WelcomeGuideMdx />
      </MdxLayout>
    </section>
  );
}
