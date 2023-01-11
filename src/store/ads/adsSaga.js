import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  getShareAds,
  getSellAds,
  getFoundAds,
  addNewAds,
  deleteAds,
  toggleFavoriteAds,
  getOwnAds,
  getFavoriteAds,
} from '../../api/adsApi';
import {
  getSellAdsSuccess,
  getSellAdsFailure,
  getFoundAdsSuccess,
  getFoundAdsFailure,
  getShareAdsSuccess,
  getShareAdsFailure,
  addNewAdsSuccess,
  addNewAdsFailure,
  deleteAdsSuccess,
  deleteAdsFailure,
  toggleFavoriteSuccess,
  toggleFavoriteFailure,
  getFavoriteAdsSuccess,
  getFavoriteAdsFailure,
  getUserAdsSuccess,
  getUserAdsFailure,
} from './adsSlice';

function* workGetSellAdsFetch({ payload }) {
  try {
    const data = yield call(getSellAds);
    yield put(getSellAdsSuccess(data));
  } catch (error) {
    yield put(getSellAdsFailure(error.message));
  }
}

function* workGetFoundAdsFetch({ payload }) {
  try {
    const data = yield call(getFoundAds);
    yield put(getFoundAdsSuccess(data));
  } catch (error) {
    yield put(getFoundAdsFailure(error.message));
  }
}

function* workGetShareAdsFetch() {
  try {
    const data = yield call(getShareAds);
    yield put(getShareAdsSuccess(data));
  } catch (error) {
    yield put(getShareAdsFailure(error.message));
  }
}

function* workAddNewAdsFetch({ payload }) {
  try {
    const { ad } = yield call(addNewAds, payload);
    yield put(addNewAdsSuccess(ad));
  } catch (error) {
    yield put(addNewAdsFailure(error.message));
  }
}

function* workDeleteAdsFetch({ payload }) {
  try {
    const data = yield call(deleteAds, payload);
    yield put(deleteAdsSuccess(data));
  } catch (error) {
    yield put(deleteAdsFailure(error.message));
  }
}

function* workToggleFavoriteFetch({ payload }) {
  try {
    const { data } = yield call(toggleFavoriteAds, payload);
    yield put(toggleFavoriteSuccess(data));
  } catch (error) {
    yield put(toggleFavoriteFailure(error.message));
  }
}

function* workGetFavoriteAdsFetch() {
  try {
    const data = yield call(getFavoriteAds);
    yield put(getFavoriteAdsSuccess(data));
  } catch (error) {
    yield put(getFavoriteAdsFailure(error.message));
  }
}

function* workGetUserAdsFetch() {
  try {
    const data = yield call(getOwnAds);
    yield put(getUserAdsSuccess(data));
  } catch (error) {
    yield put(getUserAdsFailure(error.message));
  }
}

function* watchGetSellAds() {
  yield takeLatest('ads/getSellAdsFetch', workGetSellAdsFetch);
}

function* watchGetFoundAds() {
  yield takeLatest('ads/getFoundAdsFetch', workGetFoundAdsFetch);
}

function* watchGetShareAds() {
  yield takeLatest('ads/getShareAdsFetch', workGetShareAdsFetch);
}

function* watchAddNewAds() {
  yield takeLatest('ads/addNewAdsFetch', workAddNewAdsFetch);
}

function* watchDeleteAds() {
  yield takeLatest('ads/deleteAdsFetch', workDeleteAdsFetch);
}

function* watchToggleFavoriteAds() {
  yield takeLatest('ads/toggleFavoriteFetch', workToggleFavoriteFetch);
}

function* watchGetFavoriteAds() {
  yield takeLatest('ads/getFavoriteAdsFetch', workGetFavoriteAdsFetch);
}

function* watchGetUserAds() {
  yield takeLatest('ads/getUserAdsFetch', workGetUserAdsFetch);
}

export function* adsSagas() {
  yield all([
    call(watchGetSellAds),
    call(watchGetFoundAds),
    call(watchGetShareAds),
    call(watchAddNewAds),
    call(watchDeleteAds),
    call(watchToggleFavoriteAds),
    call(watchGetFavoriteAds),
    call(watchGetUserAds),
  ]);
}
