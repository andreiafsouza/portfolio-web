import { useState, useEffect, useRef } from 'react';
/* style */
import * as S from './styles';
import { ToggleThemeButton } from '../ToggleThemeButton';
import { MenuBars } from '../icons/MenuBars';
import AngleUpSolid from '../icons/AngleUpSolid';
import { useTheme } from 'styled-components';
/* icons */
import { UsaFlag } from '../icons/UsaFlag';
import { BrasilFlag } from '../icons/BrasilFlag';
import { DeutschFlag } from '../icons/DeutschFlag';
/* i18 */
import { useTranslation } from 'react-i18next';

export const Header = ({ hoverColor }) => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const languageMenu = useRef(null);
  const menu = useRef(null);
  const menuButton = useRef(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const languages = {
    en: {
      nativeName: 'English (US)',
      abbreviation: 'En',
      icon: <UsaFlag size={24} />
    },
    pt: {
      nativeName: 'Português (BR)',
      abbreviation: 'Pt',
      icon: <BrasilFlag size={24} />
    },
    de: {
      nativeName: 'Deutsch',
      abbreviation: 'De',
      icon: <DeutschFlag size={24} />
    }
  };

  const handleMenuButton = (event) => {
    event.stopPropagation();
    setOpenMenu(!openMenu);
  };

  const handleOpenLanguageMenu = (event) => {
    event.stopPropagation();
    setOpenDropdown(!openDropdown);
  };

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  /* useEffects */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageMenu.current && !languageMenu.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (
        menu.current &&
        !menu.current.contains(event.target) &&
        !menuButton.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutsideMenu);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu);
    };
  }, [menu]);

  useEffect(() => {
    setSelectedLanguage(i18n.resolvedLanguage);
  }, [i18n.resolvedLanguage]);

  return (
    <S.Header>
      <S.Container>
        <S.LogoContainer>
          <AngleUpSolid size={24} color={theme.svg.accent} rotate={90} />
          <S.LogoText>andreia souza</S.LogoText>
        </S.LogoContainer>
        <S.ActionsContainer
          onClick={handleMenuButton}
          id="primary-navigation"
          aria-expanded={openMenu ? 'true' : 'false'}
          ref={menu}
        >
          <S.NavbarContainer>
            <S.NavbarContainer>
              <S.NavbarItem
                title={t('home')}
                offset={-64}
                to="/"
                exact="true"
                smooth="true"
                duration={500}
                onClick={handleMenuButton}
              >
                {t('home')}
              </S.NavbarItem>
              <S.NavbarItem
                title={t('about')}
                to="about"
                exact="true"
                smooth="true"
                duration={500}
                offset={-64}
                onClick={handleMenuButton}
              >
                {t('about')}
              </S.NavbarItem>
              <S.NavbarItem
                title={t('portfolio')}
                to="/portfolio"
                exact="true"
                onClick={handleMenuButton}
              >
                {t('portfolio')}
              </S.NavbarItem>
              <S.NavbarItem
                title={t('contact')}
                to="/contact"
                exact="true"
                onClick={handleMenuButton}
              >
                {t('contact')}
              </S.NavbarItem>
            </S.NavbarContainer>
          </S.NavbarContainer>
          <S.NavbarOptions>
            <S.LanguageSelectContainer
              aria-label={'Select language'}
              title={'Select language'}
              className="dropdown"
              onClick={handleOpenLanguageMenu}
              ref={languageMenu}
            >
              <S.SelectLanguage
                aria-expanded={openDropdown ? 'true' : 'false'}
                color={theme.text.secondary}
              >
                <S.LanguageSelectText className="selected">
                  {selectedLanguage}
                </S.LanguageSelectText>
                <AngleUpSolid
                  rotate={openDropdown ? 0 : 180}
                  className="caret"
                  size={16}
                  color={theme.svg.accent}
                />
              </S.SelectLanguage>
              <S.DropdownLanguage aria-expanded={openDropdown ? 'true' : 'false'}>
                {Object.keys(languages).map((language) => (
                  <S.ListItem
                    key={language}
                    onClick={() => handleChangeLanguage(language)}
                    aria-label={`${languages[language].nativeName}`}
                    title={`${languages[language].nativeName}`}
                  >
                    {languages[language].nativeName}
                  </S.ListItem>
                ))}
              </S.DropdownLanguage>
            </S.LanguageSelectContainer>
            <S.ToggleThemeButtonContainer>
              <ToggleThemeButton />
            </S.ToggleThemeButtonContainer>
          </S.NavbarOptions>
        </S.ActionsContainer>
        <S.MenuButtonContainer>
          <S.MenuButton
            ref={menuButton}
            id="menu"
            aria-controls="primary-navigation"
            aria-expanded={openMenu ? 'true' : 'false'}
            onClick={handleMenuButton}
          >
            <MenuBars />
          </S.MenuButton>
        </S.MenuButtonContainer>
      </S.Container>
    </S.Header>
  );
};
