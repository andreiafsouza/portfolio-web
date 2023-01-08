import * as S from './ToogleButton.styles';

import React from 'react';

export const ToggleButton = ({ toggleTheme }) => {
  return <S.Container onClick={toggleTheme}>Button</S.Container>;
};
