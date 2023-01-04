import { userApi } from '../constants/constants';

export const registerUser = async (email, password, displayName) => {
  console.log('userdata', email, password, displayName);
  const data = await userApi.get('users/registration');
  return data;
};

export const getCurrentUser = async () => {
  const data = userApi.get();
  return data;
};
