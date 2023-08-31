import { getMovies } from '@/utils/tmdbFunctions';
import React from 'react';
import MovieCard from './MovieCard';

const MovieSection = async ({
  title,
  type,
}: {
  title: string;
  type: string;
}) => {
  const movies: [Movie] = await getMovies(type);
  console.log(movies);
  return (
    <div className='mb-4'>
      <p
        className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4 
      '
      >
        {title}
      </p>
      <div
        className='
        grid 
        place-items-center
        grid-cols-2
        col-gap-2
        xs:grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7
        sm:gap-2 md:gap-2 lg:gap-4 xl:gap-5 2xl:gap-6 
      '
      >
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieSection;
