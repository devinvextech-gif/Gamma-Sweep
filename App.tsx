
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Analytics from './components/Analytics';
import GamesCarousel from './components/GamesCarousel';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import AdvancedAnalytics from './components/AdvancedAnalytics';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

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

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gamma-dark text-gamma-dark dark:text-white overflow-x-hidden">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <Analytics />
        <GamesCarousel />
        <Services />
        <About />
        <Testimonials />
        <AdvancedAnalytics />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
