import React, { useRef, useEffect } from 'react';
import Glide from '@glidejs/glide';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';

export const Portfolio = () => {
  const { t } = useTranslation();
  const carouselRef = useRef(null);

  useEffect(() => {
    new Glide(carouselRef.current, {
      type: 'carousel',
      perView: 4,
      gap: 20,
      /* autoplay: 5000,
      hoverpause: true, */
      breakpoints: {
        960: {
          perView: 3
        },
        640: {
          perView: 2
        },
        480: {
          perView: 1
        }
      }
    }).mount();
  }, []);

  return (
    <S.Container>
      <S.Title>{t('portfolio')}</S.Title>
      <S.CarouselContainer ref={carouselRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">Slide 1</li>
            <li className="glide__slide">Slide 2</li>
            <li className="glide__slide">Slide 3</li>
            <li className="glide__slide">Slide 4</li>
            <li className="glide__slide">Slide 5</li>
          </ul>
        </div>
      </S.CarouselContainer>
    </S.Container>
  );
};
