import Hero from "./componants/Hero"
import Navbar from "./componants/Navbar"
import About from "./componants/About"
import Technology from "./componants/Technology"
import Experince from "./componants/Experince"
import Project from "./componants/Project"
import ContactUs from "./componants/ContactUs"
import { useEffect } from "react"

const App = () => {

  useEffect(() => {
    const section = window.location.href.split("#")[1]
    if (!section) return;

    const scrollToAbout = () => {
      const aboutElement = document.getElementById(section.toLowerCase());
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    scrollToAbout();
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technology />
        <Experince />
        <Project />
        <ContactUs />
      </div>

    </div>
  )
}

export default App
