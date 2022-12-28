import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectIsUserAuthorized } from 'redux/selectors';
import {
  CONTACTS_DATA_CACHE_TAG,
  phonebookAPI,
} from 'redux/slices/contactsApiSlice';

export const useInvalidateContacts = dispatch => {
  const isUserAuthorized = useSelector(selectIsUserAuthorized);

  useEffect(() => {
    dispatch(phonebookAPI.util.invalidateTags([CONTACTS_DATA_CACHE_TAG]));
  }, [isUserAuthorized]);

  return {};
};
