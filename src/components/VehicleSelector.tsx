import React from 'react';
import { EmergencyVehicle } from '../types';
import { Ambulance, Truck, Car } from 'lucide-react';

type VehicleSelectorProps = {
  vehicles: EmergencyVehicle[];
  onSelect: (vehicle: EmergencyVehicle) => void;
  selectedId?: string;
};

const vehicleIcons = {
  ambulance: Ambulance,
  fire_truck: Truck,
  police_car: Car
};

export function VehicleSelector({ vehicles, onSelect, selectedId }: VehicleSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {vehicles.map((vehicle) => {
        const Icon = vehicleIcons[vehicle.type];
        const isSelected = vehicle.id === selectedId;

        return (
          <button
            key={vehicle.id}
            onClick={() => onSelect(vehicle)}
            className={`p-4 rounded-lg transition-all duration-300 ${
              isSelected
                ? 'bg-red-600 text-white'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Icon className="w-6 h-6" />
              <span className="font-semibold">{vehicle.callSign}</span>
            </div>
            <div className="text-sm text-left space-y-1">
              <p className="font-medium">{vehicle.series.name}</p>
              <p className="text-xs opacity-75">{vehicle.company.name}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}