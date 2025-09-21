import { FC } from "react";
import Microsoft from "../../assets/Microsoft.png";
import Hitachi from "../../assets/Hitachi.png";
import EY from "../../assets/EY.png";
import GoogleCloud from "../../assets/GoogleCloud.png";
import Aws from "../../assets/Aws.png";
import Ibm from "../../assets/Ibm.png";
import Deloitte from "../../assets/Deloitte.png";
import Accenture from "../../assets/Accenture.png";

const PartnerSection: FC = () => {
  const partners = [
    { id: 1, name: "Microsoft", logo: Microsoft, website: "https://microsoft.com" },
    { id: 2, name: "Amazon AWS", logo: Aws, website: "https://aws.amazon.com" },
    { id: 3, name: "EY", logo: EY, website: "https://ey.com" },
    { id: 4, name: "Google Cloud", logo: GoogleCloud, website: "https://cloud.google.com" },
    { id: 5, name: "Hitachi", logo: Hitachi, website: "https://hitachi.com" },
    { id: 6, name: "IBM", logo: Ibm, website: "https://ibm.com" },
    { id: 7, name: "Deloitte", logo: Deloitte, website: "https://deloitte.com" },
    { id: 8, name: "Accenture", logo: Accenture, website: "https://accenture.com" },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="w-full py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col items-center mb-10 md:mb-14 lg:mb-16">
          <div className="min-w-fit border border-white/30 rounded-full px-4 py-1.5 md:px-5 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-5">
            <span className="h-1.5 w-1.5 animate-pulse bg-violet-500 rounded-full"></span>
            <span className="text-white text-xs md:text-sm font-medium tracking-wider">
              TRUSTED BY
            </span>
          </div>

          <h2 className="text-center font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug mb-3">
            Industry Leaders Who Trust{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Fyodor
            </span>
          </h2>

          <p className="text-center text-slate-300 text-xs sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Powering innovation alongside the world's most forward-thinking companies
          </p>
        </div>

        {/* Mobile + Tablet */}
        <div className="xl:hidden relative">
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 w-12 sm:w-16 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-12 sm:w-16 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

            <div className="flex animate-scroll-left-mobile hover:[animation-play-state:paused] py-3 sm:py-4">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`mobile-${partner.id}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  onClick={() => window.open(partner.website, "_blank")}
                >
                  <div className="p-3 sm:p-4 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 min-w-[100px] sm:min-w-[140px]">
                    <div className="h-10 sm:h-12 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-6 sm:h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden xl:block relative">
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

            <div className="flex animate-scroll-left hover:[animation-play-state:paused] py-6">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`desktop-${partner.id}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                  onClick={() => window.open(partner.website, "_blank")}
                >
                  <div className="p-5 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 min-w-[160px]">
                    <div className="h-14 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-10 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-left-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 35s linear infinite;
        }
        .animate-scroll-left-mobile {
          animation: scroll-left-mobile 22s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-scroll-left-mobile {
            animation-duration: 18s;
          }
        }
      `}</style>
    </div>
  );
};

export default PartnerSection;
