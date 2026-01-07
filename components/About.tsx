
import React from 'react';
import { Target, Lightbulb, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/corp1/600/800" className="rounded-2xl shadow-xl w-full" alt="Team" />
                <div className="bg-gamma-aquamarine p-6 rounded-2xl text-gamma-dark">
                  <Trophy size={32} className="mb-4" />
                  <p className="text-2xl font-bold">#1</p>
                  <p className="text-sm font-semibold">Sweepstakes Software 2024</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gamma-blue p-6 rounded-2xl text-white">
                  <Lightbulb size={32} className="mb-4" />
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm font-semibold">Innovation Focused</p>
                </div>
                <img src="https://picsum.photos/seed/corp2/600/800" className="rounded-2xl shadow-xl w-full" alt="Innovation" />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-gamma-blue font-bold tracking-widest uppercase text-sm mb-4">About GammaSweep</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">Built for Visionaries, Scaleable for Giants.</h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              GammaSweep was born from a simple observation: the sweepstakes market was cluttered with rigid, slow-moving legacy systems. We decided to build a platform that prioritizes speed, flexibility, and authentic user experiences.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Our Mission', text: 'To empower operators with the fastest and most flexible sweepstakes engine on the planet.', icon: <Target className="text-gamma-blue" /> },
                { title: 'Who It Is For', text: 'Enterprise level entrepreneurs and existing gaming operators looking for a competitive edge.', icon: <UsersIcon className="text-gamma-blue" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gamma-blue/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UsersIcon: React.FC<any> = (props) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default About;
