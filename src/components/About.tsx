import React from 'react';
import { Rocket, Award, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About My Journey
          </h2>
          <div className="w-full h-[2px] bg-white/30 mb-12 relative z-10"></div>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            A self-taught innovator pushing the boundaries of UAV technology, robotics, and autonomous systems
          </p>
        </div>

        {/* Full width content */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          <div className="absolute -left-20 top-10 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="space-y-6 relative z-10">
            <h3 className="text-3xl font-bold text-white">
              Driven by Innovation
            </h3>
            <p className="text-lg text-neutral-400 leading-relaxed">
              I'm MD Ifta Faisal a passionate UAV and robotics enthusiast with deep expertise in drone systems,
              battery technology, and autonomous machines. My journey has been largely self-taught—driven by
              relentless curiosity, hands-on learning, and a desire to build what others only imagine.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              As the team Sub Team lead of the UIU Mars Rover Team, I competed in prestigious international events
              like the Anatolian Rover Challenge (ARC) in Turkey and the University Rover Challenge (URC)
              in the United States. These experiences sharpened my technical and leadership abilities while
              immersing me in cutting-edge robotics and space exploration.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto relative">
            <h3 className="text-3xl font-bold text-white mb-6">
              Professional Affiliations
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-[#171717] border border-white/5 text-orange-500 rounded-full font-medium shadow-md">
                From Earth to Mars: Building the Future of Autonomy
              </span>
              <span className="px-6 py-3 bg-[#171717] border border-white/5 text-orange-500 rounded-full font-medium shadow-md">
                Innovating at the Edge of Exploration
              </span>
              <span className="px-6 py-3 bg-[#171717] border border-white/5 text-orange-500 rounded-full font-medium shadow-md">
                Pushing Limits in Robotics, UAVs & Beyond
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;