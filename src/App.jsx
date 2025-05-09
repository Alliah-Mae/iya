import { useEffect } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import InfoCards from "./components/countupCards";
import About from "./components/About";
import Team from "./components/Team";
import HowDoesItWork from './components/HowDoesItWork';
import Service from './components/Service';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import Backup from './components/Backup';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    if (typeof window.navbarInit === 'function') {
      window.navbarInit();
    }
  }, []);

  return (
    <>
      <main className="main" id="top">
        <div className="content">
          <Navbar/>

          <div data-bs-target="#navbar" data-bs-spy="scroll" tabindex="0">
            <Hero />
            <InfoCards/>
            <About/>
            <Team/>
            <HowDoesItWork/>
            <Service/>
            <Reviews/>
            <Pricing/>
            <Backup/>
            <Contact/>
          </div>

          <Footer/>
        </div>
      </main>
    </>
  )
}

export default App
