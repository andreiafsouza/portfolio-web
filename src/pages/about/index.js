/* style */
import { useTheme } from 'styled-components';
import profile from '../../assets/images/profile.png';
import profileArt from '../../assets/images/profile_art.jpg';
import AngleDownSolid from '../../components/Icons/AngleDownSolid';
import AngleUpSolid from '../../components/Icons/AngleUpSolid';
import Terminal from '../../components/Icons/Terminal';
import XMarkSolid from '../../components/Icons/XMarkSolid';
import { ProfileLinesAbout } from './components/ProfileLinesAbout';
import ResponsiveCarousel from './components/SkillsCarousel';
import * as S from './styles';

export const About = () => {
  const theme = useTheme();

  return (
    <S.Container id="about">
      <S.AboutInfoContainer>
        <S.ImageContainer>
          <ProfileLinesAbout />
          <S.ImageProfile src={profile} />
        </S.ImageContainer>
        <S.AboutTerminalContainer>
          <S.AboutParagraphHeader>
            <S.AboutTerminalHeaderLeft>
              <S.AboutTerminalHeaderIcon>
                <Terminal size={13} color={theme.textColor.main[200]} />
              </S.AboutTerminalHeaderIcon>
              <S.AboutTerminalHeaderTag>
                Administrator: About
                <XMarkSolid size={14} color={theme.textColor.main[200]} />
              </S.AboutTerminalHeaderTag>
            </S.AboutTerminalHeaderLeft>
            <S.AboutTerminalHeaderCommands>
              <AngleUpSolid size={12} />
              <AngleDownSolid size={12} />
              <XMarkSolid size={12} />
            </S.AboutTerminalHeaderCommands>
          </S.AboutParagraphHeader>
          <S.AboutParagraphContainer>
            <S.TerminalLine>
              <S.WordColoring color={theme.textColor.secondary[200]}>
                Administrator
              </S.WordColoring>
              in{' '}
              <S.WordColoring color={theme.profileBgColor}>
                ~\Documents
              </S.WordColoring>
            </S.TerminalLine>
            <S.TerminalLine>
              <AngleUpSolid size={16} color={theme.svgLinesColor} rotate={90} />
              <S.WordColoring color={theme.profileBgColor}>cat</S.WordColoring>
              about.txt
            </S.TerminalLine>
            <S.AboutParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              impedit odit facilis eum iusto eius velit? Quia exercitationem, et
              minus cum voluptate hic ab culpa, magni sunt nam, sed ullam. Est
              repellat iure sequi illo quam assumenda, dignissimos nesciunt.
              Laudantium, ducimus necessitatibus. Illum dolore maiores iste,
              architecto voluptas veniam error laboriosam consectetur
              perspiciatis, magnam nihil eius blanditiis et incidunt enim.
            </S.AboutParagraph>
            <S.AboutParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              impedit odit facilis eum iusto eius velit? Quia exercitationem, et
              minus cum voluptate hic ab culpa, magni sunt nam, sed ullam. Est
              repellat iure sequi illo quam assumenda, dignissimos nesciunt.
              Laudantium, ducimus necessitatibus. Illum dolore maiores iste,
              architecto voluptas veniam error laboriosam consectetur
              perspiciatis, magnam nihil eius blanditiis et incidunt enim.
            </S.AboutParagraph>
            <S.TerminalLine>
              <S.WordColoring color={theme.textColor.secondary[200]}>
                Administrator
              </S.WordColoring>{' '}
              in{' '}
              <S.WordColoring color={theme.profileBgColor}>
                ~\Documents
              </S.WordColoring>
            </S.TerminalLine>
            <S.TerminalLine>
              <AngleUpSolid size={16} color={theme.svgLinesColor} rotate={90} />
            </S.TerminalLine>
          </S.AboutParagraphContainer>
        </S.AboutTerminalContainer>
      </S.AboutInfoContainer>
      <ResponsiveCarousel />
    </S.Container>
  );
};