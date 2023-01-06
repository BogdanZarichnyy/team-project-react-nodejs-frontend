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
  const { data } = await userApi
    .post('users/registration', userData)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  token.set(data.user.accessToken);
  return data;
};

export const loginUser = async userData => {
  const { data } = await userApi
    .post('users/login', userData)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  token.set(data.user.accessToken);
  return data;
};

export const logOutUser = async () => {
  await userApi.post('users/logout').catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
  token.unset();
  return;
};

export const getCurrentUser = async persistedToken => {
  token.set(persistedToken);
  const { data } = await userApi.post('users/current').catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
  return data;
};

export const updateCurrentUser = async userData => {
  const { data } = await userApi
    .patch('users/profile', userData)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  return data;
};
