import React, { useState } from 'react';
import { useTrafficSystemContext } from '../context/TrafficSystemContext';
import { Settings as SettingsIcon, Save } from 'lucide-react';

export function Settings() {
  const { settings, updateSettings } = useTrafficSystemContext();
  const [formData, setFormData] = useState({
    cycleDuration: settings.cycleDuration / 1000,
    emergencyDuration: settings.emergencyDuration / 1000
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings({
      cycleDuration: formData.cycleDuration * 1000,
      emergencyDuration: formData.emergencyDuration * 1000
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <SettingsIcon className="w-8 h-8" />
          System Settings
        </h2>
        <p className="text-gray-400">Configure traffic control system parameters</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-gray-800/50 rounded-lg p-6 space-y-6">
          <div>
            <label htmlFor="cycleDuration" className="block text-sm font-medium text-gray-300">
              Traffic Light Cycle Duration (seconds)
            </label>
            <input
              type="number"
              id="cycleDuration"
              min="1"
              max="60"
              value={formData.cycleDuration}
              onChange={(e) => setFormData(prev => ({ ...prev, cycleDuration: Number(e.target.value) }))}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white 
                       shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 
                       focus:ring-opacity-50"
            />
            <p className="mt-2 text-sm text-gray-400">
              Duration of each traffic light cycle in normal operation
            </p>
          </div>

          <div>
            <label htmlFor="emergencyDuration" className="block text-sm font-medium text-gray-300">
              Emergency Mode Duration (seconds)
            </label>
            <input
              type="number"
              id="emergencyDuration"
              min="5"
              max="120"
              value={formData.emergencyDuration}
              onChange={(e) => setFormData(prev => ({ ...prev, emergencyDuration: Number(e.target.value) }))}
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white 
                       shadow-sm focus:border-red-500 focus:ring focus:ring-red-500 
                       focus:ring-opacity-50"
            />
            <p className="mt-2 text-sm text-gray-400">
              Duration of emergency mode when activated
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 
                   text-white rounded-lg font-semibold
                   hover:from-red-700 hover:to-red-600 
                   transition-all duration-300 transform hover:scale-105
                   flex items-center justify-center gap-2 shadow-lg"
        >
          <Save className="w-5 h-5" />
          Save Settings
        </button>
      </form>
    </div>
  );
}