import Head from 'next/head';

import { Navbar } from '@ui/Navbar';

import LogoWhite from '@public/brand/logo-white.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carberra Tutorials</title>
        <meta name="description" content="The home of Carberra Tutorials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="bg-black h-screen-navbar">
        <div className="absolute w-full h-full top-0 left-0 table">
          <div className="table-cell align-middle">
            <div className="w-min ml-auto mr-auto">
              <LogoWhite className="w-44" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
