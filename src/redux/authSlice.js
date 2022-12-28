import { createSlice } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store';
import { usersAPI } from './usersAPISlice';

function setAuthData(state, { payload: { token, user } }) {
  state.token = token;
  state.user = user;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(usersAPI.endpoints.signupUser.matchFulfilled, setAuthData)
      .addMatcher(usersAPI.endpoints.loginUser.matchFulfilled, setAuthData);
  },
});

export const authReducer = authSlice.reducer;

// export const selectCurrentUser = (state: RootState) => state.auth.user;
