import Icon from '@/components/Icon';
import { Span, Heading, Paragraph } from '@/components/Typography';

const BlogPostItem = ({ blog }) => {
  return (
    <article className="flex flex-col gap-2 p-6 my-6 bg-gray-50 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-wrap gap-2 justify-between items-center mb-2 text-gray-500">
        <Span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
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
        className="text-secondary-600 dark:text-secondary-400"
      >
        {blog.title}
      </Heading>
      <Span className="font-medium dark:text-gray-50">
        Author: {blog.author}
      </Span>
      <Span className="font-medium text-primary-600 dark:text-primary-500 hover:underline">
        Read more
      </Span>
    </article>
  );
};

export default BlogPostItem;
