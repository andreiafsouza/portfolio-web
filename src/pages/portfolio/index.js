import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
/* i18 */
import { useTranslation } from 'react-i18next';
/* components */
import AngleLeftSolid from '@components/icons/AngleLeftSolid';
/* utils */
import { handleScrollToTop } from 'utils/index';
/* styles */
import { useTheme } from 'styled-components';
import * as S from './styles';
import FullPageCarousel from './components/FullPageCarousel/index';

export const Portfolio = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <S.Container>
      <S.Header>
        <S.BackLink to="/" state={{ from: location.pathname }}>
          <AngleLeftSolid size={24} color={theme.icon.accent} />
          <S.BackLinkText>{t('back')}</S.BackLinkText>
        </S.BackLink>
      </S.Header>
      <FullPageCarousel />
    </S.Container>
  );
};
