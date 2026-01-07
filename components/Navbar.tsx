
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onScrollTo: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, onScrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'platform', 'solutions', 'services', 'about', 'reviews', 'analytics', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Platform', id: 'platform' },
    { name: 'Solutions', id: 'solutions' },
    { name: 'Services', id: 'services' },
    { name: 'About Us', id: 'about' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Analytics', id: 'analytics' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => handleNavClick('home')}>
            <Logo variant="L" className="hidden lg:flex group-hover:scale-105 transition-transform" />
            <Logo variant="M" className="hidden sm:flex lg:hidden group-hover:scale-105 transition-transform" />
            <Logo variant="S" className="flex sm:hidden group-hover:scale-105 transition-transform" />
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors relative group ${activeSection === item.id ? 'text-gamma-blue' : (scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-600 dark:text-gray-300')}`}
              >
                <span className="group-hover:text-gamma-blue">{item.name}</span>
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gamma-blue transition-all ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ml-2"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} className="text-gamma-aquamarine" /> : <Moon size={20} />}
            </button>

            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-gamma-blue hover:bg-gamma-darkBlue text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gamma-blue/20"
            >
              Request Demo
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun size={20} className="text-gamma-aquamarine" /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 z-40 bg-white dark:bg-gamma-dark transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          <Logo variant="L" className="mb-12" />
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-2xl font-semibold hover:text-gamma-blue transition-colors ${activeSection === item.id ? 'text-gamma-blue' : ''}`}
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="bg-gamma-blue text-white px-8 py-3 rounded-full text-lg font-semibold shadow-xl shadow-gamma-blue/20 w-full max-w-xs"
          >
            Get Started
          </button>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-8 p-2"
        >
          <X size={32} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
