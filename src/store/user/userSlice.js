import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    _id: '',
    name: '',
    email: '',
    photo: '',
    birthday: '',
    phone: '',
    city: '',
    favoritesAds: [],
    accessToken: '',
  },
  userPets: [],
  token: '',
  isLoggedIn: 'idle',
  firstLoad: true,
  isPetsLoading: false,
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
      state.isLoggedIn = 'success';
      state.isLoading = false;
      state.error = false;
    },
    registerUserFailure: (state, { payload }) => {
      state.isLoggedIn = 'rejected';
      state.isLoading = false;
      state.error = payload;
    },
    loginUserFetch: state => {
      state.isLoading = true;
    },
    loginUserSuccess: (state, { payload }) => {
      state.userData = payload;
      state.token = payload.accessToken;
      state.isLoggedIn = 'success';
      state.isLoading = false;
      state.error = false;
    },
    loginUserFailure: (state, { payload }) => {
      state.isLoggedIn = 'rejected';
      state.isLoading = false;
      state.error = payload;
    },
    getUserFetch: state => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.userData = payload;
      state.isLoggedIn = 'success';
      state.isLoading = false;
      state.error = false;
    },
    getUserFailure: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = 'rejected';
      state.error = payload;
    },
    logOutUserFetch: state => {
      state.isLoading = true;
    },
    logOutUserSuccess: state => {
      state.isLoggedIn = 'rejected';
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
      state.error = false;
    },
    updateUserFailure: (state, { payload }) => {
      if (payload.response.status < 200 || payload.response.status >= 300) {
        state.userData = { ...state.userData, avatar: '' };
      }
      state.isLoading = false;
      state.error = payload;
    },
    getPetsFetch: state => {
      state.isPetsLoading = true;
    },
    getPetsSuccess: (state, { payload }) => {
      state.userPets = payload;
      state.firstLoad = false;
      state.isPetsLoading = false;
      state.error = false;
    },
    getPetsFailure: (state, { payload }) => {
      state.isPetsLoading = false;
      state.error = payload;
    },
    addPetFetch: state => {
      state.isPetsLoading = true;
    },
    addPetSuccess: (state, { payload }) => {
      state.userPets = [payload, ...state.userPets];
      state.isPetsLoading = false;
      state.error = false;
    },
    addPetFailure: (state, { payload }) => {
      state.isPetsLoading = false;
      state.error = payload.error;
    },
    deletePetFetch: state => {
      state.isPetsLoading = true;
    },
    deletePetSuccess: (state, { payload }) => {
      state.userPets = state.userPets.filter(obj => obj._id !== payload._id);
      state.isPetsLoading = false;
      state.error = false;
    },
    deletePetFailure: (state, { payload }) => {
      state.isPetsLoading = false;
      state.error = payload;
    },
    restorePasswordFetch: state => {
      state.isPetsLoading = true;
    },
    restorePasswordSuccess: state => {
      state.isPetsLoading = false;
      state.error = false;
    },
    restorePasswordFailure: (state, { payload }) => {
      state.isLoggedIn = 'rejected';
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
  addPetFetch,
  addPetSuccess,
  addPetFailure,
  deletePetFetch,
  deletePetSuccess,
  deletePetFailure,
  getPetsFetch,
  getPetsSuccess,
  getPetsFailure,
  restorePasswordFetch,
  restorePasswordSuccess,
  restorePasswordFailure,
} = userSlice.actions;

export default userSlice.reducer;
