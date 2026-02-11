import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-bg text-white font-sans overflow-hidden flex flex-col">
      
      {/* 1. Header Navigation */}
      <header className="relative z-50 flex justify-between items-start p-6 md:p-10 h-[10vh]">
        <div className="flex items-center gap-0.5 group cursor-default">
          <span className="text-xl font-black tracking-tighter">SY</span>
          <div className="w-1.5 h-1.5 bg-[#FF0055] rounded-full group-hover:scale-150 transition-transform"></div>
        </div>
        
        <nav className="flex gap-6 md:gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
          {["About Me", "Work", "Playground", "Contact"].map((item, i) => (
            <div key={i} className="flex flex-col items-end cursor-pointer group">
              <span className="text-[10px] text-gray-600 group-hover:text-[#FF0055] transition-colors">0{i+1}</span>
              <span className="group-hover:text-white transition-colors">{item}</span>
            </div>
          ))}
        </nav>
      </header>

      {/* 2. Main Content - Sandwich Layer (Centered Focus) */}
      <main className="relative grow flex flex-col justify-center items-center z-20 h-[80vh] gap-y-[5vh] md:gap-y-[2vh]">
        
        {/* Background Image Layer (Behind Text) */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          <img 
            src="/myself.png" 
            alt="Portrait" 
            className="h-[60vh] md:h-[95vh] w-auto object-contain grayscale opacity-30 mix-blend-screen"
          />
        </div>

        {/* Top Text Layer: HI THERE */}
        <div className="relative flex flex-col items-center w-full z-10">
          <h1 className="text-[14vw] md:text-[10vw]  leading-[0.8] font-light tracking-[-0.06em] whitespace-nowrap uppercase">
            Hi There
          </h1>
        </div>

        {/* Bottom Text Layer: Name + Slogans */}
        <div className="relative flex flex-col items-center w-full z-20 ">
          
          {/* Subtitles anchored directly above */}
          <div className="w-[85vw] md:w-[70vw] flex justify-between items-center text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-black text-gray-500 mb-1 z-30">
            <span className="bg-bg/80 backdrop-blur-sm px-2">Frontend Web Developer</span>
            <span className="bg-bg/80 backdrop-blur-sm px-2 text-right">Yousaf</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-[1vw] leading-[0.7]">
            <h1 className="text-[14vw] md:text-[12vw] font-black tracking-[-0.06em] uppercase">
              I AM
            </h1>
            <h1 
              className="text-[14vw] md:text-[12vw] font-black tracking-[-0.06em] text-transparent uppercase"
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}
            >
              Sheraz
            </h1>
          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <footer className="relative z-50 flex justify-between items-end p-6 md:p-10 text-[10px] font-bold uppercase tracking-widest h-[10vh]">
        <div className="flex flex-col gap-2">
          <span className="text-gray-400">Based in Lahore, Pakistan</span>
        </div>

        {/* Center Scroll Indicator */}
        <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center gap-3 hidden md:flex">
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-[#FF0055] rounded-full animate-[bounce_2s_infinite]"></div>
          </div>
          <span className="text-gray-500 text-[8px] tracking-[0.5em] uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#FF0055] to-transparent"></div>
        </div>

        <div className="flex flex-col items-end gap-2 text-right">
          <span className="text-gray-600">Freelance Status</span>
          <div className="flex items-center gap-2 text-white bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <div className="w-1.5 h-1.5 bg-[#00FF66] rounded-full animate-pulse shadow-[0_0_10px_#00FF66]"></div>
            <span>Available</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;