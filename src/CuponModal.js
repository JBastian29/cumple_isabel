import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Necesario para la accesibilidad

function CuponModal({ isOpen, closeModal }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '400px', // Ajusta el ancho máximo según sea necesario
      width: '100%',
    },
  };

  const modalContentStyle = {
    textAlign: 'center',
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal para Cupón"
      style={customStyles}
    >
      <div style={modalContentStyle}>
        <img
          src="/cupon.jpg"  // Ajusta la ruta según la ubicación de tu imagen o GIF
          alt="Cupón"
          style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
        />
        <p>Cupón válido para unos Doritos Flaming Hot</p>
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </Modal>
  );
}

export default CuponModal;
