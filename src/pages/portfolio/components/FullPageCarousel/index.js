import React, { useRef, useEffect, useState } from 'react';
import { animateScroll } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import Glide from '@glidejs/glide';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { useTheme } from 'styled-components';
import CaretLeft from '@components/icons/CaretLeft';
import CaretRight from '@components/icons/CaretRight';

import eldorado from '@images/eldoauto-full.png';
import coffee from '@images/coffee-full.png';

const FullPageCarousel = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(null);

  const handleScrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 300,
      smooth: true,
      delay: 0
    });
  };

  useEffect(() => {
    const changeSlideNumber = () => {
      const hash = location?.hash;
      const number = parseInt(hash.slice(1));
      setCurrentSlide(number);
    };
    changeSlideNumber();
    if (currentSlide !== null) {
      const glide = new Glide(carouselRef.current, {
        type: 'carousel',
        perView: 1,
        dragThreshold: false,
        swipeThreshold: false,
        startAt: currentSlide ? currentSlide : 1,
        // Add the `controls` option with left and right caret icons
        controls: {
          prev: '<i class="glide__icon glide__icon--prev"></i>',
          next: '<i class="glide__icon glide__icon--next"></i>'
        }
      });

      glide.mount();
    }
  }, [location, currentSlide]);

  return (
    <S.CarouselContainer ref={carouselRef}>
      <S.CaretsContainer className="glide__arrows" data-glide-el="controls">
        <button
          className="glide__arrow glide__arrow--prev"
          data-glide-dir="<"
          aria-label={t('previous')}
          title={t('previous')}
          onClick={handleScrollToTop}
        >
          <i className="glide__icon glide__icon--prev">
            <CaretLeft color={theme.svg.accent} />
          </i>
        </button>
        <button
          className="glide__arrow glide__arrow--next"
          data-glide-dir=">"
          aria-label={t('next')}
          title={t('next')}
          onClick={handleScrollToTop}
        >
          <i className="glide__icon glide__icon--next">
            <CaretRight color={theme.svg.accent} />
          </i>
        </button>
      </S.CaretsContainer>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <S.Title>Eldorado Automóveis</S.Title>
            <S.SlideInfoContainer>
              <S.TechInfoContainer>
                <S.TechText>JavaScript | React</S.TechText>
                <S.TechText>HTML | CSS</S.TechText>
                <S.TechText>Webpack</S.TechText>
              </S.TechInfoContainer>
              <S.InfoContainer>
                <S.TechText>
                  Link:
                  <S.WebLink href="https://eldoauto-web.vercel.app/" target={'_blank'}>
                    eldoauto.app
                  </S.WebLink>
                </S.TechText>
                <S.TechText>{`${t('year')}: 2022`}</S.TechText>
              </S.InfoContainer>
            </S.SlideInfoContainer>
            <img src={eldorado} alt="Eldorado Automóveis - Website" loading="lazy" />
          </li>
          <li className="glide__slide">
            <S.Title>Express Coffee</S.Title>
            <S.SlideInfoContainer>
              <S.TechInfoContainer>
                <S.TechText>Typescript | React</S.TechText>
                <S.TechText>Styled Components</S.TechText>
                <S.TechText>Vite</S.TechText>
                <S.TechText>Zod</S.TechText>
                <S.TechText>Context API</S.TechText>
              </S.TechInfoContainer>
              <S.InfoContainer>
                <S.TechText>
                  Link:
                  <S.WebLink
                    href="https://coffee-delivery-git-main-andreiafsouza.vercel.app/"
                    target={'_blank'}
                  >
                    coffee-delivery.app
                  </S.WebLink>
                </S.TechText>
                <S.TechText>{`${t('year')}: 2022`}</S.TechText>
              </S.InfoContainer>
            </S.SlideInfoContainer>
            <img src={coffee} alt="Eldorado Automóveis - Website" loading="lazy" />
          </li>
        </ul>
      </div>
    </S.CarouselContainer>
  );
};

export default FullPageCarousel;
