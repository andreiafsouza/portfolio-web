import styled, { css, keyframes } from 'styled-components';
import blueprintLines from '@images/blueprint-lines.png';
import { bigBoxShadow, mainBoxShadow } from 'stylesheets/abstracts/mixins';

/* animations */
const marginSlideRight = keyframes`
0% {
  transform: translateX(0)
} 30% {
  transform: translateX(100vw)
} 40%{
  opacity: 0;
  transform: translateX(-100vw)
}80% {
  opacity: 1;
  transform: translateX(5vw)
} 100% {
  transform: translateX(0)
}
`;

const marginSlideLeft = keyframes`
0% {
  transform: translateX(0)
} 30% {
  transform: translateX(-100vw)
} 40%{
  opacity: 0;
  transform: translateX(100vw)
}80% {
  opacity: 1;
  transform: translateX(-5vw)
} 100% {
  transform: translateX(0)
}
`;

export const Container = styled.section``;

const BaseMainText = styled.h1`
  font-family: ${(props) => props.theme.font.mono};
  color: ${(props) => props.theme.text.secondary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xxl};
`;

export const Title = styled(BaseMainText)`
  text-align: center;
  padding-bottom: 3rem;
`;

export const CarouselContainer = styled.div`
  inline-size: min(100% -4rem, 96rem);
  margin-inline: auto;

  overflow: hidden;
  position: relative;
  max-height: 550px;
  -webkit-transition: max-height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  transition: max-height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);

  max-height: ${({ isHidden }) => (isHidden ? 0 : '1200px')};
`;

export const SlideDetailsContainer = styled.div`
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;

  background: ${(props) => props.theme.background.secondary};

  background: linear-gradient(
    to right,
    ${(props) => props.theme.background.secondary},
    ${(props) => props.theme.background.primary},
    ${(props) => props.theme.background.secondary}
  );

  background: ${(props) => props.theme.background.portfolio};

  max-height: ${({ isHidden }) => (isHidden ? '' : '0')};

  -webkit-transition: max-height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  transition: max-height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
`;

export const Slide = styled.div`
  width: 100%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-top: 0;
  position: relative;
  padding: 1rem 2rem 6rem;

  animation: ${({ animateSlide, animationSide }) =>
    animateSlide && animationSide === 'left'
      ? css`
          ${marginSlideRight} 500ms cubic-bezier(0.25, 0.1, 0.25, 1)
        `
      : animateSlide && animationSide === 'right'
      ? css`
          ${marginSlideLeft} 500ms cubic-bezier(0.25, 0.1, 0.25, 1)
        `
      : 'none'};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 40%;
    right: -40%;
    width: 20%;
    height: 2px;
    border-top: 2px dotted ${(props) => props.theme.text.secondary};
  }
`;

export const GridContainer = styled.div`
  position: relative;
  max-width: ${(props) => props.theme.breakPoints.lg};
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BackButton = styled.button`
  position: relative;
  border: none;
  cursor: pointer;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: fit-content;
  padding: 0.5rem;

  color: ${(props) => props.theme.text.primary};

  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 16px;
    transform: rotate(45deg);
    background-color: ${(props) => props.theme.icon.accent};
  }

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 16px;
    transform: rotate(-45deg);
    background-color: ${(props) => props.theme.icon.accent};
  }

  p {
    display: none;
    padding-left: 1rem;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      transition: all 0.1s ease-in-out;
      color: ${(props) => props.theme.text.secondary};

      &::before,
      &::after {
        transition: all 0.1s ease-in-out;
        opacity: 0.8;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    p {
      display: block;
    }
  }
`;

export const SlideContent = styled.div``;

export const SlideInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
`;

export const SlideInfoContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SlideInfotext = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CaretButton = styled.button`
  background: transparent;
  border: none;
  display: none;

  svg {
    opacity: 0.6;
    transition: all 0.1s ease-in-out;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    :focus {
      svg {
        transition: all 0.1s ease-in-out;
        transform: scale(1.1);
        transform: translateX(-0.25rem);
        opacity: 1;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    display: block;
  }
`;

export const CarteButtonLeft = styled(CaretButton)``;

export const CarteButtonRight = styled(CaretButton)`
  @media (hover: hover) and (pointer: fine) {
    &:hover,
    :focus {
      svg {
        transform: translateX(0.25rem);
      }
    }
  }
`;

export const SlideTitle = styled(BaseMainText)`
  font-weight: ${(props) => props.theme.fontWeights.normal};
  text-align: center;
`;

export const SlideTechs = styled.p`
  text-align: center;
  padding-bottom: 1rem;
`;

export const SlideLink = styled.a`
  color: ${(props) => props.theme.text.primary};

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      transition: all 0.1s ease-in-out;
      color: ${(props) => props.theme.text.secondary};
    }
  }
`;

export const SlideImageWrapper = styled.div`
  margin-top: 2rem;
  ${bigBoxShadow}

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    margin-top: 4rem;
  }
`;
