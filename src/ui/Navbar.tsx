import React from 'react';

interface Props {}

export const Navbar: React.FC<Props> = () => {
  return (
    <nav className="h-14 bg-black flex justify-center items-center">
      <p className="text-white font-brand text-xl">Navbar</p>
    </nav>
  );
};
