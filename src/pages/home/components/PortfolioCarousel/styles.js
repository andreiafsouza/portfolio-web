import styled from 'styled-components';

export const Container = styled.section`
  /* background: ${(props) => props.theme.background.secondary};
  padding-bottom: 6rem; */
`;

const BaseMainText = styled.h1`
  font-family: ${(props) => props.theme.font.mono};
  color: ${(props) => props.theme.text.secondary};
  font-weight: ${(props) => props.theme.fontWeights.normal};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  padding-bottom: 3rem;
`;

export const Title = styled(BaseMainText)`
  text-align: center;
`;

export const CarouselContainer = styled.div`
  inline-size: min(100% -4rem, 96rem);
  margin-inline: auto;

  overflow: hidden;
  position: relative;
  max-height: 550px;
  -webkit-transition: max-height 0.2s ease;
  transition: max-height 0.2s ease;

  max-height: ${({ isHidden }) => (isHidden ? 0 : '550px')};
`;

export const SlideDetailsContainer = styled.div`
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.background.primary},
    ${(props) => props.theme.background.secondary}
  );

  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;

  max-height: ${({ isHidden }) => (isHidden ? '' : 0)};

  -webkit-transition: max-height 0.2s ease;
  transition: max-height 0.2s ease;
`;

export const Slide = styled.div`
  display: grid;
  gap: 3rem;
  max-width: ${(props) => props.theme.breakPoints.xxl};
  margin: 0 auto;
  position: relative;
  padding: 3rem 1rem;

  @media (min-width: ${(props) => props.theme.breakPoints.lg}) {
    padding: 3rem 2rem;
  }

  -webkit-transition: margin 0.5s ease;
  transition: margin 0.5s ease;
  counter-increment: none;
`;

export const SlideImageWrapper = styled.div`
  max-width: 64rem;
`;
