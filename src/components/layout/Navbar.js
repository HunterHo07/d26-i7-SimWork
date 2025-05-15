'use client';

import { useState, useEffect } from 'react';
import AppLink from '@/components/ui/AppLink';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-dark-300/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo className="h-10 w-auto" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/" label="Home" />
          <NavLink href="/demo" label="Demo" />
          <NavLink href="/pitch-deck" label="Pitch Deck" />
          <NavLink href="/why-us" label="Why Us" />
          <NavLink href="/showcase" label="Showcase" />
          <NavLink href="/roadmap" label="Roadmap" />
          <button className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
            Try Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-300 shadow-lg">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <MobileNavLink href="/" label="Home" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/demo" label="Demo" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/pitch-deck" label="Pitch Deck" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/why-us" label="Why Us" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/showcase" label="Showcase" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink href="/roadmap" label="Roadmap" onClick={() => setIsMobileMenuOpen(false)} />
            <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-medium py-2 px-4 rounded-full transition-all duration-300">
              Try Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, label }) {
  return (
    <AppLink
      href={href}
      className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-300"
    >
      {label}
    </AppLink>
  );
}

function MobileNavLink({ href, label, onClick }) {
  return (
    <AppLink
      href={href}
      className="block text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-2 transition-colors duration-300"
      onClick={onClick}
    >
      {label}
    </AppLink>
  );
}
