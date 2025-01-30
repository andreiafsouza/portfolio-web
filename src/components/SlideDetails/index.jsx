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

const SlideDetails = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const glide = new Glide(carouselRef.current, {
      type: 'carousel',
      perView: 1
    });

    glide.mount();

    return () => {
      glide.destroy(); // Clean up the carousel when the component unmounts
    };
  }, [location.pathname === '/']);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <S.CarouselContainer ref={carouselRef}>
      {loading ? <LoadingSpinnerSmall /> : null}
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <NavLink to="/portfolio/1" title={'Eldorado Automóveis'}>
              <img src={eldorado} alt="Eldorado Automóveis" onLoad={handleImageLoad} />
            </NavLink>
          </li>

          <li className="glide__slide">
            <NavLink to="/portfolio/2" title={'Express Coffee'}>
              <img src={coffee} alt="Express Coffee" onLoad={handleImageLoad} />
            </NavLink>
          </li>

          <li className="glide__slide">
            <NavLink to="/portfolio/3" title={'Personal Blog'}>
              <img src={blog} alt="Personal Blog" onLoad={handleImageLoad} />
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

export default SlideDetails;
