import { createSlice } from '@reduxjs/toolkit';

import { usersAPI } from './usersAPISlice';

function setAuthData(state, { payload: { token, user } }) {
  state.token = token;
  state.user = user;
  state.isUserAuthorized = true;
}

function clearAuthData(state) {
  state.token = null;
  state.user = null;
  state.isUserAuthorized = false;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isUserAuthorized: false,
    isRefreshingUserData: false,
  },
  reducers: {},
  extraReducers: builder => {
    const { signupUser, loginUser, logoutUser, refreshUser } =
      usersAPI.endpoints;

    builder
      .addMatcher(signupUser.matchFulfilled, setAuthData)
      .addMatcher(loginUser.matchFulfilled, setAuthData)
      .addMatcher(
        refreshUser.matchPending,
        state => (state.isRefreshingUserData = true)
      )
      .addMatcher(refreshUser.matchFulfilled, (state, payload) => {
        state.isRefreshingUserData = false;
        setAuthData(state, payload);
      })
      .addMatcher(
        refreshUser.matchRejected,
        state => (state.isRefreshingUserData = false)
      )
      .addMatcher(logoutUser.matchFulfilled, clearAuthData);
  },
});

export const authReducer = authSlice.reducer;
