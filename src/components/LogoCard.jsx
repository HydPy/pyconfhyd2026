import Link from 'next/link';
import Image from 'next/image';

const LogoImage = ({ imgUrl, imgAlt, size = 200 }) => {
  return (
    <div className="flex w-100 flex-col p-4 items-center bg-gray-50 dark:bg-gray-200 transition-all duration-300 transform border-2 border-gray-900 rounded-lg sm:hover:-translate-y-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]">
      <div style={{ width: size, height: size }}>
        <div className="relative h-full w-full">
          <Image className="object-contain" src={imgUrl} alt={imgAlt} fill />
        </div>
      </div>
    </div>
  );
};

const LogoCard = (details) => {
  return (
    <>
      {details.hyperLink ? (
        <Link
          href={details.hyperLink}
          target="_blank"
          rel="noopener noreferrer"
          className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg"
        >
          <LogoImage {...details} />
        </Link>
      ) : (
        <div className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded-lg">
          <LogoImage {...details} />
        </div>
      )}
    </>
  );
};

export default LogoCard;
