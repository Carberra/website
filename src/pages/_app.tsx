import '@styles/globals.scss';
import Head from 'next/head';
import Script from 'next/script';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Carberra Tutorials</title>
        <meta name="description" content="The home of Carberra Tutorials" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#0c0c0c"
        />
        <meta name="apple-mobile-web-app-title" content="Carberra Tutorials" />
        <meta name="application-name" content="Carberra Tutorials" />
        <meta name="msapplication-TileColor" content="#0c0c0c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
      />
    </div>
  );
}

export default App;
