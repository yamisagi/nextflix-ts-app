import { getMovies } from '@/utils/tmdbFunctions';
import React from 'react';

export const metadata = {
  title: 'Movies',
};
const Movies = async () => {
  const movies = await getMovies('now_playing');
  console.log(movies);
  return <div>Movies</div>;
};

export default Movies;
