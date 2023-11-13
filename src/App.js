import React, { useState } from 'react';
import CuponModal from './CuponModal';
import PresionameModal from './PresionameModal';

function App() {
  const [isCuponModalOpen, setCuponModalOpen] = useState(false);
  const [isPresionameModalOpen, setPresionameModalOpen] = useState(false);

  const backgroundImageStyle = {
    backgroundImage: 'url("./harry-potter.jpg")',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // Rest of the code...

  return (
    <div style={backgroundImageStyle}>
      <center><h1 style={{ color: 'white'}}>¡Bienvenida a Hogwarts Isabel!</h1></center>
      <button
        style={{ padding: '10px 20px', fontSize: '16px' }}
        onClick={() => setPresionameModalOpen(true)}
      >
        Presióname
      </button>
      <button
        onClick={() => setCuponModalOpen(true)}
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Cupón
      </button>
      <CuponModal isOpen={isCuponModalOpen} closeModal={() => setCuponModalOpen(false)} />
      <PresionameModal isOpen={isPresionameModalOpen} closeModal={() => setPresionameModalOpen(false)} />
    </div>
  );
}

export default App;
