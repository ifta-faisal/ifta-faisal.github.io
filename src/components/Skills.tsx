import React from 'react';
import { Cpu, Battery, Cog, Rocket, Code, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Cpu className="text-orange-500" size={32} />,
      title: "UAV & Drone Systems",
      skills: ["Quadrotor Design", "Heavy-lift X8 Platforms", "Flight Controllers", "Autonomous Navigation", "FPV Systems"]
    },
    {
      icon: <Battery className="text-orange-500" size={32} />,
      title: "Battery Technology",
      skills: ["Custom Battery Packs", "Power Management", "Charging Systems"]
    },
    {
      icon: <Rocket className="text-orange-500" size={32} />,
      title: "Robotics & Space",
      skills: ["Autonomous Machines", "Sensor Integration", "Mechanical Design"]
    },
    {
      icon: <Code className="text-orange-500" size={32} />,
      title: "Programming & Software",
      skills: ["Embedded Systems", "Python", "C/C++", "ROS", "Computer Vision", "Machine Learning"]
    },
    {
      icon: <Users className="text-orange-500" size={32} />,
      title: "Leadership & Education",
      skills: ["Team Leadership", "Mentoring", "Project Management", "Competition Strategy"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black/40">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-white mb-6 relative z-10">
          Skills & Expertise
        </h2>
        <div className="w-full h-[2px] bg-white/30 mb-12 relative z-10"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Glowing gradient background that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-center mb-8">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-colors duration-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white ml-4 group-hover:text-orange-400 transition-colors duration-300">{category.title}</h3>
              </div>
              
              <ul className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-neutral-300 flex items-center text-lg group-hover:text-white transition-colors duration-300">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-4 shadow-[0_0_8px_rgba(249,115,22,0.8)] group-hover:scale-150 transition-transform duration-300"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;