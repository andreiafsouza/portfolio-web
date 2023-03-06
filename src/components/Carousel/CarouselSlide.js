import React from 'react';
/* style */
import styled from 'styled-components';

const CarouselSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 12.5%;
`;

const ImageCarousel = ({ icons }) => (
  <>
    {icons.map((icon, index) => (
      <CarouselSlide key={index}>{icon}</CarouselSlide>
    ))}
  </>
);

export default ImageCarousel;
