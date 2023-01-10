import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import {
  registerUser,
  logOutUser,
  loginUser,
  getCurrentUser,
  updateCurrentUser,
  restorePassword,
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
  restorePasswordFailure,
  restorePasswordSuccess,
} from './userSlice';

function* workRegisterUserFetch({ payload }) {
  try {
    const { user } = yield call(registerUser, payload);
    yield put(registerUserSuccess(user));
  } catch (error) {
    yield put(registerUserFailure(error.message));
  }
}

function* workLoginUserFetch({ payload }) {
  try {
    const { user } = yield call(loginUser, payload);
    yield put(loginUserSuccess(user));
  } catch (error) {
    yield put(loginUserFailure(error.message));
  }
}

function* workLogOutUserFetch() {
  try {
    yield call(logOutUser);
    yield put(logOutUserSuccess());
  } catch (error) {
    yield put(logOutUserFailure(error.message));
  }
}

function* workGetCurrentUser() {
  try {
    const token = yield select(getUserTokenSelector);

    if (!token) {
      const error = new Error('Token not found');
      yield put(getUserFailure(error.message));
    } else {
      const { user } = yield call(getCurrentUser, token);
      yield put(getUserSuccess(user));
    }
  } catch (error) {
    yield put(getUserFailure(error.message));
  }
}

function* workUpdateCurrentUser({ payload }) {
  try {
    const { user } = yield call(updateCurrentUser, payload);
    yield put(updateUserSuccess(user));
  } catch (error) {
    yield put(updateUserFailure(error.message));
  }
}

function* workRestorePasswordUserFetch({ payload }) {
  try {
    yield call(restorePassword, payload);
    yield put(restorePasswordSuccess());
  } catch (error) {
    console.log({ error });
    yield put(restorePasswordFailure(error.message));
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

function* watchRestorePasswordUser() {
  yield takeLatest('user/restorePasswordFetch', workRestorePasswordUserFetch);
}

export function* userSagas() {
  yield all([
    call(watchRegisterUser),
    call(watchLoginUser),
    call(watchLogOutUser),
    call(watchGetCurrentUser),
    call(watchUpdateCurrentUser),
    call(watchRestorePasswordUser),
  ]);
}
