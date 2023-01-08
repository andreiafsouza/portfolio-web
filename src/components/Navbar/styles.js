import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediumLayoutBreakPoint } from '../../utils';

export const Container = styled.div`
  max-width: 137.5rem;
  position: sticky;
  top: 0;
  margin: 0 auto;
  margin-top: -3.75rem;
  z-index: 1000;
  display: grid;
  background: ${(props) =>
    props.navColor ? (props) => props.theme.background.primary : 'transparent'};
  opacity: ${(props) => (props.navColor ? 0.97 : 1)};
  transition: background-color 0.3s ease-in-out 0.5ms;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    grid-auto-flow: column;
    grid-auto-columns: 1.7fr 1fr;
    padding: 0 5rem;
  }
`;

export const NavbarLeftContainer = styled.div``;
export const NavbarRightContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    justify-content: center;
  }
`;

export const NavbarContainer = styled.div`
  display: none;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 2.7rem 0.5rem 0 0.8rem;
    gap: 2rem;
  }
`;

export const NavbarItem = styled(Link)`
  position: relative;
  padding: 0 0.6rem;
  color: ${(props) => props.theme.text.primary};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: var(--fs-md);
  line-height: 103.7%;
  text-decoration: none;
  outline: none;
  transition: all 0.1s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    transition: all 0.3s ease-in-out;
    z-index: 0;
    border-left: 0.2rem solid ${(props) => props.theme.svg.accent};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      transition: all 0.1s ease-in-out;
      color: ${(props) => props.theme.text.secondary};
      &::before {
        height: 110%;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;

export const MenuIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: none;
  background: transparent;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    display: none;
  }

  .hamburger {
    transition: translate 1s, rotate 1s;
  }

  &[aria-expanded='true'] .hamburger {
    translate: 0.1rem -0.1rem;
    rotate: 0.125turn;
  }

  .line {
    transition: 1s;
    stroke-dasharray: 60 31 60 1000;
  }

  &[aria-expanded='true'] .line {
    stroke-dasharray: 60 105 60 1000;
    stroke-dashoffset: -89;
  }
`;

export const MenuBars = styled.svg`
  fill: ${(props) => props.theme.svg.accent};
  width: 2rem;
  height: 2rem;
`;
