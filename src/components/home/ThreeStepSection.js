'use client';

import { useState } from 'react';
import Image from 'next/image';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

export default function ThreeStepSection() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Choose Your Role',
      description: 'Select from Developer, Designer, PM, Data Entry, or AI Engineer roles to match your career goals.',
      image: '/images/developer.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Complete Challenges',
      description: 'Tackle real-world tasks in an immersive environment with adaptive difficulty levels.',
      image: getImagePath('/images/workspace.jpg'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Track Progress',
      description: 'Review your performance metrics and skill development with detailed analytics.',
      image: getImagePath('/images/designer.jpg'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  const activeStepData = steps.find(step => step.id === activeStep);

  return (
    <Section bgColor="bg-gray-50 dark:bg-dark-300">
      <SectionHeading
        title="How SimWork Works"
        subtitle="Our platform makes skill development and assessment intuitive and engaging"
        centered
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-xl overflow-hidden aspect-video shadow-xl">
            <Image
              src={activeStepData.image}
              alt={activeStepData.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-semibold mb-2">{activeStepData.title}</h3>
              <p className="text-white/80">{activeStepData.description}</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="space-y-6">
            {steps.map(step => (
              <StepItem
                key={step.id}
                step={step}
                isActive={step.id === activeStep}
                onClick={() => setActiveStep(step.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function StepItem({ step, isActive, onClick }) {
  return (
    <div
      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
        isActive
          ? 'bg-white dark:bg-dark-200 shadow-lg border-l-4 border-primary-500'
          : 'bg-gray-100 dark:bg-dark-400 hover:bg-gray-200 dark:hover:bg-dark-300'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
          isActive ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300' : 'bg-gray-200 dark:bg-dark-500 text-gray-600 dark:text-gray-400'
        }`}>
          {step.icon}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'}`}>
              Step {step.id}
            </span>
            <h3 className="text-xl font-semibold">{step.title}</h3>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{step.description}</p>
        </div>
      </div>
    </div>
  );
}
