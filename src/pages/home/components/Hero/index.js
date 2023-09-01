/* components */
import { Button } from '@src/components/Button';
import { Link } from '@src/components/Link';
import { ProfileLines } from '../ProfileLines';
/* i18 */
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';
/* icons */
import { AccountCircleOutlined } from '../../../../components/icons/AccountCircleOutlined';
/* style */
import { useTheme } from 'styled-components';
import * as S from './styles';

export const Hero = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  // key = 'hello {{what}}'
  t('key', { what: i18n.format('JavaScript', 'uppercase') }); // -> hello WORLD

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
              <div></div>
            </S.MainButtonContainer>
          </S.MainLeftContainer>

          <S.MainRightContainer>
            <S.ProfileAnimationWrapper>
              <ProfileLines />
            </S.ProfileAnimationWrapper>
            <S.AboutInfoContainer>
              <S.AboutInfoText>{t('aboutText')}</S.AboutInfoText>
              <S.LinkScroll
                title={t('about')}
                to="about"
                exact="true"
                smooth="true"
                duration={500}
                offset={-64}
                aria-label={`${t('goTo')}${t('about')}`}
              >
                <Button
                  size={'small'}
                  hasLabel
                  text={'about.'}
                  hasIcon
                  color={theme.text.secondary}
                  hoverColor={theme.button.hoverLight}
                  icon={<AccountCircleOutlined color={theme.text.secondary} size={20} />}
                />
              </S.LinkScroll>
            </S.AboutInfoContainer>
          </S.MainRightContainer>
        </S.MainContainer>
      </S.HeroBgContainer>
    </S.Container>
  );
};
