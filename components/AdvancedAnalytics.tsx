
import React from 'react';
import { Eye, Shield, BarChart2, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

const AdvancedAnalytics: React.FC = () => {
  return (
    <section id="advanced-analytics" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-gamma-blue font-bold tracking-widest uppercase text-sm mb-4">Intelligence Layer</h2>
            <h3 className="text-4xl font-extrabold mb-6 leading-tight">Proactive Monitoring & AI-Driven Insights</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg leading-relaxed">
              Unlock deep business intelligence with our advanced analytics suite. Monitor real-time player behavior, prevent fraud before it happens, and optimize game math dynamically.
            </p>

            <div className="space-y-8">
              {[
                { 
                  title: 'Real-time Telemetry', 
                  desc: 'Track every click and bet as it happens across your entire global network.',
                  icon: <Eye className="text-gamma-blue" />
                },
                { 
                  title: 'Fraud Detection Engine', 
                  desc: 'Proprietary AI models identifying suspicious patterns and ensuring fair play.',
                  icon: <Shield className="text-gamma-aquamarine" />
                },
                { 
                  title: 'Economic Forecasting', 
                  desc: 'Predict monthly GGR with 95%+ accuracy using historical and seasonal data.',
                  icon: <BarChart2 className="text-gamma-blue" />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="absolute -inset-10 bg-gamma-blue/5 blur-3xl rounded-full"></div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative p-6 glass rounded-[2.5rem] border border-gray-200 dark:border-white/10 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h5 className="font-bold">Operations Hub</h5>
                <PieChart size={20} className="text-gray-400" />
              </div>
              
              <div className="space-y-6">
                <div className="h-48 bg-gamma-dark/5 dark:bg-white/5 rounded-2xl flex items-end justify-between px-6 pb-4">
                  {[30, 60, 45, 90, 75, 40, 85].map((h, i) => (
                    <div key={i} className="w-4 bg-gamma-blue/30 rounded-t-sm relative group">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                        className="absolute bottom-0 left-0 w-full bg-gamma-blue group-hover:bg-gamma-aquamarine transition-all rounded-t-sm" 
                      />
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    className="p-4 bg-gamma-light dark:bg-gamma-darkBlue/20 rounded-2xl"
                  >
                    <p className="text-[10px] uppercase font-bold text-gray-500 mb-1">Retention Rate</p>
                    <p className="text-2xl font-black">74.2%</p>
                    <p className="text-[10px] text-gamma-aquamarine font-bold">↑ 4.1%</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 }}
                    className="p-4 bg-gamma-light dark:bg-gamma-darkBlue/20 rounded-2xl"
                  >
                    <p className="text-[10px] uppercase font-bold text-gray-500 mb-1">Avg. Session</p>
                    <p className="text-2xl font-black">28m 12s</p>
                    <p className="text-[10px] text-gamma-aquamarine font-bold">↑ 12.5%</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAnalytics;
