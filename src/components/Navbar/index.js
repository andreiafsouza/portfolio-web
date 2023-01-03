import { useState, useEffect } from 'react';
import BarsSolid from '../Icons/BarsSolid';
/* style */
import { useTheme } from 'styled-components';
import * as S from './styles';

export const Navbar = ({ hoverColor }) => {
  const theme = useTheme();
  const [navColor, setNavColor] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY > 1) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavColor);
  }, []);

  return (
    <S.Container navColor={navColor}>
      <S.NavbarLeftContainer></S.NavbarLeftContainer>
      <S.NavbarRightContainer>
        <S.MenuIconContainer>
          <BarsSolid size={32} />
        </S.MenuIconContainer>
        <S.NavbarContainer>
          <S.NavbarItem
            to="/"
            smooth="true"
            duration={500}
            spy="true"
            offset={-60}
            exact="true"
          >
            home
          </S.NavbarItem>
          <S.NavbarItem
            to="about"
            smooth="true"
            duration={500}
            spy="true"
            offset={-60}
            exact="true"
          >
            about
          </S.NavbarItem>
          <S.NavbarItem
            to="#"
            smooth="true"
            duration={500}
            spy="true"
            offset={-60}
            exact="true"
          >
            projects
          </S.NavbarItem>
          <S.NavbarItem
            to="#"
            smooth="true"
            duration={500}
            spy="true"
            offset={-60}
            exact="true"
          >
            contact
          </S.NavbarItem>
        </S.NavbarContainer>
      </S.NavbarRightContainer>
    </S.Container>
  );
};
