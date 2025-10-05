import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  // Função para impedir que o clique dentro do modal feche o modal.
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;