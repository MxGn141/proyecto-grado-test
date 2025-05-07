import React, { useState } from 'react';

const QrComponente = () => {
  const [qrCode, setQrCode] = useState(null); // Estado para el código QR
  const [formData, setFormData] = useState({  // Estado para los datos del formulario
    cedula: '',
    nombre: '',
    apellido: '',
    telefono: '',
  });

  // Manejar cambios en los campos del formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData, // Mantener los datos actuales del formulario
      [name]: value, // Actualizar el campo que está cambiando
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Hacer la solicitud a la API con los datos del formulario
    fetch('http://192.168.100.9:8000/api/generate-qr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Enviar los datos al backend
    })
      .then((response) => response.json())
      .then((result) => {
        setQrCode(result.qrCode); // Guardar el QR en el estado
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Generar Código QR</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cedula"
          placeholder="Cédula"
          value={formData.cedula}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
        <button type="submit">Generar QR</button>
      </form>
      {qrCode && (
        <div>
          <h2>Código QR</h2>
          <img
            src={`data:image/png;base64,${qrCode}`}
            alt="Código QR generado"
          />
        </div>
      )}
    </div>
  );
};

export default QrComponente;