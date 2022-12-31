import { Navigate, Route, Routes } from 'react-router-dom';

import { useRefreshUserQuery } from 'redux/slices/usersAPISlice';

import SharedLayout from './SharedLayout/SharedLayout';
import { Contacts } from 'pages/Contacts/Contacts';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { RestrictedRoute } from './ProtectedRoute';
import { PrivateRoute } from './PrivateRoute';

export function App() {
  const { isLoading: isRefreshingUserData } = useRefreshUserQuery();

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {isRefreshingUserData ? (
          <Route index element={<p>Retrieving data...</p>} />
        ) : (
          <>
            <Route
              index
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Register />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="contacts"
              element={<PrivateRoute component={<Contacts />} />}
            />
          </>
        )}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
