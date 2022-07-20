import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './contacts/contacts-reducer';

export const store = configureStore({
  reducer: rootReducer,
});
