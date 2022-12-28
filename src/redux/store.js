import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice.js';

import { phonebookAPI } from './slices/contactsApiSlice.js';
import { filterReducer } from './slices/filterSlice';
import { usersAPI } from './slices/usersAPISlice.js';

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
