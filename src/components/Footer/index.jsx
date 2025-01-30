/* style */
import * as S from './styles';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Footer>
      <S.Container>
        <S.FooterText>{`© 2022-${currentYear} Andreia Souza`}</S.FooterText>
      </S.Container>
    </S.Footer>
  );
};
