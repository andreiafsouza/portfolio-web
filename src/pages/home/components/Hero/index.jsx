/* components */
import { Button } from '@src/components/Button';
import { Link } from '@src/components/Link';
import { HeroAnimationLines } from '../HeroAnimationLines';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <S.Container id="home">
      <S.HeroBgContainer>
        <S.MainContainer>
          <S.MainLeftContainer>
            <S.MainTextContainer>
              <S.MainTextHeadlineContainer>
                <S.MainTextMediumDesign>design</S.MainTextMediumDesign>
                <S.MainTextMediumEngineer>engineer</S.MainTextMediumEngineer>
                <S.CreateTextWrapper>
                  <S.MainTextCreate>create</S.MainTextCreate>
                </S.CreateTextWrapper>
              </S.MainTextHeadlineContainer>
              <S.MainTextParagraphContainer>
                <S.MainTextParagraph>{t('headline_html')}</S.MainTextParagraph>
              </S.MainTextParagraphContainer>
            </S.MainTextContainer>
            <S.MainButtonContainer>
              <S.ButtonWrapper>
                <S.LinkScroll
                  title={t('portfolio')}
                  to="portfolio"
                  exact="true"
                  smooth="true"
                  duration={500}
                  offset={-64}
                  aria-label={`${t('goTo')}${t('portfolio')}`}
                >
                  <Button hasLabel text={t('portfolio')} />
                </S.LinkScroll>
                <Link hasLabel text={'Github'} href={'https://github.com/andreiafsouza'} />
                <Link
                  hasLabel
                  text={'LinkedIn'}
                  href={'https://www.linkedin.com/in/andreiafsouza/'}
                />
              </S.ButtonWrapper>
            </S.MainButtonContainer>
          </S.MainLeftContainer>
          <S.MainRightContainer>
            <S.ProfileAnimationWrapper>
              <HeroAnimationLines />
            </S.ProfileAnimationWrapper>
          </S.MainRightContainer>
        </S.MainContainer>
      </S.HeroBgContainer>
    </S.Container>
  );
};
