import { Heading, Span } from '@/components/Typography';
import InfoAlert from '@/components/InfoAlert';

import Tickets from '@/components/Tickets';

export const metadata = {
  title: 'Tickets',
  description: 'Tickets for PyConf Hyderabad 2026',
  openGraph: {
    title: 'Tickets',
    description: 'Tickets for PyConf Hyderabad 2026',
  },
};

export default function Page() {
  return (
    <div>
      <InfoAlert>
        <Span>We are sold out. There are no on-spot tickets.</Span>
      </InfoAlert>
      <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
        <Heading
          tagLevel={1}
          level={1}
          className="text-center my-8 text-secondary-600 dark:text-secondary-400"
        >
          Tickets
        </Heading>
        <Tickets />
      </section>
    </div>
  );
}
