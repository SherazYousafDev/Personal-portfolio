import React, { useEffect } from 'react'; // Import useEffect
import AOS from 'aos';
import 'aos/dist/aos.css';

import AboutSection from "./components/sections/about/About"
import Footer from "./components/layout/Footer"
import Hero from "./components/sections/hero/Hero"
import WorkSection from "./components/sections/work/Work"
import ContactSection from "./components/sections/contact/ContactSection"
import PlaygroundSection from "./components/sections/work/Playground"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Only animate once to prevent loops
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <WorkSection />
      <PlaygroundSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App