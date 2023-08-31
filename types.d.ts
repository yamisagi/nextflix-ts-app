type MovieDetailProp = {
  params: {
    id: string;
  };
};

interface CurrentUser {
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

type AuthContextType = {
  createUser: (email: string, password: string, displayName: string) => void;
  signIn: (email: string, password: string) => void;
  logOut: () => void;
  currentUser: CurrentUser | null;
  signUpProvider: () => void;
  forgotPassword: (email: string) => void;
};

type Props = {
  children: React.ReactNode;
};

type RegisterProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type Movie = {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

interface MovieDetailParams {
  movieId: number;
}
