import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { mediumLayoutBreakPoint } from '../../utils';

export const Footer = styled.footer`
  background: ${(props) => props.theme.background.footer};
  transition: color 350ms ease 0s, background-color 350ms ease 0s;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
`;

export const FooterText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
