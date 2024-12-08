import React from 'react';

type SirenLightProps = {
  active: boolean;
};

export function SirenLight({ active }: SirenLightProps) {
  if (!active) return null;
  
  return (
    <div className="relative">
      <div className="absolute -inset-2">
        <div className="w-16 h-16 rotate-45 bg-red-600/20 rounded-full animate-ping" />
      </div>
      <div className="w-12 h-12 rotate-45 bg-red-600 rounded-full animate-pulse" />
    </div>
  );
}