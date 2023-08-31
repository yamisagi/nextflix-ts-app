'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const defaultImage =
  'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

const MovieCard = ({
  poster_path,
  vote_average,
  title,
  release_date,
  id,
}: {
  poster_path: string;
  vote_average: number;
  title: string;
  release_date: string;
  id: number;
}) => {
  const router = useRouter();

  return (
    <div
      className='w-40 h-[240px] relative cursor-pointer mb-3 
        rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-500
      '
      onClick={() => {
        router.push('movies/' + id);
      }}
    >
      <Image
        src={poster_path ? IMG_API + poster_path : defaultImage}
        width={160}
        height={240}
        alt='movie-card'
      />
      <span className='absolute bottom-1 right-1 text-white font-semibold z-10'>
        {vote_average.toFixed(1)}
      </span>
    </div>
  );
};

export default MovieCard;
