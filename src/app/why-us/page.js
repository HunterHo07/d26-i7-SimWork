'use client';

import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import AuroraBackground from '@/components/animations/AuroraBackground';

export default function WhyUsPage() {
  const reasons = [
    {
      title: "Immersive Learning Environment",
      description: "Our platform creates a game-like experience that keeps users engaged and motivated, resulting in better skill retention and application.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: "Real Tool Integration",
      description: "Unlike simplified simulations, SimWork embeds actual work tools like terminals, design interfaces, and data entry forms that mirror professional environments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "AI-Powered Adaptivity",
      description: "Our platform uses AI to dynamically adjust task difficulty based on user performance, ensuring an optimal learning curve for each individual.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Comprehensive Analytics",
      description: "Detailed performance metrics provide insights into strengths, weaknesses, and progress over time, enabling targeted improvement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Multi-Role Support",
      description: "SimWork supports various professional roles, allowing users to develop cross-functional skills or specialize in their area of interest.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Cost-Effective Solution",
      description: "Reduce training costs and hiring mistakes with our scalable platform that requires no specialized hardware or extensive setup.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <MainLayout>
      <div className="relative pt-20">
        <AuroraBackground />

        <Section className="relative z-10">
          <SectionHeading
            title="Why Choose SimWork"
            subtitle="Discover what sets our platform apart from traditional training and assessment methods"
            centered
          />

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-dark-300 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{reason.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-white dark:bg-dark-300 rounded-xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    SimWork combines the engagement of gaming with the practicality of on-the-job training and the rigor of technical assessment. This unique intersection creates a category-defining product with no direct equivalent in the current market.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Learn by doing in a risk-free environment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Receive immediate feedback on performance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Track progress with detailed analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Develop practical, job-ready skills</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Button href="/demo">Try the Demo</Button>
                  </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="/images/workspace.jpg"
                    alt="SimWork Workspace"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </MainLayout>
  );
}
