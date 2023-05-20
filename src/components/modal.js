import React from 'react';
import { ModalContentWrapper, ModalWrapper } from '../styled';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContentWrapper>
        {children}
        <button onClick={onClose}>Close</button>
      </ModalContentWrapper>
    </ModalWrapper>
  );
};

export default Modal;
