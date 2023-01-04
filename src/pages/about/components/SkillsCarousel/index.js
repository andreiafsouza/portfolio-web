import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ImageCarousel from './ImageCarousel';

import { useTheme } from 'styled-components';
import AngleUpSolid from '../../../../components/Icons/AngleUpSolid';

import profile from '../../../../assets/images/profile.png';
import profileArt from '../../../../assets/images/profile_art.jpg';

const Container = styled.div`
  position: relative;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 75em) {
    flex-wrap: nowrap;
  }
`;

const CaretContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const LeftCaret = styled(CaretContainer)`
  left: 0;
`;

const RightCaret = styled(CaretContainer)`
  right: 0;
`;

const ResponsiveCarousel = () => {
  const theme = useTheme();
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.key === 'ArrowRight') {
        carouselRef.current.scrollBy({
          left: window.innerWidth / 2,
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
          left: -window.innerWidth / 2,
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
  }, []);

  const handleClick = (event) => {
    if (event.currentTarget.dataset.direction === 'left') {
      carouselRef.current.scrollBy({
        left: -window.innerWidth / 2,
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
        left: window.innerWidth / 2,
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
  };

  const images = [
    {
      id: 1,
      src: profile,
      alt: 'Image 1'
    },
    {
      id: 2,
      src: profileArt,
      alt: 'Image 2'
    },
    {
      id: 3,
      src: profile,
      alt: 'Image 3'
    },
    {
      id: 4,
      src: profileArt,
      alt: 'Image 4'
    },
    {
      id: 5,
      src: profile,
      alt: 'Image 5'
    },
    {
      id: 6,
      src: profileArt,
      alt: 'Image 6'
    },
    {
      id: 7,
      src: profile,
      alt: 'Image 7'
    },
    {
      id: 8,
      src: profileArt,
      alt: 'Image 8'
    }
  ];

  return (
    <Container>
      <LeftCaret data-direction="left" onClick={handleClick}>
        <AngleUpSolid size={48} color={theme.svgLinesColor} rotate={-90} />
      </LeftCaret>
      <CarouselContainer ref={carouselRef}>
        <ImageCarousel images={images} />
      </CarouselContainer>
      <RightCaret data-direction="right" onClick={handleClick}>
        <AngleUpSolid size={48} color={theme.svgLinesColor} rotate={90} />
      </RightCaret>
    </Container>
  );
};

export default ResponsiveCarousel;
