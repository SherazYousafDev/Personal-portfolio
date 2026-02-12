import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "About Me", id: "about" },
    { name: "Work", id: "work" },
    { name: "Playground", id: "playground" },
    { name: "Contact", id: "contact" }
  ];

  return (
    // changed min-h-screen to h-screen and added flex-none to ensure it doesn't grow
    <div id="home" className="relative h-screen w-full bg-bg text-white font-sans overflow-hidden flex flex-col justify-between">
      
      {/* 1. Header Navigation */}
      <header className="relative w-full z-[100] flex justify-between items-start p-6 md:p-10 pointer-events-none">
        
        {/* Logo */}
        <div 
          className="flex items-center gap-0.5 group cursor-pointer pointer-events-auto" 
          onClick={() => scrollToSection('home')}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="text-xl font-black tracking-tighter">SY</span>
          <div className="w-1.5 h-1.5 bg-[#FF0055] rounded-full group-hover:scale-150 transition-transform"></div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 pointer-events-auto" data-aos="fade-down" data-aos-delay="200">
          {navItems.map((item, i) => (
            <div 
              key={i} 
              className="flex flex-col items-end cursor-pointer group"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="text-[10px] text-gray-600 group-hover:text-[#FF0055] transition-colors">0{i+1}</span>
              <span className="group-hover:text-white transition-colors">{item.name}</span>
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden pointer-events-auto z-[110]" data-aos="fade-down" data-aos-delay="200">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#0a0a0a] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] z-[105] pointer-events-auto flex flex-col justify-center items-center gap-8 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          {navItems.map((item, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="text-[10px] text-[#FF0055] font-black tracking-[0.5em] mb-2">0{i+1}</span>
              <span className="text-4xl font-bold uppercase tracking-tighter hover:italic transition-all active:scale-90">{item.name}</span>
            </div>
          ))}
        </div>
      </header>

      {/* 2. Main Content - Optimized for Mobile Spacing */}
      <main className="relative grow flex flex-col justify-center items-center z-20 px-6">
        
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none" data-aos="zoom-out" data-aos-duration="2000">
          <img 
            src="/myself.png" 
            alt="Portrait" 
            className="h-[55vh] md:h-[90vh] w-auto object-contain grayscale opacity-20 md:opacity-30 mix-blend-screen"
          />
        </div>

        <div className="relative flex flex-col items-center w-full z-10 mb-2">
          <h1 className="text-[16vw] md:text-[10vw] leading-[0.8] font-light tracking-[-0.06em] whitespace-nowrap uppercase" data-aos="fade-up" data-aos-delay="400">
            Hi There
          </h1>
        </div>

        <div className="relative flex flex-col items-center w-full z-20">
          <div className="w-full md:w-[70vw] flex justify-between items-center text-[8px] md:text-[11px] uppercase tracking-[0.3em] font-black text-gray-500 mb-2 px-2" data-aos="fade-in" data-aos-delay="800">
            <span className="max-w-[120px] md:max-w-none leading-relaxed">Frontend Developer</span>
            <span className="text-right">Yousaf</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-[1vw] leading-[0.7]">
            <h1 className="text-[18vw] md:text-[12vw] font-black tracking-[-0.06em] uppercase" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1200">
              I AM
            </h1>
            <h1 
              className="text-[18vw] md:text-[12vw] font-black tracking-[-0.06em] text-transparent uppercase"
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.6)' }}
              data-aos="fade-left"
              data-aos-delay="1200"
              data-aos-duration="1200"
            >
              Sheraz
            </h1>
          </div>
        </div>
      </main>

      {/* 3. Footer - Now strictly at the bottom of the viewport */}
      <footer className="relative z-50 flex justify-between items-end p-6 md:p-10 text-[9px] md:text-[10px] font-bold uppercase tracking-widest pointer-events-none">
        <div className="flex flex-col gap-2">
          <span className="text-gray-500 hidden md:block">Based in Lahore</span>
          <span className="text-gray-500 md:hidden">Lahore, PK</span>
        </div>

        {/* Subtle Scroll Indicator for Mobile */}
        <div className="flex flex-col items-center gap-2 opacity-30 animate-pulse ">
           <div className="w-px h-4 bg-white"></div>
           <span className="text-[8px]">Scroll</span>
        </div>

        <div className="flex flex-col items-end gap-2 text-right pointer-events-auto"  >
          <span className="text-gray-600 hidden md:block">Freelance Status</span>
          <div className="flex items-center gap-2 text-white bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <div className="w-1.5 h-1.5 bg-[#00FF66] rounded-full animate-pulse"></div>
            <span className="tracking-[0.2em]">Available</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;