import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Heading, Paragraph, Span } from '@/components/Typography';
import { Icon } from '@/components/Icon';

import { VOLUNTEERS } from '@/volunteers';

export function generateStaticParams() {
  return VOLUNTEERS.map((volunteer) => ({ slug: volunteer.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const volunteer = VOLUNTEERS.find((v) => v.slug === slug);

  if (!volunteer) {
    return {
      title: 'Volunteer',
      description: 'Volunteer details for PyConf Hyderabad 2026',
    };
  }

  return {
    title: `${volunteer.name}`,
    description: `Volunteer profile of ${volunteer.name} at PyConf Hyderabad 2026`,
    openGraph: {
      title: `${volunteer.name}`,
      description: `Volunteer profile of ${volunteer.name} at PyConf Hyderabad 2026`,
    },
  };
}

export default async function VolunteerPage({ params }) {
  const { slug } = await params;
  const volunteer = VOLUNTEERS.find((v) => v.slug === slug);

  if (!volunteer) return notFound();

  return (
    <section className="flex flex-col py-6 mt-8 w-11/12 lg:w-5/6 mx-auto">
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src={volunteer.imgUrl}
                alt={volunteer.imgAlt || volunteer.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <Heading
            level={3}
            tagLevel={1}
            className="mt-6 mb-2 text-center text-gray-950 dark:text-gray-50"
          >
            {volunteer.name}
          </Heading>
          {volunteer.title && (
            <Span
              level={2}
              className="text-center text-gray-950 dark:text-gray-50"
            >
              {volunteer.title}
            </Span>
          )}
          {volunteer.role && (
            <Span
              level={2}
              className="text-center text-gray-950 dark:text-gray-50 font-semibold"
            >
              {volunteer.role}
            </Span>
          )}
          {volunteer.bio && (
            <>
              <Paragraph
                level={3}
                className="text-left my-2 font-semibold text-gray-950 dark:text-gray-50"
              >
                About
              </Paragraph>
              <Paragraph
                className="mb-2 text-gray-600 dark:text-gray-400"
                dangerouslySetInnerHTML={{ __html: volunteer.bio }}
              ></Paragraph>
            </>
          )}
          {volunteer.socials && volunteer.socials.length > 0 && (
            <div
              className={`flex my-4 gap-4 ${!volunteer.bio && 'justify-center'}`}
            >
              {volunteer.socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-secondary-600 hover:text-secondary-950 dark:text-secondary-400 dark:hover:text-gray-50"
                >
                  <Icon name={social.name} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
