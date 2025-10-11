import React from 'react';
import { Phone, Linkedin, Youtube, Instagram, Mail, ArrowUp, MapPin, Calendar, Award } from 'lucide-react';

const Footer = () => {
  const studentCoordinators = [
    { name: 'Rajesh Kumar', phone: '+91 98765 43210' },
    { name: 'Priya Sharma', phone: '+91 98765 43211' },
    { name: 'Amit Patel', phone: '+91 98765 43212' },
    { name: 'Sneha Reddy', phone: '+91 98765 43213' }
  ];

  const events = [
    'Technical Workshops',
    'Paper Presentations',
    'Project Expo',
    'Coding Competitions',
    'Robotics Challenge',
    'Hackathon'
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
    { name: 'Email', icon: Mail, url: 'mailto:crossroads@hitech.edu' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0f1729] via-[#1a2642] to-[#0a0f1c] text-gray-200 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#ff6b35]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#b466ff]/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(#ff6b35 1px, transparent 1px), linear-gradient(90deg, #ff6b35 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        {/* Main Footer Content - 3 Columns */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            
            {/* Column 1: Student Coordinators */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] relative inline-block pb-2">
                Student Coordinators
                <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-[#ff6b35] to-transparent rounded-full"></span>
              </h3>
              <div className="space-y-2">
                {studentCoordinators.map((coordinator, index) => (
                  <div 
                    key={index}
                    className="group bg-[#1a2642]/40 backdrop-blur-sm p-3 rounded-lg border border-gray-800/50 hover:border-[#ff6b35]/50 transition-all duration-300"
                  >
                    <p className="font-semibold text-sm text-gray-100 mb-1 group-hover:text-[#ff6b35] transition-colors">
                      {coordinator.name}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-[#ff66c4] transition-colors">
                      <Phone size={12} />
                      <a href={`tel:${coordinator.phone}`} className="hover:underline">
                        {coordinator.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Events & Social Links */}
            <div className="space-y-6">
              {/* Events */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b466ff] to-[#ff66c4] relative inline-block pb-2 mb-4">
                  Events
                  <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-[#b466ff] to-transparent rounded-full"></span>
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                  {events.map((event, index) => (
                    <div 
                      key={index}
                      className="group flex items-center gap-2 text-sm text-gray-300 hover:text-[#ff6b35] transition-all duration-300 cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-[#ff6b35] to-[#ff66c4] rounded-full group-hover:scale-150 transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{event}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff66c4] to-[#ff6b35] relative inline-block pb-2 mb-4">
                  Follow Us
                  <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-[#ff66c4] to-transparent rounded-full"></span>
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-[#1a2642]/40 backdrop-blur-sm p-3 rounded-lg border border-gray-800/50 hover:border-[#ff6b35]/50 transition-all duration-300 hover:scale-110"
                    >
                      <social.icon 
                        size={20} 
                        className="text-gray-300 group-hover:text-[#ff6b35] transition-colors duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 3: Event Info Card */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="relative bg-gradient-to-br from-[#ff6b35]/15 via-[#b466ff]/10 to-[#ff66c4]/15 backdrop-blur-md p-5 rounded-xl border border-[#ff6b35]/30 hover:border-[#ff6b35]/60 transition-all duration-500 group hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/0 via-[#ff6b35]/20 to-[#ff6b35]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer rounded-xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-black mb-3">
                    <span className="text-[#ff6b35]">CROSSROADS</span>
                    <span className="text-yellow-400">@</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b466ff] to-[#ff66c4]">2025</span>
                  </h2>
                  <div className="h-0.5 w-20 bg-gradient-to-r from-[#ff6b35] via-[#b466ff] to-[#ff66c4] rounded-full mb-4"></div>
                  
                  <div className="space-y-3">
                    <div className="bg-[#0f1729]/50 p-3 rounded-lg border border-[#ff6b35]/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="text-[#ff6b35] w-4 h-4" />
                        <p className="text-xs text-gray-400 font-semibold">EVENT</p>
                      </div>
                      <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff66c4]">
                        Crossroad Technical Fest
                      </p>
                    </div>
                    
                    <div className="bg-[#0f1729]/50 p-3 rounded-lg border border-[#b466ff]/20">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="text-[#b466ff] w-4 h-4" />
                        <p className="text-xs text-gray-400 font-semibold">CAMPUS</p>
                      </div>
                      <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b466ff] to-[#ff66c4]">
                        HI-TECH Institute of Engineering and Technology
                      </p>
                    </div>
                    
                    <div className="bg-[#0f1729]/50 p-3 rounded-lg border border-[#ff66c4]/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="text-[#ff66c4] w-4 h-4" />
                        <p className="text-xs text-gray-400 font-semibold">DATE</p>
                      </div>
                      <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff66c4] to-[#ff6b35]">
                        November 28, 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#ff6b35]/50 to-transparent mb-6"></div>

          {/* Bottom Section */}
          <div className="space-y-5">
            {/* Event Description */}
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-black mb-3">
                <span className="text-[#ff6b35]">CROSSROADS</span>
                <span className="text-yellow-400">@</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b466ff] to-[#ff66c4]">2025</span>
              </h2>
              <div className="h-px w-full max-w-xl mx-auto bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent mb-4"></div>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                Crossroad is the technical fest of HI-TECH Institute of Engineering and Technology where creativity and innovation meet energy and excitement. With over 20+ years of excellence, this event promises inspiration and growth.
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#ff6b35]/30 to-transparent"></div>

            {/* Copyright & Scroll to Top */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="space-y-1 text-xs text-gray-400">
                <p>© 2025 Crossroad Technical Fest. All rights reserved.</p>
                <p className="text-gray-500">
                  Created by{' '}
                  <a 
                    href="#" 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] to-[#ff66c4] font-bold hover:underline"
                  >
                    Code Veda
                  </a>
                </p>
              </div>

              <button
                onClick={scrollToTop}
                className="group bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:from-[#00e5ff] hover:to-[#00bbee] p-2.5 rounded-full shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
