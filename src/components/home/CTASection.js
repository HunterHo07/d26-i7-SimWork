'use client';

import Button from '../ui/Button';
import AuroraBackground from '../animations/AuroraBackground';

export default function CTASection() {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      <AuroraBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/80 dark:bg-dark-300/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Skills?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the future of work simulation today. Try our interactive demo and see how SimWork can revolutionize your training and hiring processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/demo" size="lg">
              Try Demo
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
