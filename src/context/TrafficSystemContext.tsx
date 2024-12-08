import React, { createContext, useContext, useState, useEffect } from 'react';
import { Intersection, Position, EmergencyEvent, EmergencyVehicle } from '../types';
import { useTrafficSystem } from '../hooks/useTrafficSystem';
import { emergencyVehicles } from '../data/emergencyServices';

type TrafficSystemContextType = {
  intersection: Intersection;
  emergencyVehicle: Position | null;
  triggerEmergency: (vehicle: EmergencyVehicle) => void;
  emergencyEvents: EmergencyEvent[];
  settings: {
    cycleDuration: number;
    emergencyDuration: number;
  };
  updateSettings: (settings: { cycleDuration: number; emergencyDuration: number }) => void;
  selectedVehicle?: EmergencyVehicle;
};

const TrafficSystemContext = createContext<TrafficSystemContextType | undefined>(undefined);

export function TrafficSystemProvider({ children }: { children: React.ReactNode }) {
  const { intersection, emergencyVehicle, triggerEmergency: triggerEmergencyBase } = useTrafficSystem();
  const [emergencyEvents, setEmergencyEvents] = useState<EmergencyEvent[]>([]);
  const [selectedVehicle, setSelectedVehicle] = useState<EmergencyVehicle>();
  const [settings, setSettings] = useState({
    cycleDuration: 5000,
    emergencyDuration: 10000
  });

  const triggerEmergency = (vehicle: EmergencyVehicle) => {
    setSelectedVehicle(vehicle);
    triggerEmergencyBase();
  };

  useEffect(() => {
    if (intersection.hasEmergencyVehicle && selectedVehicle) {
      setEmergencyEvents(prev => [...prev, {
        timestamp: new Date(),
        duration: settings.emergencyDuration,
        vehicle: selectedVehicle
      }]);
    }
  }, [intersection.hasEmergencyVehicle, selectedVehicle]);

  const updateSettings = (newSettings: { cycleDuration: number; emergencyDuration: number }) => {
    setSettings(newSettings);
  };

  return (
    <TrafficSystemContext.Provider value={{
      intersection,
      emergencyVehicle,
      triggerEmergency,
      emergencyEvents,
      settings,
      updateSettings,
      selectedVehicle
    }}>
      {children}
    </TrafficSystemContext.Provider>
  );
}

export function useTrafficSystemContext() {
  const context = useContext(TrafficSystemContext);
  if (context === undefined) {
    throw new Error('useTrafficSystemContext must be used within a TrafficSystemProvider');
  }
  return context;
}