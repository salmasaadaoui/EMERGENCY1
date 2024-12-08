import React from 'react';
import { TrafficLight } from './TrafficLight';
import { Intersection as IntersectionType } from '../types';

type IntersectionProps = {
  data: IntersectionType;
};

export function Intersection({ data }: IntersectionProps) {
  return (
    <div className="relative w-48 h-48">
      <div className="absolute inset-0 bg-gray-600">
        <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-gray-400 -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 right-0 h-8 bg-gray-400 -translate-y-1/2" />
      </div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">
        <TrafficLight state={data.northSouth} direction="vertical" />
      </div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
        <TrafficLight state={data.northSouth} direction="vertical" />
      </div>
      
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
        <TrafficLight state={data.eastWest} direction="horizontal" />
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
        <TrafficLight state={data.eastWest} direction="horizontal" />
      </div>
      
      {data.hasEmergencyVehicle && (
        <div className="absolute inset-0 ring-4 ring-red-500 ring-opacity-50 animate-pulse" />
      )}
    </div>
  );
}