import { Navigate, Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import { Contacts } from 'pages/Contacts/Contacts';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
