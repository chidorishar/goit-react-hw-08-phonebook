import { createSlice } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store';
import { usersAPI } from './usersAPISlice';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      usersAPI.endpoints.signupUser.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
  },
});

export const authReducer = authSlice.reducer;

// export const selectCurrentUser = (state: RootState) => state.auth.user;
