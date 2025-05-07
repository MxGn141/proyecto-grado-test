import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserCheck, Clock, Calendar } from "lucide-react";

const Attendance: React.FC = () => {
    const [asistencias, setAsistencias] = useState<any[]>([]);

    useEffect(() => {
        const fetchAsistencias = async () => {
            try {
                const response = await axios.get("http://192.168.100.9:8000/api/asistencias");
                setAsistencias(response.data);
            } catch (error) {
                console.error("Error al obtener registros de asistencia:", error);
            }
        };

        fetchAsistencias();
    }, []);

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Control de Asistencia</h1>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Registros de Asistencia</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Empleado
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Entrada
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Salida
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Estado
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {asistencias.map((asistencia) => (
                                    <tr key={asistencia.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                {asistencia.empleado.nombre} {asistencia.empleado.apellido}
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                {asistencia.empleado.departamento}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                            {asistencia.hora_entrada}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                                            {asistencia.hora_salida ?? "No registrada"}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                    asistencia.estado === "Tarde"
                                                        ? "bg-red-100 text-red-800"
                                                        : "bg-green-100 text-green-800"
                                                }`}
                                            >
                                                {asistencia.estado}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;