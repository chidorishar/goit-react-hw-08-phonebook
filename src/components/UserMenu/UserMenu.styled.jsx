import styled from '@emotion/styled';
import {
  FramingInnerCommon,
  InsetButtonCommon,
} from 'components/common/shared.styled';

export const LogoutButton = styled(InsetButtonCommon)``;

export const MenuFrame = styled(FramingInnerCommon)`
  --p: ${({ theme: { space } }) => space[2]}px;

  position: absolute;
  right: 15px;
  transform: translateY(50);

  flex-direction: column;
  align-items: center;

  padding-right: var(--p);
  padding-left: var(--p);
`;

export const UserGreeting = styled.p`
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const UserName = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};

  color: ${({ theme: { colors } }) => colors.textColoredSecondary};
`;
