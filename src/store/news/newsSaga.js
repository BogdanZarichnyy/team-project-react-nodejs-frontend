import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getNews } from '../../api/newsApi';
import { getNewsSuccess, getNewsFailure } from './newsSlice';

function* workGetNewsFetch() {
  try {
    const data = yield call(getNews);
    yield put(getNewsSuccess(data));
  } catch (error) {
    yield put(getNewsFailure(error.message));
  }
}

function* watchGetNews() {
  yield takeLatest('news/getNewsFetch', workGetNewsFetch);
}

export function* newsSagas() {
  yield all([call(watchGetNews)]);
}
