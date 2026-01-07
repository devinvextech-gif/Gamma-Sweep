
import React from 'react';
import { Layout, Zap, Rocket, Users, ShieldCheck, Cpu } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const features = [
  {
    icon: <Layout className="text-gamma-blue" />,
    title: 'Customizable Templates',
    desc: 'Deep level customization for UI/UX to match your brand identity perfectly.',
    color: 'bg-gamma-blue/5'
  },
  {
    icon: <Zap className="text-gamma-aquamarine" />,
    title: 'Low GGR Advantage',
    desc: 'Optimized economic model ensuring better margins for operators.',
    color: 'bg-gamma-aquamarine/5'
  },
  {
    icon: <Rocket className="text-gamma-darkBlue" />,
    title: 'Fast Deployment',
    desc: 'Go from zero to live within weeks, not months. Agile implementation.',
    color: 'bg-gamma-darkBlue/5'
  },
  {
    icon: <Users className="text-gamma-blue" />,
    title: 'Casino-Like UX',
    desc: 'Authentic feel that keeps players engaged and returning.',
    color: 'bg-gamma-blue/5'
  },
  {
    icon: <ShieldCheck className="text-gamma-aquamarine" />,
    title: 'Security & Compliance',
    desc: 'Enterprise-grade security ensuring player trust and regulatory alignment.',
    color: 'bg-gamma-aquamarine/5'
  },
  {
    icon: <Cpu className="text-gamma-dark" />,
    title: 'Scalable Infrastructure',
    desc: 'Built on high-performance cloud stack that grows with your user base.',
    color: 'bg-gray-500/5'
  }
];

// Explicitly type containerVariants as Variants to fix typing issues with framer-motion
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Explicitly type cardVariants as Variants to ensure 'ease' literal is correctly inferred as an Easing type
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gamma-blue font-bold tracking-widest uppercase text-sm mb-4">Core Platform</h2>
          <p className="text-3xl lg:text-5xl font-bold mb-6">Designed for Performance</p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Experience the next generation of sweepstakes software. Every feature is engineered to provide maximum value and player retention.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="group p-8 bg-white dark:bg-gamma-dark border border-gray-200 dark:border-white/10 rounded-3xl hover:border-gamma-blue transition-all duration-300 hover:shadow-2xl hover:shadow-gamma-blue/5 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {/* Use React.ReactElement<any> to allow passing additional props like size in cloneElement */}
                {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
              <button className="mt-6 flex items-center gap-2 text-sm font-bold text-gamma-blue group-hover:gap-3 transition-all">
                Learn more <span className="text-lg">→</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
