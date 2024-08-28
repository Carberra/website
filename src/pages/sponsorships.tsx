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
| :----------: | :---------: | :---------: |
| 0-5*         | 50          | 65          |
| 30-45        | 200         | 250         |
| 46-60        | 250         | 320         |
| 61+          | _Enquire_   | _Enquire_   |

_*These take the form of a quick mention._

## Placements

Placements are done in the main body of the video. These will showcase
the product/service with no mentions, links, or calls to action.

| Price (GBP) | Price (USD) |
| :---------: | :---------: |
| 150         | 190         |

## Other Integrations

Please enquire for more information on other integration styles.
  `;

  const sponsorshipContentCol2 = `
# Dedicated

## Videos

These are only available for programming-related products and services.
If you're looking to advertise something that is not programming
related, please see **Integrations**.

| Length (min) | Price (GBP) | Price (USD) |
| :----------: | :---------: | :---------: |
| 0-15         | 300         | 380         |
| 16+          | _Enquire_   | _Enquire_   |

_Please note that due to UK advertising law, these must be labelled as
advertisements in the title or thumbnail._

## Shorts

| Length (sec) | Price (GBP) | Price (USD) |
| :----------: | :---------: | :---------: |
| 0-30         | 150         | 190         |
| 31-45        | 200         | 250         |
| 46-60        | 250         | 320         |

_Please note that due to UK advertising law, the titles of these must
start with #ad._
  `;

  const sponsorshipContentFooter = `
Please make enquiries to [carberra.business@gmail.com](mailto:carberra.business@gmail.com).

_Prices last updated 19 Aug 2024._
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
