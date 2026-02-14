import React from 'react';
import { Trophy, Target, Users, Rocket } from 'lucide-react';

const Success = () => {
  const achievements = [
    {
      icon: <Trophy className="text-yellow-500" size={48} />,
      number: "10+",
      title: "Competition Wins",
      description: "National and international drone competitions"
    },
    {
      icon: <Target className="text-blue-500" size={48} />,
      number: "20+",
      title: "Projects Completed",
      description: "Custom drones and robotics solutions"
    },
    {
      icon: <Users className="text-green-500" size={48} />,
      number: "40+",
      title: "Students Mentored",
      description: "Through STEM education programs"
    },
    {
      icon: <Rocket className="text-red-500" size={48} />,
      number: "3",
      title: "International Competitions",
      description: "Mars rover challenges participated"
    }
  ];

  return (
    <section id="success" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          Success Metrics
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-4xl font-bold mb-2">{achievement.number}</h3>
              <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
              <p className="text-gray-400">{achievement.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-blue-400">International Recognition</h4>
              <p className="text-gray-300">Competed in University Rover Challenge (URC) in the United States and Anatolian Rover Challenge (ARC) in Turkey as Communication Sub Team lead.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-3 text-green-400">Innovation Leadership</h4>
              <p className="text-gray-300">Empowering makers and students with cutting-edge tools for drones and robotics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;