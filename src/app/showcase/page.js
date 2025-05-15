'use client';

import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import AuroraBackground from '@/components/animations/AuroraBackground';
import { getImagePath } from '@/lib/utils';

export default function ShowcasePage() {
  const showcaseItems = [
    {
      title: "Developer Station",
      description: "Code in real terminals, solve programming challenges, and build your technical skills.",
      image: getImagePath("/images/developer.jpg"),
    },
    {
      title: "Designer Station",
      description: "Create and submit designs for AI evaluation, develop your visual communication abilities.",
      image: getImagePath("/images/designer.jpg"),
    },
    {
      title: "Project Manager Dashboard",
      description: "Coordinate tasks, manage resources, and make strategic decisions.",
      image: getImagePath("/images/workspace.jpg"),
    },
    {
      title: "Data Entry Station",
      description: "Practice accuracy and efficiency in data processing with real-time feedback.",
      image: getImagePath("/images/workspace.jpg"),
    },
    {
      title: "AI Engineer Station",
      description: "Craft prompts and optimize AI workflows to solve complex problems.",
      image: getImagePath("/images/developer.jpg"),
    },
    {
      title: "Analytics Dashboard",
      description: "Track your progress and performance metrics across all skill areas.",
      image: getImagePath("/images/designer.jpg"),
    },
  ];

  return (
    <MainLayout>
      <div className="relative pt-20">
        <AuroraBackground />

        <Section className="relative z-10">
          <SectionHeading
            title="SimWork Showcase"
            subtitle="Explore the features and capabilities of our immersive work simulation platform"
            centered
          />

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {showcaseItems.map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  imageAlt={item.title}
                />
              ))}
            </div>

            <div className="mt-16 bg-white dark:bg-dark-300 rounded-xl overflow-hidden shadow-xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Feature Highlights</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Immersive Environment</h4>
                        <p className="text-gray-600 dark:text-gray-400">Navigate a stylized 2.5D workspace with different role stations and interactive elements.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Real Tool Integration</h4>
                        <p className="text-gray-600 dark:text-gray-400">Use actual terminals, design interfaces, and data entry forms that mirror professional tools.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">AI-Powered Adaptivity</h4>
                        <p className="text-gray-600 dark:text-gray-400">Tasks automatically adjust in difficulty based on your performance and learning curve.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Real-Time Analytics</h4>
                        <p className="text-gray-600 dark:text-gray-400">Track accuracy, speed, and decision quality with detailed performance metrics.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Multi-Role Support</h4>
                        <p className="text-gray-600 dark:text-gray-400">Choose from Developer, Designer, PM, Data Entry, or AI Engineer roles to match your career goals.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Customizable Challenges</h4>
                        <p className="text-gray-600 dark:text-gray-400">Procedurally generated tasks ensure variety and relevance to your specific skill development needs.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <Button href="/demo" size="lg">Experience the Demo</Button>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </MainLayout>
  );
}
