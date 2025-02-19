import Link from 'next/link';
import { Heading, Span, Paragraph } from '@/components/Typography';
import Icon from '@/components/Icon';

const JobPost = ({ job }) => {
  return (
    <div className="flex flex-col gap-2 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
      <Heading
        tagLevel={2}
        level={5}
        className="font-semibold text-gray-950 dark:text-gray-50"
      >
        {job.jobTitle}
      </Heading>
      <Heading
        tagLevel={3}
        level={6}
        className="text-secondary-600 dark:text-secondary-400"
      >
        <Link
          href={job.companyWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {job.companyName}
        </Link>
      </Heading>
      {(job.jobType || job.jobLocation) && (
        <Span className="text-gray-600 dark:text-gray-400">
          {job.jobType} {job.jobType && job.jobLocation && '|'}{' '}
          {job.jobLocation}
        </Span>
      )}
      {job.jobDescription && (
        <Paragraph className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
          {job.jobDescription}
        </Paragraph>
      )}
      <div className="flex gap-4 py-4">
        {job.jobApplicationLink && (
          <Link
            href={job.jobApplicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center px-4 py-2 bg-secondary-600 hover:bg-secondary-700 text-gray-50 rounded-lg shadow-md"
          >
            <Icon name="ArrowCircleRight" size={18} className="mr-2" />
            <Span>Apply</Span>
          </Link>
        )}

        {job.email && (
          <Link
            href={`mailto:${job.email}`}
            className="flex justify-center items-center px-4 py-2 bg-secondary-600 hover:bg-secondary-700 text-gray-50 rounded-lg shadow-md"
          >
            <Icon name="Envelope" size={18} className="mr-2" />
            <Span>Email</Span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default JobPost;
