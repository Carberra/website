import React from 'react';

interface Props {}

export const Navbar: React.FC<Props> = () => {
  return (
    <nav className="h-14 bg-black flex justify-center items-center border-solid border-b-2 border-white sticky w-full">
      <p className="text-white font-brand text-xl">Navbar</p>
    </nav>
  );
};
