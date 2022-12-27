import { useSignupUserMutation } from 'redux/usersAPISlice';

export function Register() {
  const [sendSignupRequest, { isLoading }] = useSignupUserMutation();

  const onSubmit = e => {
    e.preventDefault();
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
    } = e.target.elements;

    sendSignupRequest({ name, email, password });
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
