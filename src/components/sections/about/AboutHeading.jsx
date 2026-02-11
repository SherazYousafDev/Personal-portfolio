import React from 'react';
import { Mail, Linkedin, Dribbble, Twitter, ChevronDown } from 'lucide-react';

const AboutHeading = () => {
  const socialLinks = [
    { platform: 'mail', icon: <Mail size={12} />, href: 'mailto:hello@example.com' },
    { platform: 'linkedin', icon: <Linkedin size={12} />, href: '#' },
    { platform: 'dribbble', icon: <Dribbble size={12} />, href: '#' },
    { platform: 'twitter', icon: <Twitter size={12} />, href: '#' },
  ];

  return (
    <section className="relative w-full bg-bg text-white pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      
      {/* 1. Large Background Number */}
      <div className="absolute top-10 left-2  opacity-4">
  <span 
    className="text-[18vw] font-black leading-none"
    style={{ WebkitTextStroke: '2px white', color: 'transparent' }}
  >
    01
  </span>
</div>

      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* 2. Main Large Heading */}
        <div className="flex items-center justify-center gap-[2vw]">
          <h2 className="text-[14vw] md:text-[18vw] font-light leading-none tracking-[-0.05em] uppercase">
            About
          </h2>
          <h2 className="text-[14vw] md:text-[18vw] font-medium italic leading-none tracking-[-0.05em] uppercase">
            Me
          </h2>
        </div>

        {/* 3. Footer of Heading Section */}
        <div className="w-full mt-16 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          
          {/* Social Icons (Left) */}
          <div className="flex justify-start gap-3 order-2 md:order-1 w-full md:w-auto">
            {socialLinks.map((item) => (
              <a 
                key={item.platform}
                href={item.href}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#FF0055] hover:border-[#FF0055] transition-all duration-300 bg-[#0c0c0c] group"
              >
                <div className="text-white/70 group-hover:text-white group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
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