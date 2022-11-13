import * as S from './styles';
import { BackgroundLines } from '../../components/BackgroundLines';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/Button';
import { ProfileLines } from '../../components/ProfileLines';
import { AccountCircleOutlined } from '../../components/Icons/AccountCircleOutlined';
import { colors } from '../../stylesheets/abstracts/palettes';

export const Home = () => {
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
              <Button hasLabel text={'projetos.'} />
              <Button hasLabel text={'github.'} />
              <Button hasLabel text={'figma.'} />
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
                color={colors.primary[200]}
                hoverColor={colors.shadows[800]}
                icon={
                  <AccountCircleOutlined
                    color={colors.primary[200]}
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
