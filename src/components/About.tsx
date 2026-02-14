import React from 'react';
import { Rocket, Award, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About My Journey
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A self-taught innovator pushing the boundaries of UAV technology, robotics, and autonomous systems
          </p>
        </div>

        {/* Full width content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Driven by Innovation
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm MD Ifta Faisal a passionate UAV and robotics enthusiast with deep expertise in drone systems, 
              battery technology, and autonomous machines. My journey has been largely self-taught—driven by 
              relentless curiosity, hands-on learning, and a desire to build what others only imagine.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As the team Sub Team lead of the UIU Mars Rover Team, I competed in prestigious international events 
              like the Anatolian Rover Challenge (ARC) in Turkey and the University Rover Challenge (URC) 
              in the United States. These experiences sharpened my technical and leadership abilities while 
              immersing me in cutting-edge robotics and space exploration.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Professional Affiliations
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-blue-100 text-blue-800 rounded-full font-medium">
                From Earth to Mars: Building the Future of Autonomy
              </span>
              <span className="px-6 py-3 bg-orange-100 text-orange-800 rounded-full font-medium">
                Innovating at the Edge of Exploration
              </span>
              <span className="px-6 py-3 bg-purple-100 text-purple-800 rounded-full font-medium">
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