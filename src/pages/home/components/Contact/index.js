import { useRef, useEffect } from 'react';
import { useTheme } from 'styled-components';
/* components */
import { EmailSolid } from '@components/icons/EmailSolid';
import { PhoneSolid } from '@components/icons/PhoneSolid';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';

export const Contact = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <S.Container id="contact">
      <S.Title>{t('contact')}</S.Title>
      <S.Subtitle>{t('contactSubtitle')}</S.Subtitle>
      <S.ContactInfoBox>
        fsouza.andreia@gmail.com{' '}
        <S.IconLink href="mailto:fsouza.andreia@gmail.com">
          <EmailSolid size={32} />
        </S.IconLink>
      </S.ContactInfoBox>
      <S.ContactInfoBox>
        +55 31 991701966
        <S.IconLink href="tel:+5531991701966">
          <PhoneSolid size={32} />
        </S.IconLink>
      </S.ContactInfoBox>
      <S.AddressTitle>{t('address')}</S.AddressTitle>
    </S.Container>
  );
};
