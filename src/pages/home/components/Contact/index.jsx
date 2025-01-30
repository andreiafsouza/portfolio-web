/* components */
import { EmailSolid } from '@components/icons/EmailSolid';
import { PhoneSolid } from '@components/icons/PhoneSolid';
/* i18 */
import { useTranslation } from 'react-i18next';
/* style */
import * as S from './styles';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <S.Container id="contact">
      <S.Title>{t('contact')}</S.Title>
      <S.Subtitle>{t('contactSubtitle')}</S.Subtitle>
      <S.ContactInfoBox>
        <S.IconLink href="mailto:fsouza.andreia@gmail.com" target="_blank">
          <EmailSolid size={32} />
        </S.IconLink>
        fsouza.andreia@gmail.com
      </S.ContactInfoBox>
      <S.ContactInfoBox>
        <S.IconLink href="tel:+5531991701966">
          <PhoneSolid size={32} />
        </S.IconLink>
        +55 31 991701966
      </S.ContactInfoBox>
      <S.AddressTitle>{t('address')}</S.AddressTitle>
    </S.Container>
  );
};
