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
      state.personal = [payload, ...state.personal];
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
      const ItemCategoryArr = state[payload.category].findIndex(
        obj => obj._id === payload._id
      );
      const ItemFavArr = state.favorite.findIndex(
        obj => obj._id === payload._id
      );
      const ItemOwnArr = state.personal.findIndex(
        obj => obj._id === payload._id
      );

      if (ItemFavArr === -1) {
        state.favorite = [payload, ...state.favorite];
      } else {
        state.favorite = state.favorite.filter(obj => obj._id !== payload._id);
      }
      if (ItemOwnArr !== -1) {
        state.personal[ItemOwnArr] = payload;
      }
      state[payload.category][ItemCategoryArr] = payload;
      state.isLoading = false;
      state.error = false;
    },
    toggleFavoriteFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    getFavoriteAdsFetch: state => {
      state.isLoading = true;
    },
    getFavoriteAdsSuccess: (state, { payload }) => {
      state.favorite = payload;
      state.isLoading = false;
      state.error = false;
    },
    getFavoriteAdsFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    getUserAdsFetch: state => {
      state.isLoading = true;
    },
    getUserAdsSuccess: (state, { payload }) => {
      state.personal = payload;
      state.isLoading = false;
      state.error = false;
    },
    getUserAdsFailure: (state, { payload }) => {
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
  getFavoriteAdsFetch,
  getFavoriteAdsSuccess,
  getFavoriteAdsFailure,
  getUserAdsFetch,
  getUserAdsSuccess,
  getUserAdsFailure,
} = adsSlice.actions;

export default adsSlice.reducer;
