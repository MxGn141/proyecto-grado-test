import React from 'react';

export interface Activity {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  target: string;
  timestamp: string;
  type: 'attendance' | 'asset' | 'personnel';
}

interface ActivityLogProps {
  activities: Activity[];
  className?: string;
}

const ActivityLog: React.FC<ActivityLogProps> = ({ activities, className }) => {
  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'attendance':
        return (
          <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <span className="text-green-600 dark:text-green-400 text-sm">A</span>
          </div>
        );
      case 'asset':
        return (
          <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-400 text-sm">B</span>
          </div>
        );
      case 'personnel':
        return (
          <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
            <span className="text-purple-600 dark:text-purple-400 text-sm">P</span>
          </div>
        );
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-200 ${className}`}>
      <div className="px-6 py-4 border-b dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Actividad Reciente</h3>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {activities.map((activity) => (
          <div key={activity.id} className="px-6 py-4 flex items-start space-x-4">
            {getActivityIcon(activity.type)}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {activity.user.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {activity.action} <span className="font-medium">{activity.target}</span>
              </p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {activity.timestamp}
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 py-3 bg-gray-50 dark:bg-gray-750 rounded-b-lg">
        <a 
          href="#" 
          className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
        >
          Ver todas las actividades
        </a>
      </div>
    </div>
  );
};

export default ActivityLog;