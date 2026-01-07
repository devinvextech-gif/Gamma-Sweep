
import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Platform',
      links: ['Core Engine', 'Game Library', 'Integrations', 'White Label', 'Managed Services']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Brand Assets', 'Blog', 'Contact']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security Standards', 'Compliance']
    },
    {
      title: 'Support',
      links: ['Help Center', 'API Docs', 'Status Page', 'Ticketing System', 'Dev Community']
    }
  ];

  return (
    <footer className="bg-white dark:bg-gamma-dark border-t border-gray-100 dark:border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <div className="mb-6">
              <Logo variant="L" className="mb-4" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs leading-relaxed">
              Empowering the next generation of global sweepstakes operators with high-performance turnkey solutions. Built for scale, security, and success.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center hover:bg-gamma-blue hover:text-white transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section, i) => (
            <div key={i} className="col-span-1">
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-900 dark:text-white">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gamma-blue transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} GammaSweep Technologies Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gamma-aquamarine animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300">Network Status: Operational</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold uppercase text-gray-400">
              <span className="text-gray-400 dark:text-gray-500">HQ:</span>
              <span className="text-gray-600 dark:text-gray-300">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
