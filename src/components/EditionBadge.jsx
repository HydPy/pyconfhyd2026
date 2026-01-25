'use client';

import Image from 'next/image';
import { useTheme } from '@/components/ThemeContext';

const EditionBadge = () => {
  const { theme } = useTheme();

  const badgeSrc =
    theme === 'dark'
      ? '/images/6thEditionBadgeLight.png'
      : '/images/6thEditionBadgeDark.png';

  return (
    <div className="flex justify-center w-full my-2">
      <Image
        src={badgeSrc}
        alt="PyConf Hyderabad 6th Edition Badge"
        width={300}
        height={86}
        style={{ height: 'auto' }}
        priority={true}
      />
    </div>
  );
};

export default EditionBadge;
