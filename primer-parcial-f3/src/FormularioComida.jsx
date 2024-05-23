import React, { useState } from 'react';
import Card from './Card';

const FormularioComida = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones
    if (nombre.trim().length < 3 || nombre.startsWith(' ')) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }
    if (descripcion.length < 6) {
      setError('Por favor chequea que la información sea correcta');
      return;
    }
    // Si todas las validaciones pasan
    setError('');
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="descripcion">Descripción:</label>
          <input
            type="text"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
      {submitted && !error && <Card nombre={nombre} descripcion={descripcion} />}
    </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      padding: '16px',
      border: '1px solid #ccc',
      borderRadius: '8px'
    },
    inputGroup: {
      marginBottom: '16px'
    },
    input: {
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc'
    },
    button: {
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#007BFF',
      color: '#fff',
      cursor: 'pointer'
    },
    error: {
      color: 'red',
      marginTop: '16px'
    }
  };

export default FormularioComida;