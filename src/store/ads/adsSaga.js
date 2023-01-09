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
    const data = yield call(getSellAds);
    console.log(data);
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

export function* adsSagas() {
  yield all([
    call(watchGetSellAds),
    call(watchGetFoundAds),
    call(watchGetShareAds),
    call(watchAddNewAds),
  ]);
}
