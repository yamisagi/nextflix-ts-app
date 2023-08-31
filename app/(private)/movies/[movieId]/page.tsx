import { getMovieDetail, getVideoKey } from '@/utils/tmdbFunctions';
import React from 'react';
import VideoSection from '../components/VideoSection';
import Link from 'next/link';
import { BackspaceIcon } from '@heroicons/react/24/solid';

const MovieDetail = async ({
  params: { movieId },
}: {
  params: MovieDetailParams;
}) => {
  const movieDetails = await getMovieDetail(movieId);
  const videoKey = await getVideoKey(movieId);
  console.log(movieId);
  const { title, overview, production_companies } = movieDetails;
  return (
    <div
      className='first-letter:
      capitalize
      bg-gradient-to-r from-[#06202A] to-[#090909]
      h-screen w-full
      flex flex-col items-center justify-center
    '
    >
      {videoKey && <VideoSection videoKey={videoKey} />}
      <p className='text-white text-center text-2xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4'>
        {title}
      </p>
      <p
        className='text-white text-center mt-3 md:mt-4
      px-2 md:px-4
      w-auto text-xs lg:text-lg
      font-semibold flex flex-row items-center
      transition
        max-w-2xl
      '
      >
        {overview}
      </p>
      <div
        className='
        container
        mx-auto
        px-2 md:px-4
        w-2/3 text-xs lg:text-lg
        font-semibold flex flex-col items-center
        transition
        mt-3 md:mt-4
      '
      >
        <h5 className='text-center text-white text-xl my-2'>
          Production Companies
        </h5>
        <div
          className='
        grid
        grid-cols-2
        col-gap-2
        xs:grid-cols-2 sm:grid-cols-3
        md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7
        sm:gap-2 md:gap-2 lg:gap-4 xl:gap-5 2xl:gap-6   
        bg-gradient-to-r from-[#0c82b0] to-[#efe8e8]
        p-2 rounded
        '
        >
          {production_companies.map(
            (company: {
              id: number;
              logo_path: string;
              name: string;
              origin_country: string;
            }) => (
              <div
                className='
                '
                key={company.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                  alt='company-logo'
                  className='w-20 h-20 background-contain object-contain object-center'
                />
              </div>
            )
          )}
        </div>
        <div className='flex items-center mt-3 md:mt-4 gap-3'>
          <Link
            href={'/movies'}
            className='bg-white rounded-md py-1 
          md:py-2 px-2 md:px-4 
          w-auto text-xs lg:text-lg 
          font-semibold flex flex-row items-center 
          hover:bg-neutral-300 transition mt-2
          text-black
          '
          >
            <BackspaceIcon className='w-4 md:w-7 text-black mr-1' />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
