import styled from 'styled-components';
import { mediumLayoutBreakPoint, smallLayoutBreakPoint } from '../../../../utils';

export const Container = styled.section`
  max-width: 137.5rem;
  margin: 0 auto;
  position: relative;
  padding-inline: 1rem;
  padding-block: 1rem;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    padding-inline: 5rem;
    padding-block: 2rem;
  }
`;

const ContainerBase = styled.div`
  display: grid;
  justify-items: center;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    grid-auto-flow: column;
    grid-auto-columns: 30% 1fr;
  }
`;

export const AboutInfoContainer = styled(ContainerBase)`
  padding-bottom: 3rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: 30rem;
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

export const SkillsContainer = styled(ContainerBase)`
  gap: 2.5rem;
  align-items: flex-start;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    grid-auto-columns: 1fr 1.2fr;
  }
`;

export const SkillsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    transform: rotate(180deg);
  }

  @media (min-width: ${mediumLayoutBreakPoint}) {
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
  line-height: 110%;
  color: ${(props) => props.theme.text.secondary};
  text-align: center;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    text-align: right;
  }
`;

export const SkillsTitle = styled(BaseMainText)``;

export const SkillsSubtitle = styled(BaseTextParagraph)`
  font-style: italic;
  min-height: 6rem;
`;

export const SkillsLink = styled(BaseTextParagraph)`
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

export const SkillCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  flex-wrap: wrap;

  padding-top: 1.5rem;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    justify-content: flex-start;
  }
`;
