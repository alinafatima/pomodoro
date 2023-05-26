import React from 'react';
import { ALARM_SOUND_OPTIONS, THEME_OPTIONS } from '../constants';
import Modal from './modal';
import Select from './ui-components/select';

export const Settings = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <section style={{ textAlign: 'left' }}>
        <h3>Themes</h3>
        <Select options={THEME_OPTIONS} field={'currentTheme'} />
      </section>
      <section style={{ textAlign: 'left' }}>
        <h3>Alarm Sound</h3>
        <Select options={ALARM_SOUND_OPTIONS} />
      </section>
    </Modal>
  );
};
