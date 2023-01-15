import { userApi, setToken, unsetToken, apiErrorHandler } from './main';
import { URL } from '../constants';

export const registerUser = async userData => {
  const { data } = await userApi.post(URL.REGISTRATION, userData);
  setToken(data.user.accessToken);
  return data;
};

export const loginUser = async userData => {
  const { data } = await userApi.post(URL.LOGIN, userData);
  setToken(data.user.accessToken);
  return data;
};

export const logOutUser = async () => {
  await userApi.get(URL.LOGOUT);
  unsetToken();
  return;
};

export const getCurrentUser = async persistedToken => {
  setToken(persistedToken);
  const { data } = await userApi.get(URL.CURRENT);
  return data;
};

export const updateCurrentUser = async userData => {
  const { data } = await userApi.patch(URL.PROFILE, userData);
  return data;
};

export const updateAvatarUser = async userData => {
  const { data } = await userApi.post(URL.AVATAR, userData);
  return data;
};

export const restorePassword = async email => {
  const { data } = await userApi.post(URL.FORGOT, email).catch(apiErrorHandler);
  return data;
};
