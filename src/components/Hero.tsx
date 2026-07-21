import React, { useState, useEffect } from 'react';
import { Facebook, Github, Linkedin, ArrowLeft, ArrowRight, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img_1.webp';
import img15 from '../assets/img_15.webp';
import img16 from '../assets/img_16.webp';
import img24 from '../assets/img_24.webp';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const slides = [
    {
      image: img1, title: "Hello", subtitle: "I'm MD Ifta Faisal",
      description: "I specialize in UAV and robotics with deep expertise in drone systems, battery technology, and autonomous machines. My journey has been largely self-taught—driven by relentless curiosity and hands-on learning.",
      buttonText: "Let's Connect", email: "iftafaisal759@gmail.com",
      stats: [{ label: "EXPERIENCE", value: "4+ YRS" }, { label: "PROJECTS", value: "10+" }, { label: "AWARDS", value: "3+" }]
    },
    {
      image: img24, title: "UIU Aerial", subtitle: "Robotics Team",
      description: "Focusing on RF modules, telemetry, and drone-to-ground communication systems. I ensure every UAV stays reliably connected in mission-critical environments.",
      buttonText: "Let's Connect", email: "iftafaisal759@gmail.com",
      stats: [{ label: "MEMBERS", value: "20+" }, { label: "PROJECTS", value: "6+" }, { label: "AWARDS", value: "2+" }]
    },
    {
      image: img16, title: "UIU Mars", subtitle: "Rover Team",
      description: "Participated in prestigious international competitions including Anatolian Rover Challenge (ARC) in Turkey and University Rover Challenge (URC) in the United States.",
      buttonText: "Let's Connect", email: "iftafaisal759@gmail.com",
      stats: [{ label: "COMPETITIONS", value: "3+" }, { label: "RANKING", value: "TOP 5" }, { label: "AWARDS", value: "2+" }]
    },
    {
      image: img15, title: "Executive", subtitle: "UIU Robotics Club",
      description: "Leading a dedicated team to empowering makers, students, and professionals with high-quality tools for drones, robotics, and aerospace across Bangladesh.",
      buttonText: "Let's Connect", email: "iftafaisal759@gmail.com",
      stats: [{ label: "MEMBERS", value: "100+" }, { label: "EVENTS", value: "15+" }, { label: "WORKSHOPS", value: "10+" }]
    }
  ];

  const navItems = [
    { label: "EXPERIENCE & EDUCATION", id: "experience" },
    { label: "SKILLS", id: "skills" },
    { label: "SUCCESS", id: "achievements" },
    { label: "GALLERY", to: "/gallery" },
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
            <img loading={idx === 0 ? "eager" : "lazy"} src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center pt-8 pb-20">
        {/* Subtle glowing effect behind text */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-3xl pl-4 md:pl-8 lg:pl-12">
          {slides.map((slide, idx) => (
            <div key={idx} className={`transition-all duration-1000 ${idx === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 absolute'}`}>
              <div className="space-y-6">
                <div className="space-y-1">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none tracking-tight drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-500 leading-none tracking-tight drop-shadow-lg">
                    {slide.subtitle}
                  </h2>
                </div>

                {/* Orange Divider */}
                <div className="w-32 h-1.5 bg-orange-500 rounded-full mt-4 mb-6 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>

                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-md">
                  {slide.description}
                </p>



                {/* Buttons Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6 relative z-20">
                  <button onClick={() => scrollToSection('contact')} className="flex items-center px-8 py-3.5 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold rounded-full transition-all duration-300 tracking-wide uppercase text-sm shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                    {slide.buttonText} <ArrowRight size={16} className="ml-2" />
                  </button>
                  <a href={`mailto:${slide.email}`} className="flex items-center px-8 py-3.5 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-bold rounded-full transition-all duration-300 tracking-wide uppercase text-sm backdrop-blur-sm">
                    Email Me <ArrowRight size={16} className="ml-2" />
                  </a>
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
                className="text-white hover:text-orange-500 font-medium text-sm sm:text-base tracking-wide transition-colors"
              >
                {item.label}
              </a>
            ) : item.to ? (
              <Link
                key={item.label}
                to={item.to}
                className="text-white hover:text-orange-500 font-medium text-sm sm:text-base tracking-wide transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id!)}
                className="text-white hover:text-orange-500 font-medium text-sm sm:text-base tracking-wide transition-colors"
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
          <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-orange-500 scale-125 shadow-[0_0_10px_rgba(249,115,22,0.8)]' : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`} />
        ))}
      </div>

      {/* Social Icons */}
      {isDesktop && (
        <div className={`fixed right-4 sm:right-8 top-8 z-50 flex space-x-4 transition-all duration-500 ${isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
          <a href="https://www.facebook.com/ifta.faishal.7" className="p-3 sm:p-4 bg-white/10 backdrop-blur-md border border-white/10 hover:border-orange-500/50 text-white hover:text-orange-500 rounded-full transition-all"><Facebook size={20} /></a>
          <a href="https://github.com/ifta-faisal" className="p-3 sm:p-4 bg-white/10 backdrop-blur-md border border-white/10 hover:border-orange-500/50 text-white hover:text-orange-500 rounded-full transition-all"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/ifta-faisal-030738255?" className="p-3 sm:p-4 bg-white/10 backdrop-blur-md border border-white/10 hover:border-orange-500/50 text-white hover:text-orange-500 rounded-full transition-all"><Linkedin size={20} /></a>
        </div>
      )}

      {/* Mobile Hamburger Menu */}
      {!isDesktop && (
        <>
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`fixed top-6 right-6 z-50 p-2 text-white bg-black/30 backdrop-blur-sm rounded-md shadow-md hover:bg-black/50 transition-all duration-300 ${isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          {/* Mobile Menu Drawer */}
          <div
            className={`fixed top-0 right-0 h-full w-[280px] bg-[#171717] border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            {/* Drawer Header */}
            <div className="px-6 py-6 flex justify-between items-center border-b border-white/10">
              <span className="text-orange-500 font-bold text-lg tracking-wide uppercase">MENU</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-1.5 border border-white/10 rounded-md text-gray-400 hover:text-orange-500 transition-colors"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto">
              <ul className="flex flex-col">
                {navItems.map((item, index) => (
                  <li key={index} className="border-b border-gray-800">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex justify-between items-center py-4 px-6 text-gray-300 hover:text-orange-500 font-bold text-xs tracking-widest uppercase group"
                      >
                        {item.label}
                        <ChevronRight size={14} strokeWidth={2} className="text-gray-500 group-hover:text-orange-500 transition-colors" />
                      </a>
                    ) : item.to ? (
                      <Link
                        to={item.to}
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full flex justify-between items-center py-4 px-6 text-gray-300 hover:text-orange-500 font-bold text-xs tracking-widest uppercase group text-left"
                      >
                        {item.label}
                        <ChevronRight size={14} strokeWidth={2} className="text-gray-500 group-hover:text-orange-500 transition-colors" />
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.id!)}
                        className="w-full flex justify-between items-center py-4 px-6 text-gray-300 hover:text-orange-500 font-bold text-xs tracking-widest uppercase group text-left"
                      >
                        {item.label}
                        <ChevronRight size={14} strokeWidth={2} className="text-gray-500 group-hover:text-orange-500 transition-colors" />
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              {/* Social Icons in Drawer */}
              <div className="flex justify-center space-x-6 py-8 mt-4">
                <a href="https://www.facebook.com/ifta.faishal.7" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-orange-500/20 text-gray-300 hover:text-orange-500 rounded-full transition-colors border border-transparent hover:border-orange-500/50">
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a href="https://github.com/ifta-faisal" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-orange-500/20 text-gray-300 hover:text-orange-500 rounded-full transition-colors border border-transparent hover:border-orange-500/50">
                  <Github size={20} strokeWidth={1.5} />
                </a>
                <a href="https://www.linkedin.com/in/ifta-faisal-030738255?" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-orange-500/20 text-gray-300 hover:text-orange-500 rounded-full transition-colors border border-transparent hover:border-orange-500/50">
                  <Linkedin size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
