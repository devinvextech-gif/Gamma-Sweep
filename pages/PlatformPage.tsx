
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Zap, Shield, Cpu, Layers, Globe } from 'lucide-react';
// Fix: Use SectionID instead of non-existent PageID
import { SectionID } from '../App';

interface PageProps {
  onNavigate: (page: SectionID) => void;
}

const PlatformPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-24 pt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black mb-6">Our <span className="text-gamma-blue">Platform</span></h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">The most robust, secure, and scalable sweepstakes engine ever built. Engineered for enterprise-grade performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
          {[
            { icon: <Server />, title: "Core Engine", desc: "A high-concurrency event-driven architecture that handles millions of transactions daily." },
            { icon: <Zap />, title: "Instant Deployment", desc: "Dockerized microservices allow for spinning up new environments in minutes." },
            { icon: <Shield />, title: "Compliance Suite", desc: "Automated KYC, AML, and geo-fencing tools built directly into the core." },
            { icon: <Cpu />, title: "Adaptive Math", desc: "Dynamic RNG algorithms that ensure fairness while optimizing for retention." },
            { icon: <Layers />, title: "Modular UI", desc: "A complete design system that allows you to swap themes and layouts on the fly." },
            { icon: <Globe />, title: "Edge Network", desc: "Global CDN delivery ensuring sub-100ms latency for players anywhere." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-gamma-blue transition-all group">
              <div className="w-16 h-16 bg-gamma-blue rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gamma-dark text-white rounded-[3rem] p-12 lg:p-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to see it in action?</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-gamma-blue text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-gamma-blue transition-all"
          >
            Book a Tech Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PlatformPage;