
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users, Rocket } from 'lucide-react';
// Fix: Use SectionID instead of non-existent PageID
import { SectionID } from '../App';

interface PageProps {
  onNavigate: (page: SectionID) => void;
}

const SolutionsPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-24 pt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black mb-6">Business <span className="text-gamma-aquamarine">Solutions</span></h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">Tailored strategies and turnkey implementations for every stage of your growth.</p>
        </div>

        <div className="space-y-12">
          {[
            { 
              title: "White-Label Startup", 
              desc: "Everything you need to go live. From domain setup to game selection, we handle the heavy lifting while you focus on marketing.",
              icon: <Rocket />,
              stats: ["14 Day Launch", "Full Brand Autonomy", "24/7 Support"]
            },
            { 
              title: "Enterprise Migration", 
              desc: "Outgrown your current provider? Our migration specialists ensure zero downtime and 100% data integrity during the move to GammaSweep.",
              icon: <Briefcase />,
              stats: ["Lossless Migration", "Optimized Costs", "Custom Dev"]
            },
            { 
              title: "Scaling Operations", 
              desc: "For high-volume operators needing custom infrastructure, dedicated shards, and advanced BI reporting tools.",
              icon: <TrendingUp />,
              stats: ["Unlimited Traffic", "Dedicated Servers", "Private Cloud"]
            }
          ].map((sol, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-12 p-12 bg-gray-50 dark:bg-white/5 rounded-[2.5rem] items-center">
              <div className="w-24 h-24 bg-gamma-blue/10 flex items-center justify-center rounded-3xl text-gamma-blue">
                {React.cloneElement(sol.icon as React.ReactElement<any>, { size: 48 })}
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4">{sol.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 text-lg">{sol.desc}</p>
                <div className="flex flex-wrap gap-4">
                  {sol.stats.map((s, j) => (
                    <span key={j} className="px-4 py-2 bg-gamma-blue/5 border border-gamma-blue/20 rounded-full text-sm font-bold text-gamma-blue">{s}</span>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gamma-dark dark:bg-white text-white dark:text-gamma-dark font-bold rounded-2xl hover:scale-105 transition-all"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SolutionsPage;