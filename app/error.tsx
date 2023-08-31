'use client'; //! Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='mt-64 text-center'>
      <h1 className='text-red-600 text-2xl'>Something went wrong</h1>
      <p className='text-red-600 text-xl'>Please try again later.</p>
      <button
        className='bg-[#e50914] text-white px-10 
        mt-5
      py-2 rounded-md font-[500] text-xl'
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
    </div>
  );
}
