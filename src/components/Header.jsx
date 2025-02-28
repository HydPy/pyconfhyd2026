'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import Icon from '@/components/Icon';
import { Span } from '@/components/Typography';
import { ASSETS } from '@/conference';
import { NAV_ITEMS } from '@/navItems';

const NavItem = ({
  item,
  activePath,
  handleNavItemClick,
  dropDownPath,
  setDropDownPath,
}) => {
  const isDropdownOpen = dropDownPath === item.name;

  const toggleDropdown = () => {
    setDropDownPath(isDropdownOpen ? null : item.name);
  };

  const handleItemClick = (navItem) => {
    handleNavItemClick(navItem);
    setDropDownPath(null); // Close dropdown after click
  };

  return (
    <div className="flex flex-col md:flex-row py-2 px-4 mb-1 md:mb-0 rounded">
      {!item.children ? (
        <Link
          href={item.path}
          className={`${
            activePath === item.path
              ? 'text-primary-700 dark:text-primary-600'
              : 'text-gray-950 dark:text-gray-50'
          }`}
          aria-current={activePath === item.path ? 'page' : undefined}
          onClick={() => handleItemClick(item)}
          target={item.target}
          title={item.name}
        >
          <Span>{item.name}</Span>
        </Link>
      ) : (
        <div
          className={`${
            activePath === item.path || activePath.split('#')[0] === item.path
              ? 'text-primary-700 dark:text-primary-600'
              : 'text-gray-950 dark:text-gray-50'
          }`}
        >
          <button
            onClick={toggleDropdown}
            className="flex items-center text-gray-950 dark:text-gray-50"
            aria-expanded={isDropdownOpen}
          >
            <Span level={3}>{item.name}</Span>
            <Icon
              name={isDropdownOpen ? 'ChevronUp' : 'ChevronDown'}
              className="ml-2"
              size={16}
            />
            <Span className="hidden">ChevronUp</Span>
          </button>
        </div>
      )}
      {item.children && isDropdownOpen && (
        <ul className="relative md:absolute top-full bg-gray-50 dark:bg-gray-900">
          {item.children.map((child, index) => (
            <li key={index} className="mb-1 md:mb-0">
              <Link
                href={child.path}
                className={`block py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                  activePath === child.path
                    ? 'text-primary-700 dark:text-primary-600'
                    : 'text-gray-950 dark:text-gray-50'
                }`}
                onClick={() => handleItemClick(child)}
                target={child.target}
              >
                <Span>{child.name}</Span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Header = ({ themeToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropDownPath, setDropDownPath] = useState(null);

  const pathname = usePathname(); // Extracts the current path
  const searchParams = useSearchParams(); // Extracts the query parameters
  const fullPath = `${pathname}${searchParams ? `${searchParams.toString()}` : ''}`;
  const [activePath, setActivePath] = useState(fullPath);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (item) => {
    if (item.target === '_blank') return;
    setActivePath(item.path || '/'); // Update active path
    setIsMenuOpen(false); // Close mobile menu on item click
  };

  return (
    <header className="bg-gray-50 dark:bg-gray-900 p-4 shadow-lg sticky top-0 z-10">
      <nav className="flex flex-wrap items-center justify-between sm:w-11/12 mx-auto">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          title="Home"
        >
          <Image
            src={ASSETS.navbarLogoUrl}
            alt={ASSETS.navbarimgAlt}
            width={50}
            height={50}
          />
        </Link>
        <div className="flex items-center gap-1">
          <div className="md:hidden">{themeToggle}</div>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-light-100 text-gray-950 dark:text-gray-50"
            aria-controls="navbar-dropdown"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <Span className="sr-only">Open main menu</Span>
            <Icon name="HamburgerMenu" />
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row">
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>
                <NavItem
                  item={item}
                  activePath={activePath}
                  handleNavItemClick={handleNavItemClick}
                  dropDownPath={dropDownPath}
                  setDropDownPath={setDropDownPath}
                />
              </li>
            ))}
            <li className="hidden md:flex">{themeToggle}</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
