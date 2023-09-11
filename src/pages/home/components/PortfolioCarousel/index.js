import { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
/* components */
import Carousel from '@components/Carousel/index';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import { useTheme } from 'styled-components';
import * as S from './styles';
/* images */
import eldorado from '@images/eldoauto-full.png';
import blog from '@images/personal-blog-full.png';
import coffee from '@images/coffee-full.png';
import { Button } from '@components/Button/index';
import AngleLeftSolid from '@components/icons/AngleLeftSolid';
import { Plus } from '@components/icons/Plus';

export const PortfolioCarousel = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const location = useLocation();
  const portfolioRef = useRef(null);
  const projectRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const slideDetails = [
    {
      id: 1,
      title: 'Eldorado Automóveis',
      url: 'https://eldoradoautomoveis.vercel.app/',
      linkName: 'eldoradoautomoveis',
      images: [eldorado],
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'PostCSS',
        'Google Maps API'
      ],
      year: '2023'
    },
    {
      id: 2,
      title: 'Express Coffee',
      url: 'https://coffee-delivery-git-main-andreiafsouza.vercel.app/',
      linkName: 'expresscoffee',
      images: [coffee],
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Styled Components',
        'Zod',
        'Google Maps API'
      ],
      year: '2022'
    },
    {
      id: 3,
      title: 'Postfolio Blog',
      url: 'https://personal-blog-andreiafsouza.vercel.app/',
      linkName: 'postfolio',
      images: [blog],
      technologies: ['React', 'TypeScript', 'Vite', 'Next', 'Tailwind CSS'],
      year: '2023'
    }
  ];

  const scrollToTopPortfolio = () => {
    const scrollToPosition = portfolioRef.current.offsetTop - 64;

    // Scroll to the adjusted position
    window.scrollTo({
      top: scrollToPosition
    });
  };

  const scrollToTopProject = () => {
    const element = projectRef.current;
    const scrollPosition = element.offsetTop + element.clientHeight - 64;

    // Scroll to the adjusted position
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  };

  const handleShowSlideDetail = (number) => {
    setIsHidden(true);
    setSlideNumber(number);

    scrollToTopProject();
  };

  return (
    <S.Container id="portfolio" ref={portfolioRef}>
      <S.Title ref={projectRef}>{t('portfolio')}</S.Title>
      <S.CarouselContainer isHidden={isHidden}>
        <Carousel handleShowSlideDetail={handleShowSlideDetail} />
      </S.CarouselContainer>
      <S.SlideDetailsContainer isHidden={isHidden}>
        <S.Slide isHidden={isHidden}>
          <S.GridContainer>
            <S.ButtonWrapper>
              <S.BackButton
                onClick={() => {
                  setIsHidden(false);
                  scrollToTopPortfolio();
                }}
              >
                {t('close')}
              </S.BackButton>
            </S.ButtonWrapper>
            {slideDetails.map((slide) => {
              if (slide.id === slideNumber) {
                return (
                  <S.SlideContent key={slide.id}>
                    <S.SlideInfoContainer>
                      <S.SlideTitle>{slide.title}</S.SlideTitle>
                      <S.SlideTechs>{slide.technologies.join(' | ')}</S.SlideTechs>
                      <span>
                        Link:{' '}
                        <S.SlideLink href={slide.url} target="_blank">
                          {slide.linkName}
                        </S.SlideLink>
                      </span>
                    </S.SlideInfoContainer>
                    <S.SlideImageWrapper>
                      <img src={slide.images[0]} alt={slide.title} />
                    </S.SlideImageWrapper>
                  </S.SlideContent>
                );
              }
              return null;
            })}
          </S.GridContainer>
        </S.Slide>
      </S.SlideDetailsContainer>
    </S.Container>
  );
};
