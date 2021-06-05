import Head from 'next/head';
import { Navbar } from '@ui/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Carberra Tutorials</title>
        <meta name="description" content="The home of Carberra Tutorials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
}
