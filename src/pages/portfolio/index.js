import React from 'react';
/* i18 */
import { useTranslation } from 'react-i18next';
/* components */
import AngleUpSolid from '@components/icons/AngleUpSolid';
/* styles */
import { useTheme } from 'styled-components';
import * as S from './styles';
import FullPageCarousel from './components/FullPageCarousel/index';

export const Portfolio = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Header>
        <S.BackLink to="/">
          <AngleUpSolid size={24} color={theme.icon.accent} rotate={-90} />
          <S.BackLinkText>{t('back')}</S.BackLinkText>
        </S.BackLink>
      </S.Header>
      <FullPageCarousel />
    </S.Container>
  );
};
