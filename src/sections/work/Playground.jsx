import React from 'react';
import { Github, Sparkles, ExternalLink } from 'lucide-react';

const PlaygroundSection = () => {
  const experiments = [
    { 
      title: "MacOS Portfolio", 
      tech: "React / Tailwind", 
      rotate: "2deg", 
      size: "md:col-span-3", 
      color: "hover:border-blue-500/50", 
      aos: "fade-down",
      link: "https://sheraz-yousaf1.netlify.app/" 
    },
    { 
      title: "SkillSwap", 
      tech: "React / Tailwind / Supabase", 
      rotate: "-3deg", 
      size: "md:col-span-4", 
      color: "hover:border-[#FF0055]/50", 
      aos: "fade-up-right",
      link: "https://your-link-here.com"
    },
    { 
      title: "Pulse.Media", 
      tech: "React / Supabase", 
      rotate: "-2deg", 
      size: "md:col-span-5", 
      color: "hover:border-purple-500/50", 
      aos: "fade-up-left",
      link: "https://your-link-here.com"
    },
    { 
      title: "TuneHub", 
      tech: "JavaScript", 
      rotate: "3deg", 
      size: "md:col-span-6", 
      color: "hover:border-orange-500/50", 
      aos: "fade-right",
      link: "https://sherazyousafdev.github.io/TuneHub/"
    },
    { 
      title: "Code Editor", 
      tech: "HTML / CSS / JS", 
      rotate: "-1deg", 
      size: "md:col-span-6", 
      color: "hover:border-green-500/50", 
      aos: "fade-left",
      link: "https://sherazyousafdev.github.io/Code-Editor/"
    },
  ];

  return (
    <section id='playground' className="w-full bg-[#0a0a0a] py-32 px-6 md:px-12 overflow-x-hidden relative max-w-full">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="relative mb-32 group">
        <div className="absolute -top-16 -left-10 opacity-10 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none" data-aos="zoom-out">
          <Sparkles size={180} strokeWidth={0.5} className="text-[#FF0055]" />
        </div>
        <div className="relative z-10">
          <h2 className="text-[14vw] font-black text-white/20 uppercase tracking-tighter leading-[0.85] transition-all duration-700 break-words max-w-full" data-aos="fade-right">
            My <span className="text-[#FF0055] italic inline-block hover:skew-x-12 transition-transform">PlayGround</span>
          </h2>
          <div className="flex items-center gap-4 mt-6" data-aos="fade-up">
            <div className="h-px w-12 bg-[#FF0055]"></div>
            <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] font-black text-gray-500">
              Experimental Sketches - Websites - Applications // 2024 — 2026
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 group/container">
        {experiments.map((item, index) => (
          <a 
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transform: `rotate(${item.rotate})` }}
            className={`
              ${item.size} relative bg-[#f9f1f1] border border-white rounded-xl p-8 
              flex flex-col justify-between min-h-80 overflow-hidden 
              cursor-pointer group/card
              transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
              shadow-[0_10px_30px_rgba(0,0,0,0.3)]
              
              /* Sibling Blur Logic */
              group-hover/container:opacity-30 group-hover/container:blur-[4px] group-hover/container:scale-[0.92]
              hover:!opacity-100 hover:!blur-none hover:!scale-[1.1] hover:!rotate-0 hover:z-50 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]
              
              ${item.color}
            `}
            data-aos={item.aos}
            data-aos-delay={index * 100}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-zinc-950/10 group-hover/card:bg-[#FF0055]/30 transition-colors duration-500 backdrop-blur-sm"></div>

            <div className="flex justify-between items-start relative z-10">
              <span className="text-[9px] font-mono text-zinc-500 bg-zinc-950/5 px-2 py-1 rounded border border-zinc-200">
                RAW_FILE_V0{index + 1}
              </span>
              <ExternalLink size={14} className="text-zinc-400 opacity-0 group-hover/card:opacity-100 transition-opacity" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF0055] animate-pulse"></span>
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">{item.tech}</p>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter leading-none text-zinc-950 group-hover/card:text-[#FF0055] transition-colors duration-500">
                {item.title}
              </h3>
            </div>

            <span className="absolute -bottom-4 -right-2 text-[80px] sm:text-[100px] font-black text-zinc-950/[0.03] pointer-events-none uppercase italic group-hover/card:text-[#FF0055]/10 transition-all duration-1000 select-none">
              {item.tech.split(' ')[0]}
            </span>
          </a>
        ))}

        {/* GitHub Card */}
        <a 
          href="https://github.com/SherazYousafDev" 
          target="_blank"
          rel="noopener noreferrer"
          className="
            md:col-span-4 bg-[#FF0055] rounded-xl p-8 flex flex-col justify-between md:rotate-2 
            cursor-pointer group/gh shadow-[0_10px_30px_rgba(255,0,85,0.2)]
            transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
            
            group-hover/container:opacity-30 group-hover/container:blur-[4px] group-hover/container:scale-[0.92]
            hover:!opacity-100 hover:!blur-none hover:!scale-[1.1] hover:!rotate-0 hover:z-50 hover:shadow-[0_40px_80px_rgba(255,0,85,0.4)]
          "
          data-aos="zoom-in-up"
        >
          <div className="flex justify-between items-start">
            <Github size={42} className="text-white group-hover/gh:rotate-12 transition-transform duration-500" />
            <div className="text-right text-[10px] font-black text-white/60 uppercase tracking-widest leading-tight">
              Open Source<br/>Contributions
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-white leading-none">
              Explore All Experiment <br/>Projects
            </h3>
            <p className="text-[10px] uppercase font-bold text-white/90 mt-4 tracking-widest border-t border-white/30 pt-4">
              github.com/SherazYousafDev →
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default PlaygroundSection;