type SignUpForm = {
  name: string;
  email: string;
  password: string;
};

type SignInForm = {
  email: string;
  password: string;
};

type BackendError = {
  code: string;
  message: string;
  timeStamp: string;
};
