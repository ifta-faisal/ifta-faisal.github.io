import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FourSquare } from 'react-loading-indicators';
import bg4 from './assets/Backround/4th.webp';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import BackgroundSlider from './components/BackgroundSlider';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time, but we render the routes underneath immediately
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <BackgroundSlider />
      
      {/* Main app content renders immediately for SEO/Performance */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>

      {/* Loading screen overlays the app and fades out */}
      <div 
        className={`fixed inset-0 flex items-center justify-center z-[1000] bg-cover bg-center transition-opacity duration-700 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ backgroundImage: `url(${bg4})` }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <FourSquare color="#dd4b4b" size="medium" text="" textColor="" />
        </div>
      </div>
    </Router>
  );
}

export default App;