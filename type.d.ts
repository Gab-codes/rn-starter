type SignUpForm = {
  name: string;
  email: string;
  password: string;
};

type SignInForm = {
  email: string;
  password: string;
};

type LoginError = {
  code: string;
  message: string;
  timeStamp: string;
};

type User = {
  active: boolean;
  addressLine1: string;
  addressLine2: string;
  city: string;
  country: string;
  createdDate: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  phoneNumber: string;
  profileComplete: boolean;
  reference: string;
  state: string;
};

// define the store shape
type AuthStore = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  setUser: (user: User, token: string) => void;
  logout: () => void;
  getUser: () => User | null;
};
