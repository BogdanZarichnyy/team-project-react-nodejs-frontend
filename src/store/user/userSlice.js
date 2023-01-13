import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
      state.error = false;
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
      state.error = false;
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
      state.error = false;
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
      state.error = false;
    },
    logOutUserSuccess: state => {
      localStorage.removeItem('persist:user');
      state.isLoggedIn = 'rejected';
      state.error = false;
    },
    logOutUserFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    updateUserFetch: (state, { payload }) => {
      state.isLoading = true;
      state.error = false;
    },
    updateUserSuccess: (state, { payload }) => {
      state.userData = payload;
      state.isLoading = false;
      state.error = false;
    },
    updateUserFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    updateAvatarFetch: state => {
      state.isLoading = true;
      state.error = false;
    },
    updateAvatarSuccess: (state, { payload }) => {
      state.userData = payload;
      state.isLoading = false;
      state.error = false;
    },
    updateAvatarFailure: (state, { payload }) => {
      if (payload.response.status < 200 || payload.response.status >= 300) {
        state.userData = { ...state.userData, avatar: '' };
      }
      state.isLoading = false;
      state.error = payload;
    },
    getPetsFetch: state => {
      state.isPetsLoading = true;
      state.error = false;
    },
    getPetsSuccess: (state, { payload }) => {
      state.userPets = payload;
      state.isPetsLoading = false;
      state.error = false;
    },
    getPetsFailure: (state, { payload }) => {
      state.isPetsLoading = false;
      state.error = payload;
    },
    addPetFetch: state => {
      state.isPetsLoading = true;
      state.error = false;
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
      state.error = false;
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
    restorePasswordFetch: (state, { payload }) => {
      state.error = false;
    },
    restorePasswordSuccess: state => {
      state.error = false;
    },
    restorePasswordFailure: (state, { payload }) => {
      state.error = payload;
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(PURGE, state => {
  //     storage.remove('user');
  //   });
  // },
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
  updateAvatarFetch,
  updateAvatarSuccess,
  updateAvatarFailure,
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
