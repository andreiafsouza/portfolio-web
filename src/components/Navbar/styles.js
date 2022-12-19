import styled from 'styled-components';
import { mobileBreakPointWidth } from '../../utils';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  z-index: 1000;
`;

export const NavbarContainer = styled.div`
  display: none;
  background-color: ${(props) => props.theme.backgroundColor.primary[900]};

  @media (min-width: ${mobileBreakPointWidth}) {
    max-width: 38.7%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 2.7rem 6.56rem 0 6.56rem;
    gap: 2.7rem;
  }
`;

export const NavbarItem = styled.a`
  position: relative;
  padding: 0 0.4rem;
  color: ${(props) => props.theme.textColor.main[100]};
  font-family: ${(props) => props.theme.fontFamilies.main};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 103.7%;
  text-decoration: none;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    transition: all 0.1s ease-in-out;
    z-index: 0;
    border-left: 1px solid
      ${({ hoverColor }) =>
        hoverColor ? hoverColor : (props) => props.theme.button.hoverColor};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      opacity: 0.9;
      &::before {
        height: 110%;
        transition: all 0.1s ease-in-out;
      }
    }
  }
`;

export const MenuIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: ${(props) => props.theme.backgroundColor.primary[900]};

  @media (min-width: ${mobileBreakPointWidth}) {
    display: none;
  }
`;
