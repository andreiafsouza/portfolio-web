import React, { useEffect, useRef } from 'react';
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
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const rotateElement = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;
        const offsetX = ((x - middleX) / middleX) * 15;
        const offsetY = ((y - middleY) / middleY) * 15;
        container.style.setProperty('--rotateX', `${offsetX}deg`);
        container.style.setProperty('--rotateY', `${-1 * offsetY}deg`);
      };
      document.addEventListener('mousemove', rotateElement);

      const resetRotation = () => {
        container.style.setProperty('--rotateX', '0');
        container.style.setProperty('--rotateY', '0');
      };
      /* document.addEventListener('mouseout', resetRotation); */

      return () => {
        document.removeEventListener('mousemove', rotateElement);
        /* document.removeEventListener('mouseout', resetRotation); */
      };
    }
  }, [containerRef]);

  return (
    <S.Container
      ref={animation && containerRef}
      animation={animation}
      href={url}
      title={title}
      target="_blank"
      aria-label={`${t('skillsLabel')}${title}`}
    >
      {animation ? (
        <Icon color={theme.svg.accent} size={48} />
      ) : (
        <Plus color={theme.svg.accent} size={40} opacity={0.3} />
      )}
    </S.Container>
  );
};
