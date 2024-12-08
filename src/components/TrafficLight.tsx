import React from 'react';
import { TrafficLightState } from '../types';

type TrafficLightProps = {
  state: TrafficLightState;
  direction: 'vertical' | 'horizontal';
};

export function TrafficLight({ state, direction }: TrafficLightProps) {
  const containerClass = `flex ${direction === 'vertical' ? 'flex-col' : 'flex-row'} gap-2 p-3 
    bg-gray-800/90 rounded-lg shadow-xl backdrop-blur-sm border border-gray-700`;
  
  const getLightClass = (color: TrafficLightState, current: TrafficLightState) => {
    const baseClass = 'w-8 h-8 rounded-full transition-all duration-300 shadow-inner';
    const colorMap = {
      red: current === color ? 'bg-red-500 shadow-red-500/50' : 'bg-red-950/50',
      yellow: current === color ? 'bg-yellow-400 shadow-yellow-400/50' : 'bg-yellow-950/50',
      green: current === color ? 'bg-green-500 shadow-green-500/50' : 'bg-green-950/50'
    };
    
    return `${baseClass} ${colorMap[color]} ${color === current ? 'scale-110 animate-pulse' : 'scale-90'}`;
  };

  return (
    <div className={containerClass}>
      <div className={getLightClass('red', state)} />
      <div className={getLightClass('yellow', state)} />
      <div className={getLightClass('green', state)} />
    </div>
  );
}