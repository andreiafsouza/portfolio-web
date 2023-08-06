import styled from 'styled-components';
import { mediumLayoutBreakPoint } from '@src/utils';

export const CarouselContainer = styled.div`
  position: relative;
  cursor: auto;

  &[aria-expanded='true'] {
    display: none;
  }

  .glide__slide {
    position: relative;
    user-select: text;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    @media (min-width: ${mediumLayoutBreakPoint}) {
      padding: 0.4rem;
    }
  }

  img {
    border-radius: 2px;
  }
`;

export const SlideInfoContainer = styled.div`
  width: 100%;
  max-width: 600px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  padding-top: 2rem;
  padding-bottom: 4rem;

  border-bottom: 2px dotted ${(props) => props.theme.text.secondary};
  color: ${(props) => props.theme.text.secondary};
`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: 90rem;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.text.secondary};
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

export const TechInfoContainer = styled.div``;

export const InfoContainer = styled.div``;

export const TechText = styled.p`
  white-space: nowrap;
`;

export const WebLink = styled.a`
  padding-left: 0.4rem;
  white-space: nowrap;
  color: ${(props) => props.theme.text.secondary};
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
