import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  getShareAds,
  getSellAds,
  getFoundAds,
  addNewAds,
  deleteAds,
  toggleFavoriteAds,
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

function* workToggleFavoriteFetch() {
  try {
    const { data } = yield call(toggleFavoriteAds);
    console.log('saga', data);
    yield put(toggleFavoriteSuccess(data));
  } catch (error) {
    yield put(toggleFavoriteFailure(error.message));
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

export function* adsSagas() {
  yield all([
    call(watchGetSellAds),
    call(watchGetFoundAds),
    call(watchGetShareAds),
    call(watchAddNewAds),
    call(watchDeleteAds),
    call(watchToggleFavoriteAds),
  ]);
}
