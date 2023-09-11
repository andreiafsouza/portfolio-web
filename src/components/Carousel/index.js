import React, { useRef, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
/* components */
import Glide from '@glidejs/glide';
import LoadingSpinnerSmall from '@components/LoadingSpinnerSmall';
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
import eldorado from '@images/eldoauto-thumbnail.png';
import CaretRight from '@components/icons/CaretRight';
import CaretLeft from '@components/icons/CaretLeft';

const Carousel = ({ handleShowSlideDetail }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const carouselRef = useRef(null);

  useEffect(() => {
    const glide = new Glide(carouselRef.current, {
      type: 'carousel',
      perView: 3,
      gap: 16,
      breakpoints: {
        1536: {
          perView: 3
        },
        1280: {
          perView: 2
        },
        640: {
          perView: 1.1
        }
      }
    });

    glide.mount();

    const slideElements = carouselRef.current.querySelectorAll('.glide__slide');

    slideElements.forEach((slide) => {
      slide.addEventListener('click', () => {
        const slideId = slide.getAttribute('data-slide-id');

        if (slideId) {
          handleShowSlideDetail(parseInt(slideId));
        }
      });
    });

    return () => {
      glide.destroy(); // Clean up the carousel when the component unmounts
    };
  }, [handleShowSlideDetail]);

  return (
    <S.CarouselContainer ref={carouselRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li data-slide-id="1" className="glide__slide">
            <img src={eldorado} alt="Eldorado Automóveis" />
          </li>

          <li data-slide-id="2" className="glide__slide">
            <img src={coffee} alt="Express Coffee" />
          </li>

          <li data-slide-id="3" className="glide__slide">
            <img src={blog} alt="Postfolio Blog" />
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
