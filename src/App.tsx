import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Success from './components/Success';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Gallery />
     <Achievements/> 
      <Success />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;