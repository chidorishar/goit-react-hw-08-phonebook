import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100%;
  padding: ${({ theme: { space } }) => space[3]}px;

  background-color: ${({ theme: { colors } }) => colors.accentSecondary};
  border-bottom: 1px solid;
  box-shadow: ${({ theme: { shadows } }) => shadows.small};
`;
