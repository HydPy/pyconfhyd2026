import Link from 'next/link';
import { FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';

import { Heading } from '@/components/Typography';
import Paragraph from '@/components/Paragraph';

const Job = ({ job }) => {
  // Check if both buttons exist
  const hasApplyButton = !!job.jobApplicationLink;
  const hasEmailButton = !!job.email;
  const singleButton = hasApplyButton !== hasEmailButton; // True if only one button exists

  return (
    <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 gap-4 shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 h-full">
      
      {/* Job Title with Fixed Height */}
      <div className="flex items-center justify-center text-lg font-semibold text-center h-[50px] px-4">
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

      {/* Job Description with Fixed Height & Ellipsis */}
      <div className="h-[70px] overflow-hidden text-center text-gray-700 dark:text-gray-300 text-sm">
        {job.jobDescription ? (
          <Paragraph text={job.jobDescription} numberOfLines={3} />
        ) : (
          <span className="italic text-gray-400">No description available</span>
        )}
      </div>

      {/* Button Container (Ensures Consistent Position) */}
      <div className={`flex gap-4 mt-auto pb-4 ${singleButton ? 'justify-center' : 'justify-between'}`}>
        {hasApplyButton && (
          <Link
            href={job.jobApplicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-600 hover:text-secondary-950 dark:text-secondary-400 dark:hover:text-gray-50 text-sm px-4 py-2 rounded-lg shadow-md"
          >
            Apply Now
          </Link>
        )}
        
        {hasEmailButton && (
          <a
            href={`mailto:${job.email}`}
            className="text-secondary-600 hover:text-secondary-950 dark:text-secondary-400 dark:hover:text-gray-50 flex items-center gap-2 text-sm px-4 py-2 rounded-lg shadow-md"
          >
            <FaEnvelope /> Email
          </a>
        )}
      </div>

    </div>
  );
};

export default Job;
