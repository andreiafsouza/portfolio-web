/* components */
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/Button';
import { BackgroundLines } from '../../components/BackgroundLines';
import { ProfileLines } from '../../components/ProfileLines';
/* icons */
import { AccountCircleOutlined } from '../../components/Icons/AccountCircleOutlined';
/* style */
import { useTheme } from 'styled-components';
import * as S from './styles';

export const Home = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <Navbar />
      <S.BackgroundWrapper>
        <S.MainPageWrapper>
          <S.MainContentWrapper>
            <S.LeftMainContentWrapper>
              <S.MainText>
                <S.MainTextHeadline>
                  <S.MainTextMediumDesign>design</S.MainTextMediumDesign>
                  <S.MainTextMediumEngineer>engineer</S.MainTextMediumEngineer>
                  <S.MainTextLarge>CREATE</S.MainTextLarge>
                </S.MainTextHeadline>
                <S.MainTextParagraphWrapper>
                  <S.MainParagraph>
                    motivated by finding effective and efficient ways to solve
                    problems
                  </S.MainParagraph>
                </S.MainTextParagraphWrapper>
              </S.MainText>
            </S.LeftMainContentWrapper>
            <S.MainButtonWrapper>
              <Button hasLabel text={'projetos.'} href={'#'} />
              <Button hasLabel text={'github.'} href={'#'} />
              <Button hasLabel text={'figma.'} href={'#'} />
            </S.MainButtonWrapper>
          </S.MainContentWrapper>
          <S.ProfileContentWrapper>
            <S.ProfileLinesWrapper>
              <ProfileLines />
            </S.ProfileLinesWrapper>
            <S.AboutInfoAndButtonWrapper>
              <S.AboutParagraphWrapper>
                <S.AboutParagraph>
                  Hi There! I'm a front-end web developer with a professional
                  background in graphic design and mechanical engineering.
                </S.AboutParagraph>
              </S.AboutParagraphWrapper>
              <Button
                size={'small'}
                hasLabel
                text={'about.'}
                hasIcon
                color={theme.textColor.secondary[200]}
                hoverColor={theme.button.hoverColorLight}
                icon={
                  <AccountCircleOutlined
                    color={theme.textColor.secondary[200]}
                    size={20}
                  />
                }
              />
            </S.AboutInfoAndButtonWrapper>
          </S.ProfileContentWrapper>
          <S.ProfileWrapper>
            <S.ProfileBackgroundItemSmall />
            <S.ProfileBackgroundItemMedium />
            <S.ProfileBackgroundItemBig />
          </S.ProfileWrapper>
          <S.MainTextBackground />
          <S.BackgroundLinesWrapper>
            <BackgroundLines />
          </S.BackgroundLinesWrapper>
        </S.MainPageWrapper>
      </S.BackgroundWrapper>
    </S.Container>
  );
};
