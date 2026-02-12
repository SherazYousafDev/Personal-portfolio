import React from 'react';
import { Mail, Linkedin, ChevronDown, MessageCircle, Github } from 'lucide-react';

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
    <section id="about" className="relative w-full bg-bg text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      
      {/* 1. Large Background Number - Animates from the left */}
    
<div 
  className="absolute top-10 left-2 opacity-10 pointer-events-none" 
  data-aos="fade-right" 
  data-aos-duration="1200"
>
  <span 
    className="text-[18vw] font-black leading-none select-none"
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
        
        {/* 2. Main Large Heading - Staggered Slide Up */}
        <div className="flex items-center justify-center gap-[2vw]">
          <h2 
            className="text-[14vw] md:text-[18vw] font-light leading-none tracking-[-0.05em] uppercase"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            About
          </h2>
          <h2 
            className="text-[14vw] md:text-[18vw] font-medium italic leading-none tracking-[-0.05em] uppercase"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Me
          </h2>
        </div>

        {/* 3. Footer of Heading Section */}
        <div className="w-full mt-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          
          {/* Social Icons (Left) - Pop in one by one */}
          <div className="flex justify-start gap-3 order-2 md:order-1 w-full md:w-auto">
            {socials.map((social, index) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-bg hover:border-[#FF0055] hover:text-[#FF0055] hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative"
                  title={social.label}
                  // Automatic delay for each icon
                  data-aos="zoom-in"
                  data-aos-delay={600 + (index * 100)}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                  <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-[#FF0055] text-white text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest">
                    {social.label}
                  </span>
                </a>
              ))}
          </div>

          {/* Empty Space for Balance (Right) */}
          <div className="hidden md:block w-[140px] order-3"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeading;