import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const [empleadosTotal, setEmpleadosTotal] = useState(0);
    const [asistencias, setAsistencias] = useState({ dia: 0, semana: 0, mes: 0 });
    const [sidebarVisible, setSidebarVisible] = useState(false); // Estado para mostrar/ocultar sidebar

    useEffect(() => {
        const fetchData = async () => {
            try {
                const empleadosRes = await axios.get("http://192.168.100.9:8000/api/empleados/count");
                setEmpleadosTotal(empleadosRes.data.total);

                const asistenciasRes = await axios.get("http://192.168.100.9:8000/api/asistencias/stats");
                setAsistencias(asistenciasRes.data);
            } catch (error) {
                console.error("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, []);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const data = {
        labels: ["Hoy", "Semana", "Mes"],
        datasets: [
            {
                label: "Asistencias",
                data: [asistencias.dia, asistencias.semana, asistencias.mes],
                backgroundColor: ["#4F46E5", "#10B981", "#F59E0B"],
            },
        ],
    };

    return (
        <div className="flex min-h-screen bg-gray-900 text-white">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-72 p-6 transition-transform duration-300 ${sidebarVisible ? "translate-x-0" : "-translate-x-full"} md:w-72 md:relative`}>
                <h2 className="text-xl font-bold mb-6">Dashboard</h2>
                <nav>
                    <ul className="space-y-4">
                        <li><Link to="/mostrarempleado" className="block px-4 py-2 rounded hover:bg-gray-700">🧑‍💼 Empleados</Link></li>
                        <li><Link to="/control-asistencias" className="block px-4 py-2 rounded hover:bg-gray-700">📊 Control de Asistencias</Link></li>
                        <li><Link to="/escanearqr" className="block px-4 py-2 rounded hover:bg-gray-700">🔍 Escanear QR</Link></li>
                    </ul>
                </nav>
            </aside>

            {/* Contenido principal (Dashboard más grande) */}
            <main className="flex-grow p-10 w-full">
                <button onClick={toggleSidebar} className="fixed top-6 left-6 z-10 bg-gray-600 text-white p-2 rounded-full hover:bg-gray-800">
                    {sidebarVisible ? "Cerrar" : "Menu"}
                </button>

                <h1 className="text-4xl font-bold mb-6">Contenido</h1>

                {/* Gráfico más grande */}
                <div className="w-full max-w-5xl bg-gray-800 shadow-lg rounded p-6">
                    <h2 className="text-xl font-semibold mb-4">📊 Estadísticas de Asistencias</h2>
                    <Bar data={data} />
                    <p className="mt-4">Total empleados: <span className="font-bold">{empleadosTotal}</span></p>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;