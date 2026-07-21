import React, { useCallback, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import images explicitly
import img4 from '../assets/img_4.webp';
import img5 from '../assets/img_5.webp';
import img6 from '../assets/img_6.webp';
import img7 from '../assets/img_7.webp';
import img8 from '../assets/img_8.webp';
import img9 from '../assets/img_9.webp';
import img10 from '../assets/img_10.webp';
import img11 from '../assets/img_11.webp';
import img12 from '../assets/img_12.webp';
import img13 from '../assets/img_13.webp';
import img14 from '../assets/img_14.webp';
import img17 from '../assets/img_17.webp';
import img18 from '../assets/img_18.webp';
import img19 from '../assets/img_19.webp';
import img20 from '../assets/img_20.webp';
import img21 from '../assets/img_21.webp';
import img22 from '../assets/img_22.webp';
import img23 from '../assets/img_23.webp';
import img25 from '../assets/img_25.webp';
import img26 from '../assets/img_26.webp';
import img27 from '../assets/img_27.webp';
import img28 from '../assets/img_28.webp';
import img29 from '../assets/img_29.webp';
import img30 from '../assets/img_30.webp';
import img31 from '../assets/img_31.webp';
import img32 from '../assets/img_32.webp';
import img33 from '../assets/img_33.webp';
import img35 from '../assets/img_35.webp';
import img36 from '../assets/img_36.webp';
import img37 from '../assets/img_37.webp';
import img38 from '../assets/img_38.webp';
import img39 from '../assets/img_39.webp';
import img42 from '../assets/img_42.webp';
import img43 from '../assets/img_43.webp';
import img44 from '../assets/img_44.webp';
import img45 from '../assets/img_45.webp';
export const allProjects = [
  {
    title: "Mars Rover Competition 2024",
    image: img4,
    description: "UIU Mars Rover Team competing in international challenges"
  },
  {
    title: "Custom Drone Design",
    image: img5,
    description: "High-performance quadrotor with custom Frame"
  },
  {
    title: "Mars Rover Competition 2025",
    image: img6,
    description: "UIU Mars Rover Team competing in international challenges"
  },
  {
    title: "Custom Drone",
    image: img9,
    description: "Custom made Surveillance Drone"
  },
  {
    title: "FPV Drone",
    image: img8,
    description: "Custom Made FPV Drone"
  },
  {
    title: "Competition Success",
    image: img7,
    description: "University Rover Challenge 2025 Best Science Team"
  },
  {
    title: "Team Of 2025",
    image: img17,
    description: "UIU Mars Rover Team"
  },
  {
    title: "Custom Drones",
    image: img14,
    description: "High-performance quadrotors"
  },
  {
    title: "URC 2024",
    image: img10,
    description: "University Rover Challenge 2024"
  },
  {
    title: "URC 2024",
    image: img13,
    description: "University Rover Challenge 2024"
  },
  {
    title: "URC 2025",
    image: img12,
    description: "University Rover Challenge 2025"
  },
  {
    title: "URC 2025",
    image: img11,
    description: "University Rover Challenge 2025"
  },
  {
    title: "ARC 2025",
    image: img18,
    description: "Anatolian Rover Challenge 2025"
  },
  {
    title: "ARC 2025",
    image: img19,
    description: "Anatolian Rover Challenge 2025"
  },
  {
    title: "ARC 2025",
    image: img20,
    description: "Anatolian Rover Challenge 2025"
  },
  {
    title: "ARC 2025",
    image: img21,
    description: "Anatolian Rover Challenge 2025"
  },
  {
    title: "ARC 2025",
    image: img22,
    description: "Anatolian Rover Challenge 2025"
  },
  {
    title: "ARC 2025",
    image: img23,
    description: "Anatolian Rover Challenge 2025"
  },
  {
    title: "With Akib Zaman Sir",
    image: img25,
    description: "URC 2024 USA"
  },
  {
    title: "URC 2024 USA",
    image: img26,
    description: "Team UMRT after Science Mission"
  },
  {
    title: "URC 2025 USA",
    image: img27,
    description: "On the way to USA to attend URC 2025"
  },
  {
    title: "URC 2025 USA",
    image: img28,
    description: "UIU Mars Rover team "
  },
  {
    title: "Test Flying",
    image: img29,
    description: "Drone flight testing at UIU"
  },
  {
    title: "Tiny Whoop ",
    image: img30,
    description: "Tiny Whoop "
  },
  {
    title: "FPV Drone Build",
    image: img31,
    description: "Custom FPV drone in hand"
  },
  {
    title: "URC 2025",
    image: img32,
    description: "Judge Of URC Science Mission 2025"
  },
  {
    title: "Axios",
    image: img33,
    description: "UIU Mars Rover"
  },
  {
    title: "Flying Test in USA",
    image: img35,
    description: "Preparing For URC 2025 Delivery Mission"
  },
  {
    title: "Aether",
    image: img36,
    description: "Long Range UAV with Dropping and Tracking System"
  },
  {
    title: "UMRT 2026",
    image: img37,
    description: "Axios With Mark2"
  },
  {
    title: "CSE Project Show",
    image: img38,
    description: "3rd Position In SAD Lab"
  },
  {
    title: "CSE Project Show",
    image: img39,
    description: "UIU CSE Project Show 2025"
  },
  {
    title: "",
    image: img42,
    description: ""
  },
  {
    title: "Axios",
    image: img43,
    description: "UIU Mars Rover "
  },
  {
    title: "CSE Project Show",
    image: img44,
    description: "UIU CSE Project Show 2025"
  },
  {
    title: "CSE Project Show",
    image: img45,
    description: "CSE Project Show"
  },
];

const Gallery = () => {
  const displayedProjects = allProjects.slice(0, 8);
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

  return (
    <section id="project-gallery" className="py-20 bg-black/40">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-6 relative z-10">
          Project Gallery
        </h2>
        <div className="w-full h-[2px] bg-white/30 mb-12 relative z-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {displayedProjects.map((project, index) => (
            <div key={index} onClick={() => openGallery(index)} className="group relative overflow-hidden rounded-xl shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 border border-white/5 cursor-pointer">
              <img
                loading="lazy"
                src={project.image}
                alt={project.title}
                className="w-full h-40 md:h-48 lg:h-40 xl:h-44 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-lg font-bold text-orange-500 mb-1">{project.title}</h3>
                  <p className="text-xs text-neutral-300 opacity-90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {allProjects.length > 8 && (
          <div className="mt-16 flex justify-center relative z-10">
            <Link
              to="/gallery"
              className="flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] transition-all duration-300 transform hover:scale-105 group"
            >
              See More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        )}
      </div>

      <LightGallery
        onInit={onInit}
        dynamic={true}
        dynamicEl={dynamicEl}
        plugins={[lgZoom, lgThumbnail]}
      />
    </section>
  );
};

export default Gallery;
