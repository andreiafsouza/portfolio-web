import styled from 'styled-components';
import blueprintLines from '@images/blueprint-lines.png';
import { bigBoxShadow, mainBoxShadow } from 'stylesheets/abstracts/mixins';

export const Container = styled.section`
  /* background: ${(props) => props.theme.background.secondary};
  padding-bottom: 6rem; */
`;

const BaseMainText = styled.h1`
  font-family: ${(props) => props.theme.font.mono};
  color: ${(props) => props.theme.text.secondary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  padding-bottom: 3rem;
`;

export const Title = styled(BaseMainText)`
  text-align: center;
`;

export const CarouselContainer = styled.div`
  inline-size: min(100% -4rem, 96rem);
  margin-inline: auto;

  overflow: hidden;
  position: relative;
  max-height: 550px;
  -webkit-transition: max-height 0.2s ease;
  transition: max-height 0.2s ease;

  max-height: ${({ isHidden }) => (isHidden ? 0 : '2000px')};
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

  -webkit-transition: max-height 0.2s ease;
  transition: max-height 0.2s ease;
`;

export const Slide = styled.div`
  width: 100%;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-top: 0;
  position: relative;
  padding: 1rem 2rem 6rem;

  -webkit-transition: margin 0.5s ease;
  transition: margin 0.5s ease;

  margin-left: ${({ isHidden }) => (isHidden ? '0vw' : '100vw')};

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
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0.5rem;

  display: flex;

  align-items: center;
  justify-content: flex-start;
  max-width: fit-content;

  color: ${(props) => props.theme.text.primary};

  svg {
    left: 0;
    transition: all 0.1s ease-in-out;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      transition: all 0.1s ease-in-out;
      color: ${(props) => props.theme.text.secondary};

      svg {
        transition: all 0.1s ease-in-out;
        transform: scale(1.1);
        transform: translateX(-0.25rem);
      }
    }
  }
`;

export const SlideContent = styled.div``;

export const SlideInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 1rem;
`;

export const SlideTitle = styled.h1`
  font-family: ${(props) => props.theme.font.mono};
  color: ${(props) => props.theme.text.secondary};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  padding-bottom: 2.5rem;
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
  ${bigBoxShadow}
`;
