'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

import { Heading, Paragraph } from '@/components/Typography';
import { EPIC_FRAMES_INFO, EPIC_FRAMES_IMAGES } from '@/epicFrames';

const SCROLL_SPEED_PX_PER_MS = 0.08; // 80 pixels per second (80/1000 = 0.08)

const EpicFrames = () => {
  const carouselRef = useRef(null);
  const animationFrameRef = useRef(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const totalWidthRef = useRef(0);
  const isPausedRef = useRef(false);

  // Duplicate images for seamless infinite loop
  const duplicatedImages = [...EPIC_FRAMES_IMAGES, ...EPIC_FRAMES_IMAGES];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || EPIC_FRAMES_IMAGES.length === 0) return;

    // Calculate total width once (will recalculate on resize if needed)
    const calculateTotalWidth = () => {
      const firstItem = carousel.firstElementChild;
      if (!firstItem) return 0;
      return firstItem.offsetWidth * EPIC_FRAMES_IMAGES.length;
    };

    totalWidthRef.current = calculateTotalWidth();

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      if (!isPausedRef.current) {
        // Recalculate width on resize (handles responsive changes)
        const currentTotalWidth = calculateTotalWidth();
        if (currentTotalWidth !== totalWidthRef.current) {
          totalWidthRef.current = currentTotalWidth;
        }

        positionRef.current += SCROLL_SPEED_PX_PER_MS * deltaTime;

        // Reset position when scrolled through one complete set for seamless loop
        if (positionRef.current >= totalWidthRef.current) {
          positionRef.current = 0;
        }

        carousel.style.transform = `translateX(-${positionRef.current}px)`;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (EPIC_FRAMES_IMAGES.length === 0) {
    return null;
  }

  return (
    <section
      id="epic-frames"
      className="scroll-mt-20 flex flex-col items-center pt-10 lg:pt-16 pb-6 lg:pb-10 w-11/12 lg:w-5/6 mx-auto"
    >
      <div className="text-center mb-12">
        <Heading
          tagLevel={2}
          level={1}
          className="mb-4 text-primary-600 dark:text-primary-400"
        >
          {EPIC_FRAMES_INFO.title}
        </Heading>
        <Paragraph level={2} className="text-gray-600 dark:text-gray-300">
          {EPIC_FRAMES_INFO.description}
        </Paragraph>
      </div>

      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => (isPausedRef.current = true)}
        onMouseLeave={() => (isPausedRef.current = false)}
      >
        <div ref={carouselRef} className="flex will-change-transform">
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="flex-shrink-0 w-[90%] sm:w-[50%] lg:w-[33%] mr-4"
            >
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpicFrames;
