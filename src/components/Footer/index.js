import { useState, useEffect, useRef } from 'react';
/* style */
import * as S from './styles';
import { ToggleThemeButton } from '../ToggleThemeButton';
import { MenuBars } from '../icons/MenuBars';
import AngleUpSolid from '../icons/AngleUpSolid';
import { useTheme } from 'styled-components';
/* i18 */
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <S.Footer>
      <S.Container>
        <S.FooterText>{`© 2022-${currentYear} Andreia Souza`}</S.FooterText>
      </S.Container>
    </S.Footer>
  );
};
