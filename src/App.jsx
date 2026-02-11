import AboutSection from "./components/sections/about/About"
import Footer from "./components/Footer"
import Hero from "./components/sections/hero/Hero"
import WorkSection from "./components/sections/work/Work"
import ContactSection from "./components/sections/contact/ContactSection"
import PlaygroundSection from "./components/sections/work/Playground"


function App() {
 

  return (
    <>
     <Hero/>
     <AboutSection/>
     <WorkSection/>
     <PlaygroundSection/>
     <ContactSection/>
     <Footer/>
    </>
  )
}

export default App
