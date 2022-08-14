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
Last updated: 2 Oct 2021  

## Definitions

**"Site"** -- this website  
**"Organisation"** -- the organisation in which the Site is an asset  
**"User"** -- any user of the Site  

## Information we collect

The Site does not collect any personal information automatically from the User, nor does it store tracking information such
as cookies in the browser. Anonymous usage data is collected via Plausible Analytics for statistical purposes. You can read
more in their [privacy policy](https://plausible.io/privacy).

Some manual data is collected from the User in the following situations:

- When using the contact form -- the User's name and email address are collected in order to be able to reply to their query if necessary

## Information we share

The User's name and email address are shared with the Organisation upon completing the contact form. No other information
is shared between or sold to any member of the Organisation nor any third parties at any point.

## Our usage of collected information

The name and email address of the User are used to provide the Organisation with the necessary information to be able to process
the query. This information is kept until a notification of contact and the information itself has been sent to the Organisation,
after which it is deleted.

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
        <h1 className="text-brand-gradient font-brand text-4xl text-center mt-10 mb-5 uppercase">
          Privacy Policy
        </h1>
        <div className="font-sans text-white text-md mt-4 mx-6 sm:mx-10 md:mx-20 lg:w-7/12 lg:mx-auto">
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
