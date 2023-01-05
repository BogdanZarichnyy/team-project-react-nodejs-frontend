import { userApi } from '../constants/constants';

export const token = {
  set(token) {
    userApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    userApi.defaults.headers.common['Authorization'] = '';
  },
};

export const registerUser = async userData => {
  const { data } = await userApi.post('users/registration', userData);
  token.set(data.user.accessToken);
  return data;
};

export const loginUser = async userData => {
  const { data } = await userApi.post('users/login', userData);
  token.set(data.user.accessToken);
  return data;
};

export const logOutUser = async () => {
  await userApi.post('users/logout');
  token.unset();
  return;
};

export const getCurrentUser = async persistedToken => {
  token.set(persistedToken);
  const { data } = await userApi.post('users/current');
  return data;
};

export const updateCurrentUser = async userData => {
  const { data } = await userApi.patch('users/profile', userData);
  return data;
};
