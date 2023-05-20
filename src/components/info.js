import React from 'react';
import Modal from './modal';

export const Info = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      This is info.
    </Modal>
  );
};
