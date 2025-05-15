'use client';

import Image from 'next/image';
import Button from '../ui/Button';
import AuroraBackground from '../animations/AuroraBackground';
import ParticleField from '../animations/ParticleField';
import GradientText from '../animations/GradientText';
import { getImagePath } from '@/lib/utils';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <AuroraBackground />
      <ParticleField />

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Future of <GradientText>Work Simulation</GradientText>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              SimWork is an AI-driven immersive platform that revolutionizes how people learn, practice, and demonstrate professional skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="/demo" size="lg">
                Try Demo
              </Button>
              <Button href="/why-us" variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl blur-xl animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full p-4">
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl">
                    <Image
                      src={getImagePath('/images/workspace.jpg')}
                      alt="SimWork Workspace"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                        <h3 className="text-white text-lg font-semibold mb-2">Developer Station</h3>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                          <p className="text-white/80 text-sm">Live Coding Challenge</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500/10 backdrop-blur-sm rounded-lg border border-accent-500/20 shadow-lg animate-float">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-20 bg-primary-500/10 backdrop-blur-sm rounded-lg border border-primary-500/20 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 w-3/4 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
