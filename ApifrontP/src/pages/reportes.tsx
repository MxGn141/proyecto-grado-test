import React from 'react';
import Chart from '../componentes/graficas';
import { Download } from 'lucide-react';

const Reports: React.FC = () => {
  const attendanceData = [
    { label: 'Lun', value: 42 },
    { label: 'Mar', value: 56 },
    { label: 'Mie', value: 48 },
    { label: 'Jue', value: 61 },
    { label: 'Vie', value: 58 },
    { label: 'Sáb', value: 12 },
    { label: 'Dom', value: 8 },
  ];

  const assetUsageData = [
    { label: 'Laptops', value: 84 },
    { label: 'Proyectores', value: 45 },
    { label: 'Teléfonos', value: 67 },
    { label: 'Impresoras', value: 32 },
    { label: 'Monitores', value: 52 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reportes</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
          <Download size={20} className="mr-2" />
          Exportar Datos
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Asistencia Semanal
          </h2>
          <Chart title="" data={attendanceData} type="bar" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Uso de Bienes por Categoría
          </h2>
          <Chart title="" data={assetUsageData} type="line" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Resumen de Métricas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Tasa de Asistencia
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">95%</p>
            <p className="text-sm text-green-600 mt-1">↑ 2% vs mes anterior</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Utilización de Bienes
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">73%</p>
            <p className="text-sm text-green-600 mt-1">↑ 5% vs mes anterior</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Incidencias
            </h3>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">12</p>
            <p className="text-sm text-red-600 mt-1">↑ 2 vs mes anterior</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;