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
  const sponsorshipContent = `
# Integrations

## Intros

These go in the intro, after the premise has been introduced, but before
the main body of the video begins. These are done to camera, though
footage can be overlayed.

| Length (sec) | Price (GBP) | Price (USD) |
| ------------ | ----------- | ----------- |
| 30-45        | **200**     | **250**     |
| 46-60        | **250**     | **320**     |
| 61+          | _Enquire_   | _Enquire_   |

## Placements

Placements are done in the main body of the video. These will showcase
the product/service with no mentions, links, or calls to action. For
these, see Dedicated/Videos.

| Price (GBP) | Price (USD) |
| ----------- | ----------- |
| **150**     | **190**     |

# Dedicated

## Videos

Dedicated videos are only available for programming content. For other
content, see Integrations or Dedicated/Shorts.

Please note that due to UK advertising law, these must be labelled as
advertisements in the thumbnail.

| Length (min) | Price (GBP) | Price (USD) |
| ------------ | ----------- | ----------- |
| 0-15         | **250**     | **320**     |
| 16-20        | **300**     | **380**     |
| 21+          | _Enquire_   | _Enquire_   |

## Shorts

Please note that due to UK advertising law, the titles of these must
start with #ad.

| Length (sec) | Price (GBP) | Price (USD) |
| ------------ | ----------- | ----------- |
| 0-30         | **150**     | **190**     |
| 31-45        | **200**     | **250**     |
| 46-60        | **250**     | **320**     |
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
          <h1 className="text-brand-gradient font-brand text-4xl text-center mt-10 mb-5 uppercase">
            Sponsorships
          </h1>
        </div>
        <div className="grow">
          <div className="font-sans text-white text-md mt-4 mx-6 sm:mx-10 md:w-text md:mx-auto">
            <ReactMarkdown
              children={sponsorshipContent}
              className="text-white font-sans unreset markdown grow"
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
