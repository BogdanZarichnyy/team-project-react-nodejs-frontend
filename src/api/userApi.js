import { userApi, setToken, unsetToken, apiErrorHandler } from './main';

export const registerUser = async userData => {
  const { data } = await userApi
    .post('registration', userData)
    .catch(apiErrorHandler);
  setToken(data.user.accessToken);
  return data;
};

export const loginUser = async userData => {
  const { data } = await userApi.post('login', userData).catch(apiErrorHandler);
  setToken(data.user.accessToken);
  return data;
};

export const logOutUser = async () => {
  await userApi.get('logout').catch(apiErrorHandler);
  unsetToken();
  return;
};

export const getCurrentUser = async persistedToken => {
  setToken(persistedToken);
  const { data } = await userApi.get('current').catch(apiErrorHandler);
  return data;
};

export const updateCurrentUser = async userData => {
  const { data } = await userApi
    .patch('users/profile', userData)
    .catch(apiErrorHandler);
  return data;
};
