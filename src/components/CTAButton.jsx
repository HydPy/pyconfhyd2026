import Link from 'next/link';
import { Span } from '@/components/Typography';
import Icon from '@/components/Icon';

const CTAButton = ({
  href,
  label,
  icon = '',
  iconSize = 20,
  variant = 'primary',
  className = '',
  target = '_blank',
  rel = 'noopener noreferrer',
}) => {
  const variantStyles = {
    primary: 'bg-primary-500 hover:bg-primary-700 text-gray-50',
    secondary: 'bg-secondary-500 hover:bg-secondary-700 text-gray-50',
    accent: 'bg-accent-500 hover:bg-accent-700 text-gray-900',
  };

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        className="flex justify-center"
        rel={rel}
      >
        <button
          className={`inline-flex mt-2 sm:mr-4 items-center px-5 py-3 font-bold text-lg border-4 border-gray-900 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all transform ${variantStyles[variant]} ${className}`}
        >
          {icon && <Icon name={icon} size={iconSize} />}
          <Span className={icon ? 'ml-2' : ''}>{label}</Span>
        </button>
      </Link>
    );
  }
  return (
    <button
      className={`inline-flex mt-2 sm:mr-4 items-center px-5 py-3 font-bold text-lg border-4 border-gray-900 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all transform ${variantStyles[variant]} ${className}`}
    >
      {icon && <Icon name={icon} size={iconSize} />}
      <Span className={icon ? 'ml-2' : ''}>{label}</Span>
    </button>
  );
};

export default CTAButton;
