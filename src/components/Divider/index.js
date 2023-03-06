import React from 'react';
import { DividerLines } from './DividerLines';

import * as S from './styles';

export const Divider = () => {
  return (
    <S.Container>
      <S.Lines>
        <DividerLines />
      </S.Lines>
    </S.Container>
  );
};
