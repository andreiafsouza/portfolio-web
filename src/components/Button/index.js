import * as S from './styles';

export const Button = ({
  hasLabel,
  text,
  hasIcon,
  icon,
  color,
  hoverColor
}) => {
  return (
    <S.Container hoverColor={hoverColor} color={color}>
      <S.Icon hasIcon>{icon}</S.Icon>
      <S.Label hasLabel color={color}>
        {text}
      </S.Label>
    </S.Container>
  );
};
