import styled from 'styled-components';
import { colors } from '../../stylesheets/abstracts/palettes';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.primary[900]};
  position: relative;
  z-index: 1;
`;

export const BackgroundLinesWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 2;
  overflow: hidden;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  width: 50%;
  max-width: 45rem;
  height: 100vh;
  position: absolute;
  z-index: 5;
  right: 0;
`;

export const ProfileBackgroundItemBig = styled.div`
  width: 74%;
  height: 100vh;
  background-color: ${colors.primary[900]};
`;

export const ProfileBackgroundItemMedium = styled.div`
  width: 12.5%;
  height: 55%;
  background-color: ${colors.primary[900]};
`;

export const ProfileBackgroundItemSmall = styled.div`
  width: 13.5%;
  height: 41%;
  background-color: ${colors.primary[900]};
`;

export const MainTextBackground = styled.div`
  background-color: ${colors.shadows[800]};
  width: 52%;
  height: 76%;
  position: absolute;
  z-index: 3;
  top: 104px;
  left: 90px;
`;

export const ButtonBackground = styled.div`
  background-color: ${colors.secondary[800]};
  width: 41.6%;
  height: 21rem;
  position: absolute;
  z-index: 4;
  bottom: 90px;
`;
