import Link from 'next/link';

import MdxLayout from '@/components/MdxLayout';
import { Heading, Paragraph, Span } from '@/components/Typography';
import { KEY_LINKS } from '@/conference';
import JobBoardMdx from '@/job-board.mdx';
import JobPost from '@/components/JobPost';

import fetchSheetData from '@/utils/googleSheets';

const fetchJobsData = async () => {
  try {
    const sheetId = '1r3qh6BzaYkurmO7N-diIz6xQbGaThJ4FO4Vd1PJldiU';
    const sheetIndex = 0;
    const jobsData = await fetchSheetData(sheetId, sheetIndex);
    const approvedJobs = jobsData
      .filter((job) => job.Approved === 'TRUE')
      .map((row) => ({
        email: row['Email'],
        companyName: row['Company Name'],
        companyDescription: row['Company Description'],
        companyWebsite: row['Company Website'],
        jobTitle: row['Job Title'],
        jobType: row['Job Type'],
        jobDescription: row['Job Description'],
        jobLocation: row['Job Location'],
        jobApplicationLink: row['Job Application Link'],
        skills: row['Skills (Optional)'],
        comments: row['Comments'],
      }));
    return approvedJobs;
  } catch (error) {
    console.error('Error fetching jobs data:', error);
    return [];
  }
};

export default async function JobBoard() {
  const approvedJobs = await fetchJobsData();
  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        Job Board
      </Heading>
      <MdxLayout>
        <JobBoardMdx />
      </MdxLayout>
      <div className="flex flex-col space-y-4 my-4 justify-center items-center">
        <Link href="/job-board-rules-guidelines" target="_self">
          <Span className="underline">Rules and Guidelines</Span>
        </Link>
        <Link
          href={KEY_LINKS.jobBoardFormUrl}
          target="_blank"
          className="my-2 px-10 py-3 bg-secondary-600 hover:bg-secondary-700 border rounded-lg"
          rel="noopener noreferrer"
        >
          <div className="inline-flex items-center font-medium text-gray-50">
            <Span>{KEY_LINKS.jobBoardFormLabel}</Span>
          </div>
        </Link>
      </div>
      {Array.isArray(approvedJobs) && approvedJobs.length === 0 && (
        <Paragraph className="my-2 text-center">
          With the conference now behind us, all job postings have been removed.
        </Paragraph>
      )}
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {approvedJobs.map((job, index) => (
          <JobPost key={index} job={job} />
        ))}
      </div>
    </section>
  );
}
