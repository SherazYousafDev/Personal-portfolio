import React, { useEffect, useState } from 'react'; // Add useState
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from "./sections/hero/Hero";
import AboutSection from "./sections/about/About";
import WorkSection from "./sections/work/Work";
import ContactSection from "./sections/contact/ContactSection";
import PlaygroundSection from "./sections/work/Playground";
import Footer from "./components/layout/Footer";
import LoadingScreen from "./components/ui/LoadingScreen"; // Import

function App() {
  const [loading, setLoading] = useState(true); // Loading state
  const [hideLoader, setHideLoader] = useState(false); // For fade-out

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });

    // Simulate site loading
    const timer = setTimeout(() => {
      setHideLoader(true); // Trigger fade-out
      setTimeout(() => setLoading(false), 700); // Remove after fade
    }, 1500); // Adjust duration if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen hidden={hideLoader} />}

      {!loading && (
        <>
          <Hero />
          <AboutSection />
          <WorkSection />
          <PlaygroundSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  )
}

export default App;
