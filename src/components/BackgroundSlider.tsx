import React, { useState, useEffect } from 'react';
import bg1 from '../assets/Backround/1st.jpg';
import bg2 from '../assets/Backround/2nd.jpg';
import bg3 from '../assets/Backround/3rd.webp';
import bg4 from '../assets/Backround/4th.jpeg';

const BackgroundSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: bg1, title: "Background 1" },
    { image: bg2, title: "Background 2" },
    { image: bg3, title: "Background 3" },
    { image: bg4, title: "Background 4" }
  ];

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide(prev => (prev + 1) % slides.length), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-50] overflow-hidden bg-black">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-[130vh] object-cover object-center" />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};

export default BackgroundSlider;
