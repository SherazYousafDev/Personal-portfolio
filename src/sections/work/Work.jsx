import React from 'react';
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Geo Leaders",
    category: "Web Development / UI-UX",
    year: "2025",
    img: "/pro-projects/geo-leaders.webp",
    color: "#1a1a1a",
    link: "https://geo-leaders.com"
  },
  {
    id: "02",
    title: "ArkGenisys",
    category: "Website / UI-UX",
    year: "2025",
    img: "/pro-projects/ark.webp",
    color: "#161616",
    link: "https://arkgenisys.com"
  },
  {
    id: "03",
    title: "Pasty",
    category: "Website / Auth / Supabase",
    year: "2024",
    img: "/pro-projects/pasty.webp",
    color: "#121212",
    link: "https://pasty-notes.netlify.app"
  }
];

const WorkSection = () => {
  return (
    <section id='work' className="bg-bg text-white py-24 px-4 md:px-12 border-t border-white/5">
      
      {/* Section Header */}
      <div 
        className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12 mb-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Left Side: Main Heading */}
        <div className="max-w-2xl relative">
          {/* Background Word */}
          <span className="absolute inset-0 flex items-center justify-center text-[clamp(100px,20vw,300px)] font-black text-white/5 leading-none select-none pointer-events-none">
            MY
          </span>

          <div className="flex items-center gap-3 mb-6 relative z-10" data-aos="fade-right" data-aos-delay="200">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0055] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF0055]"></span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-black">02 / Selected Work</span>
          </div>

          <h2 className="relative text-6xl md:text-9xl font-bold leading-[0.8] z-10" data-aos="zoom-out-up" data-aos-delay="400">
            WORK
          </h2>
          <p className="relative text-gray-500 text-xl max-w-2xl leading-relaxed z-10">
            A showcase of <span className="text-white font-bold">real-world deployed projects</span> built with attention to detail and modern UI/UX.
          </p>
        </div>

        {/* Right Side: Deployment Tagline */}
        <div 
          className="md:max-w-[280px] text-right"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <div className="flex flex-col items-end gap-2">
            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[#FF0055]">
              Production Ready
            </p>
            <p className="text-sm text-gray-400 font-medium leading-relaxed tracking-tight">
              Fully deployed and optimized applications, built for performance, scalability, and seamless user interaction.
            </p>
          </div>
        </div>
      </div>

      {/* Project Stack Container */}
      <div className="flex flex-col gap-[10vh] md:gap-[15vh]">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="w-full"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-offset="300"
          >
            <div 
              className="group relative bg-[#111] border border-white/10 rounded-[2.5rem] overflow-hidden min-h-[40vh] md:min-h-[80vh] flex flex-col p-6 md:p-10 transition-all duration-500 shadow-2xl hover:scale-[1.02] hover:shadow-[0_30px_50px_rgba(255,0,85,0.3)]"
              style={{ backgroundColor: project.color }}
            >
              
              {/* Top Bar: Title & Year */}
              <div className="relative z-20 flex flex-col md:flex-row justify-between items-start mb-8">
                <div data-aos="fade-right" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#FF0055] font-black text-xs">{project.id}</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">{project.category}</span>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase group-hover:italic transition-all duration-700 hover:text-[#FF0055] cursor-pointer">
                      {project.title}
                    </h3>
                  </a>
                </div>
                
                <div className="hidden md:flex flex-col items-end text-right" data-aos="fade-left" data-aos-delay="400" data-aos-anchor-placement="top-bottom">
                  <span className="text-4xl font-light opacity-20 block">{project.year}</span>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center gap-3 group/btn ml-auto cursor-pointer"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-black opacity-0 group-hover:opacity-100 transition-opacity">View Live</span>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#FF0055] group-hover/btn:border-[#FF0055] transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </a>
                </div>
              </div>

              {/* BIG IMAGE CONTAINER */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative flex-1 w-full overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 cursor-pointer block group"
                data-aos="zoom-in-up"
                data-aos-delay="600"
                data-aos-duration="1500"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top grayscale-[0.5] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-[1.5s] ease-out"
                />
                
                {/* Floating "Live" Badge */}
                <div className="absolute top-6 right-6 scale-0 group-hover:scale-100 transition-transform duration-500 hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">
                    Visit Site <ExternalLink size={12} />
                </div>

                {/* Mobile View Button Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity md:hidden flex items-end p-8">
                  <div className="w-full bg-white text-black py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] text-center flex items-center justify-center gap-2">
                    Open Project <ExternalLink size={14} />
                  </div>
                </div>
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
