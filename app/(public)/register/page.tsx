'use client';
import GoogleIcon from '@/public/icons/GoogleIcon';
import { useAuthContext } from '@/context/AuthContext';
import React, { useState } from 'react';
import PrivateLayout from '@/app/(private)/layout';

const Register = () => {

  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { firstName, lastName, email, password } = info;
  const { createUser, signUpProvider } = useAuthContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const displayName = `${firstName} ${lastName}`;
    e.preventDefault();
    createUser(email, password, displayName);

    console.log(firstName, lastName);
  };

  const handleProviderLogin = () => {
    signUpProvider();
  };

  return (
    <PrivateLayout>
      <div className="relative h-screen w-full bg-[url('/images/hero.jpg)] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className='bg-black w-full h-full lg:bg-opacity-50'>
          <div className='flex justify-center'>
            <div className='bg-black bg-opacity-70 px-16 py-16 self-center relative top-28 lg:w-2/5 lg:max-w-md rounded-md w-full'>
              <form onSubmit={handleSubmit}>
                <h2 className='text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3'>
                  Sign Up
                </h2>
                <div className='relative z-0 w-full mb-6 group text-white'>
                  <input
                    name='floating_text'
                    className='peer text-white'
                    type='text'
                    required
                    placeholder=' '
                    onChange={(e) =>
                      setInfo({ ...info, firstName: e.target.value })
                    }
                  />
                  <label htmlFor='floating_text'>First Name</label>
                </div>
                <div className='relative z-0 w-full mb-6 group'>
                  <input
                    name='floating_text'
                    className='peer text-white'
                    type='text'
                    required
                    placeholder=' '
                    onChange={(e) =>
                      setInfo({ ...info, lastName: e.target.value })
                    }
                  />
                  <label htmlFor='floating_text'>Last Name</label>
                </div>
                <div className='relative z-0 w-full mb-6 group'>
                  <input
                    name='floating_email'
                    className='peer text-white'
                    type='email'
                    placeholder=' '
                    required
                    onChange={(e) =>
                      setInfo({ ...info, email: e.target.value })
                    }
                  />
                  <label htmlFor='floating_email'>Email</label>
                </div>
                <div className='relative z-0 w-full mb-6 group'>
                  <input
                    name='floating_password'
                    className='peer text-white'
                    type='password'
                    placeholder=' '
                    required
                    onChange={(e) =>
                      setInfo({ ...info, password: e.target.value })
                    }
                  />
                  <label htmlFor='floating_password'>Password</label>
                </div>
                <button className='btn-danger' type='submit'>
                  Register
                </button>
                <button
                  className='flex justify-between text-center items-center btn-danger'
                  type='button'
                  onClick={handleProviderLogin}
                >
                  Continue with Google
                  <GoogleIcon color='currentColor' />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PrivateLayout>
  );
};

export default Register;
