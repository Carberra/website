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
⚠️ _All prices are listed in GBP. Those outside of the UK must peform
conversion to their local currency._
  `;

  const sponsorshipContentCol1 = `
# To-Camera Integration

A traditional ad read done to camera. These are appended to the end of
the intro, and as such will typically take up the second minute of the
video. Footage and logos etc. can be overlayed.

| Length (~sec)  | Price (GBP) |
| :------------: | :---------: |
| 30             | 150         |
| 45             | 175         |
| 60             | 200         |
| _More_         | _Enquire_   |

# Placement

These come in two types:

**Standard**: A small section of the video into where your product or
service is subtly integrated. These do not include any CTAs.

**Extended**: A section of the video dedicated to your product or
service in the context of the main topic of the video. This could be
using your service to do something with an artefact developed in the
video.

| Type     | Price (GBP) |
| :------: | :---------: |
| Standard | 100         |
| Extended | 250         |

# Dedicated Video

A full video showcasing your product or service. Please note
that due to UK advertising law, these must be labelled as advertisements
in the title or thumbnail.

_Only available for programming topics._

| Price (GBP) |
| :---------: |
| 275         |
  `;

  const sponsorshipContentFooter = `
Discounts for bulk purchases, affiliate programs, and service provisions are available.
  
Please make all enquiries to [carberra.business@gmail.com](mailto:carberra.business@gmail.com).

_Prices last updated 11 May 2025._
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
              children={sponsorshipContentHeader}
              className="font-sans text-white unreset markdown grow max-w-text shrink basis-0"
              remarkPlugins={[remarkGfm, remarkSlug]}
              rehypePlugins={[rehypeRaw]}
            />
          </div>
          <div className="flex justify-center mx-6 mt-4 font-sans text-white text-md sm:mx-10">
            <ReactMarkdown
              children={sponsorshipContentCol1}
              className="font-sans text-white unreset markdown grow max-w-text shrink basis-0 md-fixed-tables"
              remarkPlugins={[remarkGfm, remarkSlug]}
              rehypePlugins={[rehypeRaw]}
            />
          </div>
          <div className="flex justify-center mx-6 mt-4 font-sans text-white text-md sm:mx-10">
            <ReactMarkdown
              children={sponsorshipContentFooter}
              className="font-sans text-white unreset markdown grow max-w-text shrink basis-0 text-center"
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
