/* components */
import { Button } from '../../components/Button';
import { ProfileLines } from '../../components/ProfileLines';
import { BackgroundPurpleLines } from '../../components/BackgroundPurpleLines';
/* icons */
import { AccountCircleOutlined } from '../../components/Icons/AccountCircleOutlined';
/* style */
import { useTheme } from 'styled-components';
import * as S from './styles';

export const Home = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.MainContainer>
        <S.MainLeftContainer>
          <S.MainText>
            <S.MainTextHeadline>
              <S.MainTextMediumDesign>design</S.MainTextMediumDesign>
              <S.MainTextMediumEngineer>engineer</S.MainTextMediumEngineer>
              <S.MainTextCreate>CREATE</S.MainTextCreate>
            </S.MainTextHeadline>
            <S.MainTextParagraphContainer>
              <S.MainTextParagraph>
                motivated by finding effective and efficient ways to solve
                problems
              </S.MainTextParagraph>
            </S.MainTextParagraphContainer>
          </S.MainText>
          <S.MainButtonContainer>
            <Button hasLabel text={'projetos.'} href={'#'} />
            <Button hasLabel text={'github.'} href={'#'} />
            <Button hasLabel text={'figma.'} href={'#'} />
          </S.MainButtonContainer>
          <S.BackgroundLinesContainer>
            <BackgroundPurpleLines />
          </S.BackgroundLinesContainer>
        </S.MainLeftContainer>
        <S.MainRightContainer>
          <ProfileLines />
          <S.ProfileInfoContainer>
            <S.AboutInfoContainer>
              <S.AboutInfoText>
                Hi There! I'm a front-end web developer with a professional
                background in graphic design and mechanical engineering.
              </S.AboutInfoText>
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
            </S.AboutInfoContainer>
          </S.ProfileInfoContainer>
        </S.MainRightContainer>
      </S.MainContainer>
    </S.Container>
  );
};
