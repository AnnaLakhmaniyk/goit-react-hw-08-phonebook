import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { resetError } from './auh-actions';
import { register, logIn } from './auth-operations';

const errorEl = createReducer(false, {
  [register.pending]: () => false,
  [register.fulfilled]: () => false,
  [register.rejected]: () => true,
  [logIn.pending]: () => false,
  [logIn.fulfilled]: () => false,
  [logIn.rejected]: () => true,
  [resetError]: () => false,
});
export const errorReducer = combineReducers({
  errorEl,
});
