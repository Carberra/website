import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import React from 'react';

import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider } from '@mui/material/styles';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkSlug from 'remark-slug';
import rehypeRaw from 'rehype-raw';

import { getSeriesBySlug, getAllSeries, SeriesType } from '@utils/series';
import Meta from '@utils/meta';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';
import { muiTheme } from '@styles/theme';

interface Props {
  series: SeriesType;
}

const SeriesInfo: React.FC<Props> = ({ series }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !series?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const formatDate = (date: Date) => {
    return (
      date.getDate() +
      ' ' +
      date.toLocaleString('en-US', { month: 'long' }) +
      ', ' +
      date.getFullYear()
    );
  };

  const content =
    series.tagline +
    '\n' +
    `
## Info
*Launch Date: ${formatDate(new Date(series.launch_date))}*  
*Last Updated: ${formatDate(new Date(series.last_updated))}*  
*Status: ${series.status}* <i></i>  
` +
    series.content;

  return (
    <div>
      <Meta title={`${series.title} | Carberra`} description={series.tagline} />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <h1 className="text-brand-gradient font-brand text-4xl text-center mt-10 mb-5 mx-6 uppercase">
          {series.title}
        </h1>

        <div className="flex justify-center mb-6 mt-3 mx-6">
          <iframe
            height="315"
            style={{ maxWidth: 560 }}
            className="w-full"
            src={`https://www.youtube.com/embed/videoseries?list=${series.playlist_link
              .split(/[\=]+/)
              .pop()}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="grow">
          <div className="font-sans text-white text-md mt-4 mx-6 sm:mx-10 md:w-text md:mx-auto">
            <ReactMarkdown
              children={content}
              className="text-white font-sans unreset markdown grow"
              remarkPlugins={[remarkGfm, remarkSlug]}
              rehypePlugins={[rehypeRaw]}
              components={{
                i: () => (
                  <ThemeProvider theme={muiTheme}>
                    <Tooltip title="Learn more" placement="top">
                      <IconButton
                        className="m-0 p-1"
                        href="/series/info/lifecycles"
                        target="_blank"
                      >
                        <InfoIcon className="text-base text-white" />
                      </IconButton>
                    </Tooltip>
                  </ThemeProvider>
                ),
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default SeriesInfo;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const series = getSeriesBySlug(params.slug, [
    'title',
    'tagline',
    'launch_date',
    'last_updated',
    'status',
    'playlist_link',
    'slug',
    'content',
  ]);

  return {
    props: {
      series,
    },
  };
};

export const getStaticPaths = async () => {
  const series = getAllSeries(['slug']);

  return {
    paths: series.map((s) => {
      return { params: { slug: s.slug } };
    }),
    fallback: false,
  };
};
