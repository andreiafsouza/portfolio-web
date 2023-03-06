/* components */
import { Button } from '@src/components/Button';
import { Link } from '@src/components/Link';
import { ProfileLines } from '../ProfileLines';
/* i18 */
import { useTranslation } from 'react-i18next';
/* icons */
import { AccountCircleOutlined } from '../../../../components/icons/AccountCircleOutlined';
/* style */
import { useTheme } from 'styled-components';
import * as S from './styles';

export const Hero = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <S.Container id="/">
      <S.MainContainer>
        <S.MainLeftContainer>
          <S.MainTextContainer>
            <S.MainTextHeadlineContainer>
              <S.MainTextMediumDesign>design &</S.MainTextMediumDesign>
              <S.MainTextMediumEngineer>engineer &</S.MainTextMediumEngineer>
              <S.MainTextCreate>create</S.MainTextCreate>
            </S.MainTextHeadlineContainer>
            <S.MainTextParagraphContainer>
              <S.MainTextParagraph>{t('headline')}</S.MainTextParagraph>
            </S.MainTextParagraphContainer>
          </S.MainTextContainer>
          <S.MainButtonContainer>
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
          </S.MainButtonContainer>
        </S.MainLeftContainer>
        <S.MainRightContainer>
          <S.ProfileContainer>
            <ProfileLines />
            <S.ProfileInfoContainer>
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
            </S.ProfileInfoContainer>
          </S.ProfileContainer>
        </S.MainRightContainer>
      </S.MainContainer>
    </S.Container>
  );
};
