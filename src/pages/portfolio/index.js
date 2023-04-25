import { useState, useEffect } from 'react';
/* i18 */
import { useTranslation } from 'react-i18next';
/* components */
import AngleUpSolid from '@components/icons/AngleUpSolid';
/* utils */
import { handleScrollToTop } from 'utils/index';
/* styles */
import { useTheme } from 'styled-components';
import * as S from './styles';
import FullPageCarousel from './components/FullPageCarousel/index';

export const Portfolio = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.BackLink to="/#portfolio">
          <AngleUpSolid size={24} color={theme.icon.accent} rotate={-90} />
          <S.BackLinkText>{t('back')}</S.BackLinkText>
        </S.BackLink>
      </S.Header>
      <FullPageCarousel />
    </S.Container>
  );
};
