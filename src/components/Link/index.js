/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';

export const Link = ({ hasLabel, text, hasIcon, icon, color, hoverColor, size, href }) => {
  const { t } = useTranslation();
  return (
    <S.Container
      hoverColor={hoverColor}
      color={color}
      size={size}
      href={href}
      target="_blank"
      title={text}
      aria-label={`${t('goTo')}${text}`}
    >
      <S.Icon hasIcon>{icon}</S.Icon>
      <S.Label size={size} hasLabel color={color}>
        {text}
      </S.Label>
    </S.Container>
  );
};
