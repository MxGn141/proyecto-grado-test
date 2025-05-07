import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EmpleadoQrVista = () => {
  const { id } = useParams(); // Captura el ID desde la URL
  const [empleado, setEmpleado] = useState(null); // Almacena datos del empleado
  const [error, setError] = useState(null); // Almacena errores si ocurren

  useEffect(() => {
    // Consumir la API de Laravel para obtener los datos del empleado
    fetch(`http://192.168.100.9:8000/api/empleados/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos del empleado.");
        }
        return response.json();
      })
      .then((data) => setEmpleado(data)) // Guardar datos del empleado
      .catch((error) => setError(error.message)); // Manejar errores
  }, [id]);

  if (error) {
    return (
      <div className="text-center text-red-500 font-bold text-xl mt-10">
        ❌ Error: {error}
      </div>
    );
  }

  if (!empleado) {
    return (
      <div className="text-center text-gray-400 font-medium text-lg mt-10">
        ⏳ Cargando información del empleado...
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto bg-gray-900 text-white rounded-lg shadow-md p-6 mt-8">
      {/* Encabezado */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Información del Empleado</h1>
      </div>

      {/* Datos del empleado en tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Foto / QR del empleado */}
        <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center shadow-md">
          {empleado.qr_code_path ? (
            <img
              src={`http://192.168.100.9:8000/storage/${empleado.qr_code_path}`}
              alt={`QR de ${empleado.nombre}`}
              className="w-24 h-auto rounded-lg shadow-lg"
            />
          ) : (
            <p className="text-sm text-gray-400">Sin QR</p>
          )}
          <p className="text-sm text-gray-300 mt-2">{empleado.nombre} {empleado.apellido}</p>
        </div>

        {/* Información detallada */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-md">
          <p><strong className="text-gray-400">Cédula:</strong> {empleado.cedula}</p>
          <p><strong className="text-gray-400">Teléfono:</strong> {empleado.telefono}</p>
          <p><strong className="text-gray-400">Correo:</strong> {empleado.correo}</p>
          <p><strong className="text-gray-400">Cargo:</strong> {empleado.cargo}</p>
          <p><strong className="text-gray-400">Departamento:</strong> {empleado.departamento}</p>
          <p><strong className="text-gray-400">Fecha de Ingreso:</strong> {empleado.fecha_de_ingreso}</p>
        </div>
      </div>
    </div>
  );
};

export default EmpleadoQrVista;