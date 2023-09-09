import styled from 'styled-components';
import blueprintLines from '../../../../assets/images/blueprint-lines.png';

export const Container = styled.section`
  display: grid;
  gap: 3rem;
  max-width: ${(props) => props.theme.breakPoints.xxl};
  margin: 0 auto;
  position: relative;
  padding: 3rem 1rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    padding: 6rem 2rem 3rem;
  }
`;

export const AboutInfoContainer = styled.div`
  position: relative;
  isolation: isolate;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-inline: 1rem;

  &::before {
    content: '';
    position: absolute;
    background: url(${blueprintLines}) no-repeat;
    top: -2rem;
    left: -2rem;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    z-index: -1;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    flex-direction: row;
    padding-inline: 2.4rem;
    gap: 4rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  max-width: 20rem;
  background-color: ${(props) => props.theme.profile};
  z-index: 0;
  border-radius: 50%;
`;

export const ProfileLinesContainer = styled.div`
  position: relative;
`;

export const ImageProfile = styled.img`
  border-radius: 50%;
  opacity: 0.8;
`;

export const TerminalWrapper = styled.div`
  /*   @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    grid-column: span 3;
    padding-right: 2rem;
  } */
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-items: center;
  align-items: flex-start;
  gap: 1rem;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
`;

export const SkillsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;

  grid-column: 1 / 4;

  @media (min-width: ${(props) => props.theme.breakPoints.md}) {
    padding-inline: 2rem;
    grid-column: 1 / 4;
    grid-row: 1 / 2;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.xl}) {
    grid-column: 5 / 8;
    grid-row: 2 / 4;
  }
`;

const BaseMainText = styled.h1`
  font-family: ${(props) => props.theme.font.mono};
  color: ${(props) => props.theme.text.secondary};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.xxl};
`;

const BaseTextParagraph = styled.p`
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.text.secondary};
`;

export const SkillsTitle = styled(BaseMainText)`
  width: max-content;
`;

export const SkillsSubtitle = styled(BaseTextParagraph)`
  font-style: italic;
  padding-bottom: 1rem;
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

export const SkillCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
`;

export const SkillName = styled.p`
  color: ${(props) => props.theme.text.secondary};
  text-align: center;
`;
