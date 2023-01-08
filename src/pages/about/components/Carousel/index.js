import React, { useRef, useEffect, useState } from 'react';
/* components */
import CarouselSlide from './CarouselSlide';
/* assets | svgs | images */
import AngleUpSolid from '../../../../components/Icons/AngleUpSolid';
import ReactSolid from '../../../../components/Icons/ReactSolid';
import Figma from '../../../../components/Icons/Figma';
import CssIcon from '../../../../components/Icons/CssIcon';
import ReduxIcon from '../../../../components/Icons/ReduxIcon';
import JavascriptIcon from '../../../../components/Icons/JavascriptIcon';
import HtmlIcon from '../../../../components/Icons/HtmlIcon';
import TypeIcon from '../../../../components/Icons/TypeIcon';
import GraphIcon from '../../../../components/Icons/GraphIcon';
/* style */
import * as S from './styles';
import { useTheme } from 'styled-components';

const Carousel = ({ inlinePadding }) => {
  const theme = useTheme();
  const carouselRef = useRef(null);
  const [autoSlide, setAutoSlide] = useState(true);
  const scrollWidth = (window.innerWidth - inlinePadding * 2) / 2;
  const iconColor = theme.icon.accent;
  let timeoutId = null;

  const icons = [
    <JavascriptIcon color={iconColor} />,
    <ReactSolid color={iconColor} />,
    <CssIcon color={iconColor} />,
    <HtmlIcon color={iconColor} />,
    <Figma color={iconColor} />,
    <ReduxIcon color={iconColor} />,
    <TypeIcon color={iconColor} />,
    <GraphIcon color={iconColor} />
  ];

  /* hande scroll with keyboard arrows */
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.key === 'ArrowRight') {
        carouselRef.current.scrollBy({
          left: scrollWidth,
          behavior: 'smooth'
        });

        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - window.innerWidth) {
          carouselRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        }
      } else if (event.key === 'ArrowLeft') {
        carouselRef.current.scrollBy({
          left: -scrollWidth,
          behavior: 'smooth'
        });

        if (carouselRef.current.scrollLeft <= 0) {
          carouselRef.current.scrollTo({
            left: carouselRef.current.scrollWidth,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('keydown', handleScroll);

    return () => {
      window.removeEventListener('keydown', handleScroll);
    };
  }, [scrollWidth]);

  /* hande scroll manually on click */
  const handleClick = (event) => {
    setAutoSlide(false);

    if (event.currentTarget.dataset.direction === 'left') {
      carouselRef.current.scrollBy({
        left: -scrollWidth,
        behavior: 'smooth'
      });

      if (carouselRef.current.scrollLeft <= 0) {
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollWidth,
          behavior: 'smooth'
        });
      }
    } else if (event.currentTarget.dataset.direction === 'right') {
      carouselRef.current.scrollBy({
        left: scrollWidth,
        behavior: 'smooth'
      });

      if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - window.innerWidth) {
        carouselRef.current.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
      }
    }

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setAutoSlide(true);
    }, 5000);
  };

  /* hande auto slide */
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        carouselRef.current.scrollBy({
          left: scrollWidth,
          behavior: 'smooth'
        });

        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - window.innerWidth) {
          carouselRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [autoSlide, scrollWidth]);

  return (
    <S.Container>
      <S.LeftCaret data-direction="left" onClick={handleClick}>
        <AngleUpSolid size={48} color={iconColor} rotate={-90} />
      </S.LeftCaret>
      <S.CarouselContainer ref={carouselRef}>
        <CarouselSlide icons={icons} />
      </S.CarouselContainer>
      <S.RightCaret data-direction="right" onClick={handleClick}>
        <AngleUpSolid size={48} color={iconColor} rotate={90} />
      </S.RightCaret>
    </S.Container>
  );
};

export default Carousel;
