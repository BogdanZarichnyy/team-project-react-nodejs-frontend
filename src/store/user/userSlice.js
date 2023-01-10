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
  userPets: null,
  token: '',
  isLoggedIn: false,
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
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = false;
    },
    registerUserFailure: (state, { payload }) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = payload;
    },
    loginUserFetch: state => {
      state.isLoading = true;
    },
    loginUserSuccess: (state, { payload }) => {
      state.userData = payload;
      state.token = payload.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = false;
    },
    loginUserFailure: (state, { payload }) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = payload;
    },
    getUserFetch: state => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.userData = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = false;
    },
    getUserFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    logOutUserFetch: state => {
      state.isLoading = true;
    },
    logOutUserSuccess: () => {},
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
      state.isLoading = true;
    },
    getPetsSuccess: (state, { payload }) => {
      state.userPets = payload;
      state.isLoading = false;
      state.error = false;
    },
    getPetsFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    addPetFetch: state => {
      state.isLoading = true;
    },
    addPetSuccess: (state, { payload }) => {
      state.userPets = [payload, ...state.userPets];
      state.isLoading = false;
      state.error = false;
    },
    addPetFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
    },
    deletePetFetch: state => {
      state.isLoading = true;
    },
    deletePetSuccess: (state, { payload }) => {
      state.userPets = state.userPets.filter(obj => obj._id !== payload._id);
      state.isLoading = false;
      state.error = false;
    },
    deletePetFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    restorePasswordFetch: (state, { payload }) => {
      state.isLoading = true;
    },
    restorePasswordSuccess: state => {
      state.isLoading = false;
      state.error = false;
    },
    restorePasswordFailure: (state, { payload }) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = payload;
    },
    restorePasswordFetch: (state, { payload }) => {
      state.isLoading = true;
    },
    restorePasswordSuccess: state => {
      state.isLoading = false;
      state.error = false;
    },
    restorePasswordFailure: (state, { payload }) => {
      state.isLoggedIn = false;
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
