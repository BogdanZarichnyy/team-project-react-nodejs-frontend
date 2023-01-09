import { all, call } from 'redux-saga/effects';

import { adsSagas } from './ads';
import { userSagas } from './user';
import { newsSagas } from './news';
import { friendsSagas } from './friends';

export function* rootSaga() {
  yield all([
    call(adsSagas),
    call(userSagas),
    call(newsSagas),
    call(friendsSagas),
  ]);
}
