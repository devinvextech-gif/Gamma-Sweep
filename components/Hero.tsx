
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative pt-12 pb-20 lg:pt-32 lg:pb-40 overflow-hidden">
      {/* Background blobs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-gamma-blue/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 animate-pulse-slow"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-gamma-aquamarine/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 animate-pulse-slow"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gamma-light dark:bg-gamma-darkBlue/30 text-gamma-blue text-sm font-bold mb-6 border border-gamma-blue/10"
            >
              <span className="flex h-2 w-2 rounded-full bg-gamma-blue animate-ping"></span>
              THE FUTURE OF SWEEPSTAKES
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-akceler-bold text-5xl lg:text-8xl mb-6 leading-[0.9] tracking-tighter"
            >
              TURBO-CHARGE <br />
              YOUR <span className="bg-clip-text text-transparent bg-gradient-to-r from-gamma-blue to-gamma-aquamarine uppercase">
                VENTURE
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Premium turnkey software built for fast deployment, deep customization, and authentic casino experiences. Scalable, secure, and ready for your enterprise.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button 
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 bg-gamma-blue hover:bg-gamma-darkBlue text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-gamma-blue/20 uppercase tracking-wide text-sm"
              >
                Get Started Now <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate('platform')}
                className="flex items-center gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all uppercase tracking-wide text-sm"
              >
                <Play size={20} className="fill-current" /> Explore Platform
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 p-4 lg:p-12">
              <img 
                src="https://picsum.photos/seed/gammasweep/1200/1000" 
                alt="GammaSweep Dashboard" 
                className="rounded-[2.5rem] shadow-2xl border border-white/20 animate-float"
              />
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 glass p-6 rounded-3xl shadow-xl border border-white/20 hidden md:block"
              >
                <p className="text-xs font-bold text-gray-400 uppercase">Uptime</p>
                <p className="text-2xl font-black text-gamma-blue">99.99%</p>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl shadow-xl border border-white/20 hidden md:block"
              >
                <p className="text-xs font-bold text-gray-400 uppercase">Revenue</p>
                <p className="text-2xl font-black text-gamma-aquamarine">+45% Efficiency</p>
              </motion.div>
            </div>
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gamma-blue/20 to-gamma-aquamarine/20 blur-[80px] rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
