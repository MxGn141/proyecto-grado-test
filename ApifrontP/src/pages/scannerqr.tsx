import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";

const EscanearQR: React.FC = () => {
    const [mensaje, setMensaje] = useState<string>("");
    const [estado, setEstado] = useState<string>(""); // 🔥 Guardar estado ("A tiempo" o "Tarde")
    const [escaneado, setEscaneado] = useState<boolean>(false); // ✅ Evitar múltiples escaneos en bucle

    // ✅ Función para extraer el ID del enlace QR
    const extractIdEmpleado = (qrText: string): string | null => {
        try {
            const urlParts = qrText.split("/");
            const idEmpleado: string = urlParts[urlParts.length - 1];

            if (!/^\d+$/.test(idEmpleado)) {
                console.error("Error: ID inválido detectado en el QR:", idEmpleado);
                return null;
            }

            return idEmpleado;
        } catch (error: unknown) {
            console.error("Error al extraer el ID del QR:", error);
            return null;
        }
    };

    // ✅ Función para manejar el escaneo del QR
    const handleScan = async (qrText: string) => {
        if (escaneado) return; // 🔥 Evitar múltiples intentos de escaneo en bucle
        setEscaneado(true);

        if (!qrText) {
            setMensaje("Error: QR inválido");
            return;
        }

        const idEmpleado = extractIdEmpleado(qrText); // Extraer el ID del QR

        if (!idEmpleado) {
            setMensaje("Error: QR inválido");
            setEscaneado(false);
            return;
        }

        console.log("ID enviado a Laravel:", idEmpleado);

        try {
            // ✅ Registrar asistencia con estado
            const responseAsistencia = await axios.post("http://192.168.100.9:8000/api/asistencia", {
                empleado_id: idEmpleado,
            });

            const { mensaje, estado } = responseAsistencia.data;
            setMensaje(mensaje);
            setEstado(estado); // 🔥 Guardamos el estado de llegada

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error("Error al registrar asistencia:", error.response?.data?.error || error.message);
                setMensaje("Error al registrar asistencia: " + (error.response?.data?.error || "Error desconocido"));
            } else {
                console.error("Error inesperado:", error);
                setMensaje("Error desconocido al registrar asistencia");
            }
        } finally {
            setTimeout(() => setEscaneado(false), 3000); // 🔥 Permitir nuevos escaneos después de 3 segundos
        }
    };

    useEffect(() => {
        const scanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: { width: 250, height: 250 } }, false);

        scanner.render(
            (decodedText: string) => handleScan(decodedText),
            (errorMessage: string) => {
                if (errorMessage.includes("NotFoundException")) return; // 🔥 Evitar bucle si no se detecta QR
                console.warn("Error de escaneo:", errorMessage);
            }
        );

        return () => {
            scanner.clear();
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h2 className="text-3xl mb-4">Escanear Código QR</h2>
            <div id="qr-reader" className="w-64 h-64 bg-gray-700"></div>

            {mensaje && (
                <p
                    className={`mt-4 text-xl font-bold ${
                        estado === "Tarde" ? "text-red-500" : "text-green-500"
                    }`}
                >
                    {estado === "Tarde" ? "⚠️ " : "✅ "}
                    {mensaje} - Estado: {estado}
                </p>
            )}
        </div>
    );
};

export default EscanearQR;