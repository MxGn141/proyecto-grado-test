import React from 'react';
import { 
  LayoutDashboard, 
  UserCheck, 
  Users, 
  QrCode,
  Scan,
  BarChart3, 
  Settings, 
  X, 
  Moon, 
  Sun
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface NavItem {
  name: string;
  icon: React.ReactNode;
  current: boolean;
  path: string;
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const { theme, toggleTheme } = useTheme();

  const navigation: NavItem[] = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, current: true, path: '/' },
    { name: 'Control de Asistencia', icon: <UserCheck size={20} />, current: false, path: '/asistencias' },
    { name: 'Gestión de Personal', icon: <Users size={20} />, current: false, path: '/personal' },
    { name: 'Control de Bienes', icon: <QrCode size={20} />, current: false, path: '/bienesmodel' },
    { name: 'Escáner QR', icon: <Scan size={20} />, current: false, path: '/scannerqr' },
    { name: 'Reportes', icon: <BarChart3 size={20} />, current: false, path: '/reportes' },
    { name: 'Configuración', icon: <Settings size={20} />, current: false, path: '/configuracion' },
  ];

  return (
    <>
      {/* Sidebar for mobile */}
      <div className={`lg:hidden fixed inset-y-0 left-0 z-30 w-64 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-white dark:bg-gray-800 shadow-lg`}>
        <div className="flex items-center justify-between px-4 py-6 border-b dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <QrCode className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">QR Control</span>
          </div>
          <button 
            onClick={() => setOpen(false)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mt-5 px-4 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`group flex items-center px-2 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                item.current
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-white'
              }`}
            >
              <span className={`mr-3 ${
                item.current ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white'
              }`}>
                {item.icon}
              </span>
              {item.name}
            </a>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full border-t dark:border-gray-700 p-4">
          <button 
            onClick={toggleTheme}
            className="flex items-center justify-center w-full py-2 px-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            {theme === 'dark' ? (
              <><Sun size={18} className="mr-2" /> Modo Claro</>
            ) : (
              <><Moon size={18} className="mr-2" /> Modo Oscuro</>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors duration-200">
          <div className="flex items-center justify-center h-16 px-4 py-6 border-b dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <QrCode className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">QR Control</span>
            </div>
          </div>
          <div className="flex flex-col flex-grow overflow-y-auto">
            <nav className="flex-1 px-4 mt-5 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className={`group flex items-center px-2 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                    item.current
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-white'
                  }`}
                >
                  <span className={`mr-3 ${
                    item.current ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white'
                  }`}>
                    {item.icon}
                  </span>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t dark:border-gray-700 p-4">
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center w-full py-2 px-4 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <><Sun size={18} className="mr-2" /> Modo Claro</>
              ) : (
                <><Moon size={18} className="mr-2" /> Modo Oscuro</>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;