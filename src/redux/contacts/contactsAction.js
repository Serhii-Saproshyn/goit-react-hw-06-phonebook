import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('addContact', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('deleteContact');
