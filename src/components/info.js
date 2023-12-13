import React from 'react';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import TimerContext from '../timer-context';
import Modal from './ui-components/modal';

export const Info = ({ isOpen, closeModal }) => {
  const { t } = useTranslation();
  const { data } = useContext(TimerContext);
  const { isRtl } = data; 
 

  return (
    <Modal isOpen={isOpen} onClose={closeModal} width={"50%"}>
      <section class="info-section">
        <h2>{t('info.title')}</h2>

        <h3>{t('info.subheading1')}</h3>
        <p>{t('info.description1')}</p>

        <h3>{t('info.subheading2')}</h3>
        <ol
          style={{
            textAlign: isRtl ? 'right' : 'left',
            direction: isRtl ? 'rtl' : 'ltr',
          }}
        >
          <li>
            <strong>{t('info.howToUseHeading1')}</strong>
            {t('info.howToUseDetail1')}
          </li>
          <li>
            <strong>{t('info.howToUseHeading2')}</strong>
            {t('info.howToUseDetail2')}
          </li>
          <li>
            <strong>{t('info.howToUseHeading3')}</strong>
            {t('info.howToUseDetail3')}
          </li>
          <li>
            <strong>{t('info.howToUseHeading4')}</strong>
            {t('info.howToUseDetail4')}
          </li>
          <li>
            <strong>{t('info.howToUseHeading5')}</strong>
            {t('info.howToUseDetail5')}
          </li>
          <li>
            <strong>{t('info.howToUseHeading6')}</strong>
            {t('info.howToUseDetail6')}
          </li>
        </ol>
        <h3>{t('info.subheading3')}</h3>
        <ul
          style={{
            textAlign: isRtl ? 'right' : 'left',
            direction: isRtl ? 'rtl' : 'ltr',
          }}
        >
          <li>
            <strong>{t('info.benefitHeading1')}</strong>
            {t('info.benefitDetail1')}
          </li>
          <li>
            <strong>{t('info.benefitHeading2')}</strong>
            {t('info.benefitDetail2')}
          </li>
          <li>
            <strong>{t('info.benefitHeading3')}</strong>
            {t('info.benefitDetail3')}
          </li>
          <li>
            <strong>{t('info.benefitHeading4')}</strong>
            {t('info.benefitDetail4')}
          </li>
        </ul>
      </section>
    </Modal>
  );
};
