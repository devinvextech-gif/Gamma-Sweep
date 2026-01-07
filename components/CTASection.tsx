
import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gamma-blue rounded-[3rem] p-12 lg:p-24 overflow-hidden text-center text-white"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,100 C30,50 70,50 100,100 L100,0 L0,0 Z" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl font-black mb-6 leading-tight"
            >
              Ready to Launch Your Premium Platform?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/80 mb-12"
            >
              Join the elite circle of operators using GammaSweep. Deployment in weeks, customization for life.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto px-10 py-5 bg-white text-gamma-blue font-bold rounded-full hover:bg-gamma-aquamarine hover:text-gamma-dark transition-all shadow-2xl hover:scale-105 active:scale-95">
                Get a Custom Quote
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-gamma-darkBlue/50 text-white font-bold rounded-full border border-white/20 hover:bg-gamma-dark transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95">
                Talk to an Expert <ArrowRight size={20} />
              </button>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 text-sm text-white/60 flex items-center justify-center gap-2"
            >
              <Mail size={16} /> No obligation demo. 24h response time guaranteed.
            </motion.p>
          </div>

          {/* Decorative shapes */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-12 -left-12 w-64 h-64 bg-gamma-aquamarine/20 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
