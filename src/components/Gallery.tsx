import React from 'react';

// Import images explicitly (put these files inside `src/assets/` folder)
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

const Gallery = () => {
  const projects = [
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
    } ,
       {
      title: "ARC 2025",
      image: img21,
      description: "Anatolian Rover Challenge 2025"
    },   
     {
      title: "ARC 2025",
      image: img22,
      description: "Anatolian Rover Challenge 2025"
    } ,
       {
      title: "ARC 2025",
      image: img23,
      description: "Anatolian Rover Challenge 2025"
    },
  ];

  return (
    <section id="project-gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
          Gallery
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
