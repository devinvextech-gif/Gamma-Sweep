
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronRight } from 'lucide-react';
// Fix: Use SectionID instead of non-existent PageID
import { SectionID } from '../App';

interface PageProps {
  onNavigate: (page: SectionID) => void;
}

const ReviewsPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-24 pt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black mb-6">Client <span className="text-gamma-aquamarine">Reviews</span></h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">See why industry leaders trust GammaSweep for their core operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            { name: "Sarah Chen", role: "CEO, Nexus Gaming", img: "1", text: "The deployment speed alone saved us 6 months of development time." },
            { name: "Marcus Thorne", role: "VP Ops, Global Play", img: "2", text: "Their low GGR model changed our bottom line overnight. Highly recommended." },
            { name: "Elena Rodriguez", role: "Founder, Royal Slots", img: "3", text: "The most authentic casino feel I've seen in a sweepstakes platform." },
            { name: "David Kim", role: "Tech Lead, Alpha Bet", img: "4", text: "Robust APIs and incredible documentation. Integration was a breeze." }
          ].map((rev, i) => (
            <div key={i} className="p-12 bg-white dark:bg-gamma-dark border border-gray-100 dark:border-white/10 rounded-[3rem] shadow-xl">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={20} className="fill-gamma-blue text-gamma-blue" />)}
              </div>
              <p className="text-2xl font-medium mb-10 leading-relaxed italic">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <img src={`https://i.pravatar.cc/150?u=${rev.img}`} className="w-16 h-16 rounded-full" alt={rev.name} />
                <div>
                  <h4 className="font-bold text-xl">{rev.name}</h4>
                  <p className="text-gray-400">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate('contact')}
            className="group inline-flex items-center gap-2 text-2xl font-bold text-gamma-blue hover:gap-4 transition-all"
          >
            Join these leaders today <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewsPage;