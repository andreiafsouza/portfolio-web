import styled from 'styled-components';

export const Footer = styled.footer`
  background: ${(props) => props.theme.background.footer};
  transition: color 350ms ease 0s, background-color 350ms ease 0s;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32vh;
`;

export const FooterText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
