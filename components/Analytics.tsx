
import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, BarChart3, Globe } from 'lucide-react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';

const Rocket: React.FC<any> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3" />
    <path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5" />
  </svg>
);

const Counter = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isPercent = value.includes('%');
  const isDays = value.toLowerCase().includes('days');
  const isM = value.toLowerCase().includes('m');

  return (
    <motion.span
      onViewportEnter={() => {
        const controls = animate(0, numericValue, {
          duration: 2,
          onUpdate(latest) {
            let formatted = latest.toFixed(latest % 1 === 0 ? 0 : 2);
            if (isPercent) formatted += "%";
            if (isDays) formatted += " Days";
            if (isM) formatted += "M+";
            setDisplayValue(formatted);
          }
        });
        return () => controls.stop();
      }}
      viewport={{ once: true }}
    >
      {displayValue}
    </motion.span>
  );
};

const stats = [
  {
    label: 'Platform Uptime',
    value: '99.99%',
    icon: <Clock />,
    sub: 'Enterprise Reliability',
    trend: '+0.01%'
  },
  {
    label: 'Avg. Deployment',
    value: '14 Days',
    icon: <Rocket />,
    sub: 'Industry Leading Speed',
    trend: '-30% Time'
  },
  {
    label: 'Revenue Efficiency',
    value: '+45%',
    icon: <TrendingUp />,
    sub: 'Higher Net Margins',
    trend: 'vs. Competitors'
  },
  {
    label: 'Global Scalability',
    value: '10M+',
    icon: <Globe />,
    sub: 'Concurrent Users Supported',
    trend: 'Real-time Sync'
  }
];

const Analytics: React.FC = () => {
  return (
    <section id="analytics" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <h2 className="text-gamma-blue font-bold tracking-widest uppercase text-sm mb-4">Business Intel</h2>
            <h3 className="text-4xl font-extrabold mb-6 leading-tight">Data-Driven Success Metrics</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              We don't just provide software; we provide a powerhouse of analytics that help you optimize every aspect of your sweepstakes operation.
            </p>
            <button className="text-gamma-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View Detailed Whitepaper <BarChart3 size={20} />
            </button>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 glass border border-gray-200 dark:border-white/10 rounded-3xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                  {/* Cast stat.icon to React.ReactElement<any> to allow adding size and className via cloneElement */}
                  {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 80, className: 'text-gamma-blue' })}
                </div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">{stat.label}</p>
                <h4 className="text-4xl font-bold mb-2 group-hover:text-gamma-blue transition-colors">
                  <Counter value={stat.value} />
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-gamma-aquamarine/20 text-gamma-darkBlue">
                    {stat.trend}
                  </span>
                  <span className="text-xs text-gray-400">{stat.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
