import { FC } from "react";
import Microsoft from "../../assets/Microsoft.png"
import Hitachi from "../../assets/Hitachi.jpg"
import EY from "../../assets/EY.jpg"
import GoogleCloud from "../../assets/GoogleCloud.jpg"
import Aws from "../../assets/Aws.png"
import Ibm from "../../assets/Ibm.jpg"
import Deloitte from "../../assets/Deloitte.png"

const PartnerSection: FC = () => {
  // Option 1: Tech & Consulting Giants (Current + Requested)
  const partnersOption1 = [
    {
      id: 1,
      name: "Microsoft",
      logo: Microsoft,
      website: "https://microsoft.com",
    },
    {
      id: 2,
      name: "Hitachi",
      logo: Hitachi,
      website: "https://hitachi.com",
    },
    {
      id: 3,
      name: "EY",
      logo: EY,
      website: "https://ey.com",
    },
    {
      id: 4,
      name: "Google Cloud",
      logo: GoogleCloud,
      website: "https://cloud.google.com",
    },
    {
      id: 5,
      name: "Amazon AWS",
      logo:Aws,
      website: "https://aws.amazon.com",
    },
    {
      id: 6,
      name: "IBM",
      logo: Ibm,
      website: "https://ibm.com",
    },
    {
      id: 7,
      name: "Deloitte",
      logo: Deloitte,
      website: "https://deloitte.com",
    },
    {
      id: 8,
      name: "PwC",
      logo: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop&crop=center",
      website: "https://pwc.com",
    },
    {
      id: 9,
      name: "Accenture",
      logo: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop&crop=center",
      website: "https://accenture.com",
    },
    {
      id: 10,
      name: "KPMG",
      logo: "https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop&crop=center",
      website: "https://kpmg.com",
    },
  ];

  const partners = partnersOption1;

  // Duplicate partner lists to create seamless loop animations
  const duplicatedPartnersRow1 = [...partners, ...partners];
  const duplicatedPartnersRow2 = [...partners, ...partners];

  return (
    <div className="min-h-screen w-full py-20">
      <div className="max-w-7xl md:mx-auto sm:mx-5 px-4">
        {/* Section heading */}
        <div className="max-w-6xl md:mx-auto sm:mx-5">
          <div className="flex flex-col items-center mb-16">
            {/* Enhanced Benefits Badge */}
            <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
              <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
              <span className="text-white text-sm font-medium tracking-wider">
                TRUSTED PARTNERS
              </span>
            </div>

            {/* Title */}
            <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Industry Leaders Who Trust{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Fyodor
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-center text-slate-300 text-lg max-w-2xl md:mx-auto sm:mx-5">
              Powering innovation alongside the world's most forward-thinking
              companies
            </p>
          </div>
        </div>

        {/* Mobile/Tablet Layout: Static Grid */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 px-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group cursor-pointer"
                onClick={() =>
                  partner.website && window.open(partner.website, "_blank")
                }
              >
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm">
                  <div className="h-16 flex flex-col items-center justify-center gap-2">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="text-white/60 font-medium text-xs group-hover:text-white transition-colors duration-300 text-center">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout: Two Rows with Opposite Animations */}
        <div className="hidden md:block relative gap-0">
          {/* Top Row: Left to Right */}
          <div className="relative overflow-hidden">
            {/* Edge gradients for fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

            <div className="flex animate-scroll-left hover:[animation-play-state:paused] py-5">
              {duplicatedPartnersRow1.map((partner, index) => (
                <div
                  key={`top-${partner.id}-${index}`}
                  className="flex-shrink-0 mx-6 group cursor-pointer"
                  onClick={() =>
                    partner.website && window.open(partner.website, "_blank")
                  }
                >
                  <div className="bg-slate-800/50 border border-blue-700/50 rounded-xl p-6 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm min-w-[180px]">
                    <div className="h-16 flex flex-col items-center justify-center gap-3">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <span className="text-white/70 font-medium text-sm group-hover:text-white group-hover:text-blue-300 transition-all duration-300 text-center">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: Right to Left */}
          <div className="relative overflow-hidden">
            {/* Edge gradients for fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

            <div className="flex animate-scroll-right hover:[animation-play-state:paused] py-5">
              {duplicatedPartnersRow2.map((partner, index) => (
                <div
                  key={`bottom-${partner.id}-${index}`}
                  className="flex-shrink-0 mx-6 group cursor-pointer"
                  onClick={() =>
                    partner.website && window.open(partner.website, "_blank")
                  }
                >
                  <div className="bg-slate-800/50 border border-blue-700/50 rounded-xl p-6 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/10 backdrop-blur-sm min-w-[180px]">
                    <div className="h-16 flex flex-col items-center justify-center gap-3">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <span className="text-white/70 font-medium text-sm group-hover:text-white group-hover:text-violet-300 transition-all duration-300 text-center">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes in style tag */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PartnerSection;
