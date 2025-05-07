import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change, className }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 transition-all duration-200 hover:shadow-md ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <div className="p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
      </div>
      <div className="mt-2">
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        {change && (
          <p className={`mt-2 text-sm ${change.type === 'increase' ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
            {change.type === 'increase' ? '↑' : '↓'} {Math.abs(change.value)}% desde ayer
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;