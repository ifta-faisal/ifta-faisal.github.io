import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { FourSquare } from 'react-loading-indicators';
import Home from './pages/Home';
import GalleryPage from './pages/GalleryPage';
import BackgroundSlider from './components/BackgroundSlider';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <BackgroundSlider />
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[1000]">
          <FourSquare color="#dd4b4b" size="medium" text="" textColor="" />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;