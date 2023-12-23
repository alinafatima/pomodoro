import React, { useContext } from 'react';
import { ALARM_SOUND_OPTIONS, THEME_OPTIONS, LANGUAGE_OPTIONS } from '../constants';
import Modal from './ui-components/modal';
import Select from './ui-components/select/select';
import { SectionWrapper } from './../styled';
import { useTranslation } from 'react-i18next';
import TimerContext from '../timer-context';

export const Settings = ({ isOpen, closeModal }) => {
  const [t] = useTranslation();
  const { data } = useContext(TimerContext);

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <SectionWrapper style={{ textAlign: 'left' }}>
        <h3>{t('settings.themes')}</h3>
        <Select options={THEME_OPTIONS} field={'currentTheme'} defaultOption={data?.currentTheme?.value} />
      </SectionWrapper>
      <SectionWrapper style={{ textAlign: 'left' }}>
        <h3>{t('settings.alarmSounds')}</h3>
        <Select options={ALARM_SOUND_OPTIONS}  field={'currentAlarm'} defaultOption={data.currentAlarm?.value}/>
      </SectionWrapper>
      <SectionWrapper style={{ textAlign: 'left' }}>
        <h3>{t('settings.language')}</h3>
        <Select options={LANGUAGE_OPTIONS}  field={'currentLanguage'} defaultOption={data.currentLanguage?.value}/>
      </SectionWrapper>
    </Modal>
  );
};
