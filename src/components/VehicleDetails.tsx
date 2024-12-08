import React from 'react';
import { EmergencyVehicle } from '../types';
import { Building2, Calendar, List } from 'lucide-react';

type VehicleDetailsProps = {
  vehicle: EmergencyVehicle;
};

export function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  return (
    <div className="bg-gray-800/50 rounded-lg p-6 space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{vehicle.series.name}</h3>
        <p className="text-gray-400">Call Sign: {vehicle.callSign}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-300">
            <Building2 className="w-4 h-4" />
            <span>{vehicle.company.name}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar className="w-4 h-4" />
            <span>Year: {vehicle.series.year}</span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 text-gray-300 mb-2">
            <List className="w-4 h-4" />
            <span>Features:</span>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
            {vehicle.series.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}