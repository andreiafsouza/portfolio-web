import styled, { keyframes } from 'styled-components';

export const ThemeButton = styled.button`
  display: flex;
  background: transparent;
  height: fit-content;
  border: none;
  cursor: pointer;
`;

const shrink = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const grow = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;

export const Wrapper = styled.div`
  position: relative;

  path {
    transition: all 0.1s ease-in-out;
    fill: ${(props) => props.theme.text.secondary};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      path {
        transition: all 0.1s ease-in-out;
        fill: ${(props) => props.theme.svg.accent};
      }
    }
  }

  .moon {
    transform-origin: center;
    animation-iteration-count: 1;
    animation: ${shrink} 0.5s linear forwards;
  }

  .moon-active {
    transform-origin: center;
    animation-iteration-count: 1;
    animation: ${grow} 0.5s linear forwards;
  }

  .sun {
    transform-origin: center;
    animation-iteration-count: 1;
    animation: ${shrink} 0.7s linear forwards;
  }

  .sun-active {
    transform-origin: center;
    animation-iteration-count: 1;
    animation: ${grow} 0.5s linear forwards;
  }

  .sunbean {
    transform-origin: center;
    animation-iteration-count: 1;
    animation: ${shrink} 0.2s linear forwards;
  }

  .sunbean-active {
    display: flex;
    transform-origin: center;
    animation-iteration-count: 1;
    animation: ${rotate} 3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
`;
