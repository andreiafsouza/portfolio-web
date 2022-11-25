import * as S from './styles';

export const Button = ({
  hasLabel,
  text,
  hasIcon,
  icon,
  color,
  hoverColor,
  size,
  href
}) => {
  return (
    <>
      <S.Container
        hoverColor={hoverColor}
        color={color}
        size={size}
        href={href}
      >
        <S.Icon hasIcon>{icon}</S.Icon>
        <S.Label size={size} hasLabel color={color}>
          {text}
        </S.Label>
      </S.Container>
    </>
  );
};
