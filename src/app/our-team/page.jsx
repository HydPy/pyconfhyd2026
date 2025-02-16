import Volunteer from '@/components/Volunteer';
import { Heading } from '@/components/Typography';

import { VOLUNTEERS } from '@/volunteers';

const sortedVolunteers = [...VOLUNTEERS].sort((a, b) =>
  a.name.localeCompare(b.name)
);

export default function Page() {
  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        Our Team
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedVolunteers.map((volunteer, index) => (
          <Volunteer key={index} volunteer={volunteer} />
        ))}
      </div>
    </section>
  );
}
