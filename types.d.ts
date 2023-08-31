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
  currentUser: CurrentUser;
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
