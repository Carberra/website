import Link from 'next/link';
import React from 'react';

export interface NavbarProps {
  className?: string;
}

interface PageData {
  name: string;
  location: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const links: PageData[] = [
    {
      name: 'About',
      location: 'about',
    },
    {
      name: 'Contact',
      location: 'contact',
    },
  ];

  return (
    <nav
      className={`h-14 bg-brand-black flex justify-center items-center sticky w-full px-20 ${className}`}
    >
      <Link href="/">
        <span className="text-2xl font-brand text-brand-gradient lowercase cursor-pointer">
          Carberra
        </span>
      </Link>
      <div className="flex-grow"></div>
      <div className="flex justify-end items-center">
        {links.map((link: PageData, i: number) => (
          <div key={i}>
            <Link href={link.location}>
              <span className="font-sans text-xl text-white cursor-pointer pl-10">
                {link.name}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};
