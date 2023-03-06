import styled from 'styled-components';

export const Container = styled.main`
  background: ${(props) => props.theme.background.primary};
  transition: background-color 350ms ease 0s;
`;
