import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    _id: '',
    name: '',
    email: '',
    photo: '',
    birthday: '',
    phone: '',
    city: '',
    favoritesAds: [],
    accessToken: '',
    verify: true,
    verificationToken: '',
  },
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
      state.user = payload;
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
      state.user = payload;
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
      state.user = payload;
      state.isLoading = false;
    },
    getUserFailure: (state, { payload }) => {
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
} = userSlice.actions;

export default userSlice.reducer;
