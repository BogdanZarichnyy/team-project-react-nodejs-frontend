import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    userId: '',
    name: '',
    email: '',
    photo: '',
    birthday: '',
    phone: '',
    city: '',
    favoritesAds: [],
    accessToken: '',
  },
  token: '',
  isLoading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUserFetch: state => {
      state.isLoading = true;
    },
    registerUserSuccess: (state, { payload }) => {
      state.userData = payload;
      state.isLoading = false;
    },
    registerUserFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    loginUserFetch: state => {
      state.isLoading = true;
    },
    loginUserSuccess: (state, { payload }) => {
      state.userData = payload;
      state.token = payload.accessToken;
      state.isLoading = false;
    },
    loginUserFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    getUserFetch: state => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.userData = payload;
      state.isLoading = false;
    },
    getUserFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    logOutUserFetch: state => {
      state.isLoading = true;
    },
    logOutUserSuccess: state => {
      state.userData = {
        userId: '',
        name: '',
        email: '',
        photo: '',
        birthday: '',
        phone: '',
        city: '',
        favoritesAds: [],
        accessToken: '',
      };
      state.token = '';
      state.isLoading = false;
      state.error = false;
    },
    logOutUserFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    updateUserFetch: state => {
      state.isLoading = true;
    },
    updateUserSuccess: (state, { payload }) => {
      state.userData = payload;
      state.isLoading = false;
    },
    updateUserFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  registerUserFetch,
  registerUserSuccess,
  registerUserFailure,
  loginUserFetch,
  loginUserSuccess,
  loginUserFailure,
  getUserFetch,
  getUserSuccess,
  getUserFailure,
  logOutUserFetch,
  logOutUserSuccess,
  logOutUserFailure,
  updateUserFetch,
  updateUserSuccess,
  updateUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
