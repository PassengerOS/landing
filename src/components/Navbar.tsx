'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10">
            <Image 
              src="/passengeros-logo.png" 
              alt="PassengerOS Logo" 
              width={40} 
              height={40}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span className="text-2xl font-bold text-white">PassengerOS</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-[#8b5cf6] font-medium transition-colors duration-300">
            Home
          </Link>
          <Link href="/features" className="text-[#a1a1aa] hover:text-white font-medium transition-colors duration-300">
            Features
          </Link>
          <Link href="/pricing" className="text-[#a1a1aa] hover:text-white font-medium transition-colors duration-300">
            Pricing
          </Link>
          <Link href="/about" className="text-[#a1a1aa] hover:text-white font-medium transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="text-[#a1a1aa] hover:text-white font-medium transition-colors duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;