import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Prevent horizontal scroll on body and html
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    document.documentElement.style.maxWidth = "100vw";
    document.body.style.maxWidth = "100vw";
    document.body.style.position = "relative";

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Cleanup
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
      document.documentElement.style.maxWidth = "";
      document.body.style.maxWidth = "";
      document.body.style.position = "";
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "About Me", id: "about" },
    { name: "Work", id: "work" },
    { name: "Playground", id: "playground" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-bg text-white font-sans flex flex-col justify-between overflow-x-hidden max-w-full"
    >
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 py-4 md:px-10 md:py-8 transition-all duration-300 ${
          isScrolled
            ? "bg-bg/80 backdrop-blur-md py-3 border-b border-white/5"
            : "bg-transparent"
        }`}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        {/* Logo */}
        <div
          className="flex items-center gap-0.5 group cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <span className="text-xl font-black tracking-tighter">SY</span>
          <div className="w-1.5 h-1.5 bg-[#FF0055] rounded-full group-hover:scale-150 transition-transform"></div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
          {navItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-end cursor-pointer group"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="text-gray-600 group-hover:text-[#FF0055] transition-colors">
                0{i + 1}
              </span>
              <span className="group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden z-110">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 min-h-screen w-full bg-[#0a0a0a] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] z-[150] flex flex-col justify-center items-center gap-8 overflow-hidden ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white p-2"
          >
            <X size={32} />
          </button>

          {navItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => scrollToSection(item.id)}
            >
              <span className="text-[10px] text-[#FF0055] font-black tracking-[0.5em] mb-2">
                0{i + 1}
              </span>
              <span className="text-4xl font-bold uppercase tracking-tight hover:italic transition-all active:scale-95 text-white">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* MAIN */}
      <main className="relative grow flex flex-col justify-center items-center z-20 px-6 pt-20 md:pt-0 overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="0"
        >
          <img
            src="/myself.webp"
            alt="Portrait"
            className="h-[50vh] md:h-[80vh] w-auto object-contain grayscale opacity-20 md:opacity-30 mix-blend-screen"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-full overflow-hidden">
          <h1
            className="text-[clamp(60px,14vw,180px)] leading-[0.8] font-light tracking-[-0.05em] uppercase text-center max-w-full"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            Hi There
          </h1>

          <div
            className="w-full md:w-[70vw] flex justify-between items-center text-[9px] md:text-[11px] uppercase tracking-[0.3em] font-black text-gray-500 my-4 px-2 max-w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <span>Frontend Developer</span>
            <span>Yousaf</span>
          </div>

          <div
            className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-[1vw] leading-[0.8] w-full max-w-full"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1200"
          >
            <h1 className="text-[clamp(70px,16vw,220px)] font-black tracking-[-0.05em] uppercase max-w-full text-center md:text-left">
              I AM
            </h1>

            <h1
              className="text-[clamp(70px,16vw,220px)] font-black tracking-[-0.05em] uppercase text-transparent max-w-full text-center md:text-left"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.6)" }}
            >
              Sheraz
            </h1>
          </div>
        </div>
      </main>
      
      {/* FOOTER */}
      <footer
        className="relative z-50 flex justify-between items-end p-6 md:p-10 text-[9px] font-bold uppercase tracking-widest pointer-events-none"
        
      >
        <span className="text-gray-500 text-[10px]">Based in Lahore, PK</span>
        <div className="flex flex-col items-end pointer-events-auto">
          <span className="text-gray-600 text-[10px] mb-2">
            Freelance Status
          </span>
          <div className="flex items-center gap-2 text-white bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <div className="w-1.5 h-1.5 bg-[#ff0055] rounded-full animate-pulse"></div>
            <span>Available</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Hero;