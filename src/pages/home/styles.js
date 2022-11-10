import styled from 'styled-components';
import { colors } from '../../stylesheets/abstracts/palettes';
import { typography } from '../../stylesheets/base/typography';

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
  background-color: ${colors.primary[900]};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 50%;
  /* max-width: 45rem; */
  height: 100vh;
  position: absolute;
  z-index: 5;
  right: 0;
`;

export const ProfileBackgroundItemBig = styled.div`
  width: 74%;
  height: 100vh;
  background-color: ${colors.primary[900]};
`;

export const ProfileBackgroundItemMedium = styled.div`
  width: 12.5%;
  height: 55%;
  max-height: 35.25rem;
  background-color: ${colors.primary[900]};
`;

export const ProfileBackgroundItemSmall = styled.div`
  width: 13.5%;
  height: 41%;
  background-color: ${colors.primary[900]};
`;

export const MainTextBackground = styled.div`
  background-color: ${colors.shadows[800]};
  width: 100%;
  max-width: 49.2rem;
  height: calc(100vh - 270px);
  position: absolute;
  z-index: 3;
  top: 104px;
  left: 90px;
`;

export const ButtonBackground = styled.div`
  background-color: ${colors.secondary[800]};
  width: 41.6%;
  max-width: 600px;
  height: calc(100vh - 68%);
  position: absolute;
  z-index: 4;
  bottom: 90px;
  box-shadow: 4px 4px 4px ${colors.shadows[100]};
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 786px;
  position: absolute;
  z-index: 5;
`;

export const LeftMainContentWrapper = styled.div`
  width: 440px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 278px;
  gap: 1rem;
`;

export const MainTextMedium = styled.div`
  font-family: ${typography.text.display}, sans-serif;
  color: ${colors.neutral[100]};
  font-weight: 400;
  font-size: ${typography.sizes.xxl};
  line-height: 103.7%;
  text-align: right;
`;

export const MainTextLarge = styled.div`
  font-family: ${typography.text.display}, sans-serif;
  color: ${colors.neutral[100]};
  font-weight: 400;
  font-size: ${typography.sizes.xxxl};
  line-height: 103.7%;
  text-align: right;
`;

export const RightMainContentWrapper = styled.div`
  display: flex;
  width: 346px;
  height: 100vh;
  flex-direction: column;
  padding-top: 80px;
  padding-left: 20px;
`;

export const MainParagraphWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding-left: 20px;
  width: 100%;
  height: 440px;
  border-left: 1px solid ${colors.neutral[100]};
`;

export const MainParagraph = styled.div`
  font-family: ${typography.text.main}, sans-serif;
  font-weight: 400;
  font-size: ${typography.sizes.lg};
  line-height: 116.7%;
  color: ${colors.neutral[200]};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding-top: calc(100vh - 880px);
  gap: 1.25rem;
`;

export const ProfileContentWrapper = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 5%;
  padding-top: 14%;
  position: absolute;
  z-index: 6;
  right: 0;
`;

export const ProfileLinesWrapper = styled.div`
  width: 80%;
  max-width: 518px;
`;

export const AboutInfoWrapper = styled.div``;

export const AboutInfoAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AboutParagraph = styled.div`
  max-width: 14rem;
  font-family: ${typography.text.main}, sans-serif;
  font-weight: 400;
  font-size: ${typography.sizes.md};
  color: ${colors.primary[200]};
`;
