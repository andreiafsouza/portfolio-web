import styled from 'styled-components';
import { mediumLayoutBreakPoint, smallLayoutBreakPoint } from '@src/utils';

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

const BaseMainText = styled.h1`
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.text.secondary};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.xxl};
`;

export const Title = styled(BaseMainText)`
  text-align: center;
`;

export const CarouselContainer = styled.div``;
