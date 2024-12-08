import React from 'react';
import { useTrafficSystemContext } from '../context/TrafficSystemContext';
import { Intersection } from '../components/Intersection';
import { EmergencyVehicle as EmergencyVehicleComponent } from '../components/EmergencyVehicle';
import { VehicleSelector } from '../components/VehicleSelector';
import { VehicleDetails } from '../components/VehicleDetails';
import { SirenLight } from '../components/SirenLight';
import { AlertTriangle, Clock } from 'lucide-react';
import { StatusCard } from '../components/StatusCard';
import { emergencyVehicles } from '../data/emergencyServices';

export function Dashboard() {
  const { 
    intersection, 
    emergencyVehicle, 
    triggerEmergency, 
    settings,
    selectedVehicle 
  } = useTrafficSystemContext();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative mb-8">
        <h1 className="text-4xl font-bold text-white mb-2 text-center">
          Emergency Response
        </h1>
        <h2 className="text-xl text-gray-400 mb-8 text-center">Traffic Control System</h2>
        <div className="absolute -top-6 -right-6">
          <SirenLight active={intersection.hasEmergencyVehicle} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-8">
        <StatusCard
          title="System Status"
          value={intersection.hasEmergencyVehicle ? 'Emergency Mode' : 'Normal Operation'}
          icon={AlertTriangle}
          status={intersection.hasEmergencyVehicle ? 'error' : 'success'}
        />
        <StatusCard
          title="Cycle Duration"
          value={`${settings.cycleDuration / 1000}s`}
          icon={Clock}
          status="info"
        />
        <StatusCard
          title="Emergency Duration"
          value={`${settings.emergencyDuration / 1000}s`}
          icon={Clock}
          status="warning"
        />
      </div>

      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gray-700/20 -m-4 rounded-xl backdrop-blur-sm" />
        <Intersection data={intersection} />
        {emergencyVehicle && <EmergencyVehicleComponent position={emergencyVehicle} />}
      </div>

      <div className="w-full max-w-4xl space-y-6">
        <h3 className="text-xl font-semibold text-white mb-4">Available Emergency Vehicles</h3>
        <VehicleSelector
          vehicles={emergencyVehicles}
          onSelect={triggerEmergency}
          selectedId={selectedVehicle?.id}
        />
        
        {selectedVehicle && (
          <div className="mt-6">
            <VehicleDetails vehicle={selectedVehicle} />
          </div>
        )}
      </div>
    </div>
  );
}