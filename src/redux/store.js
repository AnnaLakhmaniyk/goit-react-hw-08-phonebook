import { configureStore } from '@reduxjs/toolkit';
import reduser from './contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    contact: reduser,
  },
});
