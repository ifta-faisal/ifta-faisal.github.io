import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { allProjects } from '../components/Gallery';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const GalleryPage = () => {
  const lgRef = useRef<any>(null);

  const onInit = useCallback((detail: any) => {
    if (detail) {
      lgRef.current = detail.instance;
    }
  }, []);

  const openGallery = useCallback((index: number) => {
    lgRef.current?.openGallery(index);
  }, []);

  const dynamicEl = allProjects.map(project => ({
    src: project.image,
    thumb: project.image,
    subHtml: `<h4>${project.title}</h4><p>${project.description}</p>`
  }));

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black/40 flex flex-col relative pt-20">
      <Header />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="flex-grow container mx-auto px-6 py-10 relative z-10">

        <h1 className="text-4xl lg:text-5xl font-bold text-center text-white mb-6 relative z-10">
          Gallery
        </h1>
        <div className="w-full h-[2px] bg-white/30 mb-12 relative z-10"></div>

        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 space-y-4 mb-20">
          {allProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 border border-white/5 cursor-pointer break-inside-avoid" onClick={() => openGallery(index)}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold text-orange-500 mb-2">{project.title}</h3>
                  <p className="text-sm text-neutral-300 opacity-90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToTop />
      <Footer />
      <LightGallery
        onInit={onInit}
        dynamic={true}
        dynamicEl={dynamicEl}
        plugins={[lgZoom, lgThumbnail]}
      />
    </div>
  );
};

export default GalleryPage;
