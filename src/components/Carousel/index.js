import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
/* components */
import Glide from '@glidejs/glide';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';
import { useTheme } from 'styled-components';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
/* images */
import blog from '@images/personal-blog-thumbnail.png';
import coffee from '@images/coffee-thumbnail.png';
import CaretRight from '@components/icons/CaretRight';
import CaretLeft from '@components/icons/CaretLeft';

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
            <NavLink to="/portfolio/#2" title={'Personal Blog'}>
              <img src={blog} alt="Personal Blog" loading="lazy" />
            </NavLink>
          </li>
          <li className="glide__slide">
            <NavLink to="/portfolio/#1" title={'Express Coffee'}>
              <img src={coffee} alt="Express Coffee" loading="lazy" />
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
            <CaretLeft className="left" color={theme.svg.accent} />
          </i>
        </button>
        <button
          className="glide__arrow glide__arrow--next"
          data-glide-dir=">"
          aria-label={t('next')}
          title={t('next')}
        >
          <i className="glide__icon glide__icon--next">
            <CaretRight color={theme.svg.accent} />
          </i>
        </button>
      </S.CaretsContainer>
    </S.CarouselContainer>
  );
};

export default Carousel;
