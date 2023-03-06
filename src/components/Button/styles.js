import styled from 'styled-components';
import {
  borderAnimationUsingBackground,
  borderAnimationUsingBackgroundMedia
} from '../../stylesheets/abstracts/mixins';

export const Container = styled.div`
  max-width: ${({ size }) => (size === 'small' ? 'fit-content' : '8.75rem')};
  min-width: ${({ size }) => (size === 'small' ? '5.6rem' : '8.75rem')};
  max-height: 2.5rem;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  padding: ${({ size }) => (size === 'small' ? '0.4rem 0.5rem' : '0.6rem 0.5rem')};
  gap: 0.25rem;
  text-decoration: none;
  outline: none;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    z-index: 1;
    border-radius: 4px;
    background: ${({ hoverColor }) =>
      hoverColor ? hoverColor : (props) => props.theme.button.hover};
  }

  &::after {
    content: '';
    position: absolute;
    border-radius: 4px;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    ${borderAnimationUsingBackground}
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      &::before {
        transition: all 0.1s ease-in-out;
        width: 100%;
      }
      &::after {
        ${borderAnimationUsingBackgroundMedia}
      }
    }
  }
`;

export const Label = styled.div`
  display: ${({ hasLabel }) => (hasLabel ? 'flex' : 'none')};
  align-items: center;
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${({ size }) =>
    size === 'small'
      ? (props) => props.theme.fontSizes.md
      : (props) => props.theme.fontSizes.lg};
  line-height: 103.7%;
  color: ${({ color }) => (color ? color : (props) => props.theme.text.primary)};
  z-index: 1;
`;

export const Icon = styled.div`
  display: ${({ hasIcon }) => (hasIcon ? 'flex' : 'none')};
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.lg};
  z-index: 1;
`;
