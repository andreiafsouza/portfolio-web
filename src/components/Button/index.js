/* style */
import * as S from './styles';

export const Button = ({ text, icon, color, hoverColor, size }) => {
  return (
    <S.Container hoverColor={hoverColor} color={color} size={size} title={text}>
      <S.Icon hasIcon>{icon}</S.Icon>
      <S.Label size={size} hasLabel color={color}>
        {text}
      </S.Label>
    </S.Container>
  );
};
