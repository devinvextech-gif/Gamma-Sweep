
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, Nexus Gaming',
    text: 'GammaSweep allowed us to pivot our entire operations in just 18 days. The flexibility of their template engine is unmatched in the industry.',
    image: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Marcus Thorne',
    role: 'Product Director, Global Entertainment',
    text: 'The low GGR advantage isn\'t just marketing talk. We saw an immediate 15% increase in our net margins within the first quarter of deployment.',
    image: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Operations Head, Royal Slots',
    text: 'Security was our primary concern. GammaSweep provided a compliant, enterprise-grade environment that our legal team cleared with zero friction.',
    image: 'https://i.pravatar.cc/150?u=elena'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-gamma-light dark:bg-gamma-darkBlue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gamma-blue font-bold tracking-widest uppercase text-sm mb-4">Enterprise Feedback</h2>
          <h3 className="text-3xl lg:text-4xl font-bold">Trusted by Industry Leaders</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white dark:bg-gamma-dark p-8 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none relative border border-gray-100 dark:border-white/10">
              <div className="absolute top-8 right-8 text-gamma-blue/10">
                <Quote size={48} />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-gamma-blue text-gamma-blue" />)}
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-8 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-gamma-blue/20" />
                <div>
                  <h5 className="font-bold">{t.name}</h5>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-tighter">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
