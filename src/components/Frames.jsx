import Image from 'next/image';
import { Heading, Span } from '@/components/Typography';

export function TextFrame({ names, className }) {
	return (
	  <div className={`relative flex flex-wrap justify-start my-4 ${className}`}>
		{names.map((text, index) => (
		  <Span key={index} className="mr-3">
			• {text.name}
		  </Span>
		))}
	  </div>
	);
  }
  
export function PeoplePhotoFrame({ images, className }) {
	return (
	  <>
		<div
		  className={`relative not-prose flex flex-wrap justify-center gap-2 ${className}`}
		>
		  {images.map((image, index) => (
			<figure className="relative w-20 h-20 lg:w-24 lg:h-24" key={index}>
			  <Image
				className="object-cover rounded-lg shadow-lg"
				src={image.imgUrl}
				alt={image.imgAlt}
				fill
			  />
			  <figcaption className="sr-only">{image.imgAlt}</figcaption>
			</figure>
		  ))}
		</div>
	  </>
	);
  }
  
export function SponsorPhotoFrame({ images, className }) {
	return (
	  <>
		<div
		  className={`relative not-prose flex flex-wrap justify-center gap-2  ${className}`}
		>
		  {images.map((image, index) => (
			<figure
			  className="relative bg-gray-50 dark:bg-gray-100 shadow-md rounded-lg w-24 h-24 lg:w-32 lg:h-32"
			  key={index}
			>
			  <Image
				className="object-contain rounded-lg shadow-lg px-4"
				src={image.imgUrl}
				alt={image.imgAlt}
				fill
			  />
			  <figcaption className="sr-only">{image.imgAlt}</figcaption>
			</figure>
		  ))}
		</div>
	  </>
	);
  }