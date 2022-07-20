import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { getContact, deleteContact, createContact } from './contacts-operation';
import { changeFilter } from './contacts-actions';

const items = createReducer([], {
  [getContact.fulfilled]: (_, { payload }) => payload,

  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  [createContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload.toLowerCase(),
});

const loadings = createReducer(false, {
  [getContact.pending]: () => true,
  [getContact.fulfilled]: () => false,
  [getContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,

  [createContact.pending]: () => true,
  [createContact.fulfilled]: () => false,
  [createContact.rejected]: () => false,
});

export const rootReducer = combineReducers({
  items,
  filter,
  loadings,
});
