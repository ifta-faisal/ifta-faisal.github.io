import React from 'react';
import { Github, FolderGit2 } from 'lucide-react';
import imgRescue from '../assets/projects/Rescue.webp';
import imgAether from '../assets/projects/Aether.webp';
import imgDeadCat from '../assets/projects/Dead_cat.webp';
import imgAyojok from '../assets/projects/Ayojok.webp';
import imgMetro from '../assets/projects/Metro.webp';
import CreditCard from '../assets/projects/creditcard.webp';

const projects = [
  {
    title: "Rescue Drone",
    description: "Custom-built robotic arm for pick-and-place automation. Designed for precision and modularity.",
    image: imgRescue,
    githubUrl: "https://github.com/ifta-faisal/Rescue_Drone"
  },
  {
    title: "AETHER_UAV",
    description: "AETHER UAV is a versatile, multi-role drone platform designed to support civil and military operations such as surveillance, rescue missions, firefighting, and real-time threat assessment. It is designed for modularity, portability, and adaptability, allowing it to function in hazardous environments where human intervention is difficult or risky.",
    image: imgAether,
    githubUrl: "https://github.com/ifta-faisal/AETHER_UAV"
  },
  {
    title: "Project-Dead-Cat",
    description: "Welcome to the Dead Cat Drone Project! This lightweight, custom-built Dead Cat frame drone is designed for smooth, stable flights with excellent battery efficiency, giving you extended flight times. The splayed arm design minimizes propeller interference in camera footage, making it ideal for aerial videography and FPV flying. This documentation will guide you through building and optimizing the drone, making it easy to recreate or customize for your own flying experience.",
    image: imgDeadCat,
    githubUrl: "https://github.com/ifta-faisal/Project-Dead-Cat"
  },
  {
    title: "Credit_Card_Fraud_Detection",
    description: "The primary goal of this project is to build and evaluate multiple machine learning models to classify credit card transactions as either legitimate or fraudulent. Because fraudulent transactions make up less than 0.2% of all data, the project will specifically focus on addressing extreme class imbalance.",
    image: CreditCard,
    githubUrl: "https://github.com/ifta-faisal/Credit_Card_Fraud_Detection"
  },
  {
    title: "Ayojok-A-Wedding-plannig-System",
    description: "A full-stack wedding planning application with user authentication, event management, vendor booking, and database integration.",
    image: imgAyojok,
    githubUrl: "https://github.com/ifta-faisal/Ayojok-A-Wedding-plannig-System"
  },
  {
    title: "Metro-Police",
    description: "The Metro Police System is a full-stack web application designed to modernize and digitize police services for the Bangladesh Metro Police. This platform bridges the gap between citizens and law enforcement, providing online access to essential services like crime reporting, traffic fine management, and emergency response.",
    image: imgMetro,
    githubUrl: "https://github.com/ifta-faisal/Metro-Police"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-6 relative z-10">
          Projects
        </h2>
        <div className="w-full h-[2px] bg-white/30 mb-12 relative z-10"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-transparent border border-white/20 rounded shadow-sm hover:shadow-orange-500/10 transition-shadow duration-300 flex flex-col overflow-hidden backdrop-blur-sm hover:-translate-y-1 transform transition-transform"
            >
              <div className="w-full">
                <img 
                  loading="lazy"
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-normal text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors text-xs font-semibold tracking-wide"
                >
                  <Github size={16} className="mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
