import { useState, useEffect } from 'react';
import { Intersection, Position } from '../types';

const CYCLE_DURATION = 5000; // 5 seconds per cycle
const EMERGENCY_DURATION = 10000; // 10 seconds of emergency mode

export function useTrafficSystem() {
  const [intersection, setIntersection] = useState<Intersection>({
    id: 'main',
    northSouth: 'red',
    eastWest: 'green',
    hasEmergencyVehicle: false
  });

  const [emergencyVehicle, setEmergencyVehicle] = useState<Position | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (intersection.hasEmergencyVehicle) {
      // Emergency mode: Keep the emergency vehicle's direction green
      setIntersection(prev => ({
        ...prev,
        northSouth: 'green',
        eastWest: 'red'
      }));

      timer = setTimeout(() => {
        setIntersection(prev => ({
          ...prev,
          hasEmergencyVehicle: false
        }));
        setEmergencyVehicle(null);
      }, EMERGENCY_DURATION);
    } else {
      // Normal cycle
      timer = setTimeout(() => {
        setIntersection(prev => ({
          ...prev,
          northSouth: prev.northSouth === 'red' ? 'green' : 'red',
          eastWest: prev.eastWest === 'red' ? 'green' : 'red'
        }));
      }, CYCLE_DURATION);
    }

    return () => clearTimeout(timer);
  }, [intersection.hasEmergencyVehicle, intersection.northSouth]);

  const triggerEmergency = () => {
    if (!intersection.hasEmergencyVehicle) {
      setIntersection(prev => ({
        ...prev,
        hasEmergencyVehicle: true
      }));
      setEmergencyVehicle({ x: 50, y: 100 });
    }
  };

  return {
    intersection,
    emergencyVehicle,
    triggerEmergency
  };
}