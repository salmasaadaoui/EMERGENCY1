import React from 'react';
import { LucideIcon } from 'lucide-react';

type StatusCardProps = {
  title: string;
  value: string;
  icon: LucideIcon;
  status: 'success' | 'error' | 'warning' | 'info';
};

const statusColors = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  info: 'bg-blue-500',
};

export function StatusCard({ title, value, icon: Icon, status }: StatusCardProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400">{title}</p>
          <p className="mt-2 text-xl font-semibold text-white">{value}</p>
        </div>
        <div className={`p-2 rounded-lg ${statusColors[status]} bg-opacity-10`}>
          <Icon className={`w-5 h-5 text-${status === 'info' ? 'blue' : status}-500`} />
        </div>
      </div>
    </div>
  );
}