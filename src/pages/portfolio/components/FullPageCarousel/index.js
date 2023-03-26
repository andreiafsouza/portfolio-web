import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Glide from '@glidejs/glide';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { useTheme } from 'styled-components';
import CarouselCaret from '@components/icons/CarouselCaret';

import eldorado from '@images/eldoauto-full.png';
import coffee from '@images/coffee-thumbnail.png';

const FullPageCarousel = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const carouselRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const glide = new Glide(carouselRef.current, {
      type: 'carousel',
      perView: 1,
      // Add the `controls` option with left and right caret icons
      controls: {
        prev: '<i class="glide__icon glide__icon--prev"></i>',
        next: '<i class="glide__icon glide__icon--next"></i>'
      }
    });
    glide.on('run.before', () => {
      window.scrollTo(0, 0);
    });
    glide.mount();
  }, []);
  return (
    <S.CarouselContainer ref={carouselRef}>
      <S.CaretsContainer className="glide__arrows" data-glide-el="controls">
        <button
          className="glide__arrow glide__arrow--prev"
          data-glide-dir="<"
          aria-label={t('previous')}
          title={t('previous')}
          onClick={scrollToTop}
        >
          <i className="glide__icon glide__icon--prev">
            <CarouselCaret color={theme.svg.accent} rotate={-180} />
          </i>
        </button>
        <button
          className="glide__arrow glide__arrow--next"
          data-glide-dir=">"
          aria-label={t('next')}
          title={t('next')}
          onClick={scrollToTop}
        >
          <i className="glide__icon glide__icon--next">
            <CarouselCaret color={theme.svg.accent} />
          </i>
        </button>
      </S.CaretsContainer>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <S.SlideInfoContainer>INFO</S.SlideInfoContainer>
            <S.WebLink href="https://eldoauto-web.vercel.app/" target="_blank">
              <img src={eldorado} alt="Eldorado Automóveis - Website" loading="lazy" />
            </S.WebLink>
          </li>
          <li className="glide__slide">
            <S.SlideInfoContainer>INFO</S.SlideInfoContainer>
            <NavLink to="/portfolio/2">
              <img src={coffee} alt="Eldorado Automóveis - Website" loading="lazy" />
            </NavLink>
          </li>
        </ul>
      </div>
    </S.CarouselContainer>
  );
};

export default FullPageCarousel;
