import React, { useState, useEffect } from "react";
import axios from "axios";

const ControlAsistencias = () => {
    const [asistencias, setAsistencias] = useState([]);

    useEffect(() => {
        const fetchAsistencias = async () => {
            try {
                const response = await axios.get("http://192.168.100.9:8000/api/asistencias");
                setAsistencias(response.data);
            } catch (error) {
                console.error("Error al obtener asistencias:", error);
            }
        };

        fetchAsistencias();
    }, []);

    return (
        <div className="p-6 bg-white shadow-md rounded">
            <h1 className="text-2xl font-bold text-gray-700">📊 Control de Asistencias</h1>
            <table className="table-auto w-full mt-4">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Empleado ID</th>
                        <th className="px-4 py-2">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {asistencias.map((asistencia) => (
                        <tr key={asistencia.id} className="border-t">
                            <td className="px-4 py-2">{asistencia.empleado_id}</td>
                            <td className="px-4 py-2">{asistencia.fecha}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ControlAsistencias;