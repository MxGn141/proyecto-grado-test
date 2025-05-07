import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const endpoint = "http://192.168.100.9:8000/api/empleados";

const RegistrarEmpleado = () => {
  const [cedula, setCedula] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [correo, setCorreo] = useState("");
  const [cargo, setCargo] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [fecha_de_ingreso, setFecha_de_ingreso] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(endpoint, {
        cedula,
        nombre,
        apellido,
        telefono,
        correo,
        cargo,
        departamento,
        fecha_de_ingreso,
      });

      if (response.status >= 200 && response.status < 300) {
        navigate("/");
        console.log("Empleado registrado exitosamente:", response.data);
      } else {
        console.error("Error al registrar el empleado:", response.status, response.data);
      }

    } catch (error) {
      console.error("Error en la petición:", error);
      if (error.response) {
        // La petición fue hecha y el servidor respondió con un estado de error
        console.error("Datos de la respuesta de error:", error.response.data);
        console.error("Estado de la respuesta de error:", error.response.status);
        console.error("Cabeceras de la respuesta de error:", error.response.headers);
      } else if (error.request) {
        // La petición fue hecha pero no se recibió respuesta
        console.error("No se recibió respuesta del servidor:", error.request);
      } else {
        // Algo más causó el error
        console.error("Error al configurar la petición:", error.message);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded p-6 mt-8">
      <h3 className="text-2xl font-bold mb-4 color-black">Registrar un Empleado</h3>

      <form onSubmit={store}>
        {/* Cedula */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Cédula</label>
          <input
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            type="number"
            className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Nombre */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Apellido */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Apellido</label>
          <input
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            type="text"
            className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Teléfono */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Teléfono</label>
          <input
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="text"
            className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Correo */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Correo</label>
          <input
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            type="email"
            className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Cargo */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Cargo</label>
          <input
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            type="text"
            className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Departamento */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Departamento</label>
          <input
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            type="text"
            className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Fecha de ingreso */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Fecha de Ingreso</label>
          <input
            value={fecha_de_ingreso}
            onChange={(e) => setFecha_de_ingreso(e.target.value)}
            type="date"
            className="w-full px-3 py-2 border rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Botón de registro */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrarEmpleado;