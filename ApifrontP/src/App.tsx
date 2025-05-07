import { useState } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./context/ThemeContext"; // ¡Importa el ThemeProvider!
import Dashboard from "./pages/Dashboard.tsx";
import Asistencias from "./pages/asistencias.tsx";
import Personal from "./pages/personal.jsx";
import Bienesmodel from "./pages/bienesmodel.tsx";
import ScannerQR from "./pages/scannerqr.tsx";
import Reportes from "./pages/reportes";
import Configuracion from "./pages/configuracion.tsx";
import Layout from './componentes/Layout.tsx';
import RegistrarEmpleado from './componentes/registrarempleado.jsx';
import EditarEmpleado from './componentes/editarempleado.jsx';
import EmpleadoQrVista from './componentes/empleadoqrvista.jsx';


function App() {
  return (
    <ThemeProvider>
    <Router>
      <Layout>
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/asistencias" element={<Asistencias />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/bienesmodel" element={<Bienesmodel />} />
            <Route path="/scannerqr" element={<ScannerQR />} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/configuracion" element={<Configuracion />} />
            <Route path='/registrar' element={<RegistrarEmpleado />}/>
            <Route path='/editar/:id' element={<EditarEmpleado />}/>
            <Route path='/empleados/:id' element={<EmpleadoQrVista />}/>
          </Routes>
        </div>
      </Layout>
    </Router>
  </ThemeProvider>
  );
}

export default App;