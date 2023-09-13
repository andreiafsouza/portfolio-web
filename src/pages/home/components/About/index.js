/* components */
import { Terminal } from '@src/components/Terminal';
import { SkillCard } from '@src/components/SkillCard';
import { ProfileAnimationLines } from '@components/ProfileAnimationLines/';
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
import NextIcon from '@icons/NextIcon';
import SqliteIcon from '@icons/SqliteIcon';
import MuiIcon from '@icons/MuiIcon';
import { AndroidIcon } from '@src/components/icons/AndroidIcon';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';
import TailwindIcon from '@icons/TailwindIcon';

export const About = () => {
  const { t } = useTranslation();

  return (
    <S.Container id="about">
      <S.AboutInfoContainer>
        <S.ImageContainer>
          <ProfileAnimationLines />
          <S.ImageProfile
            src={profile}
            alt="a profile picture illustration of Andreia Souza wearing eyeglasses and smilling"
            loading="lazy"
          />
        </S.ImageContainer>
        <S.TerminalWrapper>
          <Terminal />
        </S.TerminalWrapper>
      </S.AboutInfoContainer>
      <S.SkillsContainer>
        <S.SkillsTextContainer>
          <S.SkillsTitle>Skills</S.SkillsTitle>
          <S.SkillsSubtitle>{t('skills')}</S.SkillsSubtitle>
        </S.SkillsTextContainer>

        <S.SkillCardWrapper>
          <SkillCard
            icon={JavascriptIcon}
            title={'JavaScript'}
            url={'https://developer.mozilla.org/docs/Web/JavaScript'}
            animation
          />
          <S.SkillName>JavaScript</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard icon={GitIcon} title={'Git'} url={'https://git-scm.com/doc'} animation />
          <S.SkillName>Git</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard
            icon={ReactSolid}
            title={'React'}
            url={'https://reactjs.org/'}
            animation
          />
          <S.SkillName>React</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard
            icon={CssIcon}
            title={'CSS'}
            url={'https://developer.mozilla.org/docs/Web/CSS'}
            animation
          />
          <S.SkillName>CSS</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard
            icon={TailwindIcon}
            title={'Tailwind'}
            url={'https://tailwindcss.com/'}
            animation
          />
          <S.SkillName>Tailwind</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard
            icon={HtmlIcon}
            title={'HTML'}
            url={'https://developer.mozilla.org/docs/Web/HTML'}
            animation
          />
          <S.SkillName>HTML</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard
            icon={TypeIcon}
            title={'TypeScript'}
            url={'https://www.typescriptlang.org/docs/handbook/intro.html'}
            animation
          />
          <S.SkillName>TypeScript</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard
            icon={ReduxIcon}
            title={'Redux'}
            url={'https://redux.js.org/'}
            animation
          />
          <S.SkillName>Redux</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard
            icon={NextIcon}
            title={'next'}
            url={'https://nextjs.org/docs'}
            animation
          />
          <S.SkillName>Next</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard
            icon={GraphIcon}
            title={'GraphQL'}
            url={'https://graphql.org/learn/'}
            animation
          />
          <S.SkillName>GraphQL</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard
            icon={SqliteIcon}
            title={'SQLite'}
            url={'https://www.sqlite.org/docs.html'}
            animation
          />
          <S.SkillName>SQLite</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard
            icon={Figma}
            title={'Figma'}
            url={'https://www.figma.com/about/'}
            animation
          />
          <S.SkillName>Figma</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard icon={MuiIcon} title={'Material UI'} url={'https://mui.com/'} animation />
          <S.SkillName>Material UI</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard
            icon={AndroidIcon}
            title={'Android Studio'}
            url={'https://developer.android.com/studio/intro'}
            animation
          />
          <S.SkillName>Android Studio</S.SkillName>
        </S.SkillCardWrapper>
        <S.SkillCardWrapper>
          <SkillCard />
        </S.SkillCardWrapper>
      </S.SkillsContainer>
    </S.Container>
  );
};
