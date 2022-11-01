import * as S from './styles';
import { BackgroundLines } from '../../components/BackgroundLines';
import { Navbar } from '../../components/Navbar';

export const Home = () => {
  return (
    <S.Container>
      <Navbar />
      <S.BackgroundWrapper>
        <S.MainTextBackground />
        <S.ButtonBackground />
        <S.ProfileWrapper>
          <S.ProfileBackgroundItemSmall />
          <S.ProfileBackgroundItemMedium />
          <S.ProfileBackgroundItemBig />
        </S.ProfileWrapper>
        <S.BackgroundLinesWrapper>
          <BackgroundLines />
        </S.BackgroundLinesWrapper>
      </S.BackgroundWrapper>
    </S.Container>
  );
};
