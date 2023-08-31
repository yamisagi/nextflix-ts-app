'use client';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PrivateLayout({ children }: Props) {
  const { currentUser } = useAuthContext();
  let router = useRouter();
  useEffect(() => {
    const userString = sessionStorage.getItem('user') as string;
    const user = JSON.parse(userString);
    console.log(user);
    if (user === 'returningUser') {
      router.push('/login');
    }
  }, [currentUser]);

  return <section>{children}</section>;
}
