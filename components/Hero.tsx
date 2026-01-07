
import React from 'react';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gamma-light dark:bg-gamma-darkBlue/30 text-gamma-blue text-sm font-semibold mb-6 border border-gamma-blue/10"
            >
              <span className="flex h-2 w-2 rounded-full bg-gamma-blue animate-ping"></span>
              The Future of Sweepstakes
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
            >
              Turbo-Charge Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gamma-blue to-gamma-aquamarine">
                Sweepstakes Venture
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Premium turnkey software built for fast deployment, deep customization, and authentic casino experiences. Scalable, secure, and ready for your enterprise.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button className="flex items-center gap-2 bg-gamma-blue hover:bg-gamma-darkBlue text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-gamma-blue/20">
                Get Started Now <ArrowRight size={20} />
              </button>
              <button className="flex items-center gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all">
                <Play size={20} className="fill-current" /> Contact Sales
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              {['Fast Deployment', 'Low GGR Advantage', '100% Customizable'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <CheckCircle2 size={18} className="text-gamma-aquamarine" />
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual (Dashboard Mockup) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex-1 w-full relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-gamma-blue/20 to-gamma-aquamarine/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-white dark:bg-gamma-dark border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-float">
              <div className="h-10 bg-gray-50 dark:bg-white/5 border-b border-gray-200 dark:border-white/10 flex items-center px-4 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              </div>
              <img 
                src="https://picsum.photos/seed/dashboard/1200/800" 
                alt="Platform Preview" 
                className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-6 left-6 p-4 glass rounded-xl shadow-lg border border-white/20"
              >
                <p className="text-xs font-bold text-gamma-blue mb-1 uppercase tracking-wider">Live Revenue</p>
                <p className="text-2xl font-bold">$128,450.00</p>
                <div className="flex items-center gap-1 text-gamma-aquamarine text-[10px] mt-1">
                  <span className="font-bold">↑ 24.5%</span> this week
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute top-1/2 right-6 p-4 glass rounded-xl shadow-lg border border-white/20 -translate-y-1/2"
              >
                <p className="text-xs font-bold text-gamma-blue mb-1 uppercase tracking-wider">Engagement</p>
                <div className="flex gap-1 h-12 items-end">
                  {[40, 70, 45, 90, 65, 80].map((h, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 1.5 + (i * 0.1), duration: 0.5 }}
                      className="w-2 bg-gamma-blue rounded-t-sm" 
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
