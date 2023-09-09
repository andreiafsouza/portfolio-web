import styled from 'styled-components';

export const CaretsContainer = styled.div`
  z-index: 1000;
  width: 100%;
  opacity: 0;
  transition: all 0.1s ease-in-out;

  svg {
    opacity: 0.6;
    transition: all 0.1s ease-in-out;
  }

  .glide__arrow {
    height: 100%;
    border: none;
    box-shadow: none;
    transition: all 0.1s ease-in-out;

    background: rgba(0, 0, 0, 0.2);

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transition: all 0.1s ease-in-out;
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }

  .glide__arrow--prev {
    left: 0;
    transition: all 0.1s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover,
      :focus {
        svg {
          transition: all 0.1s ease-in-out;
          transform: scale(1.1);
          transform: translateX(-0.25rem);
          transition: all 0.1s ease-in-out;
          opacity: 1;
        }
      }
    }
  }

  .glide__arrow--next {
    right: 0;
    transition: all 0.1s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover,
      :focus {
        svg {
          transition: all 0.1s ease-in-out;
          transform: scale(1.1);
          transform: translateX(0.25rem);
          transition: all 0.1s ease-in-out;
          opacity: 1;
        }
      }
    }
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  border: 1px solid hotpink;

  &[aria-expanded='true'] {
    display: none;
  }

  .glide__track {
    border: 1px solid red;
    width: 100%;
  }

  .glide__slide {
    position: relative;
    transition: all 0.1s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover,
      :focus {
      }
    }
  }

  img {
    cursor: pointer;
    border-radius: 2px;
  }

  &:hover > ${CaretsContainer} {
    transition: all 0.1s ease-in-out;
    opacity: 1;
  }
`;
