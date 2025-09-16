import React from "react";
import ChromaBackground from "../../components/ChromaBackground";
import bgimg from "./../../assets/bgimg.jpg";

const FeatureSection: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgimg})` }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Optional Chroma Background overlay */}
      <div className="absolute inset-0 opacity-30">
        <ChromaBackground radius={300} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Stats Section */}
        <div className="flex-1 flex items-center justify-center py-8 sm:py-12 lg:py-16 px-4">
          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
              {[
                { number: "3+", label: "Years of Experience" },
                { number: "62K+", label: "Hours Saved Annually" },
                { number: "$3.4M", label: "Annual Savings" },
                { number: "4+", label: "Sectors Served" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-1 sm:mb-2 lg:mb-4 drop-shadow-lg">
                    {stat.number}
                  </div>
                  <div className="text-gray-200 text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl font-medium opacity-90 drop-shadow-md px-1 sm:px-2 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  title: "Proven Track Record",
                  description:
                    "We have consistently delivered measurable impact, saving clients thousands of hours and millions in operational costs.",
                },
                {
                  title: "Tailored Solutions",
                  description:
                    "Whether it's streamlining processes or enhancing customer engagement, we deliver innovation customized to your needs.",
                },
                {
                  title: "Client-Centric Focus",
                  description:
                    "Your success is our mission. By deeply understanding your business goals, we create outcomes that matter.",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:bg-white border border-white/20"
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-base">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value Pills Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
              {[
                "Continuous Innovation",
                "Dedicated Support",
                "Positive Client Experience",
                "Commitment to Excellence",
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full font-medium text-xs sm:text-sm lg:text-base hover:bg-white/30 transition-all duration-300 hover:scale-105"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;