import Head from 'next/head';
import React from 'react';

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Meta: React.FC<Props> = (props) => {
  return (
    <Head>
      {/* Primary meta tags */}
      <title>{props.title}</title>
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />
      <meta name="keywords" content="carberra, carberra tutorials" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://carberra.xyz/" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta
        property="og:image"
        content="/assets/images/meta/home-preview.jpg"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://carberra.xyz/" />
      <meta property="twitter:title" content={props.title} />
      <meta property="twitter:description" content={props.description} />
      <meta
        property="twitter:image"
        content="/assets/images/meta/home-preview.jpg"
      />

      {/* Favicon */}
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
      <meta name="apple-mobile-web-app-title" content="Carberra" />
      <meta name="application-name" content="Carberra" />
      <meta name="msapplication-TileColor" content="#0c0c0c" />
      <meta name="theme-color" content="#ffffff" />

      {/* Child head elements */}
      {props.children}
    </Head>
  );
};

export default Meta;
