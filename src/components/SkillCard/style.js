import styled from 'styled-components';

const cardBoxWidth = '80px';

export const Container = styled.a`
  position: relative;
  width: fit-content;
  padding: 1rem;
  border-radius: 16px;

  display: grid;
  justify-content: center;
  flex: 0 0 ${cardBoxWidth};

  cursor: pointer;

  background-color: ${({ animation }) =>
    animation ? (props) => props.theme.background.secondary : 'transparent'};

  @media (hover: hover) and (pointer: fine) {
    transform-style: preserve-3d;
    transform: perspective(5000px) rotateY(var(--rotateX)) rotateX(var(--rotateY));
  }

  ::after {
    content: '';
    position: absolute;
    border-radius: 20px;
  }

  ::after {
    inset: -0.4rem;
    border: 2px solid ${(props) => props.theme.svg.accent};
    opacity: ${({ animation }) => (animation ? 1 : 0.3)};
    transform: translateZ(-30px);
  }
`;
