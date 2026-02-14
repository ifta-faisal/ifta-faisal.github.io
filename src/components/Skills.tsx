import React from 'react';
import { Cpu, Battery, Cog, Rocket, Code, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Cpu className="text-blue-600" size={32} />,
      title: "UAV & Drone Systems",
      skills: ["Quadrotor Design", "Heavy-lift X8 Platforms", "Flight Controllers", "Autonomous Navigation", "FPV Systems"]
    },
    {
      icon: <Battery className="text-green-600" size={32} />,
      title: "Battery Technology",
      skills: ["Custom Battery Packs", "Power Management", "Charging Systems"]
    },
    {
      icon: <Rocket className="text-red-600" size={32} />,
      title: "Robotics & Space",
      skills: [ "Autonomous Machines", "Sensor Integration", "Mechanical Design"]
    },
    {
      icon: <Code className="text-purple-600" size={32} />,
      title: "Programming & Software",
      skills: ["Embedded Systems", "Python", "C/C++", "ROS", "Computer Vision", "Machine Learning"]
    },
    {
      icon: <Users className="text-indigo-600" size={32} />,
      title: "Leadership & Education",
      skills: ["Team Leadership", "Mentoring", "Project Management", "Competition Strategy"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-700 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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