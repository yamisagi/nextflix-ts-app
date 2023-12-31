'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { currentUser } = useAuthContext();
  console.log(currentUser);
  let router = useRouter();
  useEffect(() => {
    if (currentUser !== null) {
      router.push('/movies');
    }
  }, [currentUser]);
  return (
    <div
      className="relative h-screen w-full bg-[url('/images/hero.jpg')] 
      bg-no-repeat bg-center bg-fixed bg-cover"
    >
      <div className='bg-black w-full h-full bg-opacity-50'>
        <div className='text-white text-center relative top-2/4 m-auto'>
          <h1 className='text-5xl font-[900] text-center mb-3'>
            Unlimited movies, TV shows, and more
          </h1>
          <p className='text-2xl font-[400] '>
            Watch anywhere. Cancel anytime.
          </p>
          <p className='text-2xl mt-1 font-[400] '>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className='flex align-middle justify-center mt-5'>
            <Link href={'/register'}>
              <button className='bg-[#e50914] text-white px-10 py-2 rounded-md font-[500] text-xl'>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
