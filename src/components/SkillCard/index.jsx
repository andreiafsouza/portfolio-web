import React, { useEffect, useMemo, useRef } from 'react';
import { VanillaTilt } from '@src/plugins/vanillaTilt';
/* assets | svgs | images */
import { Plus } from '@icons/Plus';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import { useTheme } from 'styled-components';
import * as S from './style';

export const SkillCard = ({ icon: Icon, title, url, animation }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const tilt = useRef(null);

  const options = useMemo(
    () => ({
      scale: 1.1,
      speed: 1000,
      max: 10
    }),
    []
  );

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <S.Container
      ref={animation && tilt}
      animation={animation}
      href={url}
      title={title}
      target="_blank"
      aria-label={`${t('skillsLabel')}${title}`}
    >
      {animation ? (
        <Icon color={theme.svg.accent} size={48} />
      ) : (
        <Plus color={theme.svg.accent} size={38} opacity={0.3} />
      )}
    </S.Container>
  );
};
