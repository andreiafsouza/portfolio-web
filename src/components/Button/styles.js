import styled from 'styled-components';
import { colors } from '../../stylesheets/abstracts/palettes';
import { typography } from '../../stylesheets/base/typography';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ size }) => (size === 'small' ? '6.25rem' : '8.75rem')};
  max-height: 2.5rem;
  display: flex;
  justify-content: center;
  border: 1px solid;
  border-color: ${({ color }) => (color ? color : colors.neutral[100])};
  border-radius: 4px;
  padding: ${({ size }) =>
    size === 'small' ? '0.4rem 0.5rem' : '0.6rem 0.5rem'};
  gap: 0.25rem;
  transition: all 0.1s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: all 0.1s ease-in-out;
      background: ${({ hoverColor }) =>
        hoverColor ? hoverColor : colors.shadows[400]};
      cursor: pointer;
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
