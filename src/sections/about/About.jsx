import React from "react";
import AboutHeading from "./AboutHeading";
import {
  Mail,
  Linkedin,
  Download,
  MessageCircle,
  Github,
  Award,
  ExternalLink,
} from "lucide-react";

/* --- Main Component: AboutSection --- */
const AboutSection = () => {
  const socials = [
    {
      id: "mail",
      icon: <Mail size={18} />,
      link: "mailto:sheraz.devv@gmail.com",
      label: "Email",
    },
    {
      id: "linkedin",
      icon: <Linkedin size={18} />,
      link: "https://www.linkedin.com/in/sheraz-yousaf/",
      label: "LinkedIn",
    },
    {
      id: "github",
      icon: <Github size={18} />,
      link: "https://github.com/SherazYousafDev",
      label: "Github",
    },
    {
      id: "whatsapp",
      icon: <MessageCircle size={18} />,
      link: "https://wa.me/923265897172",
      label: "WhatsApp",
    },
  ];

  const certifications = [
    { name: "•	JavaScript for Beginners ", issuer: "Simplilearn", year: "2024" },
    { name: "•	Fundamentals of Database ", issuer: "Simplilearn", year: "2025" },
    { name: "•	Programming with Python ", issuer: "Simplilearn", year: "2025" },
  ];

  return (
    <section
      id="about"
      className="w-full bg-bg text-white py-10 md:py-24 px-4 md:px-12"
    >
      <AboutHeading />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* 1. HERO STATEMENT & RESUME (8-column) */}
        <div
          className="md:col-span-8 bg-card border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[400px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0055] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF0055]"></span>
              </div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">
                Introduction
              </h4>
            </div>

            <p className="text-sm md:text-lg text-gray-300 leading-relaxed max-w-3xl font-normal tracking-tight">
              I'm a passionate{" "}
              <span className="text-[#FF0055] font-medium">
                Frontend Developer
              </span>{" "}
              based in Lahore, Pakistan, with{" "}
              <span className="text-[#FF0055] font-medium">1+ year</span> of
              experience building modern, responsive web applications. My
              journey into web development started with a curiosity for how
              websites work, and it quickly became my passion. I specialize in{" "}
              <span className="text-white font-medium">
                React.js, Next.js, and Tailwind CSS
              </span>
              , creating seamless user experiences that combine aesthetics with
              functionality. When I'm not coding, you'll find me exploring new
              technologies or enjoying a good cup of coffee while sketching out
              my next big idea.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-12 pt-8 border-t border-white/5">
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-bg hover:border-[#FF0055] hover:text-[#FF0055] hover:-translate-y-1 transition-all duration-300 cursor-pointer group relative"
                  title={social.label}
                  data-aos="zoom-in"
                  data-aos-delay={200 + index * 50}
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

            <a
              href="/Sheraz_Yousaf_Resume.pdf"
              download="Sheraz_Yousaf_Resume.pdf" 
              className="inline-block"
            >
              <button
                className="group relative overflow-hidden bg-white text-black text-[10px] uppercase tracking-[0.2em] font-black px-10 py-4 rounded-full transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                {/* Text layer: note the group-hover:text-white transition */}
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                  Download Resume <Download size={14} strokeWidth={3} />
                </span>

                {/* The Pink Slide background */}
                <div className="absolute inset-0 bg-[#FF0055] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </a>
          </div>
        </div>

        {/* 2. STATS / QUICK INFO (4-column) */}
        <div
          className="md:col-span-4 bg-card border border-white/5 rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-[#FF0055] blur-[100px] opacity-10 pointer-events-none"></div>

          <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 mb-12 flex items-center gap-2">
            <span className="w-1 h-1 bg-[#FF0055] rounded-full"></span>
            Current Status
          </h4>

          <div className="space-y-10 relative z-10">
            <div
              className="group/item"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <p className="text-[9px] uppercase tracking-widest text-gray-600 mb-2 font-black">
                Location
              </p>
              <div className="flex items-center gap-2">
                <p className="text-xl font-bold tracking-tight group-hover/item:text-white transition-colors">
                  Lahore, Pakistan
                </p>
                <span className="text-xs animate-pulse">🇵🇰</span>
              </div>
            </div>

            <div
              className="group/item"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <p className="text-[9px] uppercase tracking-widest text-gray-600 mb-2 font-black">
                Availability
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0055] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF0055]"></span>
                </div>
                <p className="text-xl font-bold tracking-tight text-[#FF0055] uppercase italic">
                  Open for Projects
                </p>
              </div>
            </div>

            <div
              className="group/item"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <p className="text-[9px] uppercase tracking-widest text-gray-600 mb-2 font-black">
                Experience
              </p>
              <div className="flex items-baseline gap-1">
                <p className="text-3xl font-black tracking-tighter italic">
                  01
                </p>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                  + Year Professional
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold text-gray-600">
            <span>Local Time</span>
            <span className="text-white">
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Karachi",
              })}{" "}
              PKT
            </span>
          </div>
        </div>

        {/* 3. EXPERIENCE HISTORY (8-column) */}
        <div
          className="md:col-span-8 bg-card border border-white/5 rounded-3xl p-8 md:p-12"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 mb-12">
            Experience History
          </h4>
          <div className="grid grid-cols-1 gap-1">
            {[
              {
                year: "2025 — Now",
                role: "Frontend Engineer",
                company: "Freelance Worldwide",
              },
              {
                year: "2024 — 2025",
                role: "Frontend Developer",
                company: "Zaions",
              },
              {
                year: "2025 ",
                role: "Frontend Developer Intern",
                company: "CodeAlpha",
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 cursor-default"
                data-aos="fade-up"
                data-aos-delay={400 + i * 100}
              >
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#FF0055] font-black uppercase tracking-widest mb-1">
                    {exp.year}
                  </span>
                  <span className="text-xl font-bold uppercase tracking-tight">
                    {exp.role}
                  </span>
                </div>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-[0.2em] mt-2 md:mt-0">
                  {exp.company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. TECH STACK (4-column) */}
        <div
          className="md:col-span-4 bg-card border border-white/5 rounded-3xl p-8 flex flex-col h-full"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500 mb-8 italic">
            Tech Stack
          </h4>
          <div className="space-y-8">
            <div data-aos="fade-in" data-aos-delay="500">
              <p className="text-[8px] uppercase tracking-[0.2em] text-gray-600 font-bold mb-4">
                Frontend
              </p>
              <div className="flex flex-wrap gap-2">
                {["HTML", "JavaScript", "React", "Next.js"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-bg text-white text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg border border-white/5 hover:border-[#FF0055] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="600">
              <p className="text-[8px] uppercase tracking-[0.2em] text-gray-600 font-bold mb-4">
                Styling & Motion
              </p>
              <div className="flex flex-wrap gap-2">
                {["CSS", "Tailwind", "AOS"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-bg text-white text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg border border-white/5 hover:border-[#FF0055] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div data-aos="fade-in" data-aos-delay="700">
              <p className="text-[8px] uppercase tracking-[0.2em] text-gray-600 font-bold mb-4">
                Dev Tools & Backend
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Figma",
                  "MySQL",
                  "Git",
                  "Github",
                  "Netlify",
                  "Auth Services",
                  "Supabase",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-bg text-white text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-lg border border-white/5 hover:border-[#FF0055] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-auto text-[9px] text-gray-600 leading-relaxed italic border-t border-white/5 pt-6">
            Constantly evolving with the modern web ecosystem.
          </p>
        </div>

        {/* 5. THE JOURNEY (12-column) */}
        <div
          className="md:col-span-12 bg-card border border-white/5 rounded-3xl p-8 md:p-16"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div
                className="flex items-center gap-3 mb-8"
                data-aos="fade-right"
              >
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#FF0055]">
                  My Background
                </h4>
                <div className="h-[1px] w-12 bg-white/10"></div>
              </div>
              <div className="space-y-6">
                <h3
                  className="text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.9]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  From <span className="text-gray-500">Logical Thinking</span>{" "}
                  <br /> To Visual Storytelling.
                </h3>
                <div
                  className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl pt-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <p>
                    My journey began at the intersection of curiosity and
                    technology. I started as a developer who was obsessed with
                    how things worked under the hood, but I quickly realized
                    that{" "}
                    <span className="text-white">
                      functionality without form
                    </span>{" "}
                    is a missed opportunity for connection.
                  </p>
                  <p>
                    Over the last 1 year, I’ve refined a workflow that treats{" "}
                    <span className="text-white">code as a design tool</span>. I
                    architect experiences where every transition serves a single
                    purpose: making the complex feel effortless.
                  </p>
                  <p className="italic text-gray-500 border-l-2 border-[#FF0055] pl-6 py-2">
                    "I believe the best interfaces are the ones that
                    disappear—where the user forgets they are using a tool and
                    simply achieves their goal."
                  </p>
                </div>
              </div>
            </div>

            <div
              className="lg:col-span-4 space-y-12"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-600 mb-8 italic">
                  Education
                </h4>
                <div className="space-y-8">
                  <div className="group">
                    <p className="text-sm font-bold uppercase tracking-tight group-hover:text-[#FF0055] transition-colors">
                      BS Information Technology
                    </p>
                    <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest mt-1">
                      University of Education Lahore · 2023-2025
                    </p>
                  </div>
                  <div className="group border-t border-white/5 pt-6">
                    <p className="text-sm font-bold uppercase tracking-tight group-hover:text-[#FF0055] transition-colors">
                      BS Computer Science (ADP)
                    </p>
                    <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest mt-1">
                      Riphah International University · 2021-2023
                    </p>
                  </div>
                </div>
              </div>

              {/* UPDATED: Certifications Section */}
              <div className="bg-bg/50 p-6 rounded-2xl border border-white/5 relative overflow-hidden group/cert">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/cert:opacity-20 transition-opacity">
                  <Award size={40} />
                </div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-600 mb-6">
                  Certifications
                </h4>
                <div className="space-y-5">
                  {certifications.map((cert, idx) => (
                    <div key={idx} className="group/item flex flex-col">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-bold uppercase tracking-tight text-white group-hover/item:text-[#FF0055] transition-colors">
                          {cert.name}
                        </p>
                        <span className="text-[9px] font-black text-gray-700 group-hover/item:text-[#FF0055]/50 transition-colors">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-gray-600 font-black mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
