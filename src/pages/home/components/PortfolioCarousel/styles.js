import styled from 'styled-components';

export const Container = styled.section`
  max-width: ${(props) => props.theme.breakPoints.xxl};
  margin: 0 auto;
  position: relative;
  padding: 1rem 1rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    padding: 1rem 2rem;
  }
`;

const BaseMainText = styled.h1`
  font-family: ${(props) => props.theme.font.display};
  color: ${(props) => props.theme.text.secondary};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  padding-bottom: 0.5rem;
`;

export const Title = styled(BaseMainText)`
  text-align: center;
`;

export const CarouselContainer = styled.div``;
