import { Heading, Paragraph } from '@/components/Typography';
import VenueContent from '../../../components/VenueContent';

export const metadata = {
  title: 'Venue',
  description: 'Workshop and Conference venues for PyConf Hyderabad 2026',
  openGraph: {
    title: 'Venue',
    description: 'Workshop and Conference venues for PyConf Hyderabad 2026',
  },
};

export default function Page() {
  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <div className="text-center my-8">
        <Heading
          tagLevel={1}
          level={1}
          className="text-primary-600 dark:text-primary-400 mb-4"
        >
          Venue
        </Heading>
      </div>

      <VenueContent />
    </section>
  );
}
