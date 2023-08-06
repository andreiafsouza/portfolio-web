import styled from 'styled-components';
import { mediumLayoutBreakPoint } from 'utils/index';

export const CarouselContainer = styled.div`
  position: relative;

  &[aria-expanded='true'] {
    display: none;
  }

  @media (min-width: ${mediumLayoutBreakPoint}) {
    .glide__track {
      margin-inline: 3rem;
    }
  }
  .glide__slide {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 2rem;
      right: 0;
      bottom: 0;
      left: 2rem;
      z-index: -1;
      border: 2px dotted ${(props) => props.theme.text.secondary};
      border-radius: 4px;

      transition: all 0.3s ease-in-out, opacity 0.2s ease-in-out;
    }

    @media (hover: hover) and (pointer: fine) {
      padding: 0.8rem;

      &:hover {
        &::before {
          top: 0;
          left: 0rem;
          right: 2rem;
          bottom: 2rem;
        }
      }
    }
  }

  img {
    cursor: pointer;
    border-radius: 2px;
  }
`;

export const CaretsContainer = styled.div`
  z-index: 1000;
  width: 100%;

  .glide__arrow {
    border: none;
    box-shadow: none;
  }

  .glide__icon--prev {
    position: relative;
    left: 0;
    transition: all 0.1s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        left: -4px;
      }
    }
  }

  .glide__arrow--next {
    right: 0;
    transition: all 0.1s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        right: -4px;
      }
    }
  }

  svg {
    transition: all 0.1s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transition: all 0.1s ease-in-out;
        opacity: 0.8;
      }
    }
  }
`;
