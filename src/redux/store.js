import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './contacts/contacts-reducer';
import { errorReducer } from './auth/auth-reducer';
// import { authSliceEl } from './auth/auth-slice';
// import { errorSliceEl } from './auth/auth-slice';
import authSlice from './auth/auth-slice';

const persistConfig = {
  key: 'auth',
  storage,
  blacklist: ['user', 'isLoggedIn'],
  // whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice),
    contact: rootReducer,
    eror: errorReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false }),
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
