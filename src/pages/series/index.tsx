import Link from 'next/link';
import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import { getAllSeries, SeriesType } from '@utils/series';
import Meta from '@utils/meta';

import { Navbar } from '@ui/Navbar';
import { Footer } from '@ui/Footer';
import { muiTheme } from '@styles/theme';

interface Props {
  allSeries: SeriesType[];
}

const Series: React.FC<Props> = ({ allSeries }: Props) => {
  return (
    <div>
      <Meta
        title="Series | Carberra"
        description="A catalog of all of the series on the Caberra channel and information about them."
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex justify-center">
          <h1 className="text-brand-gradient font-brand text-4xl text-center mt-10 mb-5 uppercase">
            Series
          </h1>
        </div>
        <div className="grow mx-4 lg:mx-24">
          <div className="flex flex-wrap justify-center mt-4 child:mx-5 child:mb-10">
            <ThemeProvider theme={muiTheme}>
              {allSeries.map((series) => (
                <Card
                  sx={{ maxWidth: 345 }}
                  className="outline-brand-gradient flex flex-col"
                  key={series.slug}
                >
                  <div className="overflow-hidden">
                    <Link href={`/series/${series.slug}`}>
                      <CardMedia
                        component="img"
                        height="140"
                        className="transform scale-[1.04] hover:cursor-pointer"
                        image={series.thumbnail}
                        alt={series.title}
                      />
                    </Link>
                  </div>
                  <CardContent className="grow">
                    <Link href={`/series/${series.slug}`}>
                      <h1 className="font-sans text-2xl font-bold italic mb-2 hover:cursor-pointer">
                        {series.title}
                      </h1>
                    </Link>
                    <p className="font-sans font-light">{series.tagline}</p>
                  </CardContent>
                  <CardActions className="pt-0 pb-4">
                    <Chip
                      label={series.status.toUpperCase()}
                      className={`ml-2 mr-3 child:mt-[0.2em] ${
                        series.status.toLowerCase() == 'active'
                          ? 'bg-green-700'
                          : series.status.toLowerCase() == 'dormant'
                          ? 'bg-yellow-700'
                          : series.status.toLowerCase() == 'finished' ||
                            series.status.toLowerCase() == 'cancelled'
                          ? 'bg-red-700'
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
    'last_updated',
    'status',
    'slug',
  ]);

  return {
    props: { allSeries },
  };
};
