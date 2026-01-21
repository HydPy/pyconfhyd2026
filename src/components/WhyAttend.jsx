import { Heading, Paragraph } from '@/components/Typography';
import { WHY_ATTEND_INFO, WHY_ATTEND } from '@/whyAttend';
import Icon from '@/components/Icon';

const ReasonCard = ({ reason }) => {
  return (
    <div
      className="
        flex flex-col
        bg-white dark:bg-gray-800
        shadow-md
        hover:shadow-xl
        transition-shadow duration-300
		    hover:-translate-y-1
        p-6
        border-b-2 border-transparent
        hover:border-primary-600 dark:hover:border-primary-400
      "
    >
      {/* Icon Section */}
      <div className="mb-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-xl w-fit">
        <Icon
          name={reason.icon}
          size={24}
          className="text-primary-600 dark:text-primary-400"
        />
      </div>

      {/* Content Section */}
      <div>
        <Heading
          tagLevel={3}
          level={6}
          className="mb-3 text-gray-900 dark:text-gray-50"
        >
          {reason.title}
        </Heading>

        <Paragraph level={4} className="text-gray-600 dark:text-gray-300">
          {reason.description}
        </Paragraph>
      </div>
    </div>
  );
};

const WhyAttend = () => {
  return (
    <section
      id="why-attend"
      className="scroll-mt-20 flex flex-col items-center py-16 w-11/12 lg:w-5/6 mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <Heading
          tagLevel={2}
          level={1}
          className="mb-4 text-primary-600 dark:text-primary-400"
        >
          {WHY_ATTEND_INFO.title}
        </Heading>
        <Paragraph level={2} className="text-gray-600 dark:text-gray-300">
          {WHY_ATTEND_INFO.description}
        </Paragraph>
      </div>

      {/* Cards Grid - 3 columns on large screens, 2 on medium, 1 on small */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 xl:w-3/4">
        {WHY_ATTEND.map((reason) => (
          <ReasonCard key={reason.id} reason={reason} />
        ))}
      </div>
    </section>
  );
};

export default WhyAttend;
