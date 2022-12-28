import { createApi } from '@reduxjs/toolkit/query/react';

import { AUTH_HEADER_NAME, axiosBaseQuery } from 'services/axiosBaseQuery';
import { CONTACTS_DATA_CACHE_TAG } from './contactsApiSlice';

export const usersAPI = createApi({
  reducerPath: 'usersAPI',

  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set([AUTH_HEADER_NAME], `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['AuthData'],

  endpoints: builder => ({
    signupUser: builder.mutation({
      query: userCredentials => ({
        url: `signup`,
        method: 'post',
        data: userCredentials,
      }),
      invalidatesTags: [CONTACTS_DATA_CACHE_TAG],
    }),

    loginUser: builder.mutation({
      query: userCredentials => ({
        url: `login`,
        method: 'post',
        data: userCredentials,
      }),
      invalidatesTags: [CONTACTS_DATA_CACHE_TAG],
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: `logout`,
        method: 'post',
      }),
      invalidatesTags: [CONTACTS_DATA_CACHE_TAG],
    }),

    refreshUser: builder.query({
      query: () => `current`,
      invalidatesTags: [CONTACTS_DATA_CACHE_TAG],
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useRefreshUserQuery,
} = usersAPI;
