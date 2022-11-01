import * as S from './styles';

export const Navbar = () => {
  return (
    <S.Container>
      <S.NavbarWrapper>
        <S.NavbarItem>home</S.NavbarItem>
        <S.NavbarItem>about</S.NavbarItem>
        <S.NavbarItem>projects</S.NavbarItem>
        <S.NavbarItem>contact</S.NavbarItem>
      </S.NavbarWrapper>
    </S.Container>
  );
};
