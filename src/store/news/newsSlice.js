import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newsData: [],
  isLoading: false,
  error: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNewsFetch: state => {
      state.isLoading = true;
    },
    getNewsSuccess: (state, { payload }) => {
      state.newsData = payload;
      state.isLoading = false;
      state.error = false;
    },
    getNewsFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    logOutNewsSuccess: state => {
      return (state = { ...initialState });
    },
  },
});

export const {
  getNewsFetch,
  getNewsSuccess,
  getNewsFailure,
  logOutNewsSuccess,
} = newsSlice.actions;

export default newsSlice.reducer;
