import { useState, useEffect } from 'react';
import BarsSolid from '../Icons/BarsSolid';
/* style */
import { useTheme } from 'styled-components';
import * as S from './styles';
import { ToggleButton } from './components/ToggleButton';
import { MenuBars } from './components/MenuBars';

export const Navbar = ({ hoverColor, toggleTheme }) => {
  const theme = useTheme();
  const [navColor, setNavColor] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

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

  const handleMenuButton = () => {
    const menuButton = document.getElementById('menu');
    const isOpened = menuButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
      menuButton.setAttribute('aria-expanded', 'true');
    } else {
      menuButton.setAttribute('aria-expanded', 'false');
    }
  };

  return (
    <S.Container navColor={navColor}>
      <S.NavbarLeftContainer></S.NavbarLeftContainer>
      <S.NavbarRightContainer>
        <S.MenuButton
          id="menu"
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={handleMenuButton}
        >
          <MenuBars />
        </S.MenuButton>
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
        {/*  <ToggleButton toggleTheme={toggleTheme} /> */}
      </S.NavbarRightContainer>
    </S.Container>
  );
};
