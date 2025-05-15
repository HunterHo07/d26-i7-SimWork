'use client';

import AppLink from '@/components/ui/AppLink';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/Button';
import AuroraBackground from '@/components/animations/AuroraBackground';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="relative min-h-[80vh] flex items-center justify-center pt-20">
        <AuroraBackground />

        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-transparent bg-clip-text">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={process.env.NODE_ENV === 'production' ? '/d26-i7-SimWork' : '/'} size="lg">
              Return Home
            </Button>
            <Button href={process.env.NODE_ENV === 'production' ? '/d26-i7-SimWork/demo' : '/demo'} variant="outline" size="lg">
              Try Demo
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
