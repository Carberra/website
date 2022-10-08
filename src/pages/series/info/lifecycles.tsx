import Head from 'next/head';
import React from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import rehypeRaw from 'rehype-raw';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';

interface Props {}

const SeriesLifecycles: React.FC<Props> = () => {
  const lifecyclesContent = `
Every tutorial series (episodic or otherwise) has one of four statuses that denote whether it is still receiving updates, and whether you can get support for it.

## Active

If a series is active, it is still receiving updates. You will be able to get support for it in the comments or in the Discord server.

## Dormant

If a series is dormant, it is not currently receiving updates, but may receive some in the future. If it does, it will become active again. You may be able to get support in the comments or in the Discord server depending on how long the series has been dormant.

## Finished

If a series is finished, all planned content has been completed, and it will no longer receive updates. A finished series may or may not be broken, depending on the state of the libraries used within it. You may still be able to get support in the comments or in the Discord server depending on whether the series still works.

## Cancelled

Same as finished, but where the series was not completed. You will not be able to get support for the series.
`;

  return (
    <div>
      <Head>
        <title>Series Lifecycles | Carberra</title>
        <meta
          name="description"
          content="Carberra video series lifecycle information"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex justify-center">
          <h1 className="text-brand-gradient font-brand text-4xl mt-10 mb-5 mx-6 uppercase text-center">
            Series Lifecycles
          </h1>
        </div>

        <div className="grow">
          <div className="font-sans text-white text-md mt-4 mx-6 sm:mx-10 md:w-text md:mx-auto">
            <ReactMarkdown
              children={lifecyclesContent}
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

export default SeriesLifecycles;
