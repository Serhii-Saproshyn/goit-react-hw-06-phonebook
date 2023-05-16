import { createAction } from '@reduxjs/toolkit';

export const filterContact = createAction('setFilter', e => ({
  type: 'setFilter',
  payload: e.target.value,
}));
