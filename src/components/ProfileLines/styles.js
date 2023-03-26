import styled, { keyframes } from 'styled-components';

export const dashIn = keyframes`
from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const dashOut = keyframes`
from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 1;
  }
`;

export const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const fadeOut = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`;

export const Wrapper = styled.div`
  padding-top: 0.5rem;
  position: absolute;
  z-index: 1000;

  path {
    stroke-width: 4;
    stroke-dasharray: 1;
    stroke-dashoffset: 0;

    &:not(:hover) {
      animation: ${dashOut} 1s linear forwards, ${fadeOut} 1s;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      path {
        animation: ${dashIn} 6s linear alternate infinite, ${fadeIn} 1s;
      }
    }
  }

  @media (pointer: coarse) {
    &[aria-expanded='false'] {
      path {
        animation: ${dashOut} 1s linear forwards, ${fadeOut} 1s;
      }
    }

    &[aria-expanded='true'] {
      path {
        animation: ${dashIn} 6s linear alternate infinite, ${fadeIn} 1s;
      }
    }
  }
`;
