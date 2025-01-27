import React from 'react';
import { useTheme } from 'styled-components';
import * as S from './styles';

export const ThemeIcon = ({ size, color, animation }) => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <svg width={size ?? 100} height={size ?? 100} viewBox="0 0 100 100">
        {/* moon path */}
        <path
          className={animation === 'moon' ? 'moon-active' : 'moon'}
          id="moon"
          fill={color ?? theme.text.primary}
          d="M81 83c-27.61 0-50-22.39-50-50 0-11.47 3.87-22.03 10.37-30.47.56-.73-.08-1.77-.98-1.6C17.21 5.45-.24 25.96 0 50.51c.26 26.67 21.85 48.7 48.51 49.47 14.83.43 28.24-5.61 37.66-15.49.64-.67.11-1.77-.82-1.69-1.42.13-2.88.2-4.35.2z"
        ></path>

        {/* sun path */}
        <path
          className={animation === 'sun' ? 'sun-active' : 'sun'}
          id="sun"
          d="M50 85C69.33 85 85 69.33 85 50C85 30.67 69.33 15 50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85Z"
          fill={color ?? theme.text.primary}
        />
        {/* sunbean paths */}
        <path
          className={animation === 'sun' ? 'sunbean-active' : 'sunbean'}
          id="sunbean"
          d="M50 12C53.3137 12 56 9.31371 56 6C56 2.68629 53.3137 0 50 0C46.6863 0 44 2.68629 44 6C44 9.31371 46.6863 12 50 12Z"
          fill={color ?? theme.text.primary}
        />
        <path
          className={animation === 'sun' ? 'sunbean-active' : 'sunbean'}
          id="sunbean"
          d="M50 100C53.3137 100 56 97.3137 56 94C56 90.6863 53.3137 88 50 88C46.6863 88 44 90.6863 44 94C44 97.3137 46.6863 100 50 100Z"
          fill={color ?? theme.text.primary}
        />
        <path
          className={animation === 'sun' ? 'sunbean-active' : 'sunbean'}
          id="sunbean1"
          d="M94 56C97.3137 56 100 53.3137 100 50C100 46.6863 97.3137 44 94 44C90.6863 44 88 46.6863 88 50C88 53.3137 90.6863 56 94 56Z"
          fill={color ?? theme.text.primary}
        />
        <path
          className={animation === 'sun' ? 'sunbean-active' : 'sunbean'}
          id="sunbean2"
          d="M6 56C9.31371 56 12 53.3137 12 50C12 46.6863 9.31371 44 6 44C2.68629 44 0 46.6863 0 50C0 53.3137 2.68629 56 6 56Z"
          fill={color ?? theme.text.primary}
        />
        <path
          className={animation === 'sun' ? 'sunbean-active' : 'sunbean'}
          id="sunbean3"
          d="M81.11 85.11C83.3191 85.11 85.11 83.3191 85.11 81.11C85.11 78.9009 83.3191 77.11 81.11 77.11C78.9009 77.11 77.11 78.9009 77.11 81.11C77.11 83.3191 78.9009 85.11 81.11 85.11Z"
          fill={color ?? theme.text.primary}
        />
        <path
          className={animation === 'sun' ? 'sunbean-active' : 'sunbean'}
          id="sunbean4"
          d="M18.89 22.89C21.0991 22.89 22.89 21.0992 22.89 18.89C22.89 16.6809 21.0991 14.89 18.89 14.89C16.6809 14.89 14.89 16.6809 14.89 18.89C14.89 21.0992 16.6809 22.89 18.89 22.89Z"
          fill={color ?? theme.text.primary}
        />
        <path
          className={animation === 'sun' ? 'sunbean-active' : 'sunbean'}
          id="sunbean5"
          d="M18.89 85.11C21.0991 85.11 22.89 83.3191 22.89 81.11C22.89 78.9009 21.0991 77.11 18.89 77.11C16.6809 77.11 14.89 78.9009 14.89 81.11C14.89 83.3191 16.6809 85.11 18.89 85.11Z"
          fill={color ?? theme.text.primary}
        />
        <path
          className={animation === 'sun' ? 'sunbean-active' : 'sunbean'}
          id="sunbean6"
          d="M81.11 22.89C83.3191 22.89 85.11 21.0992 85.11 18.89C85.11 16.6809 83.3191 14.89 81.11 14.89C78.9009 14.89 77.11 16.6809 77.11 18.89C77.11 21.0992 78.9009 22.89 81.11 22.89Z"
          fill={color ?? theme.text.primary}
        />
      </svg>
    </S.Wrapper>
  );
};
