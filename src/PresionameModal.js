import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Necesario para la accesibilidad

function PresionameModal({ isOpen, closeModal }) {
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
      contentLabel="Modal para Presión"
      style={customStyles}
    >
      <div style={modalContentStyle}>
        <img
          src="./tu-gif.gif"  // Ajusta la ruta según la ubicación de tu GIF
          alt="GIF"
          style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
        />
        <p>Ayer que fue un dia muy especial, espero que cada momento haya estado lleno de alegría, que cada sueño que tengas se convierta en realidad y que cada risa sea contagiosa. Que este nuevo año de vida te traiga amor, éxito y felicidad en abundancia. 
        ¡Feliz cumpleaños Marissa! Que cada vela en tu pastel haya representado un deseo que se hará realidad y que siempre pueda tener la dicha de saludarte. Te quiero mucho!</p>
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </Modal>
  );
}

export default PresionameModal;
