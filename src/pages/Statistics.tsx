import React from 'react';
import { useTrafficSystemContext } from '../context/TrafficSystemContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Clock, AlertTriangle, Building2 } from 'lucide-react';

const COLORS = ['#EF4444', '#F59E0B', '#3B82F6'];

export function Statistics() {
  const { emergencyEvents } = useTrafficSystemContext();

  const hourlyData = emergencyEvents.reduce((acc, event) => {
    const hour = event.timestamp.getHours();
    acc[hour] = (acc[hour] || 0) + 1;
    return acc;
  }, {} as Record<number, number>);

  const chartData = Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    events: hourlyData[i] || 0
  }));

  const companyData = emergencyEvents.reduce((acc, event) => {
    const companyName = event.vehicle.company.name;
    acc[companyName] = (acc[companyName] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const pieData = Object.entries(companyData).map(([name, value]) => ({
    name,
    value
  }));

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">System Statistics</h2>
        <p className="text-gray-400">Analysis of emergency response events</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Emergency Events Today
          </h3>
          <p className="text-4xl font-bold text-white">{emergencyEvents.length}</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Average Response Time
          </h3>
          <p className="text-4xl font-bold text-white">
            {emergencyEvents.length > 0 ? '2.5s' : 'N/A'}
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            Active Companies
          </h3>
          <p className="text-4xl font-bold text-white">
            {Object.keys(companyData).length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Hourly Emergency Events</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="hour" 
                  stroke="#9CA3AF"
                  tickFormatter={(hour) => `${hour}:00`}
                />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#F3F4F6'
                  }}
                />
                <Bar dataKey="events" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Events by Company</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#F3F4F6'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}