import React from 'react';
import { PenTool, Share2, Search, Zap, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, tags }) => (
  <div className="group glass-card p-8 rounded-2xl hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2 cursor-default">
    <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 mb-6 leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag, idx) => (
        <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex items-center text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
      Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "Copywriting",
      description: "Persuasive copy that speaks your brand's voice and compels users to take action. From landing pages to email sequences.",
      icon: <PenTool className="w-7 h-7 text-indigo-400" />,
      tags: ["Email Marketing", "Ad Copy", "Blogs"]
    },
    {
      title: "Social Strategy",
      description: "Build a loyal community. We create content calendars and engagement strategies that resonate with your target audience.",
      icon: <Share2 className="w-7 h-7 text-purple-400" />,
      tags: ["Instagram", "LinkedIn", "Content Creation"]
    },
    {
      title: "SEO Optimization",
      description: "Rank higher and drive organic traffic. We optimize your technical structure and content to dominate search results.",
      icon: <Search className="w-7 h-7 text-pink-400" />,
      tags: ["Technical SEO", "Keywords", "Backlinks"]
    },
    {
      title: "Workflow Automation",
      description: "Stop doing manual tasks. We implement Zapier and custom scripts to automate your lead gen and CRM updates.",
      icon: <Zap className="w-7 h-7 text-yellow-400" />,
      tags: ["Zapier", "CRM", "Email Flows"]
    }
  ];

  return (
    <section id="services" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-indigo-500 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Everything You Need to Scale</h3>
          <p className="text-slate-400 text-lg">
            We don't just deliver services; we deliver measurable outcomes. Choose a unified strategy or individual power-ups for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;