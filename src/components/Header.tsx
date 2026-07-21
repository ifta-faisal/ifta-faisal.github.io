import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolled past the hero section (approx 1 screen height)
      setIsScrolled(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'EXPERIENCE & EDUCATION', id: 'experience' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'GALLERY', to: '/gallery' },
    { name: 'RESUME', id: 'resume', isExternal: true, href: 'https://drive.google.com/file/d/1fYNlFXzAF6B1h4HSPpNdVlTj6BwzrQ2r/view?usp=sharing' },
    { name: 'SUCCESS', id: 'achievements' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-transform duration-500 ease-in-out bg-[#0a0a0a] border-b border-white/10 ${(isScrolled || !isHomePage) ? 'translate-y-0 shadow-xl shadow-black/50' : '-translate-y-full'
          }`}
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo/Brand for the sticky header */}
          <Link
            to="/"
            onClick={() => {
              if (isHomePage) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="text-xl font-bold text-white tracking-wider hover:text-orange-500 transition-colors"
          >
            Ifta Faisal
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-white hover:text-orange-500 transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-300 transition-colors hover:text-orange-500 text-sm tracking-wide uppercase"
                  >
                    {item.name}
                  </a>
                ) : item.to ? (
                  <Link
                    to={item.to}
                    className="font-medium text-gray-300 transition-colors hover:text-orange-500 text-sm tracking-wide uppercase"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id!)}
                    className="font-medium text-gray-300 transition-colors hover:text-orange-500 text-sm tracking-wide uppercase"
                  >
                    {item.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#171717] border-l border-white/10 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Drawer Header */}
        <div className="px-6 py-6 flex justify-between items-center border-b border-white/10">
          <span className="text-orange-500 font-bold text-lg tracking-wide uppercase">MENU</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 border border-white/10 rounded-md text-gray-400 hover:text-orange-500 transition-colors"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto">
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li key={index} className="border-b border-white/10">
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex justify-between items-center py-4 px-6 text-gray-300 hover:text-orange-500 font-bold text-xs tracking-widest uppercase group"
                  >
                    {item.name}
                    <ChevronRight size={14} strokeWidth={2} className="text-gray-500 group-hover:text-orange-500 transition-colors" />
                  </a>
                ) : item.to ? (
                  <Link
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex justify-between items-center py-4 px-6 text-gray-300 hover:text-orange-500 font-bold text-xs tracking-widest uppercase group text-left"
                  >
                    {item.name}
                    <ChevronRight size={14} strokeWidth={2} className="text-gray-500 group-hover:text-orange-500 transition-colors" />
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id!)}
                    className="w-full flex justify-between items-center py-4 px-6 text-gray-300 hover:text-orange-500 font-bold text-xs tracking-widest uppercase group text-left"
                  >
                    {item.name}
                    <ChevronRight size={14} strokeWidth={2} className="text-gray-500 group-hover:text-orange-500 transition-colors" />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
