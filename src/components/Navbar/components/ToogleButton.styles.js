import styled from 'styled-components';

const size = '2rem';

export const Container = styled.button`
  width: ${size};
  height: ${size};
  background: ${(props) => props.theme.background.accent};
  border: none;
  border-radius: 1000px;
  cursor: pointer;
`;

export const Circle = styled.svg`
  fill: ${(props) => props.theme.background.accent};
`;
