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
  opacity: 0.5;
}
`;

export const Wrapper = styled.div`
  path {
    stroke: ${(props) => props.theme.svgLinesColor};
    stroke-width: 1;
    opacity: 0.5;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ${dash} 6s linear alternate infinite, ${fadeIn} 1s;
    animation-delay: 1s;
  }

  #profile6 {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ${dash} 6s linear alternate infinite, ${fadeIn} 1s;
  }
`;