import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice.js';

import { phonebookAPI } from './contactsApiSlice.js';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    [phonebookAPI.reducerPath]: phonebookAPI.reducer,
    filter: filterReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phonebookAPI.middleware),
});
