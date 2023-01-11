import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getNews } from '../../api/newsApi';
import { getNewsSuccess, getNewsFailure } from './newsSlice';

function* workGetNewsFetch({ payload }) {
  try {
    const data = yield call(getNews, payload);
    yield put(getNewsSuccess(data));
  } catch (error) {
    console.log('saga error', error);
    yield put(getNewsFailure(error.message));
  }
}

function* watchGetNews() {
  yield takeLatest('news/getNewsFetch', workGetNewsFetch);
}

export function* newsSagas() {
  yield all([call(watchGetNews)]);
}
