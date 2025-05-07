import React from 'react';
import { Bell, Lock, Users, Building, Mail } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Configuración</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6">
          <div className="max-w-3xl">
            <nav className="space-y-1">
              <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 rounded-lg group">
                <Users className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="flex-1 text-left">Perfil de Usuario</span>
              </button>

              <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg group">
                <Bell className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="flex-1 text-left">Notificaciones</span>
              </button>

              <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg group">
                <Lock className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="flex-1 text-left">Seguridad</span>
              </button>

              <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg group">
                <Building className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="flex-1 text-left">Empresa</span>
              </button>

              <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg group">
                <Mail className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="flex-1 text-left">Correo</span>
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Perfil de Usuario
          </h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="h-20 w-20 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="ml-6">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Cambiar Foto
                </button>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  JPG, GIF o PNG. Máximo 1MB
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nombre
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm px-4 py-2"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm px-4 py-2"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Cargo
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm px-4 py-2"
                  placeholder="Tu cargo"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;