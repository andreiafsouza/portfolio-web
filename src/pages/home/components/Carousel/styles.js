import styled from 'styled-components';

export const CaretsContainer = styled.div`
  z-index: 1000;
  width: 100%;
  opacity: 0;
  transition: all 0.1s ease-in-out;

  svg {
    opacity: 0.5;
    transition: all 0.1s ease-in-out;
  }

  .glide__arrow {
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transition: all 0.1s ease-in-out;
      }
    }

    @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    }
  }

  .glide__arrow--prev {
    left: 0;
    transition: all 0.1s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        svg {
          transition: all 0.1s ease-in-out;
          transform: scale(1.1);
          transform: translateX(-0.25rem);
          opacity: 1;
        }
      }
    }
  }

  .glide__arrow--next {
    right: 0;
    transition: all 0.1s ease-in-out;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
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

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 90%;
    background: ${(props) => props.theme.background.portfolio};
  }

  &[aria-expanded='true'] {
    display: none;
  }

  .glide__slides {
    padding-left: 1.2rem;

    @media (min-width: ${(props) => props.theme.breakPoints.sm}) {
      padding-left: 1rem;
    }
  }

  .glide__slide {
    transition: all 0.1s ease-in-out;

    &:hover,
    :focus {
      .image {
        transform: scale(1);
        transition: all ease 500ms;
      }
    }
  }

  img {
    cursor: pointer;
    border-radius: 16px;
    inline-size: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    object-position: top;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover > ${CaretsContainer} {
      transition: all 0.1s ease-in-out;
      opacity: 1;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  transition: all ease 500ms;
  transform: scale(0.98);

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
  }
`;

export const SlideInfoWrapper = styled.div`
  padding: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const SlideTitle = styled.h2`
  color: ${(props) => props.theme.text.secondary};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const SlideLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text.secondary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  opacity: 0.8;

  svg {
    opacity: 0.6;
    transition: all 0.1s ease-in-out;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    :focus {
      opacity: 1;
      transition: all 0.1s ease-in-out;
      svg {
        transition: all 0.1s ease-in-out;
        transform: scale(1.1);
        transform: translateX(0.25rem);
        opacity: 1;
      }
    }
  }
`;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
