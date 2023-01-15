import axios from 'axios';
import { store } from '../store';
import { setRejectedLoginStatus } from '../store/user';

const token = () => {
  const setToken = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const unsetToken = () => {
    axios.defaults.headers.common['Authorization'] = '';
  };

  return { setToken, unsetToken };
};

export const { setToken, unsetToken } = token();

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log('intercepter error');
    if (error.response.status === 401) {
      store.dispatch(setRejectedLoginStatus());
    }

    return Promise.reject(error);
  }
);

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
