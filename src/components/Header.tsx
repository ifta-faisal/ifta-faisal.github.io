import React, { useState, useEffect } from 'react';
import { Facebook, Youtube, Linkedin } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-end items-center">
          <ul className="flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('experience')}
                className={`font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-gray-600'
                  }`}
              >
                EXPERIENCE & EDUCATION
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className={`font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-gray-600'
                  }`}
              >
                SKILLS
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-gray-600'
                  }`}
              >
                GALLERY
              </button>
            </li>

            <li>
              <a
                href="https://drive.google.com/file/d/1fYNlFXzAF6B1h4HSPpNdVlTj6BwzrQ2r/preview"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-gray-600'
                  }`}
              >
                RESUME
              </a>
            </li>

            <li>
              <button
                onClick={() => scrollToSection('achievements')}
                className={`font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-gray-700' : 'text-gray-600'
                  }`}
              >
                SUCCESS
              </button>
            </li>


          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
