/* components */
import { Terminal } from '@src/components/Terminal';
import { ProfileLinesAbout } from '@src/components/ProfileLinesAbout';
import { ProfileLines } from '@src/components/ProfileLines/index';
/* assets | svgs | images */
import profile from '@images/profile.png';
import ReactSolid from '@icons/ReactSolid';
import Figma from '@icons/Figma';
import CssIcon from '@icons/CssIcon';
import ReduxIcon from '@icons/ReduxIcon';
import JavascriptIcon from '@icons/JavascriptIcon';
import HtmlIcon from '@icons/HtmlIcon';
import TypeIcon from '@icons/TypeIcon';
import GraphIcon from '@icons/GraphIcon';
import { GitIcon } from '@icons/GitIcon';
import { AndroidIcon } from '@src/components/icons/AndroidIcon';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import { useTheme } from 'styled-components';
import * as S from './styles';
import { SkillCard } from '@src/components/SkillCard';
import AngleUpSolid from '@src/components/icons/AngleUpSolid';

export const About = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <S.Container id="about">
      <S.AboutInfoContainer>
        <S.ImageContainer>
          <ProfileLines />
          <S.ImageProfile
            src={profile}
            alt="a profile picture illustration of Andreia Souza wearing eyeglasses and smilling"
          />
        </S.ImageContainer>
        <Terminal />
      </S.AboutInfoContainer>
      <S.SkillsContainer>
        <S.SkillsTextContainer>
          <S.SkillsTitle>Skills</S.SkillsTitle>
          <S.SkillsSubtitle>{t('skills')}</S.SkillsSubtitle>
          <AngleUpSolid size={24} color={theme.svg.accent} />
        </S.SkillsTextContainer>
        <S.SkillCardContainer>
          <SkillCard />
          <SkillCard
            icon={JavascriptIcon}
            title={'JavaScript'}
            url={'https://developer.mozilla.org/docs/Web/JavaScript'}
            animation
          />
          <SkillCard icon={GitIcon} title={'Git'} url={'https://git-scm.com/doc'} animation />
          <SkillCard
            icon={ReactSolid}
            title={'React'}
            url={'https://reactjs.org/'}
            animation
          />
          <SkillCard
            icon={CssIcon}
            title={'CSS'}
            url={'https://developer.mozilla.org/docs/Web/CSS'}
            animation
          />
          <SkillCard
            icon={HtmlIcon}
            title={'HTML'}
            url={'https://developer.mozilla.org/docs/Web/HTML'}
            animation
          />
          <SkillCard
            icon={TypeIcon}
            title={'TypeScript'}
            url={'https://www.typescriptlang.org/docs/handbook/intro.html'}
            animation
          />
          <SkillCard
            icon={ReduxIcon}
            title={'Redux'}
            url={'https://redux.js.org/'}
            animation
          />
          <SkillCard
            icon={GraphIcon}
            title={'GraphQL'}
            url={'https://graphql.org/learn/'}
            animation
          />
          <SkillCard
            icon={Figma}
            title={'Figma'}
            url={'https://www.figma.com/about/'}
            animation
          />
          <SkillCard
            icon={AndroidIcon}
            title={'Android Studio'}
            url={'https://developer.android.com/studio/intro'}
            animation
          />
          <SkillCard />
        </S.SkillCardContainer>
      </S.SkillsContainer>
    </S.Container>
  );
};
