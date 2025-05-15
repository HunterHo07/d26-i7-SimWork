'use client';

import { useState } from 'react';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "SimWork has completely transformed how we assess candidates. We can now see their actual skills in action before making hiring decisions.",
      author: "Sarah Johnson",
      title: "HR Director, TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      quote: "As someone transitioning careers, SimWork gave me the practical experience I needed to demonstrate my skills to potential employers.",
      author: "Michael Chen",
      title: "Software Developer",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      quote: "The immersive environment makes learning engaging and effective. Our training completion rates have increased by 78% since implementing SimWork.",
      author: "Emily Rodriguez",
      title: "Learning & Development Manager, Global Finance",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section>
      <SectionHeading
        title="What People Are Saying"
        subtitle="Hear from our users about how SimWork has transformed their training and hiring processes"
        centered
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white dark:bg-dark-200 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM20.5 44.5C17.467 44.5 15 42.033 15 39C15 35.967 17.467 33.5 20.5 33.5C23.533 33.5 26 35.967 26 39C26 42.033 23.533 44.5 20.5 44.5ZM43.5 44.5C40.467 44.5 38 42.033 38 39C38 35.967 40.467 33.5 43.5 33.5C46.533 33.5 49 35.967 49 39C49 42.033 46.533 44.5 43.5 44.5Z" fill="url(#paint0_linear)" fillOpacity="0.1"/>
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6D28D9"/>
                  <stop offset="1" stopColor="#10B981"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-10">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-8">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {testimonials[activeIndex].author}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonials[activeIndex].title}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 flex space-x-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-dark-300 hover:bg-gray-200 dark:hover:bg-dark-400 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-dark-300 hover:bg-gray-200 dark:hover:bg-dark-400 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-primary-500 w-6'
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
