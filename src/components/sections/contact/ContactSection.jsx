import React from 'react';
import { Mail, ArrowUpRight, Copy, Globe, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@yourname.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-bg text-white py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      
      {/* 1. Large Editorial Heading */}
      <div className="relative mb-20 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
          <div className="h-[1px] w-12 bg-[#FF0055]"></div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#FF0055] font-black">04 / Connect</span>
        </div>
        <h2 className="text-[14vw] md:text-[10vw] font-bold tracking-tighter leading-[0.8] uppercase">
          LET'S <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}>TALK</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* 2. Main Email Card (Large) */}
        <div className="md:col-span-8 bg-card border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-between group min-h-[300px]">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 mb-8 italic">Have a project in mind?</h4>
            <h3 className="text-3xl md:text-6xl font-bold tracking-tighter uppercase mb-4">
              Send me a message
            </h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-t border-white/5 pt-8">
            <button 
              onClick={handleCopy}
              className="group/mail flex items-center gap-4 bg-bg border border-white/10 px-8 py-4 rounded-full hover:border-[#FF0055] transition-all"
            >
              <span className="text-sm md:text-xl font-medium tracking-tight">sheraz.devv@gmail.com</span>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/mail:bg-[#FF0055] transition-colors">
                {copied ? <span className="text-[10px] font-bold italic">Copied!</span> : <Copy size={14} />}
              </div>
            </button>
            <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Or click to copy</span>
          </div>
        </div>

        {/* 3. Socials Card (Small) */}
        <div className="md:col-span-4 bg-card border border-white/5 rounded-3xl p-8 flex flex-col justify-between group">
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 mb-8 italic">Socials</h4>
          <div className="space-y-4">
            {['LinkedIn', 'Dribbble', 'Twitter', 'Instagram'].map((social) => (
              <a 
                key={social}
                href={`#${social}`}
                className="flex items-center justify-between text-lg font-bold uppercase tracking-tighter border-b border-white/5 pb-2 hover:text-[#FF0055] transition-all group/link"
              >
                {social}
                <ArrowUpRight size={20} className="text-gray-600 group-hover/link:text-[#FF0055] group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* 4. Location Card */}
        <div className="md:col-span-4 bg-card border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6">
            <Globe size={18} className="text-[#FF0055]" />
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 mb-2">Location</h4>
            <p className="text-xl font-bold uppercase tracking-tight">Lahore, Pakistan</p>
            
          </div>
        </div>

        {/* 5. CTA / Final Pitch */}
        <div className="md:col-span-8 bg-[#FF0055] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer hover:bg-[#e6004d] transition-colors">
          <div className="text-white">
            <h3 className="text-3xl font-bold tracking-tighter uppercase leading-none mb-2">Start a conversation</h3>
            <p className="text-sm opacity-80 font-bold uppercase tracking-widest">Typically responds within 24 hours</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#FF0055] group-hover:scale-110 transition-transform">
            <MessageSquare size={24} fill="currentColor" />
          </div>
        </div>

      </div>

      {/* Footer Branding */}
      <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-black">
          © 2026 Sheraz Yousaf — All Rights Reserved
        </p>
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] text-gray-400 font-black">
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white transition-colors cursor-pointer">Back to Top ↑</button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;