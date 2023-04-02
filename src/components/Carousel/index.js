import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
/* components */
import Glide from '@glidejs/glide';
import CarouselCaret from '@components/icons/CarouselCaret';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';
import { useTheme } from 'styled-components';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
/* images */
import eldorado from '@images/eldorado-thumbnail.png';
import coffee from '@images/coffee-thumbnail.png';

const Carousel = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const carouselRef = useRef(null);

  useEffect(() => {
    new Glide(carouselRef.current, {
      type: 'carousel',
      perView: 4,
      gap: '12%',
      breakpoints: {
        1680: {
          perView: 3
        },
        1200: {
          perView: 2
        },
        960: {
          perView: 1
        }
      },
      // Add the `controls` option with left and right caret icons
      controls: {
        prev: '<i class="glide__icon glide__icon--prev"></i>',
        next: '<i class="glide__icon glide__icon--next"></i>'
      }
    }).mount();
  }, []);

  return (
    <S.CarouselContainer ref={carouselRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <NavLink to="/portfolio/#2">
              <img src={eldorado} alt="Eldorado Automóveis - Website" loading="lazy" />
            </NavLink>
          </li>
          <li className="glide__slide">
            <NavLink to="/portfolio/#1">
              <img src={coffee} alt="Eldorado Automóveis - Website" loading="lazy" />
            </NavLink>
          </li>
        </ul>
      </div>
      <S.CaretsContainer className="glide__arrows" data-glide-el="controls">
        <button
          className="glide__arrow glide__arrow--prev"
          data-glide-dir="<"
          aria-label={t('previous')}
          title={t('previous')}
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
        >
          <i className="glide__icon glide__icon--next">
            <CarouselCaret color={theme.svg.accent} />
          </i>
        </button>
      </S.CaretsContainer>
    </S.CarouselContainer>
  );
};

export default Carousel;
