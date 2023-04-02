import { useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
/* components */
import Carousel from '@components/Carousel/index';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';

export const PortfolioCarousel = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const portfolioRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === '#portfolio') {
      portfolioRef.current.scrollIntoView();
    }
  }, []);

  return (
    <S.Container id="portfolio" ref={portfolioRef}>
      <S.Title>{t('portfolio')}</S.Title>
      <S.CarouselContainer>
        <Carousel />
      </S.CarouselContainer>
    </S.Container>
  );
};
