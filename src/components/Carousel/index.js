import React, { useRef, useEffect, useState } from 'react';
/* components */
import CarouselSlide from './CarouselSlide';
/* assets | svgs | images */
import AngleUpSolid from '../icons/AngleUpSolid';
import ReactSolid from '../icons/ReactSolid';
import Figma from '../icons/Figma';
import CssIcon from '../icons/CssIcon';
import ReduxIcon from '../icons/ReduxIcon';
import JavascriptIcon from '../icons/JavascriptIcon';
import HtmlIcon from '../icons/HtmlIcon';
import TypeIcon from '../icons/TypeIcon';
import GraphIcon from '../icons/GraphIcon';
/* style */
import * as S from './styles';
import { useTheme } from 'styled-components';

const Carousel = () => {
  const theme = useTheme();
  const carouselRef = useRef(null);
  const [divWidth, setDivWidth] = useState(null);
  const scrollWidth = (window.innerWidth - (window.innerWidth - divWidth)) / 4;
  const [autoSlide, setAutoSlide] = useState(true);
  const iconColor = theme.icon.accent;
  let timeoutId = null;

  const getDivWidth = () => {
    const div = document.getElementById('carousel');
    const styles = window.getComputedStyle(div);
    const width = parseInt(styles.width.replace('px', ''));
    setDivWidth(width);
  };

  useEffect(() => {
    getDivWidth();
    // Add event listener for window resize
    window.addEventListener('resize', getDivWidth);
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', getDivWidth);
    };
  }, []);

  const icons = [
    <JavascriptIcon color={iconColor} />,
    <ReactSolid color={iconColor} />,
    <CssIcon color={iconColor} />,
    <HtmlIcon color={iconColor} />,
    <Figma color={iconColor} />,
    <ReduxIcon color={iconColor} />,
    <TypeIcon color={iconColor} />,
    <GraphIcon color={iconColor} />,
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

        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - window.innerWidth
        ) {
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

      if (
        carouselRef.current.scrollLeft >=
        carouselRef.current.scrollWidth - window.innerWidth
      ) {
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

        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth - window.innerWidth
        ) {
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
    <S.Container id="carousel">
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
