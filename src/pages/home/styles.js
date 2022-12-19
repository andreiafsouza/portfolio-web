import styled from 'styled-components';
import { mobileBreakPointWidth, mobileBreakPointFont } from '../../utils';
import * as mixins from '../../stylesheets/abstracts/mixins';

export const Container = styled.div`
  position: relative;
`;

export const MainContainer = styled.div`
  display: grid;
  padding: 6rem 0;

  @media (min-width: ${mobileBreakPointWidth}) {
    grid-auto-flow: column;
    grid-auto-columns: 1.7fr 1fr;
    padding-top: 3.6rem;
    padding: 3.6rem 5rem;
  }
`;

export const MainLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 2rem;
  background-color: ${(props) => props.theme.shadows.main};

  @media (min-width: ${mobileBreakPointWidth}) {
    padding-right: 4rem;
    margin-bottom: 0;
    background-color: transparent;
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

  @media (min-width: ${mobileBreakPointWidth}) {
    display: flex;
    padding: 14rem 3rem 8.6rem 3.75rem;
    margin: initial;
  }
`;

export const MainTextHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 0.25rem;
  color: ${(props) => props.theme.textColor.main[100]};
  font-family: ${(props) => props.theme.fontFamilies.display};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  gap: 2.2rem;
`;

export const MainTextMediumDesign = styled.div`
  line-height: 65%;
  text-align: right;
`;

export const MainTextMediumEngineer = styled.div`
  line-height: 70%;
  text-align: right;
`;

export const MainTextCreate = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: 80%;
  text-align: right;
  vertical-align: bottom;
  text-transform: uppercase;
`;

export const MainTextParagraphContainer = styled.div`
  position: relative;
  height: 100%;
  max-width: 20rem;
  display: flex;
  align-items: flex-end;
  padding-left: 1.25rem;
  width: 100%;
  border-left: 1px solid ${(props) => props.theme.textColor.main[100]};

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 26.4rem;
    width: 1px;
    background-color: ${(props) => props.theme.textColor.main[100]};
    opacity: 0;
  }

  @media (min-width: ${mobileBreakPointWidth}) {
    border-left: none;

    &::before {
      opacity: 1;
    }
  }
`;

export const MainTextParagraph = styled.div`
  font-family: ${(props) => props.theme.fontFamilies.main};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.lg};
  line-height: 108%;
  color: ${(props) => props.theme.textColor.secondary[200]};
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
  padding: 0 30%;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  background-color: ${(props) => props.theme.backgroundColor.secondary[800]};
  border: 1px solid ${(props) => props.theme.backgroundColor.secondary[800]};

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
  }

  @media (min-width: ${mobileBreakPointWidth}) {
    align-self: initial;
    padding: 0;
    max-width: 70%;
  }

  @media (min-width: ${mobileBreakPointWidth}) and (min-height: 51rem) {
    flex-direction: column;
    max-width: 37.5rem;
  }
`;

export const MainRightContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 0;
  padding: 3rem 2rem;
  background-color: ${(props) => props.theme.backgroundColor.primary[900]};

  @media (min-width: ${mobileBreakPointWidth}) {
    align-self: initial;
    padding: 0;
    gap: 2rem;
    align-items: flex-end;
  }
`;

export const ProfileInfoContainer = styled.div`
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
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.textColor.secondary[200]};
`;
