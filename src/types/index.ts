export type TrafficLightState = 'red' | 'yellow' | 'green';

export type VehicleType = 'ambulance' | 'fire_truck' | 'police_car';

export type VehicleSeries = {
  id: string;
  name: string;
  year: number;
  features: string[];
};

export type EmergencyVehicle = {
  id: string;
  type: VehicleType;
  series: VehicleSeries;
  company: EmergencyServiceCompany;
  callSign: string;
};

export type EmergencyServiceCompany = {
  id: string;
  name: string;
  type: 'hospital' | 'fire_department' | 'police_department';
  fleet: number;
  foundedYear: number;
  headquarters: string;
};

export type Intersection = {
  id: string;
  northSouth: TrafficLightState;
  eastWest: TrafficLightState;
  hasEmergencyVehicle: boolean;
};

export type Position = {
  x: number;
  y: number;
};

export type EmergencyEvent = {
  timestamp: Date;
  duration: number;
  vehicle: EmergencyVehicle;
};