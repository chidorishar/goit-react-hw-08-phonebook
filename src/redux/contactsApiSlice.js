import { createApi } from '@reduxjs/toolkit/query/react';

import { AUTH_HEADER_NAME, axiosBaseQuery } from 'services/phonebookBackendAPI';

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

  tagTypes: ['Contacts'],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ` `,
      providesTags: result => [
        ...result.map(({ id }) => ({ type: 'Contacts', id })),
        { type: 'Contacts', id: 'LIST' },
      ],
    }),

    addContact: builder.mutation({
      query: contactObj => ({
        method: 'post',
        data: contactObj,
      }),
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),

    deleteContact: builder.mutation({
      query: contactID => ({
        url: `${contactID}`,
        method: 'delete',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Contacts', id }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookAPI;
