import styled from 'styled-components';
import { mediumLayoutBreakPoint } from '../../utils';
import { mainBoxShadow } from '../../stylesheets/abstracts/mixins';

export const Container = styled.div`
  max-width: 137.5rem;
  margin: 0 auto;
  position: relative;
  padding-top: 3.7rem;
  padding-inline: 1rem;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    padding-inline: 5rem;
  }
`;

export const AboutInfoContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: flex-start;
  padding-block: 1rem;
  gap: 1rem;

  @media (min-width: ${mediumLayoutBreakPoint}) {
    grid-auto-flow: column;
    grid-auto-columns: 30% 1fr;
    padding-block: 2rem;
    gap: 2rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: 30rem;
  background-color: ${(props) => props.theme.profile.primary};
  /*   background: linear-gradient(
    #090312 50%,
    #5a273d 65%,
    #a9543a 75%,
    #bda523 100%
  ); */
  z-index: 0;
  border-radius: 50%;
  align-items: flex-start;
`;

export const ImageProfile = styled.img`
  border-radius: 50%;
  opacity: 0.9;
`;
