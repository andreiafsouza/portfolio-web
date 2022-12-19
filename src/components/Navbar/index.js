import BarsSolid from '../Icons/BarsSolid';
/* style */
import { useTheme } from 'styled-components';
import * as S from './styles';

export const Navbar = ({ hoverColor }) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.MenuIconContainer>
        <BarsSolid size={32} />
      </S.MenuIconContainer>
      <S.NavbarContainer>
        <S.NavbarItem hoverColor={theme.svgLinesColor} href="#">
          home
        </S.NavbarItem>
        <S.NavbarItem hoverColor={theme.svgLinesColor} href="#">
          about
        </S.NavbarItem>
        <S.NavbarItem hoverColor={theme.svgLinesColor} href="#">
          projects
        </S.NavbarItem>
        <S.NavbarItem hoverColor={theme.svgLinesColor} href="#">
          contact
        </S.NavbarItem>
      </S.NavbarContainer>
    </S.Container>
  );
};
