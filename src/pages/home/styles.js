import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.background.primary};
  transition: background-color 350ms ease 0s;
`;

export const NoDividerOnMobile = styled.div`
  display: none;
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    display: block;
  }
`;
