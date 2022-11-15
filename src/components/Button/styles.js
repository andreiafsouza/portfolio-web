import styled from 'styled-components';
import { colors } from '../../stylesheets/abstracts/palettes';
import { typography } from '../../stylesheets/base/typography';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ size }) => (size === 'small' ? 'fit-content' : '8.75rem')};
  max-height: 2.5rem;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  padding: ${({ size }) =>
    size === 'small' ? '0.4rem 0.5rem' : '0.6rem 0.5rem'};
  gap: 0.25rem;
  transition: all 0.3s ease-in-out;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      ${({ color }) => (color ? color : colors.neutral[100])} 0 0
    ),
    linear-gradient(${({ color }) => (color ? color : colors.neutral[100])} 0 0),
    linear-gradient(${({ color }) => (color ? color : colors.neutral[100])} 0 0),
    linear-gradient(${({ color }) => (color ? color : colors.neutral[100])} 0 0);
  background-size: 100% 0.1rem, 0.1rem 100%;
  background-position: 0 0, 100% 0, 0 100%, 0 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    border-radius: 4px;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    z-index: 0;
    background-color: ${({ hoverColor }) =>
      hoverColor ? hoverColor : colors.shadows[400]};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      background-size: 0% 0.1rem, 0.1rem 100%;
      background-position: 0 0, 100% 0, 0 100%, 0 0;

      /*  &::before {
        transition: all 0.3s ease-in-out;
        width: 100%;
      } */
    }
  }
`;

export const Label = styled.div`
  display: ${({ hasLabel }) => (hasLabel ? 'flex' : 'none')};
  align-items: center;
  font-family: ${typography.text.main}, sans-serif;
  font-weight: 400;
  font-size: ${({ size }) =>
    size === 'small' ? typography.sizes.md : typography.sizes.lg};
  line-height: 103.7%;
  color: ${({ color }) => (color ? color : colors.neutral[100])};
`;

export const Icon = styled.div`
  display: ${({ hasIcon }) => (hasIcon ? 'flex' : 'none')};
  align-items: center;
  font-size: ${typography.sizes.lg};
`;
