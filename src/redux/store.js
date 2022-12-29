import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { persistedAuthReducer } from './slices/authSlice.js';
import { phonebookAPI } from './slices/contactsApiSlice.js';
import { filterReducer } from './slices/filterSlice';
import { usersAPI } from './slices/usersAPISlice.js';

export const store = configureStore({
  reducer: {
    [phonebookAPI.reducerPath]: phonebookAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    filter: filterReducer,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(phonebookAPI.middleware)
      .concat(usersAPI.middleware),
});

export const persistedStore = persistStore(store);
