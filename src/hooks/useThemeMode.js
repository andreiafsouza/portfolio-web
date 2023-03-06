import { useEffect, useState } from 'react';

export const useThemeMode = () => {
  const [theme, setTheme] = useState('dark');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('@as-portfolio-theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('@as-portfolio-theme');
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('dark');
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
