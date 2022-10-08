import '@styles/globals.scss';
// import Script from 'next/script';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
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
