import Head from 'next/head';
import React from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import rehypeRaw from 'rehype-raw';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';

interface Props {}

const PrivacyPolicy: React.FC<Props> = () => {
  const policyContent = `
Organisation: Carberra Tutorials  
Contact email: ${process.env.NEXT_PUBLIC_EMAIL_TO}  
Last updated: 8 Oct 2022  

## Definitions

**"Site"** -- this website  
**"Organisation"** -- the organisation in which the Site is an asset  
**"User"** -- any user of the Site  

## Information we collect

The Site does not collect any personal information automatically from the User, nor does it store tracking information such
as cookies in the browser.

## Information we share

None!

## Changes and questions

This privacy policy may be updated at any time to reflect changes in regulations or changes made to the Site.

If you have any questions regarding this policy, feel free to contact the Organisation using the email address at the top of the page.
  `;

  return (
    <div>
      <Head>
        <title>Privacy Policy | Carberra Tutorials</title>
        <meta
          name="description"
          content="The privacy policy for the Carberra Tutorials website"
        />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex justify-center">
          <h1 className="text-brand-gradient font-brand text-4xl text-center mt-10 mb-5 uppercase">
            Privacy Policy
          </h1>
        </div>
        <div className="grow font-sans text-white text-md mt-4 mx-6 sm:mx-10 md:w-text md:mx-auto">
          <ReactMarkdown
            children={policyContent}
            className="text-white font-sans unreset markdown grow"
            remarkPlugins={[remarkGfm, remarkSlug]}
            rehypePlugins={[rehypeRaw]}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
