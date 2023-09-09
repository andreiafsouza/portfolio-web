import styled from 'styled-components';
import { mainBoxShadow } from 'stylesheets/abstracts/mixins';

export const Container = styled.section``;

export const MediaScroller = styled.div`
  --_gap: 1rem;
  inline-size: min(100% -4rem, 96rem);
  margin-inline: auto;

  display: grid;
  gap: var(--_gap);
  grid-auto-flow: column;
  grid-auto-columns: 80%;

  padding: 0 var(--_gap) var(--_gap);

  overflow-x: auto;
  scroll-behavior: contain;

  scroll-snap-type: inline mandatory;
  scroll-padding-inline: var(--_gap, 1rem);

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    --_gap: 2rem;
    grid-auto-columns: 40%;
  }
`;

export const MediaElement = styled.div`
  display: grid;
  grid-template-rows: min-content;
  gap: var(--_gap);
  padding: var(--_gap);
  background: ${(props) => props.theme.background.secondary};
  border-radius: 8px;
  ${mainBoxShadow}

  scroll-snap-align: start;
`;

export const MediaImage = styled.img``;

export const MediaTitle = styled.h1``;

export const MediaParagraph = styled.p``;
