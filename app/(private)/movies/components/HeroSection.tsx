import React from 'react';
import VideoSection from './VideoSection';
import { getVideoKey } from '@/utils/tmdbFunctions';
import Link from 'next/link';
import { PlayIcon } from '@heroicons/react/24/solid';

const HeroSection = async ({
  title,
  overview,
  id,
}: {
  title: string;
  overview: string;
  id: number;
}) => {
  const videoKey = await getVideoKey(id);
  return (
    <div
      className='relative w-full max-w-[100vw] overflow-hidden rounded-md 
    flex flex-col md:flex-row md:items-center'
    >
      <VideoSection videoKey={videoKey} />

      <div
        className='md:absolute md:top-2/3 md:left-16 lg:left-32 xl:left-40 md:transform md:-translate-y-1/2
    flex flex-col justify-center items-center md:items-start md:justify-start md:ml-4 lg:ml-8 xl:ml-12
    w-full md:w-full lg:w-2/5 xl:w-1/3 h-full md:h-auto md:py-8 lg:py-12 xl:py-16
    px-4 md:px-0 sm:mt-4 
'
      >
        <p
          className='text-white text-base md:text-4xl lg:text-4xl font-bold drop-shadow-xl
        text-center sm:text-sm md:ml-2
        '
        >
          {title}
        </p>

        <p className='text-white text-xs md:text-sm xl:text-lg mt-3 md:mt-8 md:ml-2 drop-shadow-xl md:max-w-2xl'>
          {overview}
        </p>

        <div className='flex items-center mt-3 md:mt-4 md:ml-2 gap-3 text-black hover:text-red'>
          <Link
            href={`/movies/${id}`}
            className='bg-white rounded-md py-1 md:py-2 px-2 md:px-4 text-xs lg:text-lg font-semibold flex items-center hover:bg-neutral-300 transition'
          >
            <PlayIcon className='w-4 md:w-7 mr-1 stroke-current sm:mr-4' />
            Play
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
