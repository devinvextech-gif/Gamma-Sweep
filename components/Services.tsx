
import React from 'react';
import { Wallet, MessageCircle, BarChart, Settings, Smartphone, Headphones } from 'lucide-react';

const services = [
  { icon: <Wallet size={20} />, title: 'Multi-Currency Wallet', desc: 'Fiat & Crypto support' },
  { icon: <MessageCircle size={20} />, title: 'Live Player Chat', desc: 'Real-time social interactions' },
  { icon: <BarChart size={20} />, title: 'BI Dashboards', desc: 'Custom reporting engines' },
  { icon: <Settings size={20} />, title: 'Risk Management', desc: 'AI-driven fraud detection' },
  { icon: <Smartphone size={20} />, title: 'Native Apps', desc: 'iOS & Android support' },
  { icon: <Headphones size={20} />, title: '24/7 B2B Support', desc: 'Dedicated account managers' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12 bg-white dark:bg-gamma-dark border-y border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col items-center text-center group cursor-default">
              <div className="w-12 h-12 bg-gamma-light dark:bg-gamma-darkBlue/20 rounded-full flex items-center justify-center text-gamma-blue mb-3 group-hover:bg-gamma-blue group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h5 className="text-xs font-bold uppercase tracking-wide mb-1">{service.title}</h5>
              <p className="text-[10px] text-gray-400 font-medium">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
