import '@styles/globals.scss';
import Head from 'next/head';
// import Script from 'next/script';
import type { AppProps } from 'next/app';

import Meta from '@utils/meta';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Meta
        title="Carberra"
        description="The home of Carberra. Regardless of whether you're a budding programmer or an avid computer user, this is the place for you."
      />
      {
        //@ts-ignore
        <Component {...pageProps} />
      }
      {/* <Script */}
      {/*   src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`} */}
      {/* /> */}
    </div>
  );
}
