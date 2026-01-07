
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Analytics from '../components/Analytics';
import GamesCarousel from '../components/GamesCarousel';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import AdvancedAnalytics from '../components/AdvancedAnalytics';
import CTASection from '../components/CTASection';
import { motion } from 'framer-motion';
import { 
  Server, Zap, Shield, Cpu, Layers, Globe, 
  Rocket, Briefcase, TrendingUp,
  Send, Mail, MapPin, Phone, CheckCircle 
} from 'lucide-react';

interface HomePageProps {
  onScrollTo: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onScrollTo }) => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-0"
    >
      {/* 1. Hero Section */}
      <Hero onNavigate={onScrollTo} />

      {/* 2. Platform Section (Refactored from PlatformPage) */}
      <section id="platform" className="py-24 bg-gray-50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-gamma-blue font-bold tracking-widest uppercase text-sm mb-4">Core Tech</h2>
            <h3 className="text-5xl lg:text-7xl font-black mb-6">Our <span className="text-gamma-blue">Platform</span></h3>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">The most robust, secure, and scalable sweepstakes engine ever built. Engineered for enterprise-grade performance.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              { icon: <Server />, title: "Core Engine", desc: "A high-concurrency event-driven architecture that handles millions of transactions daily." },
              { icon: <Zap />, title: "Instant Deployment", desc: "Dockerized microservices allow for spinning up new environments in minutes." },
              { icon: <Shield />, title: "Compliance Suite", desc: "Automated KYC, AML, and geo-fencing tools built directly into the core." },
              { icon: <Cpu />, title: "Adaptive Math", desc: "Dynamic RNG algorithms that ensure fairness while optimizing for retention." },
              { icon: <Layers />, title: "Modular UI", desc: "A complete design system that allows you to swap themes and layouts on the fly." },
              { icon: <Globe />, title: "Edge Network", desc: "Global CDN delivery ensuring sub-100ms latency for players anywhere." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white dark:bg-gamma-dark border border-gray-100 dark:border-white/10 hover:border-gamma-blue transition-all group rounded-3xl"
              >
                <div className="w-14 h-14 bg-gamma-blue/10 rounded-2xl flex items-center justify-center text-gamma-blue mb-6 group-hover:bg-gamma-blue group-hover:text-white transition-all">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Feature Cards (Highlights) */}
      <Features />

      {/* 4. Solutions Section (Refactored from SolutionsPage) */}
      <section id="solutions" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-gamma-aquamarine font-bold tracking-widest uppercase text-sm mb-4">Ecosystem</h2>
            <h3 className="text-5xl lg:text-7xl font-black mb-6">Business <span className="text-gamma-aquamarine">Solutions</span></h3>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">Tailored strategies and turnkey implementations for every stage of your growth.</p>
          </motion.div>

          <div className="space-y-8">
            {[
              { 
                title: "White-Label Startup", 
                desc: "Everything you need to go live. From domain setup to game selection, we handle the heavy lifting while you focus on marketing.",
                icon: <Rocket />,
                stats: ["14 Day Launch", "Full Brand Autonomy", "24/7 Support"]
              },
              { 
                title: "Enterprise Migration", 
                desc: "Outgrown your current provider? Our migration specialists ensure zero downtime and 100% data integrity during the move to GammaSweep.",
                icon: <Briefcase />,
                stats: ["Lossless Migration", "Optimized Costs", "Custom Dev"]
              },
              { 
                title: "Scaling Operations", 
                desc: "For high-volume operators needing custom infrastructure, dedicated shards, and advanced BI reporting tools.",
                icon: <TrendingUp />,
                stats: ["Unlimited Traffic", "Dedicated Servers", "Private Cloud"]
              }
            ].map((sol, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-12 p-10 lg:p-14 bg-gray-50 dark:bg-white/5 rounded-[3rem] items-center border border-gray-100 dark:border-white/10"
              >
                <div className="w-24 h-24 bg-gamma-blue/10 flex items-center justify-center rounded-3xl text-gamma-blue flex-shrink-0">
                  {React.cloneElement(sol.icon as React.ReactElement<any>, { size: 48 })}
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-4">{sol.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6 text-lg max-w-2xl">{sol.desc}</p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {sol.stats.map((s, j) => (
                      <span key={j} className="px-4 py-2 bg-gamma-blue/5 border border-gamma-blue/20 rounded-full text-xs font-bold text-gamma-blue uppercase tracking-wider">{s}</span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={() => onScrollTo('contact')}
                  className="px-8 py-4 bg-gamma-dark dark:bg-white text-white dark:text-gamma-dark font-bold rounded-2xl hover:scale-105 transition-all shadow-xl whitespace-nowrap"
                >
                  Consult Expert
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <Services />

      {/* 6. Analytics Section (Data Tiles) */}
      <Analytics />

      {/* 7. Games Carousel */}
      <GamesCarousel />

      {/* 8. About Section */}
      <About />

      {/* 9. Reviews Section (Testimonials) */}
      <Testimonials />

      {/* 10. Advanced Analytics */}
      <AdvancedAnalytics />

      {/* 11. Contact Section */}
      <section id="contact" className="py-24 bg-gamma-light dark:bg-gamma-darkBlue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl mx-auto text-center py-20"
            >
              <div className="w-24 h-24 bg-gamma-aquamarine/20 text-gamma-aquamarine rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-gamma-aquamarine/20">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-5xl font-black mb-6">Inquiry Received!</h3>
              <p className="text-xl text-gray-500 mb-12">One of our enterprise specialists will be in touch with you within 2 business hours.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-gamma-blue text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-gamma-blue/20"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-gamma-blue font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
                <h3 className="text-5xl lg:text-7xl font-black mb-8">Contact <span className="text-gamma-blue">Sales</span></h3>
                <p className="text-xl text-gray-500 mb-12 leading-relaxed">Take the first step towards a premium sweepstakes platform. Our global team is ready to scale your vision.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                  <div className="flex gap-6 items-center">
                    <div className="w-14 h-14 bg-gamma-blue rounded-2xl flex items-center justify-center text-white shadow-lg shadow-gamma-blue/20">
                      <Mail />
                    </div>
                    <div>
                      <h4 className="font-bold">Email Us</h4>
                      <p className="text-gray-500">sales@gammasweep.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="w-14 h-14 bg-gamma-blue rounded-2xl flex items-center justify-center text-white shadow-lg shadow-gamma-blue/20">
                      <Phone />
                    </div>
                    <div>
                      <h4 className="font-bold">Call Us</h4>
                      <p className="text-gray-500">+1 (888) GAMMA-SWEEP</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="w-14 h-14 bg-gamma-blue rounded-2xl flex items-center justify-center text-white shadow-lg shadow-gamma-blue/20">
                      <MapPin />
                    </div>
                    <div>
                      <h4 className="font-bold">Headquarters</h4>
                      <p className="text-gray-500">123 Market St, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gamma-dark p-10 lg:p-14 rounded-[3.5rem] border border-gray-100 dark:border-white/10 shadow-2xl relative"
              >
                <form onSubmit={handleContactSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                      <input required type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 focus:border-gamma-blue outline-none transition-all dark:text-white" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                      <input required type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 focus:border-gamma-blue outline-none transition-all dark:text-white" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Work Email</label>
                    <input required type="email" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 focus:border-gamma-blue outline-none transition-all dark:text-white" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Project Budget</label>
                    <select className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 focus:border-gamma-blue outline-none transition-all dark:text-white">
                      <option className="dark:bg-gamma-dark">Enterprise Startup ($50k - $200k)</option>
                      <option className="dark:bg-gamma-dark">Global Scaling ($200k - $500k)</option>
                      <option className="dark:bg-gamma-dark">Strategic Migration ($500k+)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
                    <textarea rows={4} className="w-full bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-4 focus:border-gamma-blue outline-none transition-all dark:text-white" placeholder="Tell us about your requirements..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gamma-blue hover:bg-gamma-darkBlue text-white py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-xl shadow-gamma-blue/20 hover:scale-[1.02]">
                    Book a Discovery Call <Send size={20} />
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* 12. Final CTA */}
      <CTASection onNavigate={onScrollTo} />
    </motion.div>
  );
};

export default HomePage;
