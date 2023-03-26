import React from 'react';
/* assets | svgs | images */
import AngleDownSolid from '@icons/AngleDownSolid';
import AngleUpSolid from '@icons/AngleUpSolid';
import TerminalIcon from '@icons/Terminal';
import XMarkSolid from '@icons/XMarkSolid';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import { useTheme } from 'styled-components';
import * as S from './styles';

export const Terminal = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <S.AboutTerminalContainer>
      <S.AboutParagraphHeader>
        <S.AboutTerminalHeaderLeft>
          <S.AboutTerminalHeaderIcon>
            <TerminalIcon size={13} />
          </S.AboutTerminalHeaderIcon>
          <S.AboutTerminalHeaderTag>
            Administrator: About
            <XMarkSolid size={14} />
          </S.AboutTerminalHeaderTag>
        </S.AboutTerminalHeaderLeft>
        <S.AboutTerminalHeaderCommands>
          <AngleUpSolid size={12} />
          <AngleDownSolid size={12} />
          <XMarkSolid size={12} />
        </S.AboutTerminalHeaderCommands>
      </S.AboutParagraphHeader>
      <S.AboutParagraphContainer>
        <S.TerminalLine>
          <S.WordColoring color={theme.text.secondary}>Administrator</S.WordColoring>
          in <S.WordColoring color={theme.background.accent}>~\Documents</S.WordColoring>
        </S.TerminalLine>
        <S.TerminalLine>
          <AngleUpSolid size={16} color={theme.icon.accent} rotate={90} />
          <S.WordColoring color={theme.background.accent}>cat</S.WordColoring>
          about.txt
        </S.TerminalLine>
        <S.AboutParagraph>{t('aboutDescriptionOne')}</S.AboutParagraph>
        <S.AboutParagraph>{t('aboutDescriptionTwo')}</S.AboutParagraph>
        <S.TerminalLine>
          <S.WordColoring color={theme.text.secondary}>Administrator</S.WordColoring> in{' '}
          <S.WordColoring color={theme.background.accent}>~\Documents</S.WordColoring>
        </S.TerminalLine>
        <S.TerminalLine>
          <AngleUpSolid size={16} color={theme.icon.accent} rotate={90} />
          <S.LastLine></S.LastLine>
        </S.TerminalLine>
      </S.AboutParagraphContainer>
    </S.AboutTerminalContainer>
  );
};
