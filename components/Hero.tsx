import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-8 animate-[fadeIn_0.5s_ease-out]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-sm font-medium tracking-wide">Taking New Clients for Q4 2024</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 leading-tight animate-[slideUp_0.7s_ease-out]">
          We Turn <span className="gradient-text">Followers</span> <br />
          Into <span className="gradient-text">Revenue</span>
        </h1>

        <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-[slideUp_0.9s_ease-out]">
          ClothsAdda is the digital growth partner for modern brands. We combine creative storytelling with data-driven workflows to scale your business effortlessly.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[slideUp_1.1s_ease-out]">
          <a 
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500 hover:scale-105"
          >
            Start Your Growth
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute -inset-3 rounded-xl bg-indigo-400/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-200" />
          </a>
          
          <a 
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-300 transition-all duration-200 bg-slate-800/50 border border-slate-700 rounded-full hover:bg-slate-800 hover:text-white hover:border-slate-600"
          >
            View Services
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-8 animate-[fadeIn_1.5s_ease-out]">
          {[
            { label: 'Revenue Generated', value: '$10M+' },
            { label: 'Active Clients', value: '50+' },
            { label: 'Avg ROI', value: '450%' },
            { label: 'Workflow Saved', value: '10k Hrs' },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <dt className="text-3xl font-bold text-white mb-1">{stat.value}</dt>
              <dd className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;