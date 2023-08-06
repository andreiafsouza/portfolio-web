import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { mediumLayoutBreakPoint } from '@src/utils';

export const Container = styled.section`
  max-width: 137.5rem;
  margin: 0 auto;
  position: relative;
  padding-inline: 1rem;
  padding-block: 1rem;
  background: ${(props) => props.theme.background.primary};
  transition: color 350ms ease 0s, background-color 350ms ease 0s;

  min-height: 100vh;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    padding-inline: 5rem;
    padding-block: 2rem;
  }
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;

  background: ${(props) => props.theme.background.primary};
  opacity: 0.9;
  transition: color 350ms ease 0s, background-color 350ms ease 0s;
`;

export const BackLink = styled(NavLink)`
  text-decoration: none;
  padding-block: 0.8rem;

  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: flex-start;
  max-width: fit-content;

  color: ${(props) => props.theme.text.primary};

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      transition: all 0.1s ease-in-out;
      color: ${(props) => props.theme.text.secondary};
    }
  }
`;

export const BackLinkText = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.lg};
`;
