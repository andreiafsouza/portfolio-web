import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 1rem;
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 75em) {
    flex-wrap: nowrap;
  }
`;

export const CaretContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const LeftCaret = styled(CaretContainer)`
  left: 0;
`;

export const RightCaret = styled(CaretContainer)`
  right: 0;
`;
