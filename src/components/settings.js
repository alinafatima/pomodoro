import React from 'react';
import Modal from './modal';

export const Settings = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      This is settings
    </Modal>
  );
};
