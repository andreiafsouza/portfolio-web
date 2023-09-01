import styled, { keyframes } from 'styled-components';
import blueprintLines from '../../../../assets/images/blueprint-lines.png';
import { Link } from 'react-scroll';

//animations
const typewriter = keyframes`
  to {
    left: 100%
    }
`;

const slideBg = keyframes`
  to {
    right: 0
    }
`;

const blink = keyframes`
  to {
    background: transparent;
    }
`;

const opacity = keyframes`
to {
  opacity: 0;
}
`;

const opacityIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const fadeInUp = keyframes`
to {
  opacity: 1;
  transform: translateY(0);
}`;

//components
export const Container = styled.section``;

export const HeroBgContainer = styled.div`
  position: relative;
  max-width: ${(props) => props.theme.breakPoints.xxl};
  margin: 0 auto;
  background: url(${blueprintLines}) no-repeat;
`;

export const MainContainer = styled.div`
  --typewriterSpeed: 1s;
  --blinkSpeed: 500ms;
  display: grid;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    padding: 0 2rem;
  }
`;

export const MainLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.4rem;

  padding: 2.4rem 0;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    background-color: transparent;
    grid-column: span 3;
  }
`;

export const MainTextContainer = styled.div`
  display: grid;
  /*   gap: 1rem; */
  padding: 2.4rem 1rem 2.4rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  background: ${(props) => props.theme.shadows.secondary};
  transition: background-color 350ms ease 0s;
`;

export const MainTextHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    align-items: flex-end;
  }
`;

const BaseMainText = styled.h1`
  font-family: ${(props) => props.theme.font.mono};
  color: ${(props) => props.theme.text.secondary};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  line-height: 140%;
  transition: background-color 350ms ease 0s;

  padding-inline: 0.4rem;
  width: max-content;

  &::before,
  &::after {
    transition: background-color 350ms ease 0s;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export const MainTextMediumDesign = styled(BaseMainText)`
  position: relative;
  background: ${(props) => props.theme.background.titleBg};
  line-height: 112%;

  &::before {
    background: ${(props) => props.theme.background.titleBg};
    animation: ${typewriter} var(--typewriterSpeed) steps(6) var(--typewriterSpeed) forwards;
  }

  &::after {
    width: 0.07em;
    background: ${(props) => props.theme.background.createBg};
    animation: ${typewriter} var(--typewriterSpeed) steps(6) var(--typewriterSpeed) forwards,
      ${blink} var(--blinkSpeed) steps(6) 6,
      ${opacity} 100ms calc(var(--typewriterSpeed) + 1s) forwards;
  }
`;

export const MainTextMediumEngineer = styled(BaseMainText)`
  position: relative;
  background: ${(props) => props.theme.background.titleBg};
  &::before {
    background: ${(props) => props.theme.background.titleBg};
    animation: ${typewriter} var(--typewriterSpeed) steps(8) calc(var(--typewriterSpeed) + 1s)
      forwards;
  }

  &::after {
    width: 0.07em;
    opacity: 0;
    background: ${(props) => props.theme.background.createBg};
    animation: ${opacityIn} 100ms ease calc(var(--typewriterSpeed) + 1s) forwards,
      ${typewriter} var(--typewriterSpeed) steps(8) calc(var(--typewriterSpeed) + 1s) forwards,
      ${blink} var(--blinkSpeed) steps(8) calc(var(--typewriterSpeed) + 1s) 6,
      ${opacity} 100ms calc(var(--typewriterSpeed) + 2s) forwards;
  }
`;

export const CreateTextWrapper = styled.div`
  position: relative;
  isolation: isolate;
  transition: background-color 350ms ease 0s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 100%;
    transition: background-color 350ms ease 0s;
    background: ${(props) => props.theme.background.createBg};
    mix-blend-mode: difference;
    animation: ${slideBg} 1s steps(6) 3s forwards;
  }
`;

export const MainTextCreate = styled(BaseMainText)`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  color: ${(props) => props.theme.text.create};
  text-transform: uppercase;

  position: relative;

  &::before {
    background: ${(props) => props.theme.background.titleBg};
    animation: ${typewriter} var(--typewriterSpeed) steps(6) calc(var(--typewriterSpeed) + 2s)
      forwards;
  }

  &::after {
    opacity: 0;
    width: 0.045em;
    background: ${(props) => props.theme.background.createBg};
    animation: ${opacityIn} 100ms ease calc(var(--typewriterSpeed) + 2s) forwards,
      ${typewriter} var(--typewriterSpeed) steps(6) calc(var(--typewriterSpeed) + 2s) forwards,
      ${blink} var(--blinkSpeed) steps(8) calc(var(--typewriterSpeed) + 1s) 7;
  }
`;

export const MainTextParagraphContainer = styled.div`
  position: relative;
  min-height: 100%;
  display: flex;

  text-align: center;
  width: fit-content;
  margin-inline: auto;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    padding-left: 1.25rem;
    align-items: flex-end;
    text-align: left;
  }
`;

export const MainTextParagraph = styled.h2`
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.text.secondary};
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;

  opacity: 0;
  transform: translateY(3rem);
  animation: ${fadeInUp} 2s ease calc(var(--typewriterSpeed) + 3s) forwards;
`;

export const MainButtonContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;

  display: grid;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -3.5rem;
    width: 100%;
    height: 100%;
    border: 2px solid ${(props) => props.theme.background.secondaryAccent};
    outline: 4rem solid ${(props) => props.theme.background.secondaryAccent};
    background-color: ${(props) => props.theme.background.secondaryAccent};
    transition: all 350ms ease 0s;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    &::after {
      width: 76%;
    }
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    align-items: flex-end;
  }
`;

export const MainRightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.background.primary};
  transition: background-color 350ms ease 0s;

  padding: 2.4rem 1rem 2.4rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-column: span 2;
  }
`;

export const ProfileAnimationWrapper = styled.div``;

export const AboutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AboutInfoText = styled.div`
  max-width: 28.75rem;

  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.text.secondary};
`;

export const LinkScroll = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
