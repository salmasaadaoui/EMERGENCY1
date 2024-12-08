import { EmergencyServiceCompany, VehicleSeries, EmergencyVehicle } from '../types';

export const companies: EmergencyServiceCompany[] = [
  {
    id: 'mercy_general',
    name: 'Mercy General Hospital',
    type: 'hospital',
    fleet: 25,
    foundedYear: 1945,
    headquarters: 'Downtown Medical District'
  },
  {
    id: 'central_fire',
    name: 'Central Fire Department',
    type: 'fire_department',
    fleet: 15,
    foundedYear: 1920,
    headquarters: 'Central Station Plaza'
  },
  {
    id: 'metro_police',
    name: 'Metropolitan Police Department',
    type: 'police_department',
    fleet: 50,
    foundedYear: 1890,
    headquarters: 'City Center'
  }
];

export const vehicleSeries: VehicleSeries[] = [
  {
    id: 'ford_f450_ambulance',
    name: 'Ford F-450 Super Duty Ambulance',
    year: 2024,
    features: ['Advanced Life Support', 'GPS Navigation', 'Climate Control']
  },
  {
    id: 'pierce_velocity_pumper',
    name: 'Pierce Velocity Pumper',
    year: 2023,
    features: ['1500 GPM Pump', 'Foam System', 'LED Scene Lighting']
  },
  {
    id: 'dodge_charger_pursuit',
    name: 'Dodge Charger Pursuit',
    year: 2024,
    features: ['All-Wheel Drive', 'Police Package', 'Emergency Lighting']
  }
];

export const emergencyVehicles: EmergencyVehicle[] = [
  {
    id: 'amb_1',
    type: 'ambulance',
    series: vehicleSeries[0],
    company: companies[0],
    callSign: 'MEDIC-1'
  },
  {
    id: 'fire_1',
    type: 'fire_truck',
    series: vehicleSeries[1],
    company: companies[1],
    callSign: 'ENGINE-1'
  },
  {
    id: 'police_1',
    type: 'police_car',
    series: vehicleSeries[2],
    company: companies[2],
    callSign: 'UNIT-101'
  }
];