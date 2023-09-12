import React, { useRef, useEffect, useState } from 'react';
/* components */
import Glide from '@glidejs/glide';
import CaretRight from '@components/icons/CaretRight';
import CaretLeft from '@components/icons/CaretLeft';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';
import { useTheme } from 'styled-components';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import AngleRightSolid from '@components/icons/AngleRightSolid';

const Carousel = ({ handleShowSlideDetail, slideNumber, slideDetails }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const carouselRef = useRef(null);

  useEffect(() => {
    const glide = new Glide(carouselRef.current, {
      type: 'carousel',
      perView: 3,
      gap: 16,
      startAt: slideNumber - 1,
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
      const imgElement = slide.querySelector('.image'); // Get the img element inside each slide

      imgElement.addEventListener('click', () => {
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
          {slideDetails?.map((slide, index) => {
            return (
              <li data-slide-id={slide.id} className="glide__slide" key={index}>
                <S.ImageWrapper className="image" title={t('goTo') + t('details')}>
                  <img src={slide.images[0]} alt={slide.title} />
                </S.ImageWrapper>
                <S.SlideInfoWrapper>
                  <S.SlideLink
                    href={slide.url}
                    target="_blank"
                    title={`${t('goTo')} ${slide.title}`}
                  >
                    <S.SlideTitle>{slide.title}</S.SlideTitle>
                    <S.LinkContent>
                      {`${t('goTo')} ${t('website')}`}
                      <AngleRightSolid size={14} color={theme.icon.accent} />
                    </S.LinkContent>
                  </S.SlideLink>
                </S.SlideInfoWrapper>
              </li>
            );
          })}
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
            <CaretLeft className="left" color={theme.svg.carets} />
          </i>
        </button>
        <button
          className="glide__arrow glide__arrow--next"
          data-glide-dir=">"
          aria-label={t('next')}
          title={t('next')}
        >
          <i className="glide__icon glide__icon--next">
            <CaretRight color={theme.svg.carets} />
          </i>
        </button>
      </S.CaretsContainer>
    </S.CarouselContainer>
  );
};

export default Carousel;
