import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { initialState } from './initialState';

export const store = configureStore({ reducer }, initialState);
