import { all, call } from 'redux-saga/effects';

// import { lostPetsSagas } from './lostPets/lostPetsSaga';
// import { sellPetsSagas } from './lostPets/sellPetsSaga';
// import { sharePetsSagas } from './lostPets/sharePetsSaga';
import { userSagas } from './user/userSaga';

export function* rootSaga() {
  yield all([
    // call(lostPetsSagas),
    // call(sellPetsSagas),
    // call(sharePetsSagas),
    call(userSagas),
  ]);
}
