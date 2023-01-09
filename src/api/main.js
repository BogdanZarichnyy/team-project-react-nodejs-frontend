import axios from 'axios';

import { BASE_URL } from '../constants/constants';

export const userApi = axios.create({
  // withCredentials: true,
  baseURL: `${BASE_URL}users/`,
});

export const adsApi = axios.create({
  // withCredentials: true,
  baseURL: `${BASE_URL}notices/`,
});

export const friendsApi = axios.create({
  // withCredentials: true,
  baseURL: `${BASE_URL}ours_friends/`,
});

export const newsApi = axios.create({
  // withCredentials: true,
  baseURL: `${BASE_URL}news/`,
});

export const petsApi = axios.create({
  // withCredentials: true,
  baseURL: `${BASE_URL}pets/`,
});

const token = () => {
  const setToken = token => {
    userApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    adsApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    petsApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const unsetToken = () => {
    userApi.defaults.headers.common['Authorization'] = '';
    adsApi.defaults.headers.common['Authorization'] = '';
    petsApi.defaults.headers.common['Authorization'] = '';
  };

  return { setToken, unsetToken };
};

export const { setToken, unsetToken } = token();

// TODO activate interceptor with refresh tokens

// userApi.interceptors.response.use(
//   config => {
//     return config;
//   },
//   async error => {
//     const originalRequest = error.config;
//     if (
//       error.response.status === 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       updateToken(originalRequest);
//     }
//     throw error;
//   }
// );

// export const updateToken = async originalRequest => {
//   try {
//     const response = await userApi.get(`users/refresh`);
// //Так же, надо задиспатчить токен в стейт
//     setToken(response.data.accessToken);
//     return userApi.request(originalRequest);
//   } catch (e) {
//     console.log('User unauthorized');
//     throw new Error(e);
//   }
// };

export function apiErrorHandler(error) {
  if (error.response) {
    if (error.response) {
      throw new Error(error.response.status);
    } else if (error.request) {
      throw new Error(error.request);
    } else {
      throw new Error(error.message);
    }
  }
}
