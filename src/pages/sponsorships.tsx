import React from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import rehypeRaw from 'rehype-raw';

import Meta from '@utils/meta';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';

interface Props {}

const Sponsorships: React.FC<Props> = () => {
  const sponsorshipContentHeader = `
⚠️ _All prices are listed in GBP. If you are outside of the UK, you must
convert these rates to your local currency._
  `;

  const sponsorshipContentCol1 = `
Unfortunately, I am not taking on new sponsorships at this time. Please
come back later.
`;

  const sponsorshipContentFooter = `
Discounts for bulk purchases, affiliate programs, and service provisions are available.
  
Please make all enquiries to [carberra.business@gmail.com](mailto:carberra.business@gmail.com).

_Prices last updated 31 May 2025._
  `;

  return (
    <div>
      <Meta
        title="Sponsorships | Carberra"
        description="Sponsorship information for Carberra"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex justify-center">
          <h1 className="mt-10 mb-5 text-4xl text-center uppercase text-brand-gradient font-brand">
            Sponsorships
          </h1>
        </div>
        <div className="grow">
          <div className="flex justify-center mx-6 mt-4 font-sans text-white text-md sm:mx-10">
            <ReactMarkdown
              children={sponsorshipContentCol1}
              className="font-sans text-white unreset markdown grow max-w-text shrink basis-0 md-fixed-tables"
              remarkPlugins={[remarkGfm, remarkSlug]}
              rehypePlugins={[rehypeRaw]}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Sponsorships;
