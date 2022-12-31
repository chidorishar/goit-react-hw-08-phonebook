import { Notify } from 'notiflix';

import { useLoginUserMutation } from 'redux/slices/usersAPISlice';

// import { ContainerCardCommon } from 'components/common/shared.styled';
import {
  Box,
  ButtonWideCommon,
  ContainerCardCommon,
  FormCommon,
  InputCommon,
  InputInfoLabelCommon,
} from 'components/common/shared.styled';

export function Login() {
  const [sendLoginRequest, { isLoading }] = useLoginUserMutation();
  const loginUser = async userCredentials => {
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

  const onSubmit = e => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.target.elements;
    const userCredentials = { email, password };

    loginUser(userCredentials);
  };

  return (
    <ContainerCardCommon>
      <Box color="textColored">
        <h2>Login</h2>

        <FormCommon onSubmit={onSubmit}>
          <InputInfoLabelCommon>
            Email
            <InputCommon
              type="email"
              name="email"
              autoComplete="on"
              autoFocus
            />
          </InputInfoLabelCommon>
          <InputInfoLabelCommon>
            Password
            <InputCommon
              type="password"
              name="password"
              minLength="5"
              maxLength="12"
            />
          </InputInfoLabelCommon>
          <ButtonWideCommon type="submit" disabled={isLoading}>
            Log me in!
          </ButtonWideCommon>
        </FormCommon>
      </Box>
    </ContainerCardCommon>
  );
}
