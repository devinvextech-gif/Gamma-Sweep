
import React from 'react';
import { motion } from 'framer-motion';
// Fix: Use SectionID instead of non-existent PageID
import { SectionID } from '../App';

interface PageProps {
  onNavigate: (page: SectionID) => void;
}

const AboutPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-24 pt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1">
            <h1 className="text-5xl lg:text-7xl font-black mb-8">About <span className="text-gamma-blue">GammaSweep</span></h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Founded in 2018, GammaSweep was created by a team of veteran casino engineers and data scientists who saw a massive gap in the sweepstakes market.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
              Legacy providers were slow, rigid, and lacked the "premium" feel that modern players expect. We set out to build a platform that was fundamentally different: cloud-native, real-time, and infinitely customizable.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-gamma-blue">6+</p>
                <p className="text-sm text-gray-400 uppercase font-bold">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gamma-blue">200+</p>
                <p className="text-sm text-gray-400 uppercase font-bold">Employees</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gamma-blue">50M+</p>
                <p className="text-sm text-gray-400 uppercase font-bold">Bets Handled</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://picsum.photos/seed/office/800/600" className="rounded-[3rem] shadow-2xl" alt="GammaSweep Office" />
          </div>
        </div>

        <div className="text-center bg-gray-50 dark:bg-white/5 p-16 lg:p-32 rounded-[4rem]">
          <h2 className="text-4xl font-bold mb-12">Our Mission</h2>
          <p className="text-3xl lg:text-5xl font-light italic leading-tight text-gray-600 dark:text-gray-300">
            "To empower the next generation of digital entrepreneurs with the most sophisticated gaming technology on earth."
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;