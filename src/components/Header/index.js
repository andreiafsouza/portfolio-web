import { useState, useEffect, useRef } from 'react';
/* components */
import { ToggleThemeButton } from '@components/ToggleThemeButton';
/* assets | svgs | images */
import { MenuBars } from '@components/icons/MenuBars';
import AngleRightSolid from '@components/icons/AngleRightSolid';
import AngleDownSolid from '@components/icons/AngleDownSolid';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';
import { useTheme } from 'styled-components';

export const Header = () => {
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
      abbreviation: 'En'
    },
    pt: {
      nativeName: 'Português (BR)',
      abbreviation: 'Pt'
    },
    de: {
      nativeName: 'Deutsch',
      abbreviation: 'De'
    }
  };

  const handleMenuButton = (event) => {
    event.stopPropagation();
    setOpenMenu(!openMenu);
  };

  const linkCommonConfig = {
    offset: -64, //header height
    exact: 'true',
    smooth: 'true',
    duration: 500,
    onClick: handleMenuButton
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
        <S.LogoContainer
          title={t('home')}
          to="home"
          smooth={'true'}
          exact={'true'}
          offset={-64}
        >
          <AngleRightSolid size={24} color={theme.svg.accent} />
          <S.LogoText>andreia souza</S.LogoText>
        </S.LogoContainer>
        <S.ActionsContainer
          onClick={handleMenuButton}
          id="primary-navigation"
          aria-expanded={openMenu}
          ref={menu}
        >
          <S.NavbarContainer>
            <S.NavbarContainer>
              <S.NavbarItem title={t('home')} to="home" {...linkCommonConfig}>
                {t('home')}
              </S.NavbarItem>
              <S.NavbarItem title={t('about')} to="about" {...linkCommonConfig}>
                {t('about')}
              </S.NavbarItem>
              <S.NavbarItem title={t('portfolio')} to="portfolio" {...linkCommonConfig}>
                {t('portfolio')}
              </S.NavbarItem>
              <S.NavbarItem title={t('contact')} to="contact" {...linkCommonConfig}>
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
              <S.SelectLanguage aria-expanded={openDropdown} color={theme.text.secondary}>
                <S.LanguageSelectText>{selectedLanguage}</S.LanguageSelectText>

                <AngleDownSolid size={16} color={theme.svg.accent} />
              </S.SelectLanguage>
              <S.DropdownLanguage aria-expanded={openDropdown}>
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
            aria-expanded={openMenu}
            onClick={handleMenuButton}
          >
            <MenuBars />
          </S.MenuButton>
        </S.MenuButtonContainer>
      </S.Container>
    </S.Header>
  );
};
