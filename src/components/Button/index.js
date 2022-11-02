import * as S from './styles';

export const Button = ({ hasLabel, text }) => {
  return (
    <S.Container>
      <S.Label hasLabel>{text}</S.Label>
    </S.Container>
  );
};
