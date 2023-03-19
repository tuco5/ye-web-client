'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { TestModal } from './TestModal';
import { Button, BtnVariant } from '@/components/atoms';
import styles from './modal.module.scss';

interface ModalButtonProps {
  variant: BtnVariant;
  modal: string;
  children: React.ReactNode;
}
export function ModalButton({ variant, modal, children }: ModalButtonProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)} variant={variant}>
        {children}
      </Button>
      {showModal && createPortal(<Modal variant={modal} onClose={() => setShowModal(false)} />, document.body)}
    </>
  );
}

interface ModalProps {
  onClose: () => void;
  variant: string;
}
function Modal({ onClose, variant }: ModalProps) {
  return (
    <div className={styles.modal}>
      <button type="button" onClick={onClose} className={styles.close}>
        X
      </button>
      <Content variant={variant} />
    </div>
  );
}

function Content({ variant }: { variant: string }) {
  switch (variant) {
    case 'fuck':
      return <TestModal />;
    default:
      return null;
  }
}
