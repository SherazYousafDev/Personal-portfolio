import React from 'react';
import { Mail, Linkedin, MessageCircle, Github } from 'lucide-react';

const AboutHeading = () => {
  const socials = [
    { 
      id: 'mail', 
      icon: <Mail size={18} />, 
      link: 'mailto:sheraz.devv@gmail.com',
      label: 'Email' 
    },
    { 
      id: 'linkedin', 
      icon: <Linkedin size={18} />, 
      link: 'https://www.linkedin.com/in/sheraz-yousaf/',
      label: 'LinkedIn' 
    },
    { 
      id: 'github', 
      icon: <Github size={18} />, 
      link: 'https://github.com/SherazYousafDev', 
      label: 'Github' 
    },
    { 
      id: 'whatsapp', 
      icon: <MessageCircle size={18} />, 
      link: 'https://wa.me/923265897172', 
      label: 'WhatsApp' 
    },
  ];

  return (
    // Added max-w-full to ensure the section never exceeds viewport
    <section id="about" className="relative w-full bg-bg text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden max-w-full">
      
      {/* 1. Large Background Number - Fixed positioning and size for mobile */}
      <div 
        className="absolute top-10 -left-4 md:left-2 opacity-10 pointer-events-none overflow-hidden" 
        data-aos="fade-right" 
        data-aos-duration="1200"
      >
        <span 
          className="text-[25vw] md:text-[18vw] font-black leading-none select-none"
          style={{ 
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)', 
            color: 'transparent', 
            display: 'block' 
          }}
        >
          01
        </span>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* 2. Main Large Heading - Added flex-wrap for small screens */}
        <div className="flex flex-wrap items-center justify-center gap-x-[4vw] gap-y-0 w-full">
          <h2 
            className="text-[18vw] md:text-[18vw] font-light leading-[0.8] tracking-[-0.05em] uppercase"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            About
          </h2>
          <h2 
            className="text-[18vw] md:text-[18vw] font-medium italic leading-[0.8] tracking-[-0.05em] uppercase text-[#FF0055]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Me
          </h2>
        </div>

        {/* 3. Footer of Heading Section */}
        <div className="w-full mt-16 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Social Icons - Centered on mobile, left-aligned on desktop */}
          <div className="flex justify-center md:justify-start gap-4 w-full md:w-auto">
            {socials.map((social, index) => (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-bg hover:border-[#FF0055] hover:text-[#FF0055] hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative"
                title={social.label}
                data-aos="zoom-in"
                data-aos-delay={600 + (index * 100)}
              >
                <div className="group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
                {/* Tooltip hidden on mobile to prevent layout shift */}
                <span className="hidden md:block absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-[#FF0055] text-white text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest">
                  {social.label}
                </span>
              </a>
            ))}
          </div>

          {/* Location / Status tag for balance */}
          <div 
            className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold"
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <div className="w-8 h-px bg-white/20"></div>
            <span>Based in Lahore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeading;