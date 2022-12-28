import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const LinksList = styled.ul`
  display: flex;

  width: fit-content;
  margin: 0 auto;
  padding: ${({ theme: { space } }) => space[2]}px
    ${({ theme: { space } }) => space[4]}px;
  border-radius: ${({ theme: { radii } }) => radii.big};

  background-color: ${({ theme: { colors } }) => colors.light};
  box-shadow: ${({ theme: { shadows } }) => shadows.inputInset};
`;

export const LinksListItem = styled.li`
  display: inline-block;

  padding: ${({ theme: { space } }) => space[1]}px;

  &:not(:last-child) {
    margin-right: ${({ theme: { space } }) => space[3]}px;
  }
`;

export const HeaderLink = styled(NavLink)`
  font-size: ${({ theme: { fontSizes } }) => fontSizes[3]}px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  color: black;

  transition: color ${({ theme: { transitions } }) => transitions.normal};

  &.active {
    color: ${({ theme: { colors } }) => colors.textColored};
    text-decoration: underline;
  }

  &:hover {
    color: ${({ theme: { colors } }) => colors.accent};
  }
`;
