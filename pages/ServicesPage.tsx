
import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, PenTool, ShieldCheck, Database, Layout, Search } from 'lucide-react';
// Fix: Use SectionID instead of non-existent PageID
import { SectionID } from '../App';

interface PageProps {
  onNavigate: (page: SectionID) => void;
}

const ServicesPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-24 pt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black mb-6">Expert <span className="text-gamma-blue">Services</span></h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">Beyond software, we provide the human expertise to ensure your business thrives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Headphones />, title: "24/7 Managed Operations", desc: "Our team monitors your platform around the clock, handling technical incidents and performance tuning." },
            { icon: <PenTool />, title: "Custom Game Dev", desc: "Looking for something unique? Our studio can build exclusive games tailored to your audience." },
            { icon: <ShieldCheck />, title: "Regulatory Consulting", desc: "Navigate the complex legal landscape with our compliance experts who stay on top of global laws." },
            { icon: <Database />, title: "Data Management", desc: "Full database administration and backup services to ensure your player data is always safe." },
            { icon: <Layout />, title: "UX/UI Rebranding", desc: "Our designers can give your existing site a modern, premium face-lift using our modular UI system." },
            { icon: <Search />, title: "Market Analysis", desc: "Get data-backed insights on market trends, competitor behavior, and player acquisition strategies." }
          ].map((serv, i) => (
            <div key={i} className="p-10 border border-gray-100 dark:border-white/10 rounded-[2rem] hover:bg-gamma-light dark:hover:bg-gamma-darkBlue/20 transition-all">
              <div className="text-gamma-blue mb-6">
                {React.cloneElement(serv.icon as React.ReactElement<any>, { size: 40 })}
              </div>
              <h3 className="text-2xl font-bold mb-4">{serv.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{serv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;