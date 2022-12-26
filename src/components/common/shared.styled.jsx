import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { color, flexbox, layout, position, space } from 'styled-system';

export const Box = styled.div(space, color, layout, flexbox, position);

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Section = styled.section`
  padding: ${({ theme: { space } }) => space[4]}px;
`;

export const MainWrapper = styled.main`
  display: flex;

  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: max-content;
  margin: 0 auto;
  padding: ${({ theme: { space } }) => space[3]}px;
  text-align: center;
`;

export const activeAccentedButton = ({ theme, isDelete }) => css`
  border: ${theme.borders.small};
  border-color: ${theme.colors.grey};

  cursor: pointer;
  transition: background-color ${theme.transitions.normal},
    color ${theme.transitions.normal};

  box-shadow: ${theme.shadows.small};

  &:focus,
  &:hover {
    outline: none;

    background-color: ${isDelete ? theme.colors.warning : theme.colors.accent};
    color: ${theme.colors.dark};
  }
`;

export const interactiveInput = ({ theme }) => css`
  display: block;
  border-style: solid;
  outline: none;

  box-shadow: ${theme.shadows.inputInset};

  transition: border-color ${theme.transitions.normal};

  &:focus,
  &:active {
    border-color: ${theme.colors.accent};
  }
`;
