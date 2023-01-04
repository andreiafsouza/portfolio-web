import React from 'react';
import styled from 'styled-components';

const CarouselSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 25%;

  img {
    width: 60%;
  }
`;

const ImageCarousel = ({ images }) => (
  <>
    {images.map((image) => (
      <CarouselSlide key={image.id}>
        <img src={image.src} alt={image.alt} />
      </CarouselSlide>
    ))}
  </>
);

export default ImageCarousel;
