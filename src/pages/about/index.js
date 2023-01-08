import React, { useEffect, useState } from 'react';
/* components */
import { Terminal } from './components/Terminal';
import Carousel from './components/Carousel';
import { ProfileLinesAbout } from './components/ProfileLinesAbout';
/* assets | svgs | images */
import profile from '../../assets/images/profile.png';
/* style */
import { useTheme } from 'styled-components';
import * as S from './styles';

export const About = () => {
  const theme = useTheme();
  const [inlinePadding, setInlinePadding] = useState(null);

  const getPadding = () => {
    const div = document.getElementById('about');
    const styles = window.getComputedStyle(div);
    const padding = parseInt(styles.paddingInline.replace('px', ''));
    setInlinePadding(padding);
  };

  useEffect(() => {
    getPadding();
    // Add event listener for window resize
    window.addEventListener('resize', getPadding);
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', getPadding);
    };
  }, []);

  return (
    <S.Container id="about">
      <S.AboutInfoContainer>
        <S.ImageContainer>
          <ProfileLinesAbout />
          <S.ImageProfile
            src={profile}
            alt="a profile picture illustration of Andreia Souza wearing eyeglasses and smilling"
          />
        </S.ImageContainer>
        <Terminal />
      </S.AboutInfoContainer>
      <Carousel inlinePadding={inlinePadding} />
    </S.Container>
  );
};
