import React from 'react';

const projects = [
  {
    id: "01",
    title: "Geo Leaders",
    category: "Web Development / UI-UX",
    year: "2025",
    img: "/project1.jpg",
    color: "#1a1a1a" // Slightly different card colors help the stack stand out
  },
  {
    id: "02",
    title: "ArkGenisys",
    category: "Website / UI-UX",
    year: "2025",
    img: "/project2.jpg",
    color: "#161616"
  },
  {
    id: "03",
    title: "Pasty",
    category: "Interface Design / Desktop",
    year: "2024",
    img: "/project3.jpg",
    color: "#121212"
  }
];

const WorkSection = () => {
  return (
    <section className="bg-bg text-white py-24 px-4 md:px-12 border-t border-white/5">
      {/* Section Header */}
<div className="relative w-full mb-24 md:mb-32">
  
  {/* Background Decorative Text (Optional - for that ultra-modern look) */}
  <div className="absolute -top-10 left-0 overflow-hidden pointer-events-none select-none">
    <span className="text-[12vw] font-black opacity-[0.02] uppercase tracking-tighter leading-none">
      Professional
    </span>
  </div>

  <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
    
    {/* Left Side: Title & Counter */}
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        {/* Animated Dot for "Live" feel */}
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0055] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF0055]"></span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-black">
          02 / Selected Work
        </span>
      </div>
      
      <h2 className="text-6xl md:text-9xl font-bold  leading-[0.8]">
        PRO<span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>JECTS</span>
      </h2>
    </div>

    {/* Right Side: Metadata Description */}
    <div className="md:max-w-xs text-right space-y-4">
      <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed text-gray-400 font-bold">
  Deeply rooted in <span className="text-white">Real-World Logic</span>, these projects showcase 
  scalable architectures and high-end interfaces built for <span className="text-white">Actual Market Performance</span>.
</p>
      <div className="flex items-center justify-end gap-2 text-gray-600">
        <span className="text-[9px] uppercase tracking-widest font-black">Scroll to dive</span>
        <div className="w-12 h-[1px] bg-white/10"></div>
      </div>
    </div>

  </div>
</div>

      {/* Project Stack Container */}
      <div className="flex flex-col gap-[10vh]"> {/* Gap between cards as they scroll */}
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="sticky top-24 w-full" // This makes the card stick
            style={{ 
              paddingTop: `${index * 20}px`, // Slight offset so you can see the edges of previous cards
              zIndex: index + 1 
            }}
          >
            <div 
              className="group relative bg-[#111] border border-white/10 rounded-3xl overflow-hidden min-h-[60vh] md:min-h-[70vh] flex flex-col md:flex-row items-center justify-between p-8 md:p-16 transition-all duration-500 shadow-2xl"
              style={{ backgroundColor: project.color }}
            >
              {/* Background Number */}
              <span 
                className="absolute left-10 top-1/2 -translate-y-1/2 text-[20vw] font-black opacity-[0.03] pointer-events-none"
                style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
              >
                {project.id}
              </span>

              {/* Left Side: Content */}
              <div className="relative z-10 w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#FF0055] font-black text-xs">{project.id}</span>
                  <div className="h-[1px] w-8 bg-[#FF0055]"></div>
                </div>
                
                <h3 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 group-hover:italic transition-all">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-gray-500">
                  <span className="px-3 py-1 border border-white/10 rounded-full">{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <button className="mt-12 flex items-center gap-4 group/btn">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                    <span className="text-xl">→</span>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] font-bold">View Case Study</span>
                </button>
              </div>

              {/* Right Side: Image */}
              <div className="relative z-10 w-full md:w-[45%] aspect-square md:aspect-[4/5] mt-12 md:mt-0 overflow-hidden rounded-2xl border border-white/5">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-32 flex flex-col items-center">
        <p className="text-gray-600 text-[10px] uppercase tracking-[0.4em] font-black mb-8">Ready to start a project?</p>
        <button className="group relative px-16 py-6 border border-white/10 rounded-full overflow-hidden transition-all hover:border-[#FF0055]">
          <span className="relative z-10 text-[12px] uppercase tracking-[0.3em] font-black">View all archives</span>
          <div className="absolute inset-0 bg-[#FF0055] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </div>
    </section>
  );
};

export default WorkSection;