import styled from 'styled-components';
import { colors } from '../../stylesheets/abstracts/palettes';
import { typography } from '../../stylesheets/base/typography';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  z-index: 1000;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 2.7rem 6.5rem 0 6.5rem;
  gap: 2.7rem;
`;

export const NavbarItem = styled.div`
  font-family: ${typography.text.main}, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${typography.sizes.md};
  line-height: 103.7%;
  color: ${colors.neutral[100]};
`;
