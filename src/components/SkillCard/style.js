import styled from 'styled-components';

export const Container = styled.a`
  position: relative;
  display: grid;
  justify-content: center;
  padding: 1rem;
  border-radius: 16px;
  cursor: pointer;

  background-color: ${(props) => props.theme.background.secondary};

  ::after {
    content: '';
    position: absolute;
    border-radius: 20px;
  }

  ::after {
    inset: -0.4rem;
    border: 2px solid ${(props) => props.theme.svg.accent};
    opacity: ${({ animation }) => (animation ? 1 : 0.5)};
    transform: translateZ(-30px);
  }

  svg {
    min-width: 2.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    padding: 2rem;
  }

  @media (hover: hover) and (pointer: fine) {
    transform-style: preserve-3d;
    transform: perspective(5000px) rotateY(var(--rotateX)) rotateX(var(--rotateY));

    ::after {
      background-color: ${(props) => props.theme.svg.accent};
    }
  }
`;
