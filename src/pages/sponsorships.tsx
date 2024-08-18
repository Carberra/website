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
# Integrations

## Intros

These go in the intro, after the premise has been introduced, but before
the main body of the video begins. These are done to camera, though
footage can be overlayed.

| Length (sec) | Price (GBP) | Price (USD) |
| ------------ | ----------- | ----------- |
| 30-45        | 200         | 250         |
| 46-60        | 250         | 320         |
| 61+          | _Enquire_   | _Enquire_   |

## Placements

Placements are done in the main body of the video. These will showcase
the product/service with no mentions, links, or calls to action. For
these, see Dedicated/Videos.

| Price (GBP) | Price (USD) |
| ----------- | ----------- |
| 150         | 190         |
  `;

  const sponsorshipContentCol2 = `
# Dedicated

## Videos

Dedicated videos are only available for programming content. For other
content, see Integrations or Dedicated/Shorts.

Please note that due to UK advertising law, these must be labelled as
advertisements in the thumbnail.

| Length (min) | Price (GBP) | Price (USD) |
| ------------ | ----------- | ----------- |
| 0-15         | 250         | 320         |
| 16-20        | 300         | 380         |
| 21+          | _Enquire_   | _Enquire_   |

## Shorts

Please note that due to UK advertising law, the titles of these must
start with #ad.

| Length (sec) | Price (GBP) | Price (USD) |
| ------------ | ----------- | ----------- |
| 0-30         | 150         | 190         |
| 31-45        | 200         | 250         |
| 46-60        | 250         | 320         |
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
            <div className="flex flex-col gap-8 md:flex-row">
              <ReactMarkdown
                children={sponsorshipContentCol1}
                className="font-sans text-white unreset markdown grow max-w-text shrink basis-0"
                remarkPlugins={[remarkGfm, remarkSlug]}
                rehypePlugins={[rehypeRaw]}
              />
              <ReactMarkdown
                children={sponsorshipContentCol2}
                className="font-sans text-white unreset markdown grow max-w-text shrink basis-0"
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
