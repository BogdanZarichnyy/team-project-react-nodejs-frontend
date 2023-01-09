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
      state.lostFound = payload;
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
      state[payload.category] = [...state[payload.category], payload];
      state.isLoading = false;
      state.error = false;
    },
    addNewAdsFailure: (state, { payload }) => {
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
} = adsSlice.actions;

export default adsSlice.reducer;