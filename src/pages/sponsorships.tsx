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
  const sponsorshipContentCol1 = `
# To-Camera Integration

A traditional ad read done to camera. These are appended to the end of
the intro, and as such will typically take up the second minute of the
video. Footage and logos etc. can be overlayed.

| Length (~sec)  | Price (GBP) | Price (USD) |
| :------------: | :---------: | :---------: |
| 30             | 190         | 250         |
| 60             | 225         | 300         |
| 90             | 265         | 350         |

# Placement

These come in two types:

**Standard**: Your product or service used within the video in some way,
for example a tutorial on making requests to APIs using the API your
organisation wants to advertise.

**Extended**: A section of the video talking about your product or
service in the context of the video's main topic, where the product or
service is the main focus for that section.

| Type     | Price (GBP) | Price (USD) |
| :------: | :---------: | :---------: |
| Standard | 150         | 200         |
| Extended | 265         | 350         |

# Dedicated Video

A full video talking about your product or service. Please note that due
to UK advertising law, these must be labelled as advertisements in the
title or thumbnail.

_Only available for programming topics._

| Length (min) | Price (GBP) | Price (USD) |
| :----------: | :---------: | :---------: |
| 0-15         | 265         | 350         |
| 16+          | _Enquire_   | _Enquire_   |
  `;

  const sponsorshipContentFooter = `
Discounts for bulk purchases, affiliate programs, and service provisions are available.
  
Please make all enquiries to [carberra.business@gmail.com](mailto:carberra.business@gmail.com).

_Prices last updated 13 Jan 2024._
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
          <div className="flex justify-center mx-6 mt-4 font-sans text-white text-md sm:mx-10">
            <div className="flex flex-col gap-8 md:flex-row">
              <ReactMarkdown
                children={sponsorshipContentFooter}
                className="font-sans text-white unreset markdown grow max-w-text shrink basis-0 text-center"
                remarkPlugins={[remarkGfm, remarkSlug]}
                rehypePlugins={[rehypeRaw]}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Sponsorships;
