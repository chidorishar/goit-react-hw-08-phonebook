import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { color, flexbox, layout, position, space } from 'styled-system';

export const activeAccentedButton = ({ theme, bgColor, onHoverColor }) => css`
  border: ${theme.borders.small};

  background-color: ${bgColor ?? theme.colors.light};
  border-color: ${theme.colors.grey};

  cursor: pointer;
  transition: background-color ${theme.transitions.normal},
    color ${theme.transitions.normal};

  box-shadow: ${theme.shadows.small};

  &:focus,
  &:hover {
    outline: none;

    background-color: ${onHoverColor ?? theme.colors.accent};
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

export const Box = styled.div(space, color, layout, flexbox, position);

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const ContainerFrameCommon = styled.div`
  display: flex;

  width: fit-content;
  margin: 0 auto;
  padding: ${({ theme: { space } }) => space[2]}px
    ${({ theme: { space } }) => space[4]}px;
  border-radius: ${({ theme: { radii } }) => radii.big};

  background-color: ${({ theme: { colors } }) => colors.light};
  box-shadow: ${({ theme: { shadows } }) => shadows.insetBig},
    ${({ theme: { shadows } }) => shadows.insetColored};
`;

export const ContainerCardCommon = styled.div`
  width: ${p => p.theme.sizes.wide};
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px;
  text-align: center;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.medium};
`;

export const InsetButtonCommon = styled.button`
  ${activeAccentedButton};

  font-size: ${p => p.theme.fontSizes[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};

  min-width: ${p => p.theme.sizes.buttons.normal};
  padding: ${p => p.theme.space[1]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};

  box-shadow: ${p => p.theme.shadows.buttonInset};
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
