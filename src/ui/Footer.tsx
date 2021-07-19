import Link from 'next/link';
import React from 'react';

import LogoWhite from '@public/brand/logo-white.svg';

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-900 h-20 flex w-full items-center text-gray-200">
      <div className="pl-20 pr-5">
        <LogoWhite className="w-12" />
      </div>
      <div className="flex justify-start w-full pl-5 pr-10 font-sans text-md">
        <span className="pr-5 hover:underline">
          <Link href="/">Privacy Policy</Link>
        </span>
        <span className="hover:underline">
          <Link href="/">Terms of Use</Link>
        </span>
      </div>
      <div className="flex justify-end w-full px-20">
        <p className="font-sans text-md">
          Copyright (©) {new Date().getFullYear()} Carberra Tutorials
        </p>
      </div>
    </footer>
  );
};
