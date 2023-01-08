import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import {
  registerUser,
  logOutUser,
  loginUser,
  getCurrentUser,
  updateCurrentUser,
} from '../../api/userApi';
import { getUserTokenSelector } from './userSelectors';
import {
  registerUserSuccess,
  registerUserFailure,
  loginUserSuccess,
  loginUserFailure,
  logOutUserSuccess,
  logOutUserFailure,
  getUserSuccess,
  getUserFailure,
  updateUserSuccess,
  updateUserFailure,
} from './userSlice';

function* workRegisterUserFetch({ payload }) {
  try {
    const { user } = yield call(registerUser, payload);
    yield put(registerUserSuccess(user));
  } catch (error) {
    yield registerUserFailure(error.message);
  }
}

function* workLoginUserFetch({ payload }) {
  try {
    const { user } = yield call(loginUser, payload);
    yield put(loginUserSuccess(user));
  } catch (error) {
    yield loginUserFailure(error.message);
  }
}

function* workLogOutUserFetch() {
  try {
    yield call(logOutUser);
    yield put(logOutUserSuccess());
  } catch (error) {
    yield logOutUserFailure(error.message);
  }
}

function* workGetCurrentUser() {
  try {
    const token = yield select(getUserTokenSelector);
    const { user } = yield call(getCurrentUser, token);
    yield console.log('Saga User response');
    yield put(getUserSuccess(user));
  } catch (error) {
    yield getUserFailure(error.message);
  }
}

function* workUpdateCurrentUser({ payload }) {
  try {
    const { user } = yield call(updateCurrentUser, payload);
    yield put(updateUserSuccess(user));
  } catch (error) {
    yield updateUserFailure(error.message);
  }
}

function* watchRegisterUser() {
  yield takeLatest('user/registerUserFetch', workRegisterUserFetch);
}

function* watchLoginUser() {
  yield takeLatest('user/loginUserFetch', workLoginUserFetch);
}

function* watchLogOutUser() {
  yield takeLatest('user/logOutUserFetch', workLogOutUserFetch);
}

function* watchGetCurrentUser() {
  yield takeLatest('user/getUserFetch', workGetCurrentUser);
}
function* watchUpdateCurrentUser() {
  yield takeLatest('user/updateUserFetch', workUpdateCurrentUser);
}

export function* userSagas() {
  yield all([
    call(watchRegisterUser),
    call(watchLoginUser),
    call(watchLogOutUser),
    call(watchGetCurrentUser),
    call(watchUpdateCurrentUser),
  ]);
}
