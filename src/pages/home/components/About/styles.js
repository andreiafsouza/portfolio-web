import styled from 'styled-components';
import blueprintLines from '../../../../assets/images/blueprint-lines.png';

export const Container = styled.section`
  display: grid;
  gap: 2rem;
  max-width: ${(props) => props.theme.breakPoints.xxl};
  margin: 0 auto;
  position: relative;
  padding: 1rem 1rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    padding: 1rem 2rem;
  }
`;

export const AboutInfoContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  isolation: isolate;
  max-width: 28rem;
  background-color: ${(props) => props.theme.profile};
  z-index: 0;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    background: url(${blueprintLines}) no-repeat;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: -1;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-column: span 2;

    &::before {
      content: '';
      position: absolute;
      background: url(${blueprintLines}) no-repeat;
      top: -20%;
      left: -20%;
      width: 120%;
      height: 120%;
      opacity: 0.8;
      z-index: -1;
    }
  }
`;

export const ProfileLinesContainer = styled.div`
  position: relative;
`;

export const ImageProfile = styled.img`
  border-radius: 50%;
  opacity: 0.8;
`;

export const TerminalWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-column: span 3;
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

export const SkillsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    transform: rotate(180deg);
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-column: span 2;
    align-items: flex-end;

    svg {
      transform: rotate(90deg);
    }
  }
`;

const BaseMainText = styled.h1`
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.text.secondary};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.xxl};
`;

const BaseTextParagraph = styled.div`
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.text.secondary};
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    text-align: right;
  }
`;

export const SkillsTitle = styled(BaseMainText)``;

export const SkillsSubtitle = styled(BaseTextParagraph)`
  font-style: italic;
  min-height: 6.875rem;
`;

export const SkillsList = styled(BaseTextParagraph)`
  padding-top: 1rem;
`;

export const SkillsLink = styled(BaseTextParagraph)`
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

export const SkillCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.4rem;
  flex-wrap: wrap;

  padding-top: 1.5rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-column: span 3;
    justify-content: flex-start;
  }
`;
