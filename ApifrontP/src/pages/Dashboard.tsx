import React from 'react';
import StatCard from '../componentes/estadisticascard';
import Chart from '../componentes/graficas';
import ActivityLog from '../componentes/actividades';
import { attendanceData, assetUsageData, recentActivities } from '../utils/mockData.ts';
import { UserCheck, Users, QrCode, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <div className="mt-2 sm:mt-0">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
            <Clock size={16} className="mr-1" />
            Última actualización: hace 5 minutos
          </span>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          title="Asistencias del día" 
          value="42" 
          icon={<UserCheck size={20} />} 
          change={{ value: 8, type: 'increase' }}
        />
        <StatCard 
          title="Total de empleados" 
          value="128" 
          icon={<Users size={20} />} 
          change={{ value: 3, type: 'increase' }}
        />
        <StatCard 
          title="Bienes verificados" 
          value="96" 
          icon={<QrCode size={20} />} 
          change={{ value: 5, type: 'decrease' }}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart 
          title="Asistencia Semanal" 
          data={attendanceData} 
          type="bar" 
        />
        <Chart 
          title="Uso de Bienes por Categoría" 
          data={assetUsageData} 
          type="line" 
        />
      </div>

      {/* Activity log */}
      <ActivityLog activities={recentActivities} />
    </div>
  );
};

export default Dashboard;