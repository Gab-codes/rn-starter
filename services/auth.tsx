import api from '@/lib/api';

export const loginFn = async (email: string, password: string) => {
  const response = await api.post('customer/signin', {
    email,
    password,
  });

  return response.data;
};

// export const signUpFn = async () => {
//   const response = await api.post('customer/register', {
//     firstName,
//     lastName,
//     email,
//     password,

//   });

//   return response.data;
// };
