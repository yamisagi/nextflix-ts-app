'use client';
import React from 'react';
import UserCard from './UserCard';
import { useAuthContext } from '@/context/AuthContext';

const images = [
  '/images/default-blue.png',
  '/images/default-red.png',
  '/images/default-slate.png',
  '/images/default-green.png',
];

const CardContainer = () => {
  const { currentUser } = useAuthContext();
  return (
    <div
      className='
        w-full mt-10
        grid grid-cols-2 gap-4
        md:grid-cols-4 md:gap-8
        lg:grid-cols-5 lg:gap-10
        xl:grid-cols-6 xl:gap-12
        2xl:grid-cols-7 2xl:gap-14
        3xl:grid-cols-8 3xl:gap-16
    '
    >
      <UserCard
        image={images[0]}
        name={currentUser?.displayName || 'Guest-1'}
      />
      <UserCard image={images[1]} name={'Guest-2'} />
      <UserCard image={images[2]} name={'Guest-3'} />
      <UserCard image={images[3]} name={'Guest-4'} />
    </div>
  );
};

export default CardContainer;
