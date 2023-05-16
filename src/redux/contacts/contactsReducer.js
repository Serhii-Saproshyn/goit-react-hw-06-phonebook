import { createReducer } from '@reduxjs/toolkit';
import { initialState } from 'redux/initialState';
import { addContact, deleteContact } from './contactsAction';

export const contactsReducer = createReducer(initialState.contacts, {
  [addContact]: (state, action) => ({
    ...state,
    contacts: [...state.contacts, action.payload],
  }),
  [deleteContact]: (state, action) => ({
    ...state,
    contacts: state.contacts.filter(contact => contact.id !== action.payload),
  }),
});
