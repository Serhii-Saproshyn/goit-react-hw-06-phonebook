import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    filterContacts: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
