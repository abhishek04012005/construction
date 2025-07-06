// src/components/messagepopup/Popup.tsx
"use client"
import styles from './popup.module.css';

interface StatusPopupProps {
  type: 'success' | 'error';
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

const StatusPopup = ({ type, message, isOpen, onClose }: StatusPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div 
        className={`${styles.popup} ${styles[type]} ${isOpen ? styles.show : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>
              {type === 'success' ? '✓' : '×'}
            </span>
          </div>
          <p className={styles.message}>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusPopup;