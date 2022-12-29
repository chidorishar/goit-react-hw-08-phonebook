import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SharedLayout from './SharedLayout/SharedLayout';
import { Contacts } from 'pages/Contacts/Contacts';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { RestrictedRoute } from './ProtectedRoute';
import { PrivateRoute } from './PrivateRoute';

import { selectIsUserAuthorized } from 'redux/selectors';
import {
  CONTACTS_DATA_CACHE_TAG,
  phonebookAPI,
} from 'redux/slices/contactsApiSlice';

export function App() {
  const dispatch = useDispatch();
  const isUserAuthorized = useSelector(selectIsUserAuthorized);

  //invalidate cached contacts data
  useEffect(() => {
    dispatch(phonebookAPI.util.invalidateTags([CONTACTS_DATA_CACHE_TAG]));
  }, [isUserAuthorized]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute redirectTo="contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="contacts" component={<Login />} />
          }
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={<Contacts />} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
