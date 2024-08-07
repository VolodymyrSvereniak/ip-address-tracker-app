import styles from "./ErrorModal.module.scss";
import error from "../../assets/ErrorIcon.png";
import { useEffect } from "react";

const ErrorModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.errorImage} src={error} alt="X" />
        <p>Please input a valid IP/Domain!</p>
        <button className={styles.closeButton} onClick={() => onClose()}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
