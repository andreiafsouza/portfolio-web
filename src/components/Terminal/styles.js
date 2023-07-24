import styled, { keyframes } from 'styled-components';
import { mainBoxShadow } from '@src/stylesheets/abstracts/mixins';

const cursorBlink = keyframes`
0% {
  opacity: 0;
}
`;

export const AboutTerminalContainer = styled.div`
  background-color: ${(props) => props.theme.background.secondary};
  border-radius: 1rem;
  overflow: hidden;
  ${mainBoxShadow}
  min-height: 27.5rem;

  padding-bottom: 1rem;
`;

export const AboutParagraphHeader = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  min-height: 2rem;
  padding-top: 0.4rem;
  padding-inline: 0.6rem;
  background-color: ${(props) => props.theme.background.neutral};
`;

export const AboutTerminalHeaderLeft = styled.div`
  justify-content: flex-start;
  display: flex;
  gap: 1rem;
`;

export const AboutTerminalHeaderIcon = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 0.4rem;
`;

export const AboutTerminalHeaderTag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-inline: 1rem;
  padding-top: 0.4rem;
  max-height: 1.6rem;
  white-space: nowrap;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;

  background-color: ${(props) => props.theme.background.secondary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.text.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const AboutTerminalHeaderCommands = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
  padding-bottom: 0.3rem;
`;

export const AboutParagraphContainer = styled.article`
  padding-top: 1em;
  padding-inline: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.text.primary};
  font-weight: ${(props) => props.theme.fontWeights.normal};
`;

export const TerminalLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;

  svg {
    margin-left: -0.2rem;
  }

  span.doc {
    padding-left: 0.4em;
  }
`;

export const WordColoring = styled.span`
  color: ${({ color }) => (color ? color : (props) => props.theme.text.primary)};
  padding-right: 0.4em;
`;

export const AboutParagraph = styled.p`
  margin-block-end: 1em;
  overflow-wrap: break-word;
  line-height: calc(1em + 0.725rem);
`;

export const LastLine = styled.div`
  &::before {
    content: '';
    transition: all 0.3s ease-in-out;
    z-index: 0;
    border-left: 0.15rem solid ${(props) => props.theme.svg.accent};
    animation: ${cursorBlink} 1s steps(2) infinite;
  }
`;
