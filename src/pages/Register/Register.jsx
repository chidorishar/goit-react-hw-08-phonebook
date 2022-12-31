import { Notify } from 'notiflix';

import { useSignupUserMutation } from 'redux/slices/usersAPISlice';

import {
  Box,
  ButtonWideCommon,
  ContainerCardCommon,
  FormCommon,
  InputCommon,
  InputInfoLabelCommon,
} from 'components/common/shared.styled';

export function Register() {
  const [sendSignupRequest, { isLoading }] = useSignupUserMutation();
  const registerUser = async userCredentials => {
    try {
      const {
        user: { name: userName },
      } = await sendSignupRequest(userCredentials).unwrap();
      Notify.success(
        `You have been successfully registered! Welcome ${userName} 🥳`,
        undefined,
        { position: 'left-top' }
      );
    } catch (err) {
      console.log(err);
      Notify.failure(`Registration failed! Please try again.`);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
    } = e.target.elements;
    const userCredentials = { name, email, password };

    registerUser(userCredentials);
  };

  return (
    <ContainerCardCommon>
      <Box color="textColored">
        <h2>Register</h2>

        <FormCommon onSubmit={onSubmit}>
          <InputInfoLabelCommon>
            Name
            <InputCommon type="text" name="name" autoComplete="on" autoFocus />
          </InputInfoLabelCommon>
          <InputInfoLabelCommon>
            Email
            <InputCommon type="email" name="email" autoComplete="on" />
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
            Register me!
          </ButtonWideCommon>
        </FormCommon>
      </Box>
    </ContainerCardCommon>
  );
}
