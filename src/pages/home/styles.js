import styled from 'styled-components';
import * as mixins from '../../stylesheets/abstracts/mixins';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const BackgroundLinesWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 2;
  overflow: hidden;
  background-color: ${(props) => props.theme.backgroundColor.primary[900]};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 50%;
  height: 100vh;
  position: absolute;
  z-index: 5;
  right: 0;
`;

export const ProfileBackgroundItemBig = styled.div`
  width: 74%;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor.primary[900]};
`;

export const ProfileBackgroundItemMedium = styled.div`
  width: 12.5%;
  height: 55%;
  max-height: 35.25rem;
  background-color: ${(props) => props.theme.backgroundColor.primary[900]};
`;

export const ProfileBackgroundItemSmall = styled.div`
  width: 13.5%;
  height: 41%;
  background-color: ${(props) => props.theme.backgroundColor.primary[900]};
`;

export const MainTextBackground = styled.div`
  background-color: ${(props) => props.theme.shadows.main};
  width: 100%;
  max-width: 48.8rem;
  height: calc(100vh - 270px);
  position: absolute;
  z-index: 3;
  top: 10.15%;
  left: 6.5%;
`;

export const MainContentWrapper = styled.div`
  width: 55%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5.5%;
  padding-bottom: 6.5%;
  position: absolute;
  z-index: 6;
  left: 0;
  gap: 9.9%;
`;

export const LeftMainContentWrapper = styled.div`
  height: 100%;
  display: flex;
  padding-left: 17.5%;
`;

export const MainText = styled.div`
  display: flex;
  height: 100%;
`;

export const MainTextHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 1.25rem;
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

export const MainTextLarge = styled.div`
  font-size: ${(props) => props.theme.fontSizes.xxxl};
  line-height: 80%;
  text-align: right;
  vertical-align: bottom;
`;

export const MainTextParagraphWrapper = styled.div`
  height: 100%;
  max-width: 20rem;
  display: flex;
  align-items: flex-end;
  padding-left: 1.25rem;
  width: 100%;
  border-left: 1px solid ${(props) => props.theme.textColor.main[100]};
`;

export const MainParagraph = styled.div`
  font-family: ${(props) => props.theme.fontFamilies.main};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.lg};
  line-height: 108%;
  color: ${(props) => props.theme.textColor.secondary[200]};
`;

export const MainButtonWrapper = styled.div`
  width: 100%;
  max-width: 37.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.25rem;
  padding-right: 10rem;
  padding-block: 5.2rem;
  background-color: ${(props) => props.theme.backgroundColor.secondary[800]};
  ${mixins.mainBoxShadow}
`;

export const ProfileContentWrapper = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding-top: 11.2%;
  padding-right: 5%;
  padding-left: 8%;
  position: absolute;
  z-index: 6;
  right: 0;
  gap: 2rem;

  @media (min-width: 1980px) {
    padding-top: 7%;
    padding-right: 7%;
  }
`;

export const ProfileLinesWrapper = styled.div`
  width: 100%;
  max-width: 33rem;
  @media (min-width: 1980px) {
    max-width: 40rem;
  }
`;

export const AboutParagraphWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
`;

export const AboutParagraph = styled.div`
  max-width: 16rem;
  font-family: ${(props) => props.theme.fontFamilies.main};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  line-height: 110%;
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.textColor.secondary[200]};
`;

export const AboutInfoAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
