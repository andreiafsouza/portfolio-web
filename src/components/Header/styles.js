import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import {
  borderAnimationUsingBackground,
  borderAnimationUsingBackgroundMedia
} from '../../stylesheets/abstracts/mixins';

//animations
const cursorBlink = keyframes`
0% {
  opacity: 0;
}
`;

//components
export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 99999;
`;

export const Container = styled.div`
  max-width: ${(props) => props.theme.breakPoints.xxl};
  height: 4rem;
  margin-inline: auto;
  padding-bottom: 1rem;
  padding-inline: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  background: ${(props) => props.theme.background.primary};

  transition: color 350ms ease 0s, background-color 350ms ease 0s;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    padding-inline: 2rem;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  padding: 0.16rem;
  align-items: center;
  background: ${(props) => props.theme.background.primary};
  transition: background-color 350ms ease 0s;
  cursor: pointer;
`;

export const LogoText = styled.div`
  position: relative;
  font-size: ${(props) => props.theme.fontSizes.lg};
  transition: all 0.1s ease-in-out;

  &::before {
    content: '';
    padding-right: 0.4rem;
    transition: all 0.3s ease-in-out;
    z-index: 0;
    border-left: 0.15rem solid ${(props) => props.theme.svg.accent};
    animation: ${cursorBlink} 1s steps(2) infinite;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      transition: all 0.1s ease-in-out;
      color: ${(props) => props.theme.text.secondary};
    }
  }
`;

export const ActionsContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.breakPoints.lg}) {
    z-index: 1010;
    position: fixed;
    top: 4rem;
    bottom: 0;
    right: 0;
    min-height: 100vh;

    flex-direction: column;
    align-items: flex-start;

    padding-block: min(20vh, 7rem);
    padding-left: 1rem;
    padding-right: min(30vw, 10rem);

    background: ${(props) => props.theme.background.navbar};

    @supports (backdrop-filter: blur(0.2rem)) {
      backdrop-filter: blur(0.2rem);
    }

    transform: translateX(100%);
    transition: transform 350ms ease-out;

    &[aria-expanded='true'] {
      transform: translateX(0);
      transition: transform 350ms ease-out, background-color 350ms ease 0s;
    }
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    flex-direction: row;
  }
`;

export const NavbarItem = styled(Link)`
  position: relative;
  cursor: pointer;

  color: ${(props) => props.theme.text.primary};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: 1rem;
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
    }
  }

  .active {
    transition: all 0.1s ease-in-out;
    color: ${(props) => props.theme.text.secondary};

    &::before {
      height: 100%;
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const NavbarOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-left: 0.5rem;
`;

export const ToggleThemeButtonContainer = styled.div`
  display: flex;
`;

export const LanguageSelectContainer = styled.div`
  position: relative;
  min-width: 4rem;
`;

export const SelectLanguage = styled.div`
  background: ${(props) => props.theme.background.primary};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.25rem;
  padding: 0.15rem 0;
  cursor: pointer;
  transition: background-color 350ms ease 0s;
  text-transform: capitalize;

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
    &:hover {
      transition: background-color 350ms ease 0s;
      background: ${(props) => props.theme.background.secondary};
      color: ${(props) => props.theme.text.secondary};
    }
  }

  &[aria-expanded='true'] {
    &::before {
      transition: all 0.1s ease-in-out;
      width: 100%;
    }
    &::after {
      ${borderAnimationUsingBackgroundMedia}
    }
    svg {
      transform: rotate(180deg);
    }
  }

  svg {
    transition: all 0.2s ease-in-out;
  }
`;

export const LanguageSelectText = styled.div``;

export const DropdownLanguage = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: absolute;
  top: 3rem;
  left: -20%;
  background: ${(props) => props.theme.background.secondaryAccent};
  opacity: 0;
  visibility: hidden;
  transition: 250ms ease;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  border-radius: 0.25rem;
  min-width: max-content;

  &[aria-expanded='true'] {
    opacity: 1;
    visibility: visible;
    transition: 250ms ease;
  }

  &::before {
    content: '';
    position: absolute;
    top: -0.4rem;
    left: 2.35rem;
    width: 1rem;
    height: 1rem;
    transform: rotate(45deg);
    background: ${(props) => props.theme.background.secondaryAccent};
    border-radius: 2px;
    transition: 250ms ease;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-block: 0.4rem;
  padding-inline: 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.text.neutral};

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      background: ${(props) => props.theme.button.hover};
    }
  }
`;

export const MenuButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  width: 3rem;
  overflow: hidden;
  border: none;
  background: transparent;

  svg {
    stroke: ${(props) => props.theme.svg.accent};
  }

  .hamburger {
    transition: translate 800ms, rotate 800ms;
  }

  &[aria-expanded='true'] .hamburger {
    translate: 0.2rem;
    rotate: 0.125turn;
  }

  .line {
    transition: 800ms;
    stroke-dasharray: 60 31 60 1000;
  }

  &[aria-expanded='true'] .line {
    stroke-dasharray: 60 104 60 1000;
    stroke-dashoffset: -90;
  }
`;
