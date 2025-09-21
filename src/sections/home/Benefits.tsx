import React from "react";
import { Target, Brain, Users, Globe } from "lucide-react";
import benefits from "../../assets/benefits3.png"

interface Feature {
  title: string;
  description: string;
  subtitle: string;
}

const Benefits = () => {
  const features: Feature[] = [
    {
      title: "Outcome-Focused Execution",
      description: "We measure success by impact, not just effort. Every engagement ties to clear business KPIs — reducing processing time, improving fraud detection, or cutting costs.",
      subtitle: "We define value by results delivered, not hours billed.",
    },
    {
      title: "AI + Automation Synergy",
      description: "We engineer systems where bots and brains work together — blending RPA reliability with AI adaptability.",
      subtitle: "Smarter workflows that evolve with your business.",
    },
    {
      title: "Managed Delivery, Not Freelancers",
      description: "Fyodor delivers AI and automation through curated pods — trained, governed, and accountable to outcomes.",
      subtitle: "Structured, high-quality delivery from day one.",
    },
    {
      title: "Built for Global Scale",
      description: "From startups to enterprises, Fyodor adapts with compliance, localization, and scalability built-in.",
      subtitle: "We scale where and when you need us.",
    },
  ];

  const icons = [
    { icon: Target, color: "text-blue-400" },
    { icon: Brain, color: "text-violet-400" },
    { icon: Users, color: "text-green-400" },
    { icon: Globe, color: "text-cyan-400" },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Left Section - Header and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Header and Team Image */}
          <div className="flex flex-col space-y-8 h-full">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Why choose us?
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Built specifically for real estate professionals and save time, 
                stay organized, and close more deals with less effort.
              </p>
            </div>

            {/* Team Image */}
            <div className="relative rounded-2xl overflow-hidden flex-1 min-h-0">
              <img 
                src={benefits} 
                alt="Professional team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const IconComponent = icons[index].icon;
              return (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-800/70"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center group-hover:bg-slate-600/50 transition-colors duration-300">
                      <IconComponent className={`w-6 h-6 ${icons[index].color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    <p className="text-slate-400 text-xs italic pt-2 border-t border-slate-700/30">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;