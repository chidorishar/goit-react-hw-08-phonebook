import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice.js';

import { phonebookAPI } from './contactsApiSlice.js';
import { filterReducer } from './filterSlice';
import { usersAPI } from './usersAPISlice.js';

export const store = configureStore({
  reducer: {
    [phonebookAPI.reducerPath]: phonebookAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    filter: filterReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(phonebookAPI.middleware)
      .concat(usersAPI.middleware),
});
