import styled, { keyframes } from 'styled-components';
import { mediumLayoutBreakPoint, smallLayoutBreakPoint } from '../../../../utils';

import blueprintLines from '../../../../assets/images/blueprint-lines.png';
import { Link } from 'react-scroll';

const borderRadius = '8px';
const mainTextAdaptWidth = '1335px';

export const Container = styled.section`
  position: relative;
  max-width: 137.5rem;
  margin: 0 auto;
  background: url(${blueprintLines}) no-repeat;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    background-size: contain;
  }
`;

export const MainContainer = styled.div`
  display: grid;
  padding: 4rem 0;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    grid-auto-flow: column;
    grid-auto-columns: 1.7fr 1fr;
    padding: 3.4rem 5rem;
  }
`;

export const MainLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: ${mediumLayoutBreakPoint}) {
    min-height: 100vh;
  }

  @media (min-width: ${mediumLayoutBreakPoint}) {
    padding-right: 4rem;
    margin-bottom: 0;
    background-color: transparent;
  }
`;

const borderHeight = keyframes`
from {
  height: 0;
  opacity: 0;
  }
to {
  height: 24rem;
  }
`;

const opacity = keyframes`
from {
  opacity: 0;
  }
to {
  opacity: 1;
  }
`;

const TextOpacity = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const translateXButtons = keyframes`
  0% {
    transform: translateX(-100%);
  }
  20% {
    transform: translateX(-80%);
  }
  40% {
    transform: translateX(-60%);
  }
  60% {
    transform: translateX(-40%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const MainTextContainer = styled.div`
  position: relative;
  z-index: 10;
  display: grid;
  justify-content: center;
  gap: 1rem;

  padding: 5rem 1rem;

  background: ${(props) => props.theme.shadows.secondary};
  transition: background-color 350ms ease 0s;

  border-radius: ${borderRadius};

  @media (min-width: ${mediumLayoutBreakPoint}) {
    justify-content: flex-start;
  }

  @media (min-width: ${mainTextAdaptWidth}) {
    display: flex;
    padding: 10rem 1rem 8.6rem;
  }
`;

export const MainTextHeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1.25rem;

  gap: 1.6rem;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    align-items: flex-start;
    padding-left: 1.25rem;
    gap: 2.2rem;
  }

  @media (min-width: ${mainTextAdaptWidth}) {
    align-items: flex-end;
    padding-right: 0.25rem;
  }
`;

const BaseMainText = styled.h1`
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.text.secondary};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  text-align: right;
`;

export const MainTextMediumDesign = styled(BaseMainText)`
  line-height: 65%;
  animation: ${TextOpacity} 5.5s ease-in;
`;

export const MainTextMediumEngineer = styled(BaseMainText)`
  line-height: 70%;
  animation: ${TextOpacity} 3s ease-in;
`;

export const MainTextCreate = styled(BaseMainText)`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: 80%;
  margin-left: -2px;
  vertical-align: bottom;
  text-transform: uppercase;
  animation: ${opacity} 0.7s ease-in;
`;

export const MainTextParagraphContainer = styled.div`
  position: relative;
  min-height: 100%;
  max-width: 14rem;
  display: flex;
  align-items: flex-end;
  padding-left: 1.25rem;
  border-left: 1px dotted ${(props) => props.theme.text.primary};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 24rem;
    animation: ${borderHeight} 3s linear backwards;
    width: 1px;
    border-left: 1px dotted ${(props) => props.theme.text.primary};
    opacity: 0;
  }

  @media (min-width: ${mediumLayoutBreakPoint}) {
    border-left: none;
    max-width: 50%;

    &::before {
      opacity: 1;
    }
  }
`;

export const MainTextParagraph = styled.div`
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.lg};
  line-height: 110%;
  color: ${(props) => props.theme.text.secondary};
  animation: ${opacity} 0.7s ease-in;
`;

export const MainButtonContainer = styled.div`
  position: relative;
  z-index: 10;
  align-self: center;
  width: 100%;
  max-width: 100%;
  padding: 0 36%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

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

  @media (min-width: ${mediumLayoutBreakPoint}) {
    align-self: initial;
    padding: 0;
    max-width: 70%;
  }
`;

export const MainRightContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 4rem 1rem 0;
  background-color: ${(props) => props.theme.background.primary};
  transition: background-color 350ms ease 0s;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    padding: 0;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ProfileInfoContainer = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const AboutInfoContainer = styled.div`
  padding-inline: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: ${smallLayoutBreakPoint}) {
    max-width: 28.75rem;
  }
`;

export const AboutInfoText = styled.div`
  min-height: 3.3rem;
  font-weight: ${(props) => props.theme.fontWeights.normal};
  line-height: 110%;
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.text.secondary};
`;

export const LinkScroll = styled(Link)`
  text-decoration: none;
`;
