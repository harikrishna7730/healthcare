import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../Task-3/Model.css';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent closing on content click
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
