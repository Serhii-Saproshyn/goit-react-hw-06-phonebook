import { createSlice } from '@reduxjs/toolkit';
import { initialState } from 'redux/initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
