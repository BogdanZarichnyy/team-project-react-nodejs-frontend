import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './rootSaga';
import userReducer from './user/userSlice';
import adsSlice from './ads/adsSlice';
import newsSlice from './news/newsSlice';
import friendsSlice from './friends/friendsSlice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
  stateReconciler: autoMergeLevel2,
};

const combinedReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
  ads: adsSlice,
  news: newsSlice,
  friends: friendsSlice,
});

const rootReducer = (state, action) => {
  if (action.type === 'user/logOutUserSuccess') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

// const persistConfig = {
//   key: 'user',
//   storage,
//   whitelist: ['user'],
// };

// const combinedReducer = combineReducers({
//   user: userReducer,
//   ads: adsSlice,
//   news: newsSlice,
//   friends: friendsSlice,
// });

// const persistedReducer = persistReducer(persistConfig, combinedReducer);

// const rootReducer = (state, action) => {
//   if (action.type === 'user/logOutUserSuccess') {
//     state = undefined;
//   }
//   return persistedReducer(state, action);
// };

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistedStore = persistStore(store);

sagaMiddleware.run(rootSaga);
