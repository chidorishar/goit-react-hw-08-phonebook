import { useAuth } from 'redux/hooks/getAuth';
import { useLogoutUserMutation } from 'redux/slices/usersAPISlice';

export function UserMenu() {
  const { userData } = useAuth();
  const [logout] = useLogoutUserMutation();

  return (
    <>
      <p>Hello, {userData.name}</p>
      <button onClick={logout}>Logout</button>
    </>
  );
}
