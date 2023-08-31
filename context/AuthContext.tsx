'use client';

import React, { useContext, useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../auth/firebase';
import { errorMessages } from '../utils/errorMessages';
import { toastErrorNotify, toastSuccessNotify } from '../utils/ToastMessage';
import { useRouter } from 'next/navigation';
import { createContext } from 'react';

const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    console.log('create user');
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName,
      });

      console.log(user);
      console.log(user.displayName);
      router.push('/login');
      toastSuccessNotify('User created successfully');
    } catch (error: any) {
      console.log(error.code);
      toastErrorNotify(errorMessages[error.code]);
    }
  };

  const signIn = async (email: string, password: string) => {
    console.log('sign in');
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      toastSuccessNotify('Signed in successfully');
      router.push('/profile');
    } catch (error: any) {
      console.log(error.code);
      toastErrorNotify(errorMessages[error.code]);
    }
  };

  const logOut = () => {
    signOut(auth);
    toastSuccessNotify('Logged out successfully!');
    setCurrentUser(null);
    router.push('/login');
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          'user',
          JSON.stringify({ email, displayName, photoURL })
        );
        console.log(user);
      } else {
        // User is signed out
        sessionStorage.setItem('user', JSON.stringify('returningUser'));
        setCurrentUser(null);
        console.log('logged out');
      }
    });
  };

  const signUpProvider = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toastSuccessNotify('Signed in successfully');
      router.push('/profile');
    } catch (error: any) {
      console.log(error.code);
      console.log(error.message);
      toastErrorNotify(errorMessages[error.code]);
    }
  };

  const forgotPassword = (email: string) => {
    try {
      sendPasswordResetEmail(auth, email);
      toastSuccessNotify('Reset password link sent to your email');
    } catch (error: any) {
      console.log(error.code);
      toastErrorNotify(errorMessages[error.code]);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        createUser,
        signIn,
        logOut,
        currentUser: currentUser,
        signUpProvider,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
