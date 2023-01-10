import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sale: [],
  lostFound: [],
  inGoodHands: [],
  favorite: [],
  personal: [],
  isLoading: false,
  error: false,
};

const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    getSellAdsFetch: state => {
      state.isLoading = true;
    },
    getSellAdsSuccess: (state, { payload }) => {
      state.sale = payload;
      state.isLoading = false;
      state.error = false;
    },
    getSellAdsFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    getFoundAdsFetch: state => {
      state.isLoading = true;
    },
    getFoundAdsSuccess: (state, { payload }) => {
      state.lostFound = payload;
      state.isLoading = false;
      state.error = false;
    },
    getFoundAdsFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    getShareAdsFetch: state => {
      state.isLoading = true;
    },
    getShareAdsSuccess: (state, { payload }) => {
      state.inGoodHands = payload;
      state.isLoading = false;
      state.error = false;
    },
    getShareAdsFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    addNewAdsFetch: state => {
      state.isLoading = true;
    },
    addNewAdsSuccess: (state, { payload }) => {
      state[payload.category] = [payload, ...state[payload.category]];
      state.isLoading = false;
      state.error = false;
    },
    addNewAdsFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    deleteAdsFetch: state => {
      state.isLoading = true;
    },
    deleteAdsSuccess: (state, { payload }) => {
      state[payload.category] = state[payload.category].filter(
        obj => obj._id !== payload._id
      );
      state.isLoading = false;
      state.error = false;
    },
    deleteAdsFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    toggleFavoriteFetch: state => {
      state.isLoading = true;
    },
    toggleFavoriteSuccess: (state, { payload }) => {
      const favoriteItem = state[payload.category].indexOf({
        _id: payload._id,
      });
      console.log('favoriteItem', favoriteItem);
      state[payload.category].favoriteItem = payload;
      state.isLoading = false;
      state.error = false;
    },
    toggleFavoriteFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  getSellAdsFetch,
  getSellAdsSuccess,
  getSellAdsFailure,
  getFoundAdsFetch,
  getFoundAdsSuccess,
  getFoundAdsFailure,
  getShareAdsFetch,
  getShareAdsSuccess,
  getShareAdsFailure,
  addNewAdsFetch,
  addNewAdsSuccess,
  addNewAdsFailure,
  deleteAdsFetch,
  deleteAdsSuccess,
  deleteAdsFailure,
  toggleFavoriteFetch,
  toggleFavoriteSuccess,
  toggleFavoriteFailure,
} = adsSlice.actions;

export default adsSlice.reducer;
