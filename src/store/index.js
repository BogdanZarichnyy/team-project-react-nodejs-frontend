import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

//TODO import slice and rootSaga later
import { rootSaga } from './rootSaga';
import userReducer from './user/userSlice';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reducers = combineReducers({
  // counter: counterReducer,
  user: userReducer,
  // pokemon: pokemonReducer
});

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistedStore = persistStore(store);

sagaMiddleware.run(rootSaga);
