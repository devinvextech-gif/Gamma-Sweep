
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Platform', href: '#features' },
    { name: 'Solutions', href: '#analytics' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Analytics', href: '#advanced-analytics' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer group">
            {/* Desktop Logo */}
            <Logo variant="L" className="hidden lg:flex group-hover:scale-105 transition-transform" />
            
            {/* Tablet Logo */}
            <Logo variant="M" className="hidden sm:flex lg:hidden group-hover:scale-105 transition-transform" />
            
            {/* Mobile Logo */}
            <Logo variant="S" className="flex sm:hidden group-hover:scale-105 transition-transform" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${scrolled ? 'text-gray-700 dark:text-gray-200' : 'text-gray-600 dark:text-gray-300'}`}
              >
                <span className="group-hover:text-gamma-blue">{item.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gamma-blue transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="bg-gamma-blue hover:bg-gamma-darkBlue text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gamma-blue/20">
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
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

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white dark:bg-gamma-dark transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          <Logo variant="L" className="mb-12" />
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-semibold hover:text-gamma-blue transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button className="bg-gamma-blue text-white px-8 py-3 rounded-full text-lg font-semibold shadow-xl shadow-gamma-blue/20 w-full max-w-xs">
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
