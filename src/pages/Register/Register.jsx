import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { useInvalidateContacts } from 'redux/hooks/invalidateContactsCache';
import { useSignupUserMutation } from 'redux/slices/usersAPISlice';

export function Register() {
  const dispatch = useDispatch();
  useInvalidateContacts(dispatch);
  const [sendSignupRequest, { isLoading }] = useSignupUserMutation();

  const onSubmit = async e => {
    e.preventDefault();
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
    } = e.target.elements;
    const userCredentials = { name, email, password };

    try {
      const {
        user: { name: userName },
      } = await sendSignupRequest(userCredentials).unwrap();
      Notify.success(
        `You have been successfully registered! Welcome ${userName} 🥳`
      );
    } catch (err) {
      console.log(err);
      Notify.failure(`Registration failed! Please try again.`);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input type="text" name="name" autoComplete="on" />
      </label>
      <label>
        Email
        <input type="email" name="email" autoComplete="on" />
      </label>
      <label>
        Password
        <input type="password" name="password" minLength="5" maxLength="12" />
      </label>
      <button type="submit" disabled={isLoading}>
        Register me
      </button>
    </form>
  );
}
