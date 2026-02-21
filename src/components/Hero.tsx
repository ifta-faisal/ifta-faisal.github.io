import React, { useState, useEffect } from 'react';
import { Facebook, Github, Linkedin, ArrowLeft, ArrowRight, X } from 'lucide-react';
import img1 from '../assets/img_1.jpg';
import img15 from '../assets/img_15.jpg';
import img16 from '../assets/img_16.jpg';
import img24 from '../assets/img_24.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const slides = [
    { image: img1, title: "Hello", subtitle: "I'm MD Ifta Faisal", description: "I specialize in UAV and robotics with deep expertise in drone systems, battery technology, and autonomous machines. My journey has been largely self-taught—driven by relentless curiosity and hands-on learning.", buttonText: "Let's Connect", email: "iftafaisal759@gmail.com" },
    { image: img24, title: "UIU Aerial Robotics Team", subtitle: "Communication Sub Team Lead", description: "Focusing on RF modules, telemetry, and drone-to-ground communication systems. I ensure every UAV stays reliably connected in mission-critical environments.", buttonText: "Let's Connect", email: "iftafaisal759@gmail.com" },
    { image: img16, title: "UIU Mars Rover", subtitle: "Communication Sub Team Lead", description: "Participated in prestigious international competitions including Anatolian Rover Challenge (ARC) in Turkey and University Rover Challenge (URC) in the United States.", buttonText: "Let's Connect", email: "iftafaisal759@gmail.com" },
    { image: img15, title: "Executive", subtitle: "UIU Robotics Club", description: "Leading a dedicated to empowering makers, students, and professionals with high-quality tools for drones, robotics, and across Bangladesh.", buttonText: "Let's Connect", email: "iftafaisal759@gmail.com" }
  ];

  const navItems = [
    { label: "EXPERIENCE & EDUCATION", id: "experience" },
    { label: "SKILLS", id: "skills" },
    { label: "SUCCESS", id: "achievements" },
    { label: "GALLERY", id: "project-gallery" },
    { label: "RESUME", href: "https://drive.google.com/file/d/1fYNlFXzAF6B1h4HSPpNdVlTj6BwzrQ2r/view?usp=sharing" }
  ];

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(([entry]) => setIsHeroVisible(entry.isIntersecting), { threshold: 0.3 });
    const heroElement = document.querySelector('#hero');
    if (heroElement) observer.observe(heroElement);

    const interval = setInterval(() => setCurrentSlide(prev => (prev + 1) % slides.length), 6000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">

      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.image} alt={slide.title} className="w-full h-[130vh] object-cover object-center" />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center pb-32">
        <div className="max-w-2xl">
          {slides.map((slide, idx) => (
            <div key={idx} className={`transition-all duration-1000 ${idx === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 absolute'}`}>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight">
                    <span className="text-orange-400">{slide.title}</span>
                  </h1>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">{slide.subtitle}</h2>
                </div>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-xl">{slide.description}</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <button onClick={() => scrollToSection('contact')} className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black transition-all duration-300 font-semibold tracking-wide">{slide.buttonText}</button>
                  <a href={`mailto:${slide.email}`} className="text-white hover:text-orange-400 transition-colors underline text-base sm:text-lg">{slide.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Desktop Nav - Bottom Left */}
      {isDesktop && (
        <div className="absolute bottom-8 left-8 z-20 flex space-x-6 sm:space-x-8 transition-all duration-500">
          {navItems.slice(0, 6).map(item => (
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 font-medium text-sm sm:text-base tracking-wide"
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id!)}
                className="text-white hover:text-orange-400 font-medium text-sm sm:text-base tracking-wide"
              >
                {item.label}
              </button>
            )
          ))}
        </div>
      )}

      {/* Slide Arrows */}
      <button onClick={prevSlide} className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 p-3 sm:p-4 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full transition-all duration-300 hover:scale-110"><ArrowLeft size={24} /></button>
      <button onClick={nextSlide} className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 p-3 sm:p-4 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full transition-all duration-300 hover:scale-110"><ArrowRight size={24} /></button>

      {/* Slide Dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-orange-400 scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`} />
        ))}
      </div>

      {/* Social Icons */}
      <div className={`fixed right-4 sm:right-8 top-8 z-50 flex space-x-4 transition-all duration-500 ${isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
        <a href="https://www.facebook.com/ifta.faishal.7" className="p-3 sm:p-4 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white hover:text-blue-400 rounded-full"><Facebook size={20} /></a>
        <a href="https://github.com/ifta-faisal" className="p-3 sm:p-4 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white hover:text-gray-300 rounded-full"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/ifta-faisal-030738255?" className="p-3 sm:p-4 bg-gray-800 bg-opacity-80 hover:bg-opacity-100 text-white hover:text-blue-600 rounded-full"><Linkedin size={20} /></a>
      </div>

      {/* Mobile Hamburger Menu */}
      {!isDesktop && (
        <>
          <button onClick={() => setIsMenuOpen(true)} className="fixed top-6 left-6 z-50 p-3 bg-black bg-opacity-70 text-white rounded-md shadow-md hover:bg-opacity-90 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Slide-in Mobile Menu */}
          <div className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-95 z-50 p-6 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white hover:text-orange-400">
                <X size={28} />
              </button>
            </div>
            <nav className="flex flex-col space-y-8 mt-4">
              {navItems.map(item => (
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl font-medium hover:text-orange-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id!)}
                    className="text-white text-xl font-medium hover:text-orange-400 transition-colors"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
