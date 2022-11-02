import styled from 'styled-components';
import { colors } from '../../stylesheets/abstracts/palettes';
import { typography } from '../../stylesheets/base/typography';

export const Container = styled.div`
  width: 100%;
  max-width: 8.75rem;
  max-height: 2.5rem;
  display: flex;
  justify-content: center;
  border: 1px solid ${colors.neutral[100]};
  border-radius: 4px;
  padding: 0.6rem 0.5rem;
  gap: 0.25rem;
  transition: all 0.1s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transition: all 0.1s ease-in-out;
      background: ${colors.shadows[400]};
      /* opacity: 0.8; */
      cursor: pointer;
    }
  }
`;

export const Label = styled.div`
  display: ${({ hasLabel }) => (hasLabel ? 'flex' : 'none')};
  align-items: center;
  font-family: ${typography.text.main}, sans-serif;
  font-weight: 400;
  font-size: ${typography.sizes.lg};
  line-height: 103.7%;
  color: ${colors.neutral[100]};
`;
