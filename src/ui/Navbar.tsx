import Link from 'next/link';
import React, { useState } from 'react';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';
import Menu from '@mui/icons-material/Menu';

import { muiTheme } from '@styles/theme';
import styles from '@styles/modules/Navbar.module.scss';

export interface NavbarProps {
  className?: string;
}

interface PageData {
  name: string;
  location: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [drawerState, setDrawer] = useState(false);

  const links: PageData[] = [
    {
      name: 'About',
      location: '/about',
    },
    {
      name: 'Sponsorships',
      location: '/sponsorships',
    },
  ];

  return (
    <nav
      className={`h-14 bg-brand-black-mid flex justify-center items-center sticky z-20 w-full px-10 xs:px-20 ${styles.NavbarShadow} ${className}`}
    >
      <Link href="/">
        <span className="text-2xl font-brand text-brand-gradient uppercase cursor-pointer">
          Carberra
        </span>
      </Link>

      <div className="grow" />

      <div className="hidden md:flex justify-end items-center">
        {links.map((link: PageData, i: number) => (
          <div key={i}>
            <Link href={link.location}>
              <span className="font-sans font-extralight text-xl text-white cursor-pointer ml-10">
                {link.name}
              </span>
            </Link>
          </div>
        ))}
      </div>

      <div className="block md:hidden">
        <ThemeProvider theme={muiTheme}>
          <IconButton
            aria-label="Open navigation"
            className="relative left-3"
            onClick={() => {
              setDrawer(!drawerState);
            }}
          >
            <Menu className="text-white" />
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerState}
            onClose={() => {
              setDrawer(false);
            }}
            PaperProps={{
              sx: {
                background: 'var(--color-brand-black-light)',
                zIndex: 10,
              },
            }}
          >
            <div className="w-40 mt-20">
              {links.map((link: PageData, i: number) => (
                <div key={i} className="mr-10 flex justify-end items-center">
                  <Link href={link.location}>
                    <span className="font-sans font-extralight text-xl text-white cursor-pointer inline-block mb-2">
                      {link.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </Drawer>
        </ThemeProvider>
      </div>
    </nav>
  );
};
