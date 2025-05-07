import type { Activity } from '../componentes/actividades';

export const attendanceData = [
  { label: 'Lun', value: 42 },
  { label: 'Mar', value: 56 },
  { label: 'Mie', value: 48 },
  { label: 'Jue', value: 61 },
  { label: 'Vie', value: 58 },
  { label: 'Sáb', value: 12 },
  { label: 'Dom', value: 8 },
];

export const assetUsageData = [
  { label: 'Laptops', value: 84 },
  { label: 'Proyectores', value: 45 },
  { label: 'Teléfonos', value: 67 },
  { label: 'Impresoras', value: 32 },
  { label: 'Monitores', value: 52 },
];

export const recentActivities: Activity[] = [
  {
    id: '1',
    user: {
      name: 'Carlos Rodríguez',
      avatar: '',
    },
    action: 'registró entrada a las',
    target: '8:05 AM',
    timestamp: 'Hace 10 minutos',
    type: 'attendance',
  },
  {
    id: '2',
    user: {
      name: 'María González',
      avatar: '',
    },
    action: 'verificó el dispositivo',
    target: 'Proyector P-2435',
    timestamp: 'Hace 25 minutos',
    type: 'asset',
  },
  {
    id: '3',
    user: {
      name: 'Juan López',
      avatar: '',
    },
    action: 'actualizó información de',
    target: 'Departamento de TI',
    timestamp: 'Hace 1 hora',
    type: 'personnel',
  },
  {
    id: '4',
    user: {
      name: 'Ana Martínez',
      avatar: '',
    },
    action: 'registró salida a las',
    target: '5:45 PM',
    timestamp: 'Hace 2 horas',
    type: 'attendance',
  },
  {
    id: '5',
    user: {
      name: 'Javier Sánchez',
      avatar: '',
    },
    action: 'reportó problema con',
    target: 'Laptop L-1024',
    timestamp: 'Hace 4 horas',
    type: 'asset',
  },
];