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
    top: 22%;
    padding: 8px;
    transform: translateY(0);
    border: none;
    box-shadow: none;
    transition: all 0.1s ease-in-out;

    background: rgba(0, 0, 0, 0.2);

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        transition: all 0.1s ease-in-out;
        background: rgba(0, 0, 0, 0.3);
      }
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
  margin-left: 1rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-right: 1rem;
  }

  &[aria-expanded='true'] {
    display: none;
  }

  .glide__slide {
    transition: all 0.1s ease-in-out;

    &:hover,
    :focus {
      .image {
        ::before {
          transition: all 0.4s ease-in-out;
          top: 100%;
          height: 0;
        }
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

  ::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.11);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(0.2px);
    -webkit-backdrop-filter: blur(0px);
    transition: all 0.4s ease-in-out;
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
