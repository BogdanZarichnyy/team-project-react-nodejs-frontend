import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import {
  registerUser,
  logOutUser,
  loginUser,
  getCurrentUser,
  updateCurrentUser,
  updateAvatarUser,
} from '../../api/userApi';
import { addNewPet, deletePet, getAllPets } from '../../api/petApi';
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
  addPetSuccess,
  addPetFailure,
  deletePetSuccess,
  deletePetFailure,
  getPetsSuccess,
  getPetsFailure,
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
  let data;
  try {
    if (payload instanceof FormData) {
      data = yield call(updateAvatarUser, payload);
    } else {
      data = yield call(updateCurrentUser, payload);
    }
    yield put(updateUserSuccess(data.user));
  } catch (error) {
    yield put(updateUserFailure(error));
  }
}

function* workAddPet({ payload }) {
  try {
    const { data } = yield call(addNewPet, payload);
    yield put(addPetSuccess(data));
  } catch (error) {
    yield put(addPetFailure(error.message));
  }
}

function* workDeletePet({ payload }) {
  try {
    const { ad } = yield call(deletePet, payload);
    yield put(deletePetSuccess(ad));
  } catch (error) {
    yield put(deletePetFailure(error.message));
  }
}

function* workGetPets() {
  try {
    const data = yield call(getAllPets);
    yield put(getPetsSuccess(data));
  } catch (error) {
    yield put(getPetsFailure(error.message));
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

function* watchAddPet() {
  yield takeLatest('user/addPetFetch', workAddPet);
}

function* watchDeletePet() {
  yield takeLatest('user/deletePetFetch', workDeletePet);
}

function* watchGetPets() {
  yield takeLatest('user/getPetsFetch', workGetPets);
}

export function* userSagas() {
  yield all([
    call(watchRegisterUser),
    call(watchLoginUser),
    call(watchLogOutUser),
    call(watchGetCurrentUser),
    call(watchUpdateCurrentUser),
    call(watchAddPet),
    call(watchDeletePet),
    call(watchGetPets),
  ]);
}
