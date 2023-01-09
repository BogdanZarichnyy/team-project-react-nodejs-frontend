import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getFriends } from '../../api/friendsApi';
import { getFriendsSuccess, getFriendsFailure } from './friendsSlice';

function* workGetFriendsFetch() {
  try {
    const data = yield call(getFriends);
    yield put(getFriendsSuccess(data));
  } catch (error) {
    yield put(getFriendsFailure(error.message));
  }
}

function* watchGetFriends() {
  yield takeLatest('friends/getFriendsFetch', workGetFriendsFetch);
}

export function* friendsSagas() {
  yield all([call(watchGetFriends)]);
}
