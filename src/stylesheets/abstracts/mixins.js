import { css } from 'styled-components';

export const mainBoxShadow = css`
  box-shadow: 4px 4px 4px ${(props) => props.theme.shadows.primary};
`;

export const borderAnimationUsingBackground = css`
  background-repeat: no-repeat;
  background-image: linear-gradient(
      ${({ color }) => (color ? color : (props) => props.theme.text.primary)} 0 0
    ),
    linear-gradient(
      ${({ color }) => (color ? color : (props) => props.theme.text.primary)} 0 0
    ),
    linear-gradient(
      ${({ color }) => (color ? color : (props) => props.theme.text.primary)} 0 0
    ),
    linear-gradient(
      ${({ color }) => (color ? color : (props) => props.theme.text.primary)} 0 0
    );
  background-size: 100% 0.1rem, 0.1rem 100%;
  background-position: 0 0, 100% 0, 0 100%, 0 0;
  transition: all 0.3s ease-in-out;
`;

export const borderAnimationUsingBackgroundMedia = css`
  background-size: 0% 0.1rem, 0.1rem 100%;
  background-position: 0 0, 100% 0, 0 100%, 0 0;
  transition: all 0.3s ease-in-out;
`;
