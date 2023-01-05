import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

//TODO import slice and rootSaga later
import { rootSaga } from './rootSaga';
import userReducer from './user/userSlice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: { user: persistReducer(persistConfig, userReducer) },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistedStore = persistStore(store);

sagaMiddleware.run(rootSaga);
