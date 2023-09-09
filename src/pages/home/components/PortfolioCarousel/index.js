import { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
/* components */
import Carousel from '@components/Carousel/index';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';
import SlideDetails from '@components/SlideDetails/index';
import eldorado from '@images/eldoauto-full.png';

export const PortfolioCarousel = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const previousLocation = location.state?.from;
  const portfolioRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (previousLocation?.includes('/portfolio/')) {
      portfolioRef.current.scrollIntoView();
      //reset state
      navigate(location.pathname, { replace: true });
    }
  }, [previousLocation, location.pathname, navigate]);

  const scrollToTopPortfolio = () => {
    const scrollToPosition = portfolioRef.current.offsetTop - 64;

    // Scroll to the adjusted position
    window.scrollTo({
      top: scrollToPosition
    });
  };

  const handleShowSlideDetail = (number) => {
    setIsHidden(!isHidden);
    setSlideNumber(number);

    scrollToTopPortfolio();
  };

  return (
    <S.Container id="portfolio" ref={portfolioRef}>
      <S.Title>{t('portfolio')}</S.Title>
      <S.CarouselContainer isHidden={isHidden}>
        <Carousel handleShowSlideDetail={handleShowSlideDetail} />
      </S.CarouselContainer>
      <S.SlideDetailsContainer isHidden={isHidden}>
        {/*  <SlideDetails slideNumber={slideNumber} /> */}
        <S.Slide>
          <button
            onClick={() => {
              setIsHidden(false);
              scrollToTopPortfolio();
            }}
          >
            BACK
          </button>
          <S.SlideImageWrapper>
            <img src={eldorado} alt="Eldorado Automóveis" />
          </S.SlideImageWrapper>
        </S.Slide>
      </S.SlideDetailsContainer>
    </S.Container>
  );
};
