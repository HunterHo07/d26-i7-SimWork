'use client';

import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';

export default function Custom404() {
  const router = useRouter();

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg mb-8 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => router.push('/')}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Go to Homepage
        </button>
      </div>
    </MainLayout>
  );
}
