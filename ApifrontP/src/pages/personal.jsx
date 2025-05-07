import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserPlus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const endpoint = "http://192.168.100.9:8000/api";

const MostrarEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    getAllEmpleados();
  }, []);

  const getAllEmpleados = async () => {
    try {
      const response = await axios.get(`${endpoint}/empleados`);
      setEmpleados(response.data);
    } catch (error) {
      console.error("Error al obtener los empleados:", error);
    }
  };

  const deleteEmpleado = async (id) => {
    try {
      await axios.delete(`${endpoint}/empleados/${id}`);
      getAllEmpleados();
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Gestión de Personal
        </h1>
        <Link
          to="/registrar"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
        >
          <UserPlus size={20} className="mr-2" />
          Agregar Empleado
        </Link>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="relative w-full md:w-64 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Buscar empleado..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Lista de empleados en tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {empleados.map((empleado) => (
            <div
              key={empleado.id}
              className="bg-gray-900 text-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4"
            >
              <div className="h-16 w-16 rounded-full bg-gray-700 flex justify-center items-center">
                {empleado.qr_code_path ? (
                  <img
                    src={`http://192.168.100.9:8000/storage/${empleado.qr_code_path}`}
                    alt={`QR de ${empleado.nombre}`}
                    className="w-16 h-auto rounded shadow-lg"
                  />
                ) : (
                  <p className="text-sm text-gray-400">Sin QR</p>
                )}
              </div>

              <div className="text-center">
                <h3 className="text-lg font-medium">
                  {empleado.nombre} {empleado.apellido}
                </h3>
                <p className="text-sm text-gray-400">
                  {empleado.cargo} - {empleado.departamento}
                </p>
              </div>

              {/* Botones responsivos */}
              <div className="flex flex-wrap justify-center gap-2 w-full">
                <Link
                  to={`/editar/${empleado.id}`}
                  className="w-full sm:w-auto px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 text-center"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteEmpleado(empleado.id)}
                  className="w-full sm:w-auto px-4 py-2 bg-red-500 text-black rounded hover:bg-red-600 text-center"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostrarEmpleados;