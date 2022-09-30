import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const seriesDirectory = join(process.cwd(), 'src/_series');

export const getSeriesSlugs = () => {
  return fs.readdirSync(seriesDirectory);
};

export const getSeriesBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(seriesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  fields.forEach((field) => {
    if (field == 'slug') items[field] = realSlug;
    if (field == 'content') items[field] = content;

    if (typeof data[field] !== 'undefined') items[field] = data[field];
  });

  return items;
};

export const getAllSeries = (fields: string[] = []) => {
  const slugs = getSeriesSlugs();
  return slugs
    .map((slug) => getSeriesBySlug(slug, fields))
    .sort((series1, series2) =>
      series1.last_updated > series2.last_updated ? -1 : 1
    );
};

export type SeriesType = {
  slug: string;
  title: string;
  tagline: string;
  thumbnail: string;
  launch_date: string;
  last_updated: string;
  status: string;
  playlist_link: string;
  content: string;
};
