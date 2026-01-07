
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { AnimatePresence } from 'framer-motion';

export type SectionID = 'home' | 'platform' | 'solutions' | 'services' | 'about' | 'reviews' | 'analytics' | 'contact';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gamma-dark text-gamma-dark dark:text-white overflow-x-hidden">
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        onScrollTo={scrollToSection} 
      />
      <main>
        <HomePage onScrollTo={scrollToSection} />
      </main>
      <Footer onScrollTo={scrollToSection} />
    </div>
  );
};

export default App;
