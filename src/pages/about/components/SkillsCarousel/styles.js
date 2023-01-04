import styled from 'styled-components';
import { mediumLayoutBreakPoint } from '../../utils';

const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;

const CarouselSlide = styled.div`
  flex: 0 0 calc(100% / 8); /* adjust this value to change the number of images shown at once */
  position: absolute;
  top: 0;
  left: ${(props) => (props.isActive ? '0' : '100%')};
  transition: all 0.5s ease;

  img {
    width: 100%;
  }
`;

const CarouselControl = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2em;
  background: transparent;
  border: none;
`;
