import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export type FooterProps = {
  className?: string;
  id?: string;
};

export const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer
      className={`bg-brand-black text-white px-4 md:px-20 py-6 ${props.className}`}
      id={props.id}
    >
      <div className="block md:flex w-full md:items-center md:justify-start">
        <div className="flex md:block justify-center pr-5">
          <Image
            src="/brand/logo-white.png"
            // className="w-16 md:w-12"
            width={40}
            height={40}
            className="m-0 p-0"
          />
        </div>
        <div className="md:justify-start md:pl-5 md:pr-10 font-sans font-light text-md">
          <div className="flex justify-center md:justify-start pt-5 md:pt-0">
            <span className="pr-5 hover:underline">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </span>
          </div>
        </div>
        <div className="md:justify-end flex-grow md:pl-5 pt-2 md:pt-0">
          <p className="font-sans font-light text-md text-center md:text-right">
            Copyright (©) {new Date().getFullYear()} Carberra Tutorials
          </p>
        </div>
      </div>
    </footer>
  );
};
