import styled, { keyframes } from 'styled-components';
import { mediumLayoutBreakPoint, smallLayoutBreakPoint } from '../../utils';

export const Container = styled.div`
  position: relative;
  max-width: 137.5rem;
  margin: 0 auto;
`;

export const MainContainer = styled.div`
  display: grid;
  padding: 4rem 0;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    grid-auto-flow: column;
    grid-auto-columns: 1.7fr 1fr;
    padding: 3.4rem 5rem; //5.5%;
  }
`;

export const MainLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.shadows.main};

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
  height: 26.4rem;
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

const fadeIn = keyframes`
0%, 49% {
  opacity: 0;
}
50% {
  opacity: 0.5;
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

export const MainText = styled.div`
  position: relative;
  z-index: 10;

  display: grid;
  margin: auto;
  gap: 1rem;
  padding: 5rem 0.25rem 5rem 0;
  background-color: ${(props) => props.theme.shadows.main};

  @media (min-width: ${mediumLayoutBreakPoint}) {
    display: flex;
    padding: 14rem 3rem 8.6rem 3.75rem;
    margin: initial;
  }
`;

export const MainTextHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  color: ${(props) => props.theme.textColor.main[100]};
  font-family: ${(props) => props.theme.fontFamilies.display};
  font-size: var(--fs-xxl);
  font-weight: ${(props) => props.theme.fontWeights.normal};
  gap: 1.6rem;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    align-items: flex-end;
    padding-right: 0.25rem;
    gap: 2.2rem;
  }
`;

export const MainTextMediumDesign = styled.div`
  line-height: 65%;
  text-align: right;
  animation: ${TextOpacity} 5.5s ease-in;
`;

export const MainTextMediumEngineer = styled.div`
  line-height: 70%;
  text-align: right;
  animation: ${TextOpacity} 3s ease-in;
`;

export const MainTextCreate = styled.div`
  font-size: var(--fs-xxxl);
  line-height: 80%;
  text-align: right;
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
  border-left: 1px solid ${(props) => props.theme.textColor.main[100]};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 26.4rem;
    animation: ${borderHeight} 3s linear backwards;
    width: 1px;
    background-color: ${(props) => props.theme.textColor.main[100]};
    opacity: 0;
  }

  @media (min-width: ${mediumLayoutBreakPoint}) {
    border-left: none;
    max-width: 20rem;

    &::before {
      opacity: 1;
    }
  }
`;

export const MainTextParagraph = styled.div`
  font-family: ${(props) => props.theme.fontFamilies.main};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: var(--fs-lg);
  line-height: 110%;
  color: ${(props) => props.theme.textColor.secondary[200]};
  animation: ${opacity} 0.7s ease-in;
`;

export const BackgroundLinesContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
  z-index: 0;
`;

export const MainButtonContainer = styled.div`
  position: relative;
  z-index: 10;
  align-self: center;
  width: 100%;
  max-width: 100%;
  display: flex;
  padding: 0 36%;

  flex-wrap: wrap;
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
    border: 2px solid ${(props) => props.theme.backgroundColor.secondary[800]};
    outline: 4rem solid ${(props) => props.theme.backgroundColor.secondary[800]};
    background-color: ${(props) => props.theme.backgroundColor.secondary[800]};
    animation: ${translateXButtons} 3s linear;
  }

  @media (min-width: ${mediumLayoutBreakPoint}) {
    align-self: initial;
    padding: 0;
    max-width: 70%;
  }

  @media (min-width: ${mediumLayoutBreakPoint}) and (min-height: 51rem) {
    flex-direction: column;
    max-width: 37.5rem;
  }
`;

export const MainRightContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 2rem 2rem;
  background-color: ${(props) => props.theme.backgroundColor.primary[900]};

  @media (min-width: ${smallLayoutBreakPoint}) and (max-width: ${mediumLayoutBreakPoint}) {
    padding: 6rem 2rem;
  }

  @media (min-width: ${mediumLayoutBreakPoint}) {
    padding: 0;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    max-width: fit-content;
  }
`;

export const ProfileInfoContainer = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const AboutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: flex-end;
  align-self: flex-end;
`;

export const AboutInfoText = styled.div`
  max-width: 16rem;
  font-family: ${(props) => props.theme.fontFamilies.main};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  line-height: 110%;
  font-size: var(--fs-md);
  color: ${(props) => props.theme.textColor.secondary[200]};
`;
