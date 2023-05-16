import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { reducer } from './reducer';
import { initialState } from './initialState';

const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore(
  { reducer: persistedReducer },
  initialState
);

export const persistor = persistStore(store);
