import { createReducer } from '@reduxjs/toolkit';
import { initialState } from 'redux/initialState';
import { filterContact } from './filterAction';

export const filterReducer = createReducer(initialState.filter, {
  [filterContact]: (state, action) => ({ ...state, filter: action.payload }),
});
