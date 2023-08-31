import { getMovies } from '@/utils/tmdbFunctions';
import React from 'react';
import MovieSection from './components/MovieSection';
import HeroSection from './components/HeroSection';

export const metadata = {
  title: 'Movies',
};
const Movies = async () => {
  const movies = await getMovies('now_playing');
  console.log(movies);
  return (
    <div className=' bg-gradient-to-r from-[#06202A] to-[#090909]'>
      <HeroSection
        title={movies[0]?.title}
        overview={movies[0]?.overview}
        id={movies[0]?.id}
      />
      <div className='px-4 md:px-12 mt-4 text-lg text-center '>
        <MovieSection title='NOW PLAYING' type='now_playing' />
        <MovieSection title='POPULAR' type='popular' />
        <MovieSection title='TOP RATED' type='top_rated' />
        <MovieSection title='UPCOMING' type='upcoming' />
      </div>
    </div>
  );
};

export default Movies;
