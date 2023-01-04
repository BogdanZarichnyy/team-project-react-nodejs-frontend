import { call, put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import { registerUser } from '../../api/userApi';
import {
  registerUserSuccess,
  registerUserFailure,
  loginUserSuccess,
  loginUserFailure,
} from './userSlice';

function* workRegisterUserFetch({ payload: { email, password, displayName } }) {
  try {
    const user = yield call(registerUser, email, password, displayName);
    yield put(registerUserSuccess(user));
  } catch (error) {
    yield registerUserFailure(error.message);
  }
}

function* workLoginUserFetch() {
  try {
    const user = yield call(registerUser);
    yield put(loginUserSuccess(user));
  } catch (error) {
    yield loginUserFailure(error.message);
  }
}

function* watchRegisterUser() {
  yield takeLatest('user/registerUserFetch', workRegisterUserFetch);
}

function* watchLoginUser() {
  yield takeLatest('user/loginUserFetch', workLoginUserFetch);
}

export function* userSagas() {
  yield all([call(watchRegisterUser), call(watchLoginUser)]);
}
