import React, { useEffect, useState } from "react";
import axios from "axios";
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
        <div className="p-6 min-h-screen bg-black text-white">
            <div className="mb-6 flex justify-end">
                <Link
                    to="/registrar"
                    className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600"
                >
                    Crear Empleado
                </Link>
            </div>

            {/* Tabla de empleados */}
            <div className="overflow-x-auto">
                <table className="w-full border bg-gray-900 rounded shadow-md">
                    <thead className="bg-gray-700 text-white">
                        <tr>
                            <th className="p-2">Cedula</th>
                            <th className="p-2">Nombre</th>
                            <th className="p-2">Apellido</th>
                            <th className="p-2">Teléfono</th>
                            <th className="p-2">Correo</th>
                            <th className="p-2">Cargo</th>
                            <th className="p-2">Departamento</th>
                            <th className="p-2">Fecha de Ingreso</th>
                            <th className="p-2">QR</th>
                            <th className="p-2">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map((empleado) => (
                            <tr key={empleado.id} className="hover:bg-gray-800 text-center">
                                <td className="p-2">{empleado.cedula}</td>
                                <td className="p-2">{empleado.nombre}</td>
                                <td className="p-2">{empleado.apellido}</td>
                                <td className="p-2">{empleado.telefono}</td>
                                <td className="p-2">{empleado.correo}</td>
                                <td className="p-2">{empleado.cargo}</td>
                                <td className="p-2">{empleado.departamento}</td>
                                <td className="p-2">{empleado.fecha_de_ingreso}</td>
                                <td className="text-center">
                                    {empleado.qr_code_path ? (
                                        <img
                                            src={`http://192.168.100.9:8000/storage/${empleado.qr_code_path}`}
                                            alt={`QR de ${empleado.nombre}`}
                                            className="w-20 h-auto rounded shadow-lg mx-auto"
                                        />
                                    ) : (
                                        <p className="text-sm text-gray-400">Sin QR</p>
                                    )}
                                </td>
                                <td className="p-2">
                                    <div className="flex justify-center space-x-2">
                                        <Link
                                            to={`/editar/${empleado.id}`}
                                            className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-600"
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            onClick={() => deleteEmpleado(empleado.id)}
                                            className="px-3 py-1 bg-red-500 text-black rounded hover:bg-red-600"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MostrarEmpleados;