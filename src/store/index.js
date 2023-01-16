import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
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
};

const combinedReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
  ads: adsSlice,
  news: newsSlice,
  friends: friendsSlice,
});

export const store = configureStore({
  reducer: combinedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistedStore = persistStore(store);

sagaMiddleware.run(rootSaga);
