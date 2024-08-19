import React from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import rehypeRaw from 'rehype-raw';

import Meta from '@utils/meta';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';

interface Props {}

const About: React.FC<Props> = () => {
  const aboutContent = `
Welcome to Carberra! Here we (or really, I) do programming tutorials and the like for
the internet. It's not my first rodeo at this -- before this, I ran a gaming channel (of
all things) called Superboo. That started in 2012, so that should give you an idea how
long I've been doing this! Carberra itself started in 2019, though in reality, it's
really just a combination of older ideas.

My first attempts at programming videos were all the way back in 2016. I'd recently done
some other various tutorials on my old channel, and had started learning to program in
school about a year earlier, so I thought why not! I quickly learned that I wasn't in a
position to be teaching anyone yet, so I ended up scrapping the idea. After spending a
lot of time developing Discord bots for others, I finally found the perfect avenue to
give it another shot.

Bizarelly, Discord bots are also where the name came from as well. A lot of the bots I
was developing shared the same core functionality, and so I wanted to create a shareable
framework that all these bots used. This framework was called "Carberra", [borrowed and
adapted from TVR](https://en.wikipedia.org/wiki/TVR_Cerbera), and was a complete
failure. I liked the name so much though that it lived on, and will now live on forever
(or at least until YouTube shuts down their servers). Even the original logo came from
an old Discord bot of mine, but that logo is _long_ gone now.

As for me, my name is [Ethan](https://tenor.com/en-GB/search/ethan-gifs), and a lot has
happened in the years since I started the channel. When it started, I was in my first
year of university studying Computer Science; now I've graduated with a master's degree
(with distinction) and have a job in the AgTech industry! I've leared a lot from running
this channel though, both self-taught topics for videos, as well as listening to others
that should probably be running this channel instead of me.

Er, but, yeah. Like and subscribe or something. [Idk](https://party.carberra.xyz).
  `;

  return (
    <div>
      <Meta
        title="About | Carberra"
        description="Who is Carberra?"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex justify-center">
          <h1 className="text-brand-gradient font-brand text-4xl text-center mt-10 mb-5 uppercase">
            About
          </h1>
        </div>
        <div className="grow">
          <div className="font-sans text-white text-md mt-4 mx-6 sm:mx-10 md:w-text md:mx-auto">
            <ReactMarkdown
              children={aboutContent}
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

export default About;
