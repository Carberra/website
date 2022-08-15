import Head from 'next/head';
import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import { getAllSeries, SeriesType } from '@utils/series';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';
import { muiTheme } from '@styles/theme';

interface Props {
  allSeries: SeriesType[];
}

const Series: React.FC<Props> = ({ allSeries }: Props) => {
  return (
    <div>
      <Head>
        <title>Series | Carberra Tutorials</title>
        <meta name="description" content="Learn about Carberra Tutorials" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <h1 className="text-brand-gradient font-brand text-4xl text-center mt-10 mb-5 uppercase">
          Series
        </h1>
        <div className="grow mx-4 lg:mx-24">
          <div className="flex flex-wrap justify-center mt-4 child:mx-5 child:mb-10">
            <ThemeProvider theme={muiTheme}>
              {allSeries.map((series) => (
                <Card sx={{ maxWidth: 345 }} className="outline-brand-gradient">
                  <div className="overflow-hidden relative">
                    <CardMedia
                      component="img"
                      height="140"
                      className="transform scale-[1.04]"
                      image={series.thumbnail}
                      alt={series.title}
                    />
                  </div>
                  <CardContent>
                    <h1 className="font-sans text-2xl font-bold mb-2">
                      {series.title}
                    </h1>
                    <p className="font-sans font-light">{series.tagline}</p>
                  </CardContent>
                  <CardActions>
                    <Chip
                      label={series.status.toUpperCase()}
                      className={`ml-2 mr-3 child:mt-[0.2em] ${
                        series.status.toLowerCase() == 'active'
                          ? 'bg-green-700/95'
                          : series.status.toLowerCase() == 'dormant'
                          ? 'bg-yellow-700/95'
                          : series.status.toLowerCase() == 'dead'
                          ? 'bg-red-700/95'
                          : ''
                      }`}
                    />
                    <Button size="small" href={`/series/${series.slug}`}>
                      Explore
                    </Button>
                    <Button size="small" href={series.playlist_link}>
                      View on Youtube
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </ThemeProvider>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Series;

export const getStaticProps = async () => {
  const allSeries = getAllSeries([
    'title',
    'tagline',
    'thumbnail',
    'playlist_link',
    'status',
    'slug',
  ]);

  const allSeriesMod = [
    ...allSeries,
    ...allSeries,
    ...allSeries,
    ...allSeries,
    ...allSeries,
  ];

  return {
    props: { allSeries: allSeriesMod },
  };
};
