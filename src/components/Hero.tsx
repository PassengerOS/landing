'use client';

import React from 'react';
import PlasmaWaveV2 from './PlasmaWaveV2';
import Link from 'next/link';

const Hero = () => {
  console.log('Hero component rendering'); // Debug log
  
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] overflow-hidden pt-24">
      <PlasmaWaveV2 />
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px] floating-animation"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[120px] floating-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full filter blur-[100px] floating-animation" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold leading-tight tracking-tighter">
                <span className="text-white">Driver-first in-car</span>
                <br />
                <span className="gradient-text">operating system</span>
              </h1>
              
              <p className="md:text-xl text-[#a1a1aa] leading-relaxed max-w-2xl">
                Streamline your gig work, optimize routes, and automate daily workflows with our comprehensive platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/features" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:opacity-90 hover:scale-105 w-fit"
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="/about" 
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:bg-white/5 hover:border-white/40 w-fit"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Card 1 */}
                <div className="glass-effect p-4 md:p-6 rounded-xl card-hover">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-[#a1a1aa] text-xs md:text-sm">Integrations</div>
                </div>

                {/* Card 2 */}
                <div className="glass-effect p-4 md:p-6 rounded-xl card-hover">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">10x</div>
                  <div className="text-[#a1a1aa] text-xs md:text-sm">Productivity</div>
                </div>

                {/* Card 3 */}
                <div className="glass-effect p-4 md:p-6 rounded-xl card-hover">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-[#a1a1aa] text-xs md:text-sm">Support</div>
                </div>

                {/* Card 4 */}
                <div className="glass-effect p-4 md:p-6 rounded-xl card-hover">
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">99%</div>
                  <div className="text-[#a1a1aa] text-xs md:text-sm">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
