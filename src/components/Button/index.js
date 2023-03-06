/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';

export const Button = ({ hasLabel, text, hasIcon, icon, color, hoverColor, size }) => {
  const { t } = useTranslation();
  return (
    <S.Container hoverColor={hoverColor} color={color} size={size} title={text}>
      <S.Icon hasIcon>{icon}</S.Icon>
      <S.Label size={size} hasLabel color={color}>
        {text}
      </S.Label>
    </S.Container>
  );
};
