import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;

  &[aria-expanded='true'] {
    display: none;
  }

  .glide__track {
    margin-inline: 3rem;
  }

  .glide__slide {
    padding: 0.8rem;
    opacity: 0.9;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    position: relative;
  }

  img {
    cursor: pointer;
    border-radius: 2px;
  }
`;

export const SlideInfoContainer = styled.div`
  border-bottom: 1px dotted ${(props) => props.theme.text.secondary}; ;
`;

export const WebLink = styled.a`
  display: flex;
  align-items: center;
`;

export const CaretsContainer = styled.div`
  position: sticky;
  top: 50%;
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
