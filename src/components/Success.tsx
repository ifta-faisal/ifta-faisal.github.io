import React from 'react';
import { Trophy, Target, Users, Rocket } from 'lucide-react';

const Success = () => {
  const achievements = [
    {
      icon: <Trophy className="text-orange-500" size={48} />,
      number: "10+",
      title: "Competition Wins",
      description: "National and international drone competitions"
    },
    {
      icon: <Target className="text-orange-500" size={48} />,
      number: "20+",
      title: "Projects Completed",
      description: "Custom drones and robotics solutions"
    },
    {
      icon: <Users className="text-orange-500" size={48} />,
      number: "40+",
      title: "Students Mentored",
      description: "Through STEM education programs"
    },
    {
      icon: <Rocket className="text-orange-500" size={48} />,
      number: "3",
      title: "International Competitions",
      description: "Mars rover challenges participated"
    }
  ];

  return (
    <section id="success" className="py-20 bg-black/40 text-white">
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-6 relative z-10">
          <span className="text-white drop-shadow-lg">My </span>
          <span className="text-orange-500 drop-shadow-lg">Journey</span>
        </h2>
        <div className="w-full h-[2px] bg-white/30 mb-12 relative z-10"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                {achievement.icon}
              </div>
              <h3 className="text-5xl font-bold mb-2 text-orange-500 drop-shadow-md">{achievement.number}</h3>
              <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
              <p className="text-neutral-400">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center relative z-10">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          <h3 className="text-2xl font-bold mb-8">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#171717] border border-white/5 rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-orange-500">International Recognition</h4>
              <p className="text-neutral-400 leading-relaxed">Competed in University Rover Challenge (URC) in the United States and Anatolian Rover Challenge (ARC) in Turkey as Communication Sub Team lead.</p>
            </div>
            <div className="bg-[#171717] border border-white/5 rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-3 text-orange-500">Innovation Leadership</h4>
              <p className="text-neutral-400 leading-relaxed">Empowering makers and students with cutting-edge tools for drones and robotics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;