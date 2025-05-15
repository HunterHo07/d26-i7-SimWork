'use client';

import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import AuroraBackground from '@/components/animations/AuroraBackground';

export default function RoadmapPage() {
  const phases = [
    {
      title: "Phase 1: Web-Based 2.5D Simulation",
      timeline: "Current",
      features: [
        "Interactive 2.5D office environment",
        "Multiple role stations (Developer, Designer, PM, Data Entry, AI Engineer)",
        "Basic task generation system",
        "Performance tracking and analytics",
        "Embedded tools (terminal, design canvas, forms)",
      ],
      status: "active",
    },
    {
      title: "Phase 2: Enhanced Platform",
      timeline: "Q3 2023",
      features: [
        "Desktop and mobile applications",
        "Expanded role scenarios and challenges",
        "Advanced AI-driven task adaptation",
        "Comprehensive skill assessment reports",
        "User profiles and achievement system",
      ],
      status: "upcoming",
    },
    {
      title: "Phase 3: Enterprise & VR Integration",
      timeline: "Q1 2024",
      features: [
        "VR/AR immersive experiences",
        "Multiplayer collaboration features",
        "Enterprise integration modules",
        "Custom scenario builder",
        "API for third-party integrations",
      ],
      status: "planned",
    },
  ];

  const milestones = [
    {
      date: "May 2023",
      title: "MVP Launch",
      description: "Initial release of the web-based simulation platform with core features.",
    },
    {
      date: "July 2023",
      title: "Analytics Dashboard",
      description: "Comprehensive performance tracking and skill development visualization.",
    },
    {
      date: "September 2023",
      title: "Mobile App Beta",
      description: "First release of the mobile application for on-the-go skill development.",
    },
    {
      date: "November 2023",
      title: "AI Enhancement",
      description: "Advanced AI-driven task generation and adaptive difficulty system.",
    },
    {
      date: "January 2024",
      title: "VR Module Beta",
      description: "First immersive VR experience for selected role simulations.",
    },
    {
      date: "March 2024",
      title: "Enterprise Platform",
      description: "Full-featured enterprise solution with team management and custom scenarios.",
    },
  ];

  return (
    <MainLayout>
      <div className="relative pt-20">
        <AuroraBackground />
        
        <Section className="relative z-10">
          <SectionHeading
            title="SimWork Development Roadmap"
            subtitle="Our vision and timeline for evolving the SimWork platform"
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div 
                  key={index}
                  className={`bg-white dark:bg-dark-300 rounded-xl overflow-hidden shadow-lg border-l-4 ${
                    phase.status === 'active' 
                      ? 'border-primary-500' 
                      : phase.status === 'upcoming'
                        ? 'border-secondary-500'
                        : 'border-gray-300 dark:border-gray-700'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                      <div className={`mt-2 md:mt-0 px-3 py-1 rounded-full text-sm font-medium ${
                        phase.status === 'active' 
                          ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300' 
                          : phase.status === 'upcoming'
                            ? 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300'
                      }`}>
                        {phase.timeline}
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {phase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 mt-0.5 ${
                            phase.status === 'active' 
                              ? 'text-primary-500' 
                              : phase.status === 'upcoming'
                                ? 'text-secondary-500'
                                : 'text-gray-400'
                          }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Key Milestones</h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:translate-x-px"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      {/* Timeline Dot */}
                      <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-dark-300 transform -translate-x-1/2 md:-translate-x-2.5"></div>
                      
                      {/* Date - Mobile Only */}
                      <div className="md:hidden pl-8 text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {milestone.date}
                      </div>
                      
                      {/* Content */}
                      <div className="md:w-1/2 pl-8 md:pl-0 md:px-6">
                        {/* Date - Desktop */}
                        <div className="hidden md:block text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">
                          {milestone.date}
                        </div>
                        <div className="bg-white dark:bg-dark-300 rounded-lg p-4 shadow-md">
                          <h4 className="text-lg font-semibold mb-2">{milestone.title}</h4>
                          <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                        </div>
                      </div>
                      
                      {/* Empty Space for Alignment */}
                      <div className="hidden md:block md:w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Our roadmap is continuously evolving based on user feedback and technological advancements. Stay tuned for updates!
              </p>
              <Button href="/demo" size="lg">Try the Current Version</Button>
            </div>
          </div>
        </Section>
      </div>
    </MainLayout>
  );
}
