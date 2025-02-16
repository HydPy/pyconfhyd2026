'use client';

import { useState } from 'react';

const Paragraph = ({
  text,
  isHtml = false,
  numberOfLines = 3,
  expanded = false,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='relative text-gray-700 dark:text-gray-300 text-sm'>
      {isHtml ? (
        <p
          className={`${className} ${isExpanded ? '' : 'line-clamp-3'} m-0`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ) : (
        <p className={`${className} ${isExpanded ? '' : 'line-clamp-3'} m-0`}>
          {text}
        </p>
      )}

      {text.length > 100 && ( // Show the toggle only if the text is long enough
        <button
          onClick={toggleText}
          className='text-blue-500 hover:text-blue-700 text-xs mt-1'
        >
          {isExpanded ? 'Hide' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default Paragraph;
