import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Globe, MessageSquare, Linkedin, Github, MessageCircle, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const myEmail = "sheraz.devv@gmail.com";

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(myEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const socials = [
    { id: 1, label: 'LinkedIn', link: 'https://www.linkedin.com/in/sheraz-yousaf/' },
    { id: 2, label: 'Github', link: 'https://github.com/SherazYousafDev' },
    { id: 3, label: 'WhatsApp', link: 'https://wa.me/923265897172' },
    { id: 4, label: 'Instagram', link: 'https://instagram.com/your-username' },
  ];

  return (
    // OPTIMIZATION: overflow-x-hidden is crucial to prevent the stroke text from causing a horizontal scroll on small devices.
    <section id='contact' className="bg-bg/95 text-white py-24 px-6 md:px-12 border-t border-white/5 overflow-x-hidden">
      
      {/* 1. Heading */}
      <div 
        className="relative mb-20 text-center md:text-left"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
          <div className="h-[1px] w-12 bg-[#FF0055]"></div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#FF0055] font-black">04 / Connect</span>
        </div>
        {/* OPTIMIZATION: Fluid font-size for mobile to prevent text overflow */}
        <h2 className="text-[14vw] md:text-[10vw] font-bold tracking-tighter leading-[0.8] uppercase break-words">
          LET'S <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}>TALK</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* 2. Email Card */}
        <div 
          className="md:col-span-8 bg-[#141414] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[350px]"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 mb-8 italic">Have a project in mind?</h4>
            <h3 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
              Send me a message
            </h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-t border-white/5 pt-8">
            <button 
              onClick={handleCopy}
              className="group flex items-center gap-4 bg-black border border-white/10 px-6 py-4 md:px-8 md:py-4 rounded-full hover:border-[#FF0055] transition-all cursor-pointer w-full md:w-auto overflow-hidden"
            >
              {/* OPTIMIZATION: Truncate email on very small screens to prevent button blowout */}
              <span className="text-sm md:text-xl font-medium tracking-tight truncate">{myEmail}</span>
              <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF0055] transition-colors">
                {copied ? <span className="text-[8px] font-bold uppercase">Done</span> : <Copy size={14} />}
              </div>
            </button>
          </div>
        </div>

        {/* 3. Socials Card */}
        <div 
          className="md:col-span-4 bg-[#141414] border border-white/5 rounded-3xl p-8 flex flex-col justify-between"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 mb-8 italic">Socials</h4>
          <div className="space-y-4">
            {socials.map((social, index) => (
              <a 
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-lg font-bold uppercase tracking-tighter border-b border-white/5 pb-2 hover:text-[#FF0055] transition-all group"
              >
                {social.label} 
                <ArrowUpRight size={20} className="text-gray-600 group-hover:text-[#FF0055] transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* 4. Location Card */}
        <div 
          className="md:col-span-4 bg-[#141414] border border-white/5 rounded-3xl p-8 flex flex-col justify-between min-h-[160px]"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6">
            <Globe size={18} className="text-[#FF0055]" />
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 mb-2">Location</h4>
            <p className="text-xl font-bold uppercase tracking-tight">Lahore, Pakistan</p>
          </div>
        </div>

        {/* 5. CTA Card */}
        <a 
          href={`mailto:${myEmail}`}
          className="md:col-span-8 bg-[#FF0055] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group hover:bg-[#e6004d] transition-colors"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold tracking-tighter uppercase leading-none mb-2 text-white">Start a conversation</h3>
            <p className="text-sm opacity-80 font-bold uppercase tracking-widest text-white">Typically responds within 24 hours</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#FF0055] group-hover:scale-110 transition-transform shrink-0">
            <MessageSquare size={24} fill="currentColor" />
          </div>
        </a>

      </div>

      {/* Footer */}
      <div 
        className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <p className="text-[10px] text-center md:text-left uppercase tracking-[0.4em] text-gray-600 font-black">
          © 2026 Sheraz Yousaf - All rights reserved.
        </p>
        <button 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
          className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black hover:text-white transition-colors cursor-pointer outline-none"
        >
          Back to Top ↑
        </button>
      </div>
    </section>
  );
};

export default ContactSection;