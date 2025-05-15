'use client';

import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import AuroraBackground from '@/components/animations/AuroraBackground';

export default function PitchDeckPage() {
  return (
    <MainLayout>
      <div className="relative pt-20">
        <AuroraBackground />
        
        <Section className="relative z-10">
          <SectionHeading
            title="SimWork Pitch Deck"
            subtitle="Our vision for revolutionizing skill development and assessment"
            centered
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-300 rounded-xl overflow-hidden shadow-xl">
              {/* Slide 1: Title */}
              <div className="p-8 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">SimWork</h2>
                <p className="text-xl">The Future of Work Simulation</p>
              </div>
              
              {/* Slide 2: Problem */}
              <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-2xl font-bold">✗</span>
                    <div>
                      <p className="font-semibold">Wrong Hires, Wasted Money</p>
                      <p className="text-gray-600 dark:text-gray-400">Companies keep hiring the wrong people—time, salary, and training costs wasted.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-2xl font-bold">✗</span>
                    <div>
                      <p className="font-semibold">Fake Skills, No Real Test</p>
                      <p className="text-gray-600 dark:text-gray-400">Many hires pass interviews but fail on the job. There's no hands-on task or live environment to prove they can actually do the daily work.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 text-2xl font-bold">✗</span>
                    <div>
                      <p className="font-semibold">Slow, Inefficient Hiring Process</p>
                      <p className="text-gray-600 dark:text-gray-400">Too many rounds, test sheets, and guesswork. No live data, no real output.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Slide 3: Solution */}
              <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-2xl font-bold">✓</span>
                    <div>
                      <p className="font-semibold">Immersive, Multi-Role Game World</p>
                      <p className="text-gray-600 dark:text-gray-400">SimWork places users in a 2.5D office with stations for Developer, Designer, PM, Data Entry, and AI Engineer roles.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-2xl font-bold">✓</span>
                    <div>
                      <p className="font-semibold">AI-Powered Adaptivity & Agents</p>
                      <p className="text-gray-600 dark:text-gray-400">Integrated AI agents guide scenarios and dynamically adjust task complexity.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-2xl font-bold">✓</span>
                    <div>
                      <p className="font-semibold">Real-Time Analytics & Feedback</p>
                      <p className="text-gray-600 dark:text-gray-400">A dashboard tracks KPIs (accuracy, speed, decision quality) and generates personalized feedback.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slide 4: Market */}
              <div className="p-8 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Market Opportunity</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-dark-400 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Global Corporate Training</p>
                    <p className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">$370B</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Growing at 8% CAGR</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-dark-400 p-4 rounded-lg">
                    <p className="font-semibold mb-2">E-learning Market</p>
                    <p className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">$250B</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Growing at 21% CAGR</p>
                  </div>
                </div>
              </div>
              
              {/* Slide 5: Call to Action */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Join the Future of Work</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  Experience SimWork today and see how it can transform your hiring and training processes.
                </p>
                <Button href="/demo" size="lg">Try the Demo</Button>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </MainLayout>
  );
}
