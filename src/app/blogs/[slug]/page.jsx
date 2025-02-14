import MdxLayout from '@/components/MdxLayout';
import { Heading, Paragraph, Span } from '@/components/Typography';
import { BLOGS } from '@/blogs';
import Icon from '@/components/Icon';
import Link from 'next/link';

export function generateStaticParams() {
  return BLOGS.map((blog) => ({ slug: blog.slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  const blog = BLOGS.find((s) => s.slug === slug);

  // Redirect to 404
  if (!blog) {
    return null;
  }

  return (
    <section className="flex flex-col items-center justify-center py-6 w-10/12 lg:w-9/12 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        {blog.title}
      </Heading>
      <div className="flex flex-col items-end w-full gap-1 mb-5">
        <Span level={3}>Author: {blog.author}</Span>
        <Span level={3}>Published: {blog.publishedAt}</Span>
      </div>
      <MdxLayout>{blog.markdownComponent}</MdxLayout>
      <div className="flex mt-8 mb-4 gap-4">
        {blog.socials?.map((social) => (
          <Link
            key={social.name}
            className="text-secondary-600 hover:text-secondary-950 dark:text-secondary-400 dark:hover:text-gray-50"
            href={social.url}
            target="_blank"
            title={social.ariaLabel}
            aria-label={social.ariaLabel}
            rel="noopener noreferrer"
          >
            <Icon name={social.name} />
          </Link>
        ))}
      </div>
    </section>
  );
}
