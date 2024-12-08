import React from 'react';
import { Ambulance } from 'lucide-react';
import { Position } from '../types';

type EmergencyVehicleProps = {
  position: Position;
};

export function EmergencyVehicle({ position }: EmergencyVehicleProps) {
  return (
    <div 
      className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%` 
      }}
    >
      <div className="relative">
        <div className="absolute -inset-2">
          <div className="w-16 h-16 bg-red-500/20 rounded-full animate-ping" />
        </div>
        <Ambulance className="w-12 h-12 text-red-500 animate-bounce" />
      </div>
    </div>
  );
}