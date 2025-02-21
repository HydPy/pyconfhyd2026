import React from 'react';
import { BLOGS } from '@/blogs';
import BlogPostItem from '@/components/BlogPostItem';
import Link from 'next/link';
import { Heading } from '@/components/Typography';

const BlogList = () => {
  return (
    <section className="flex flex-col items-center py-6 w-11/12 lg:w-5/6 mx-auto">
      <Heading
        tagLevel={1}
        level={1}
        className="text-center my-8 text-secondary-600 dark:text-secondary-400"
      >
        Blog
      </Heading>
      <ul className='w-full lg:w-8/12'>
        {BLOGS.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.slug}`}>
            <li>
              <BlogPostItem blog={blog} />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default BlogList;
