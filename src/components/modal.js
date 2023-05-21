import React from 'react';
import { CloseIconWrapper, ModalContentWrapper, ModalWrapper } from '../styled';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContentWrapper>
        <CloseIconWrapper onClick={onClose}>X</CloseIconWrapper>
        {children}
      </ModalContentWrapper>
    </ModalWrapper>
  );
};

export default Modal;
