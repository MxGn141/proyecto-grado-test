import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useTheme();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`flex h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-gray-800 bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        {/* Top navbar */}
        <header className="bg-white dark:bg-gray-800 shadow-sm z-10 transition-colors duration-200">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-600 dark:text-gray-200 focus:outline-none"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white lg:block hidden">
              Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  className="h-8 w-8 rounded-full border-2 border-gray-200 dark:border-gray-700"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="User profile"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;