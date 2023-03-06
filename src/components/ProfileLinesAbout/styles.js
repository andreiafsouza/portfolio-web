import styled, { keyframes } from 'styled-components';

const dash = keyframes`
from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 0.7;
}
`;

export const Wrapper = styled.div`
  position: absolute;
  z-index: 1;

  path {
    stroke-width: 1;
    opacity: 0.7;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
  }

  #profile6 {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      path {
        animation: ${dash} 6s linear alternate infinite, ${fadeIn} 1s;
        animation-delay: 1s;
      }
      #profile6 {
        animation: ${dash} 6s linear alternate infinite, ${fadeIn} 1s;
      }
    }
  }
`;
