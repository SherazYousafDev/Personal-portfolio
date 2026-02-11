import React from 'react';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';

const PlaygroundSection = () => {
  const experiments = [
    { title: "Glass UI", tech: "React / Framer", rotate: "-3deg", size: "md:col-span-4", color: "hover:border-[#FF0055]/40" },
    { title: "Hook Lib", tech: "TypeScript", rotate: "2deg", size: "md:col-span-3", color: "hover:border-blue-500/40" },
    { title: "3D Sphere", tech: "Three.js", rotate: "-2deg", size: "md:col-span-5", color: "hover:border-purple-500/40" },
    { title: "Pomodoro", tech: "Next.js", rotate: "3deg", size: "md:col-span-6", color: "hover:border-orange-500/40" },
    { title: "Auth Kit", tech: "Supabase", rotate: "-1deg", size: "md:col-span-6", color: "hover:border-green-500/40" },
  ];

  return (
    <section className="w-full bg-bg py-32 px-6 md:px-12 overflow-hidden relative">
      {/* Background Noise/Grain Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Off-center Header */}
      <div className="relative mb-32 group">
        <div className="absolute -top-16 -left-10 opacity-10 group-hover:opacity-30 transition-opacity duration-1000">
          <Sparkles size={180} strokeWidth={0.5} className="text-[#FF0055]" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-[14vw] font-black text-slate-400 uppercase tracking-tighter leading-[0.8] transition-all duration-700">
            My <span className="text-[#FF0055] italic inline-block hover:skew-x-12 transition-transform">PlayGround</span>
          </h2>
          <div className="flex items-center gap-4 mt-6">
            <div className="h-[1px] w-12 bg-[#FF0055]"></div>
            <p className="text-[10px] uppercase tracking-[0.5em] font-black text-gray-500">
              Experimental Sketches // 2024 — 2026
            </p>
          </div>
        </div>
      </div>

      {/* The Pile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        
        {experiments.map((item, index) => (
          <div 
            key={index}
            style={{ transform: `rotate(${item.rotate})` }}
            className={`${item.size} group relative bg-[#080808] border border-white/5 rounded-xl p-8 hover:z-30 hover:scale-[1.03] hover:rotate-0 transition-all duration-500 shadow-2xl flex flex-col justify-between min-h-[320px] overflow-hidden`}
          >
            {/* Design Detail: Digital "Tape" effect on top of card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/5 group-hover:bg-[#FF0055]/20 transition-colors backdrop-blur-sm"></div>

            {/* Top Bar */}
            <div className="flex justify-between items-start relative z-10">
              <div className="space-y-1">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-bg group-hover:bg-white group-hover:text-black transition-all duration-500 transform group-hover:rotate-[360deg]">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <span className="text-[9px] font-mono text-gray-600 bg-white/5 px-2 py-1 rounded tracking-tighter">
                RAW_FILE_V0{index + 1}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF0055] animate-pulse"></span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                  {item.tech}
                </p>
              </div>
              <h3 className="text-4xl font-black uppercase tracking-tighter leading-none group-hover:text-white transition-colors">
                {item.title}
              </h3>
            </div>

            {/* Large Background Ghost Text */}
            <span className="absolute -bottom-4 -right-2 text-[100px] font-black text-white/[0.02] pointer-events-none uppercase italic group-hover:text-[#FF0055]/5 transition-all duration-700">
              {item.tech.split(' ')[0]}
            </span>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF0055]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        ))}

        {/* Action Card (GitHub) */}
        <div className="md:col-span-4 bg-[#FF0055] rounded-xl p-8 flex flex-col justify-between rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-pointer shadow-2xl group min-h-[320px]">
          <div className="flex justify-between items-start">
            <Github size={42} className="text-white group-hover:bounce transition-transform" />
            <div className="text-right text-[10px] font-black text-white/40 uppercase tracking-widest leading-tight">
              Open Source<br/>Contributions
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-white leading-none">
              Explore the<br/>Source Code
            </h3>
            <p className="text-[10px] uppercase font-bold text-white/70 mt-4 tracking-widest border-t border-white/20 pt-4">
              github.com/your-username →
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlaygroundSection;