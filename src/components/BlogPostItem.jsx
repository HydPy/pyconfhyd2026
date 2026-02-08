import Icon from '@/components/Icon';
import { Span, Heading, Paragraph } from '@/components/Typography';

const BlogPostItem = ({ blog }) => {
  return (
    <article className="flex flex-col gap-2 p-6 my-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 justify-between items-center mb-2 text-gray-500">
        <Span className="bg-accent-200 text-gray-900 dark:bg-accent-900 dark:text-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
          <Icon name="Announcement" size={16} className="mr-2" />
          {blog.category || 'Announcement'}
        </Span>
        <Span className="text-gray-600 dark:text-gray-100">
          {new Date(blog.publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </Span>
      </div>
      <Heading
        level={4}
        tagLevel={2}
        className="text-primary-600 dark:text-primary-400"
      >
        {blog.title}
      </Heading>
      <Span className="font-medium text-gray-950 dark:text-gray-50">
        Author: {blog.author}
      </Span>
      <Span className="font-semibold text-gray-950 dark:text-gray-50 hover:underline">
        Read more
      </Span>
    </article>
  );
};

export default BlogPostItem;
