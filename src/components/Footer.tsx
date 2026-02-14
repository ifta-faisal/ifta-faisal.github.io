import React from 'react';
import { Facebook, Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MD Ifta Faisal</h3>
            <p className="text-gray-400 leading-relaxed">
              UAV and robotics expert committed to advancing innovation, fostering education, and redefining the limits of autonomous technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#project-gallery" className="hover:text-white transition-colors">Project Gallery</a></li>
              <li><a href="#success" className="hover:text-white transition-colors">Success</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                < Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Email:iftafaisal759@gmail.com<br />
              Phone: +8801303897972
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            All Rights Reserved By MD Ifta Faisal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
