import React from "react";
import { Target, Brain, Users, Globe } from "lucide-react";
import GlassIcons from "../../components/GlassIcons";

interface Feature {
  title: string;
  description: string;
  subtitle: string;
}

const Benefits = () => {
  const features: Feature[] = [
    {
      title: "Outcome-Focused Execution",
      description:
        "We measure success by impact, not just effort. Every engagement ties to clear business KPIs — reducing processing time, improving fraud detection, or cutting costs.",
      subtitle: "We define value by results delivered, not hours billed.",
    },
    {
      title: "AI + Automation Synergy",
      description:
        "We engineer systems where bots and brains work together — blending RPA reliability with AI adaptability.",
      subtitle: "Smarter workflows that evolve with your business.",
    },
    {
      title: "Managed Delivery, Not Freelancers",
      description:
        "Fyodor delivers AI and automation through curated pods — trained, governed, and accountable to outcomes.",
      subtitle: "Structured, high-quality delivery from day one.",
    },
    {
      title: "Built for Global Scale",
      description:
        "From startups to enterprises, Fyodor adapts with compliance, localization, and scalability built-in.",
      subtitle: "We scale where and when you need us.",
    },
  ];

  const items = [
    { icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />, color: "#1e3a8a" },
    { icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />, color: "#5b1d8e" },
    { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, color: "#064e3b" },
    { icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />, color: "#3b82f6" },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start mb-10 text-center md:text-left">
          <div className="border border-white/30 rounded-full px-4 py-1 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-4">
            <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
            <span className="text-white text-xs sm:text-sm font-medium tracking-wider">
              BENEFITS
            </span>
          </div>

          <h2 className="font-bold text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-snug mb-2">
            Why Enterprises Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Fyodor
            </span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-md sm:max-w-xl">
            Discover how our innovative approach delivers measurable results for
            businesses worldwide
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg sm:rounded-xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 border border-slate-700/50 hover:border-blue-500/30 shadow-md hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Glass Icon */}
              <div className="relative z-10 mb-3 sm:mb-4 flex justify-center sm:justify-start">
                <GlassIcons items={[items[index]]} />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-sm sm:text-lg font-semibold text-white mb-2 leading-snug group-hover:text-blue-200 transition-colors duration-300 text-center sm:text-left">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-slate-300 leading-relaxed mb-3 text-xs sm:text-sm text-center sm:text-left">
                {feature.description}
              </p>

              {/* Subtitle */}
              <div className="relative z-10 pt-2 border-t border-slate-700/50 group-hover:border-blue-500/30 transition-colors duration-300">
                <p className="text-slate-400 leading-relaxed text-xs italic text-center sm:text-left">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
