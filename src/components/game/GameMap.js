'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function GameMap({ onStationSelect }) {
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });
  const [activeStation, setActiveStation] = useState(null);
  const mapRef = useRef(null);

  const stations = [
    {
      id: 'developer',
      name: 'Developer Station',
      description: 'Code in real terminals, solve programming challenges',
      position: { x: 25, y: 30 },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 'designer',
      name: 'Designer Station',
      description: 'Create and submit designs for AI evaluation',
      position: { x: 75, y: 30 },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'pm',
      name: 'Project Manager Station',
      description: 'Coordinate tasks and manage resources',
      position: { x: 50, y: 70 },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      id: 'data',
      name: 'Data Entry Station',
      description: 'Practice accuracy and efficiency in data processing',
      position: { x: 25, y: 70 },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'ai',
      name: 'AI Engineer Station',
      description: 'Craft prompts and optimize AI workflows',
      position: { x: 75, y: 70 },
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const speed = 5;
      let newPosition = { ...playerPosition };

      switch (e.key) {
        case 'ArrowUp':
          newPosition.y = Math.max(10, playerPosition.y - speed);
          break;
        case 'ArrowDown':
          newPosition.y = Math.min(90, playerPosition.y + speed);
          break;
        case 'ArrowLeft':
          newPosition.x = Math.max(10, playerPosition.x - speed);
          break;
        case 'ArrowRight':
          newPosition.x = Math.min(90, playerPosition.x + speed);
          break;
        case 'Enter':
          if (activeStation) {
            onStationSelect(activeStation);
          }
          break;
        default:
          return;
      }

      setPlayerPosition(newPosition);

      // Check if player is near a station
      const nearbyStation = stations.find(station => {
        const distance = Math.sqrt(
          Math.pow(newPosition.x - station.position.x, 2) +
          Math.pow(newPosition.y - station.position.y, 2)
        );
        return distance < 15;
      });

      setActiveStation(nearbyStation || null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playerPosition, activeStation, onStationSelect]);

  const handleStationClick = (station) => {
    setPlayerPosition(station.position);
    setActiveStation(station);
    onStationSelect(station);
  };

  return (
    <div className="relative w-full h-[600px] bg-gray-100 dark:bg-dark-300 rounded-xl overflow-hidden shadow-xl" ref={mapRef}>
      {/* Map Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10"></div>
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
          {Array.from({ length: 100 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-200/20 dark:border-gray-700/20"
            />
          ))}
        </div>
      </div>

      {/* Stations */}
      {stations.map(station => (
        <button
          key={station.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
            activeStation?.id === station.id
              ? 'bg-primary-500 text-white scale-110 shadow-lg shadow-primary-500/30'
              : 'bg-white dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:scale-105 hover:shadow-md'
          }`}
          style={{ left: `${station.position.x}%`, top: `${station.position.y}%` }}
          onClick={() => handleStationClick(station)}
        >
          {station.icon}
        </button>
      ))}

      {/* Player */}
      <div
        className="absolute w-10 h-10 bg-accent-500 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white border-2 border-white z-10 animate-pulse-slow"
        style={{ left: `${playerPosition.x}%`, top: `${playerPosition.y}%` }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>

      {/* Station Info */}
      {activeStation && (
        <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-1">{activeStation.name}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">{activeStation.description}</p>
          <button
            className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
            onClick={() => onStationSelect(activeStation)}
          >
            Enter Station
          </button>
        </div>
      )}

      {/* Controls Help */}
      <div className="absolute top-4 right-4 bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <div className="font-medium mb-1">Controls:</div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <span>Arrow Keys</span>
            <span>Move</span>
            <span>Enter</span>
            <span>Select Station</span>
          </div>
        </div>
      </div>
    </div>
  );
}
