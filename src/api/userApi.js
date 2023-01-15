import { setToken, unsetToken } from './main';
import { URL } from '../constants';
import axios from 'axios';

const userBaseUrl = `${URL.BASE}${URL.USERS}`;

export const registerUser = async userData => {
  const { data } = await axios.post(
    `${userBaseUrl}${URL.REGISTRATION}`,
    userData
  );
  setToken(data.user.accessToken);
  return data;
};

export const loginUser = async userData => {
  const { data } = await axios.post(`${userBaseUrl}${URL.LOGIN}`, userData);
  setToken(data.user.accessToken);
  return data;
};

export const logOutUser = async () => {
  await axios.get(`${userBaseUrl}${URL.LOGOUT}`);
  unsetToken();
  return;
};

export const getCurrentUser = async persistedToken => {
  setToken(persistedToken);
  const { data } = await axios.get(`${userBaseUrl}${URL.CURRENT}`);
  return data;
};

export const updateCurrentUser = async userData => {
  const { data } = await axios.patch(`${userBaseUrl}${URL.PROFILE}`, userData);
  return data;
};

export const updateAvatarUser = async userData => {
  const { data } = await axios.post(`${userBaseUrl}${URL.AVATAR}`, userData);
  return data;
};

export const restorePassword = async email => {
  const { data } = await axios.post(`${userBaseUrl}${URL.FORGOT}`, email);
  return data;
};
