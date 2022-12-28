import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { useLoginUserMutation } from 'redux/slices/usersAPISlice';
import { useInvalidateContacts } from 'redux/hooks/invalidateContactsCache';

export function Login() {
  const dispatch = useDispatch();
  useInvalidateContacts(dispatch);
  const [sendLoginRequest, { isLoading }] = useLoginUserMutation();

  const onSubmit = async e => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.target.elements;
    const userCredentials = { email, password };

    try {
      const {
        user: { name: userName },
      } = await sendLoginRequest(userCredentials).unwrap();

      Notify.success(
        `You have been successfully login! Welcome ${userName} 🥳`
      );
    } catch (err) {
      console.log(err);
      Notify.failure(`Login failed! Please try again.`);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Email
        <input type="email" name="email" autoComplete="on" />
      </label>
      <label>
        Password
        <input type="password" name="password" minLength="5" maxLength="12" />
      </label>
      <button type="submit" disabled={isLoading}>
        Login me!
      </button>
    </form>
  );
}
