import {
  FaClock,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaHandHoldingHeart,
  FaDiscord,
  FaBlog,
  FaCalendar,
  FaChevronDown,
  FaChevronUp,
  FaLocationDot,
  FaGlobe,
  FaYoutube,
} from 'react-icons/fa6';
import { FaExternalLinkAlt, FaArrowCircleRight } from 'react-icons/fa';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdVolunteerActivism, MdCampaign } from 'react-icons/md';

const icons = {
  Envelope: FaEnvelope,
  Facebook: FaFacebook,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
  X: FaXTwitter,
  HamburgerMenu: GiHamburgerMenu,
  VolunteerActivism: MdVolunteerActivism,
  MdCampaign: MdCampaign,
  Sun: MdLightMode,
  Moon: MdDarkMode,
  HandHoldingHeart: FaHandHoldingHeart,
  Discord: FaDiscord,
  Blog: FaBlog,
  Calendar: FaCalendar,
  ChevronDown: FaChevronDown,
  ChevronUp: FaChevronUp,
  Clock: FaClock,
  LocationDot: FaLocationDot,
  Globe: FaGlobe,
  Youtube: FaYoutube,
  ExternalLink: FaExternalLinkAlt,
  ArrowCircleRight: FaArrowCircleRight,
};

export const Icon = ({ name, size = 36, className = '', padding = 0 }) => {
  const ReactIcon = icons[name];
  const iconProps = {
    size: size,
    className: className,
    style: {
      padding: padding,
    },
  };

  return <ReactIcon {...iconProps} />;
};

export default Icon;
