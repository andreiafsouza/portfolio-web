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
          <S.MainWrapper>
            <S.LeftMainContentWrapper>
              <S.MainTextMedium>design</S.MainTextMedium>
              <S.MainTextMedium>engineer</S.MainTextMedium>
              <S.MainTextLarge>CREATE</S.MainTextLarge>
              <S.ButtonWrapper>
                <Button hasLabel text={'projetos.'} />
                <Button hasLabel text={'github.'} />
                <Button hasLabel text={'figma.'} />
              </S.ButtonWrapper>
            </S.LeftMainContentWrapper>
            <S.RightMainContentWrapper>
              <S.MainParagraphWrapper>
                <S.MainParagraph>
                  motivated by finding effective and efficient ways to solve
                  problems
                </S.MainParagraph>
              </S.MainParagraphWrapper>
            </S.RightMainContentWrapper>
          </S.MainWrapper>
          <S.ProfileContentWrapper>
            <S.ProfileLinesWrapper>
              <ProfileLines />
            </S.ProfileLinesWrapper>
            <S.AboutInfoWrapper>
              <S.AboutInfoAndButtonWrapper>
                <S.AboutParagraph>
                  Hi There! I'm a front-end web developer with a professional
                  background in graphic design and mechanical engineering.
                </S.AboutParagraph>
                <Button
                  size={'small'}
                  hasLabel
                  text={'about.'}
                  hasIcon
                  color={colors.primary[200]}
                  hoverColor={colors.shadows[800]}
                  icon={<AccountCircleOutlined color={colors.primary[200]} />}
                />
              </S.AboutInfoAndButtonWrapper>
            </S.AboutInfoWrapper>
          </S.ProfileContentWrapper>
          <S.ProfileWrapper>
            <S.ProfileBackgroundItemSmall />
            <S.ProfileBackgroundItemMedium />
            <S.ProfileBackgroundItemBig />
          </S.ProfileWrapper>
          <S.ButtonBackground />
          <S.MainTextBackground />
          <S.BackgroundLinesWrapper>
            <BackgroundLines />
          </S.BackgroundLinesWrapper>
        </S.MainPageWrapper>
      </S.BackgroundWrapper>
    </S.Container>
  );
};
