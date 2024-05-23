import React from 'react';

const Card = ({ nombre, descripcion }) => {
  return (
    <div style={styles.card}>
      <h2>Información de Comida</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Descripción:</strong> {descripcion}</p>
    </div>
  );
};

const styles = {
    card: {
      border: '1px solid #ccc',
      padding: '16px',
      borderRadius: '8px',
      width: '300px',
      margin: '16px auto'
    }
  };

export default Card; 