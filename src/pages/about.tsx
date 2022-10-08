import Head from 'next/head';
import React from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import rehypeRaw from 'rehype-raw';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';

interface Props {}

const About: React.FC<Props> = () => {
  const aboutContent = `
Welcome to Carberra! Here we (or really, I) do programming tutorials and the like for the internet. I sort of
fell into this position by accident; I'd been on YouTube for a long time (mainly gaming videos), and thought to myself
"I should really do programming stuff, seen as that's what I spend most of my time doing anyways". And now here I am a
couple of years later with a decently sized community and a website that someone else offered to make for me, wondering
how I even got myself in this position.

If you're curious about who **I** am, my name is Ethan, I'm in my early twenties (stuff updating this paragraph every year),
and I'm studying for a Master's in Computer Science. You could argue that a student teacher is a little like the blind
leading the blind, but as a student, you learn all the time! I'm just trying to drill the knowledge I've obtained over
the last however many aeons into as many people as possible in the vague hope that I can prevent people making the same
mistakes I did. Though saying that, I **do** wear glasses, so make of that what you will.

In terms of the channel (the main attraction around here) I predominately work with Python, but there's some other stuff
knocking about, with more in the woodworks, if you're interested in it. Either way, everything's on the front page, so
go check if out for yourself, and maybe stick around if you like what you see I suppose.

I'll leave you with this saying that I accidently stole from *Portal 2* without realising when trying to come up with a
tagline: **the future starts with you**.
  `;

  return (
    <div>
      <Head>
        <title>About | Carberra</title>
        <meta name="description" content="Learn about Carberra" />
      </Head>
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
