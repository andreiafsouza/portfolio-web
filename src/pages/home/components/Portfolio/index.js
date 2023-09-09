import * as S from './styles';
import eldoautoSmall from '@images/eldoauto-thumbnail.png';
import coffeeSmall from '@images/coffee-thumbnail.png';
import blogSmall from '@images/personal-blog-thumbnail.png';

const Portfolio = () => {
  return (
    <S.Container>
      <S.MediaScroller>
        <S.MediaElement>
          <S.MediaImage src={eldoautoSmall} alt="" />
          <S.MediaTitle>Eldorado Automóveis</S.MediaTitle>
          <S.MediaParagraph>Link: eldoauto</S.MediaParagraph>
        </S.MediaElement>
        <S.MediaElement>
          <S.MediaImage src={coffeeSmall} alt="" />
          <S.MediaTitle>Coffee Express</S.MediaTitle>
          <S.MediaParagraph>Link: coffeeexpress</S.MediaParagraph>
        </S.MediaElement>
        <S.MediaElement>
          <S.MediaImage src={blogSmall} alt="" />
          <S.MediaTitle>Blog Postfolio</S.MediaTitle>
          <S.MediaParagraph>Link: postfolio</S.MediaParagraph>
        </S.MediaElement>

        <S.MediaElement>
          <S.MediaImage src={eldoautoSmall} alt="" />
          <S.MediaTitle>Eldorado Automóveis</S.MediaTitle>
          <S.MediaParagraph>Link: eldoauto</S.MediaParagraph>
        </S.MediaElement>
        <S.MediaElement>
          <S.MediaImage src={coffeeSmall} alt="" />
          <S.MediaTitle>Coffee Express</S.MediaTitle>
          <S.MediaParagraph>Link: coffeeexpress</S.MediaParagraph>
        </S.MediaElement>
        <S.MediaElement>
          <S.MediaImage src={blogSmall} alt="" />
          <S.MediaTitle>Blog Postfolio</S.MediaTitle>
          <S.MediaParagraph>Link: postfolio</S.MediaParagraph>
        </S.MediaElement>
      </S.MediaScroller>
    </S.Container>
  );
};

export default Portfolio;
