'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false); // Close mobile menu
    }
  };

  return (
    <header className="relative bg-peach-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* LEFT: Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/vfilms-logo.svg"
              alt="V Films Logo"
              width={140}
              height={60}
              className="h-10 w-auto md:h-12"
            />
          </div>

          {/* CENTER: Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-gray-700 font-medium">
            <button onClick={() => scrollToSection('services')} className="px-2 lg:px-3 py-1 hover:text-orange-600 transition">
              Services
            </button>
            <button onClick={() => scrollToSection('team-portfolio')} className="px-2 lg:px-3 py-1 hover:text-orange-600 transition">
              Their Stories
            </button>
            <button onClick={() => scrollToSection('about-us')} className="px-2 lg:px-3 py-1 hover:text-orange-600 transition">
              Our Story
            </button>
            <button onClick={() => scrollToSection('highlight-reel')} className="px-2 lg:px-3 py-1 hover:text-orange-600 transition">
              Varnan
            </button>
          </nav>

          {/* RIGHT: Let’s Talk Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-700 transition shadow-sm"
            >
              Let’s Talk
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          {/* MOBILE: Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
          >
            <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 space-y-2 text-center">
            <button onClick={() => scrollToSection('services')} className="block py-2 text-gray-700 hover:text-orange-600 w-full">
              Services
            </button>
            <button onClick={() => scrollToSection('team-portfolio')} className="block py-2 text-gray-700 hover:text-orange-600 w-full">
              Their Stories
            </button>
            <button onClick={() => scrollToSection('about-us')} className="block py-2 text-gray-700 hover:text-orange-600 w-full">
              Our Story
            </button>
            <button onClick={() => scrollToSection('highlight-reel')} className="block py-2 text-gray-700 hover:text-orange-600 w-full">
              Varnan
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-2 rounded-full font-medium mt-2"
            >
              Let’s Talk
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}