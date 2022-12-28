import { Navigate, Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import { Contacts } from 'pages/Contacts/Contacts';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { RestrictedRoute } from './ProtectedRoute';
import { PrivateRoute } from './PrivateRoute';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<RestrictedRoute component={<Register />} />} />
        <Route
          path="login"
          element={<RestrictedRoute component={<Login />} />}
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
