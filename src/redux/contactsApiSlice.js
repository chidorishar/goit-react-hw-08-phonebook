import { createApi } from '@reduxjs/toolkit/query/react';

import { AUTH_HEADER_NAME, axiosBaseQuery } from 'services/phonebookBackendAPI';

export const CONTACTS_DATA_CACHE_TAG = 'Contacts';

export const phonebookAPI = createApi({
  reducerPath: 'phonebookAPI',

  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/contacts/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set([AUTH_HEADER_NAME], `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: [CONTACTS_DATA_CACHE_TAG],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ` `,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: CONTACTS_DATA_CACHE_TAG,
                id,
              })),
              CONTACTS_DATA_CACHE_TAG,
            ]
          : [CONTACTS_DATA_CACHE_TAG],
    }),

    addContact: builder.mutation({
      query: contactObj => ({
        method: 'post',
        data: contactObj,
      }),
      invalidatesTags: [CONTACTS_DATA_CACHE_TAG],
    }),

    deleteContact: builder.mutation({
      query: contactID => ({
        url: `${contactID}`,
        method: 'delete',
      }),
      invalidatesTags: (result, error, id) => [
        { type: CONTACTS_DATA_CACHE_TAG, id },
      ],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookAPI;
