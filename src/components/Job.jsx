import Link from 'next/link';
import { FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

import { Heading } from '@/components/Typography';
import Paragraph from '@/components/Paragraph';

const Job = ({ job }) => {
  return (
    <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 gap-4 shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
      
      <div className="py-4 flex gap-5 items-center justify-center text-lg font-semibold">
        {job.jobTitle}
      </div>

      <Heading
        tagLevel={2}
        level={5}
        className="my-2 text-center text-secondary-600 dark:text-secondary-400"
      >
        <Link
          className="flex items-center gap-1 text-secondary-600 hover:text-secondary-950 dark:text-secondary-400 dark:hover:text-gray-50"
          href={job.companyWebsite}
          target="_blank"
          rel="noopener noreferrer"
        >
          {job.companyName} <FaExternalLinkAlt size={12} />
        </Link>
      </Heading>

      {/* Job Type & Location in the same line separated by | */}
      {(job.jobType || job.jobLocation) && (
        <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">
          {job.jobType && <span>{job.jobType}</span>}
          {job.jobType && job.jobLocation && <span> | </span>}
          {job.jobLocation && <span>{job.jobLocation}</span>}
        </div>
      )}

      {/* Job Description with Truncated Text */}
      <Paragraph text={job.jobDescription} numberOfLines={3} />

      {/* Apply and Email Buttons */}
      <div className="flex gap-4 mt-4">
        {job.jobApplicationLink && (
          <Link
            href={job.jobApplicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:text-secondary-950 text-white text-sm px-4 py-2 rounded-lg shadow-md"
          >
            Apply Now
          </Link>
        )}

        {job.email && (
          <a
            href={`mailto:${job.email}`}
            className="flex items-center gap-2 bg-primary hover:text-secondary-950 text-gray-800 text-sm px-4 py-2 rounded-lg shadow-md"
          >
            <FaEnvelope /> Email
          </a>
        )}
      </div>
    </div>
  );
};

export default Job;
