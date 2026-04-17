import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathon from './components/Hackathon';
import Services from './components/Services';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-[#ffcc00] selection:text-black">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
       
      </a>

      <ParticleBackground />

      <Navbar />

      <main id="main-content" className="flex flex-col py-12 md:py-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
