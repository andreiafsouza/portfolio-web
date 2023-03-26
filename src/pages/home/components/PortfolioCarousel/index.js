import React from 'react';
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

  return (
    <S.Container id="portfolio">
      <S.Title>{t('portfolio')}</S.Title>
      <S.CarouselContainer>
        <Carousel />
      </S.CarouselContainer>
    </S.Container>
  );
};
