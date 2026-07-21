import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Gallery from '../components/Gallery';
import Projects from '../components/Projects';
import Success from '../components/Success';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Achievements from '../components/Achievements';
import ScrollToTop from '../components/ScrollToTop';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Experience /></ScrollReveal>
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><Projects /></ScrollReveal>
      <ScrollReveal><Gallery /></ScrollReveal>
      {/* Spacer to view background image */}
      <div className="min-h-screen w-full bg-transparent relative">
        {/* Scroll Indicator */}
        <div
          className="absolute bottom-12 left-8 md:left-12 z-50 flex flex-col items-center opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-300"
          onClick={() => {
            const nextSection = document.getElementById('achievements');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <span
              className="text-gray-300 text-[10px] tracking-[0.3em] font-medium ml-1"
              style={{ writingMode: 'vertical-rl' }}
            >
              SCROLL
            </span>
            <div className="w-[1.5px] h-14 bg-gray-700/50 relative overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-scroll-line rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <ScrollReveal><Achievements /></ScrollReveal>
      <ScrollReveal><Success /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
