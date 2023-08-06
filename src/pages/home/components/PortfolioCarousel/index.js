import { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
/* components */
import Carousel from '@components/Carousel/index';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';

export const PortfolioCarousel = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const previousLocation = location.state?.from;
  const portfolioRef = useRef(null);

  useEffect(() => {
    if (previousLocation?.includes('/portfolio/')) {
      portfolioRef.current.scrollIntoView();
      //reset state
      navigate(location.pathname, { replace: true });
    }
  }, [previousLocation, location.pathname, navigate]);

  return (
    <S.Container id="portfolio" ref={portfolioRef}>
      <S.Title>{t('portfolio')}</S.Title>
      <S.CarouselContainer>
        <Carousel />
      </S.CarouselContainer>
    </S.Container>
  );
};
