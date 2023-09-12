import { useRef, useState } from 'react';
/* components */
import Carousel from 'pages/home/components/Carousel/index';
import CaretLeft from '@components/icons/CaretLeft';
import CaretRight from '@components/icons/CaretRight';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import { useTheme } from 'styled-components';
import * as S from './styles';
/* images */
import eldorado from '@images/eldoauto-full.jpg';
import blog from '@images/personal-blog-full.png';
import coffee from '@images/coffee-full.jpg';
import coffee2 from '@images/coffee-full-checkout1.png';
import coffee3 from '@images/coffee-full-checkout2.png';
import AngleRightSolid from '@components/icons/AngleRightSolid';

export const Portfolio = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const portfolioRef = useRef(null);
  const projectRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(1);
  const [isHidden, setIsHidden] = useState(false);
  const [animationSide, setAnimationSide] = useState('right');
  const [animateSlide, setAnimateSlide] = useState(false);
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
      images: [coffee, coffee2, coffee3],
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

  const handleChangeSlide = (number, side) => {
    setAnimationSide(side);
    setAnimateSlide(true);

    setTimeout(() => {
      setAnimateSlide(false);
    }, 500);

    setTimeout(() => {
      const slideId = number;
      const firstSlideId = slideDetails[0].id;
      const lastSlideId = slideDetails.length;

      if (slideId < firstSlideId) {
        setSlideNumber(lastSlideId);
      } else if (slideId > lastSlideId) {
        setSlideNumber(firstSlideId);
      } else {
        setSlideNumber(slideId);
      }
    }, 100);

    scrollToTopProject();
  };

  return (
    <S.Container id="portfolio" ref={portfolioRef}>
      <S.Title ref={projectRef}>{t('portfolio')}</S.Title>
      <S.CarouselContainer isHidden={isHidden}>
        <Carousel
          handleShowSlideDetail={handleShowSlideDetail}
          slideNumber={slideNumber}
          slideDetails={slideDetails}
        />
      </S.CarouselContainer>
      <S.SlideDetailsContainer isHidden={isHidden}>
        <S.Slide animateSlide={animateSlide} animationSide={animationSide}>
          <S.GridContainer>
            <S.ButtonWrapper>
              <S.BackButton
                title={t('close')}
                onClick={() => {
                  setIsHidden(false);
                  scrollToTopPortfolio();
                }}
              >
                <p>{t('close')}</p>
              </S.BackButton>
            </S.ButtonWrapper>
            {slideDetails.map((slide) => {
              if (slide.id === slideNumber) {
                return (
                  <S.SlideContent key={slide.id}>
                    <S.SlideInfoContainer>
                      <S.SlideTitle>{slide.title}</S.SlideTitle>
                      <S.SlideInfoContent>
                        <S.CarteButtonLeft
                          title={t('previous')}
                          onClick={() => handleChangeSlide(slide.id - 1, 'left')}
                        >
                          <CaretLeft color={theme.icon.accent} />
                        </S.CarteButtonLeft>
                        <S.SlideInfotext>
                          <S.SlideTechs>{slide.technologies.join(' | ')}</S.SlideTechs>
                          <span>
                            Link:{' '}
                            <S.SlideLink href={slide.url} target="_blank">
                              {slide.linkName}
                            </S.SlideLink>
                          </span>
                        </S.SlideInfotext>
                        <S.CarteButtonRight
                          title={t('next')}
                          onClick={() => handleChangeSlide(slide.id + 1, 'right')}
                        >
                          <CaretRight color={theme.icon.accent} />
                        </S.CarteButtonRight>
                      </S.SlideInfoContent>
                    </S.SlideInfoContainer>

                    {slide?.images.map((image, index) => {
                      return (
                        <S.SlideImageWrapper key={index}>
                          <img src={image} alt={slide.title} />
                        </S.SlideImageWrapper>
                      );
                    })}
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
