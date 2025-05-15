'use client';

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import GameMap from '@/components/game/GameMap';
import StationView from '@/components/game/StationView';
import AuroraBackground from '@/components/animations/AuroraBackground';

export default function DemoPage() {
  const [selectedStation, setSelectedStation] = useState(null);

  const handleStationSelect = (station) => {
    setSelectedStation(station);
  };

  const handleBackToMap = () => {
    setSelectedStation(null);
  };

  return (
    <MainLayout>
      <div className="relative pt-20">
        <AuroraBackground />

        <Section className="relative z-10">
          <SectionHeading
            title="SimWork Interactive Demo"
            subtitle="Experience our immersive work simulation platform. Navigate the workspace, visit different stations, and complete tasks to develop your skills."
            centered
          />

          <div className="max-w-5xl mx-auto">
            {selectedStation ? (
              <StationView
                station={selectedStation}
                onBack={handleBackToMap}
              />
            ) : (
              <div>
                <div className="bg-white dark:bg-dark-300 rounded-xl p-6 mb-8 shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Welcome to the SimWork Demo</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    This interactive demo showcases how SimWork creates an immersive environment for skill development and assessment. Use the arrow keys to navigate the workspace and visit different role stations.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="font-medium text-yellow-800 dark:text-yellow-300 mb-1">Demo Instructions</h4>
                        <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1 list-disc list-inside">
                          <li>Use <strong>arrow keys</strong> to move around the map</li>
                          <li>Approach a station to see its details</li>
                          <li>Press <strong>Enter</strong> or click <strong>Enter Station</strong> to interact with a station</li>
                          <li>Complete tasks to track your progress</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <GameMap onStationSelect={handleStationSelect} />

                <div className="mt-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    Note: This is a simplified demo of the SimWork platform. The full version includes more detailed tasks, real-time analytics, and advanced simulation features.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Section>
      </div>
    </MainLayout>
  );
}
