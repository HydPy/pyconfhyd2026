'use client';

import { useEffect, useRef, useState } from 'react';
import { Heading, Paragraph, Span } from '@/components/Typography';

const journeyData = [
  {
    year: '2017',
    title: '1st edition',
    description: 'Python conference in Hyderabad',
    position: 'top',
  },
  {
    year: '2018',
    title: 'PyCon India 10th edition',
    description:
      "Hosted & conducted PyCon India's 10th edition in Hyderabad, achieving record attendance.",
    position: 'bottom',
  },
  {
    year: '2019',
    title: '2nd edition',
    description: 'PyConf Hyderabad',
    position: 'top',
  },
  {
    year: '2020',
    title: '3rd edition',
    description: 'PyConf Hyderabad virtual conference',
    position: 'bottom',
  },
  {
    year: '2022',
    title: '4th edition',
    description: 'PyConf Hyderabad',
    position: 'top',
  },
  {
    year: '2023',
    title: 'PyCon India',
    description:
      'Hosted & conducted the 1st in-person PyCon India after pandemic',
    position: 'bottom',
  },
  {
    year: '2025',
    title: '5th edition',
    description: 'PyConf Hyderabad',
    position: 'top',
  },
];

const Star = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 md:w-8 md:h-8 text-accent-500 ${className}`}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const TimelineItem = ({ item, index, isVisible }) => {
  const isTop = item.position === 'top';

  return (
    <div
      className={`
        relative flex flex-col items-center
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : isTop ? 'opacity-0 -translate-y-8' : 'opacity-0 translate-y-8'}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Content for top items */}
      {isTop && (
        <div className="text-center mb-4 px-2">
          <Heading tagLevel={3} level={4} className="text-accent-500 mb-1">
            {item.year}
          </Heading>
          <Span
            level={3}
            className="font-bold text-gray-900 dark:text-gray-50 block"
          >
            {item.title}
          </Span>
          <Paragraph
            level={4}
            className="text-gray-600 dark:text-gray-300 text-sm max-w-[150px] mx-auto"
          >
            {item.description}
          </Paragraph>
        </div>
      )}

      {/* Star marker */}
      <div
        className={`
        relative z-10
        transition-transform duration-500
        ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}
      `}
        style={{ transitionDelay: `${index * 150 + 200}ms` }}
      >
        <Star />
      </div>

      {/* Content for bottom items */}
      {!isTop && (
        <div className="text-center mt-4 px-2">
          <Heading tagLevel={3} level={4} className="text-accent-500 mb-1">
            {item.year}
          </Heading>
          <Span
            level={3}
            className="font-bold text-gray-900 dark:text-gray-50 block"
          >
            {item.title}
          </Span>
          <Paragraph
            level={4}
            className="text-gray-600 dark:text-gray-300 text-sm max-w-[150px] mx-auto"
          >
            {item.description}
          </Paragraph>
        </div>
      )}
    </div>
  );
};

const MobileTimelineItem = ({ item, index, isVisible }) => {
  return (
    <div
      className={`
        flex items-start gap-4
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Star and line */}
      <div className="flex flex-col items-center">
        <div
          className={`
          transition-transform duration-500
          ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}
        `}
          style={{ transitionDelay: `${index * 150 + 200}ms` }}
        >
          <Star className="w-6 h-6" />
        </div>
        {index < journeyData.length - 1 && (
          <div className="w-1 h-16 bg-secondary-600 mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="pb-6">
        <Heading tagLevel={3} level={5} className="text-accent-500 mb-1">
          {item.year}
        </Heading>
        <Span
          level={3}
          className="font-bold text-gray-900 dark:text-gray-50 block"
        >
          {item.title}
        </Span>
        <Paragraph
          level={4}
          className="text-gray-600 dark:text-gray-300 text-sm"
        >
          {item.description}
        </Paragraph>
      </div>
    </div>
  );
};

const Journey = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="scroll-mt-20 py-16 bg-sky-100 dark:bg-gray-800 overflow-hidden"
    >
      <div className="w-11/12 lg:w-5/6 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading
            tagLevel={2}
            level={1}
            className={`
              mb-4 text-gray-800 dark:text-gray-50
              transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
            `}
          >
            Events Over the Years
          </Heading>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative bg-white dark:bg-gray-700 border-4 border-gray-800 dark:border-gray-600 p-8 mx-4">
            {/* Timeline container */}
            <div className="relative">
              {/* Top row items */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {journeyData.map((item, index) =>
                  item.position === 'top' ? (
                    <div
                      key={item.year}
                      className="flex flex-col items-center justify-end min-h-[140px]"
                    >
                      <div className="text-center px-1">
                        <Heading
                          tagLevel={3}
                          level={5}
                          className={`
                            text-accent-600 dark:text-accent-400 mb-1
                            transition-all duration-700
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
                          `}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          {item.year}
                        </Heading>
                        <Span
                          level={4}
                          className={`
                            font-bold text-gray-900 dark:text-gray-50 block text-sm
                            transition-all duration-700
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
                          `}
                          style={{ transitionDelay: `${index * 100 + 50}ms` }}
                        >
                          {item.title}
                        </Span>
                        <Paragraph
                          level={5}
                          className={`
                            text-gray-600 dark:text-gray-300 text-xs
                            transition-all duration-700
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
                          `}
                          style={{ transitionDelay: `${index * 100 + 100}ms` }}
                        >
                          {item.description}
                        </Paragraph>
                      </div>
                    </div>
                  ) : (
                    <div key={item.year} className="min-h-[140px]" />
                  )
                )}
              </div>

              {/* Timeline bar with stars */}
              <div className="relative">
                {/* Red timeline bar */}
                <div
                  className={`
                    h-3 bg-secondary-600 dark:bg-secondary-500 rounded-sm
                    transition-all duration-1000 ease-out origin-left
                    ${isVisible ? 'scale-x-100' : 'scale-x-0'}
                  `}
                />

                {/* Stars positioned on the bar */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 grid grid-cols-7 gap-2">
                  {journeyData.map((item, index) => (
                    <div
                      key={`star-${item.year}`}
                      className="flex justify-center"
                    >
                      <div
                        className={`
                          transition-all duration-500
                          ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}
                        `}
                        style={{ transitionDelay: `${index * 100 + 300}ms` }}
                      >
                        <Star className="w-7 h-7 drop-shadow-md" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom row items */}
              <div className="grid grid-cols-7 gap-2 mt-4">
                {journeyData.map((item, index) =>
                  item.position === 'bottom' ? (
                    <div
                      key={item.year}
                      className="flex flex-col items-center justify-start min-h-[140px]"
                    >
                      <div className="text-center px-1">
                        <Heading
                          tagLevel={3}
                          level={5}
                          className={`
                            text-accent-600 dark:text-accent-400 mb-1
                            transition-all duration-700
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                          `}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          {item.year}
                        </Heading>
                        <Span
                          level={4}
                          className={`
                            font-bold text-gray-900 dark:text-gray-50 block text-sm
                            transition-all duration-700
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                          `}
                          style={{ transitionDelay: `${index * 100 + 50}ms` }}
                        >
                          {item.title}
                        </Span>
                        <Paragraph
                          level={5}
                          className={`
                            text-gray-600 dark:text-gray-300 text-xs
                            transition-all duration-700
                            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                          `}
                          style={{ transitionDelay: `${index * 100 + 100}ms` }}
                        >
                          {item.description}
                        </Paragraph>
                      </div>
                    </div>
                  ) : (
                    <div key={item.year} className="min-h-[140px]" />
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="bg-white dark:bg-gray-700 border-4 border-gray-800 dark:border-gray-600 p-6">
            {journeyData.map((item, index) => (
              <MobileTimelineItem
                key={item.year}
                item={item}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
