import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from 'services/phonebookBackendAPI';

export const usersAPI = createApi({
  reducerPath: 'usersAPI',

  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users/',
  }),

  tagTypes: ['UserData'],

  endpoints: builder => ({
    signupUser: builder.mutation({
      query: userCredentials => ({
        url: `signup`,
        method: 'post',
        data: userCredentials,
      }),
      invalidatesTags: ['UserData'],
    }),

    loginUser: builder.mutation({
      query: userCredentials => ({
        url: `login`,
        method: 'post',
        data: userCredentials,
      }),
      invalidatesTags: ['UserData'],
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: `logout`,
        method: 'post',
      }),
      invalidatesTags: ['UserData'],
    }),

    refreshUser: builder.query({
      query: () => `current`,
      invalidatesTags: ['UserData'],
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useRefreshUserQuery,
} = usersAPI;
