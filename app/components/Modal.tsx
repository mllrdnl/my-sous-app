import { useCallback } from "react";
import styles from "../styles/Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h3>{title}</h3>
          <button onClick={handleClose}>
            <AiOutlineClose />
          </button>
        </div>
        <div className={styles.modalBody}>
          {body}
          <button disabled={disabled} onClick={handleSubmit}>
            {actionLabel}
          </button>
        </div>
        <div className={styles.modalFooter}>{footer}</div>
      </div>
    </>
  );
};

export default Modal;
