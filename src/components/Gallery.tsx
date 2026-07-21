import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images explicitly
import img4 from '../assets/img_4.jpg';
import img5 from '../assets/img_5.jpg';
import img6 from '../assets/img_6.jpg';
import img7 from '../assets/img_7.jpg';
import img8 from '../assets/img_8.jpg';
import img9 from '../assets/img_9.png';
import img10 from '../assets/img_10.jpg';
import img11 from '../assets/img_11.jpg';
import img12 from '../assets/img_12.jpg';
import img13 from '../assets/img_13.jpg';
import img14 from '../assets/img_14.jpg';
import img17 from '../assets/img_17.jpg';
import img18 from '../assets/img_18.jpeg';
import img19 from '../assets/img_19.jpeg';
import img20 from '../assets/img_20.jpeg';
import img21 from '../assets/img_21.jpeg';
import img22 from '../assets/img_22.jpeg';
import img23 from '../assets/img_23.jpeg';
import img25 from '../assets/img_25.jpg';
import img26 from '../assets/img_26.jpg';
import img27 from '../assets/img_27.jpg';
import img28 from '../assets/img_28.jpg';
import img29 from '../assets/img_29.jpg';
import img30 from '../assets/img_30.jpg';
import img31 from '../assets/img_31.jpg';
import img32 from '../assets/img_32.jpg';
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
    title: "Team Event",
    image: img25,
    description: "Team bonding at sunset"
  },
  {
    title: "Rover Testing",
    image: img26,
    description: "Field testing in desert terrain"
  },
  {
    title: "Competition Indoor",
    image: img27,
    description: "Team at competition venue"
  },
  {
    title: "Team at Sunset",
    image: img28,
    description: "Mars Rover team outdoors"
  },
  {
    title: "UIU Campus Drone",
    image: img29,
    description: "Drone flight testing at UIU"
  },
  {
    title: "UIU Campus Flight",
    image: img30,
    description: "Evening flight session at campus"
  },
  {
    title: "FPV Drone Build",
    image: img31,
    description: "Custom FPV drone in hand"
  },
  {
    title: "Field Team",
    image: img32,
    description: "Team ready for deployment"
  },
];

const Gallery = () => {
  const displayedProjects = allProjects.slice(0, 8);

  return (
    <section id="project-gallery" className="py-20 bg-black/40">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-6 relative z-10">
          Project Gallery
        </h2>
        <div className="w-full h-[2px] bg-white/30 mb-12 relative z-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {displayedProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 border border-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
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
    </section>
  );
};

export default Gallery;
