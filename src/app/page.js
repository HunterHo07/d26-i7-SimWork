'use client';

import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/home/HeroSection';
import ThreeStepSection from '@/components/home/ThreeStepSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <ThreeStepSection />
      <FeaturesSection />
      <ComparisonSection />
      <TestimonialSection />
      <CTASection />
    </MainLayout>
  );
}
