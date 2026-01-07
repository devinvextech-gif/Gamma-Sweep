
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, TrendingUp, Activity, Users, Clock } from 'lucide-react';
// Fix: Use SectionID instead of non-existent PageID
import { SectionID } from '../App';

interface PageProps {
  onNavigate: (page: SectionID) => void;
}

const AnalyticsPage: React.FC<PageProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-24 pt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black mb-6">Data <span className="text-gamma-blue">Intelligence</span></h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">Advanced reporting and real-time visualization tools to optimize your business.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="p-10 glass rounded-[3rem] border border-gray-100 dark:border-white/10">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-2xl font-bold">Revenue Forecasting</h3>
              <Activity className="text-gamma-blue" />
            </div>
            <div className="h-64 bg-gamma-dark/5 dark:bg-white/5 rounded-3xl flex items-end justify-between px-8 pb-6">
              {[40, 70, 50, 90, 60, 80, 95].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.1, duration: 1 }}
                  className="w-4 bg-gamma-blue rounded-full"
                />
              ))}
            </div>
            <p className="mt-8 text-gray-500 text-center">AI-driven predictive models with 98% accuracy.</p>
          </div>

          <div className="p-10 glass rounded-[3rem] border border-gray-100 dark:border-white/10">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-2xl font-bold">User Segmentation</h3>
              <Users className="text-gamma-aquamarine" />
            </div>
            <div className="flex items-center justify-center h-64">
              <div className="relative w-48 h-48 rounded-full border-[16px] border-gamma-blue border-r-gamma-aquamarine border-b-gamma-darkBlue rotate-45">
                <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                  <span className="text-3xl font-black">74%</span>
                </div>
              </div>
            </div>
            <p className="mt-8 text-gray-500 text-center">Real-time behavior profiling and player labeling.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Uptime", value: "99.99%", icon: <Clock /> },
            { label: "Latency", value: "14ms", icon: <Activity /> },
            { label: "ROI Avg", value: "312%", icon: <TrendingUp /> }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-50 dark:bg-white/5 rounded-3xl text-center">
              <div className="text-gamma-blue flex justify-center mb-4">{item.icon}</div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">{item.label}</p>
              <h4 className="text-4xl font-black">{item.value}</h4>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AnalyticsPage;