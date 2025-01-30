import * as S from './styles';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

import React from 'react';
import { ThemeIcon } from './ThemeIcon';

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [renderedTheme, setRenderedTheme] = useState('');
  const [animation, setAnimation] = useState('moon');

  useEffect(() => {
    if (theme === 'light') {
      setRenderedTheme('dark');
      setAnimation('sun');
    } else {
      setRenderedTheme('light');
      setAnimation('moon');
    }
  }, [theme]);

  const handleToggleThemeClick = (e) => {
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <S.ThemeButton
      aria-label={`Activate ${renderedTheme} theme`}
      title={`Activate ${renderedTheme} theme`}
      onClick={handleToggleThemeClick}
      animation={animation}
    >
      <ThemeIcon size={20} animation={animation} />
    </S.ThemeButton>
  );
};
