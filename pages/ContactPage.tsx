
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
// Fix: Use SectionID instead of non-existent PageID
import { SectionID } from '../App';

interface PageProps {
  onNavigate: (page: SectionID) => void;
}

const ContactPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would hit an API.
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl mx-auto px-4 py-32 text-center"
      >
        <div className="w-24 h-24 bg-gamma-aquamarine/20 text-gamma-aquamarine rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle size={48} />
        </div>
        <h1 className="text-5xl font-black mb-6">Inquiry Received!</h1>
        <p className="text-xl text-gray-500 mb-12">One of our enterprise specialists will be in touch with you within 2 business hours.</p>
        <button 
          onClick={() => onNavigate('home')}
          className="bg-gamma-blue text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all"
        >
          Return Home
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pb-24 pt-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl lg:text-7xl font-black mb-8">Contact <span className="text-gamma-blue">Sales</span></h1>
            <p className="text-xl text-gray-500 mb-12">Take the first step towards a premium sweepstakes platform. Our team is ready to help you scale.</p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-gamma-blue rounded-2xl flex items-center justify-center text-white">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-gray-500">sales@gammasweep.com</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-gamma-blue rounded-2xl flex items-center justify-center text-white">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-gray-500">+1 (888) GAMMA-SWEEP</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-14 h-14 bg-gamma-blue rounded-2xl flex items-center justify-center text-white">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold">Headquarters</h4>
                  <p className="text-gray-500">123 Market St, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-white/5 p-12 rounded-[3rem] border border-gray-100 dark:border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-400">First Name</label>
                  <input required type="text" className="w-full bg-white dark:bg-gamma-dark border border-gray-200 dark:border-white/10 rounded-2xl p-4 focus:border-gamma-blue outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                  <input required type="text" className="w-full bg-white dark:bg-gamma-dark border border-gray-200 dark:border-white/10 rounded-2xl p-4 focus:border-gamma-blue outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Work Email</label>
                <input required type="email" className="w-full bg-white dark:bg-gamma-dark border border-gray-200 dark:border-white/10 rounded-2xl p-4 focus:border-gamma-blue outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Company Name</label>
                <input required type="text" className="w-full bg-white dark:bg-gamma-dark border border-gray-200 dark:border-white/10 rounded-2xl p-4 focus:border-gamma-blue outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Project Details</label>
                <textarea rows={4} className="w-full bg-white dark:bg-gamma-dark border border-gray-200 dark:border-white/10 rounded-2xl p-4 focus:border-gamma-blue outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gamma-blue text-white py-5 rounded-2xl font-bold hover:bg-gamma-darkBlue transition-all flex items-center justify-center gap-3">
                Send Inquiry <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;