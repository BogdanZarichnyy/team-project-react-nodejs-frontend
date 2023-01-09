import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  getShareAds,
  getSellAds,
  getFoundAds,
  addNewAds,
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
} from './adsSlice';

function* workGetSellAdsFetch({ payload }) {
  try {
    const { user } = yield call(getSellAds);
    yield put(getSellAdsSuccess(user));
  } catch (error) {
    yield put(getSellAdsFailure(error.message));
  }
}

function* workGetFoundAdsFetch({ payload }) {
  try {
    const { user } = yield call(getFoundAds);
    yield put(getFoundAdsSuccess(user));
  } catch (error) {
    yield put(getFoundAdsFailure(error.message));
  }
}

function* workGetShareAdsFetch() {
  try {
    const { user } = yield call(getShareAds);
    yield put(getShareAdsSuccess(user));
  } catch (error) {
    yield put(getShareAdsFailure(error.message));
  }
}

function* workAddNewAdsFetch({ payload }) {
  try {
    const { user } = yield call(addNewAds, payload);
    yield put(addNewAdsSuccess(user));
  } catch (error) {
    yield put(addNewAdsFailure(error.message));
  }
}

function* watchGetSellAds() {
  yield takeLatest('ads/getGetSellAdsFetch', workGetSellAdsFetch);
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

export function* adsSagas() {
  yield all([
    call(watchGetSellAds),
    call(watchGetFoundAds),
    call(watchGetShareAds),
    call(watchAddNewAds),
  ]);
}