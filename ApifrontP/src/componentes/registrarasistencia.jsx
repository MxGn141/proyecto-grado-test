import React, { useState } from "react";
import axios from "axios";

const RegistrarAsistencia = ({ empleadoId }) => {
    const [mensaje, setMensaje] = useState("");

    const registrarAsistencia = async () => {
        try {
            await axios.post("http://192.168.100.9:8000/api/asistencia", {
                empleado_id: empleadoId,
            });
            setMensaje("✅ Asistencia registrada!");
        } catch (error) {
            console.error("Error al registrar asistencia:", error);
            setMensaje("❌ Error al registrar asistencia");
        }
    };

    return (
        <div>
            <button onClick={registrarAsistencia} className="bg-blue-500 text-white px-4 py-2 rounded">
                Registrar Asistencia
            </button>
            {mensaje && <p className="mt-2 text-green-600">{mensaje}</p>}
        </div>
    );
};

export default RegistrarAsistencia;