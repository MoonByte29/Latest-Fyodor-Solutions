import React, { useRef, useState } from "react";
import { cn } from "../lib/utils";

interface CardProps {
  name: string;
  title: string;
  contactText: string;
  avatarUrl: string;
  linkedinUrl: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  title,
  contactText,
  avatarUrl,
  linkedinUrl,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    setIsHovered(false);
    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleContactClick = () => {
    if (linkedinUrl) {
      window.open(linkedinUrl, "_blank");
    }
  };

  return (
    <div className={cn("flex items-center justify-center relative", className)}>
      <div className="relative z-10 w-full">
        <div
          ref={cardRef}
          className="relative w-full h-[440px] bg-gradient-to-b from-slate-800/60 to-slate-900/70 
     backdrop-blur-xl rounded-lg p-8 border border-blue-600/40
     shadow-2xl shadow-indigo-500/10 transition-all duration-300 ease-out 
     flex flex-col justify-between"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          style={{
            transformStyle: "preserve-3d",
            boxShadow: isHovered
              ? "0 25px 50px -12px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.4)"
              : "0 25px 50px -12px rgba(99, 102, 241, 0.2), 0 0 0 1px rgba(139, 92, 246, 0.2)",
          }}
        >
          {/* Header */}
          <div
            className="text-center"
            style={{ transform: "translateZ(20px)" }}
          >
            <h1 className="text-2xl font-light text-slate-100 leading-snug tracking-wide">
              {title}
            </h1>
          </div>

          {/* Avatar (center flex item) */}
          <div
            className="flex justify-center flex-1 items-center"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-violet-400/20 rounded-2xl blur-lg" />
              <img
                src={avatarUrl}
                alt={`${name}'s avatar`}
                className="relative w-40 h-40 rounded-2xl object-cover shadow-xl border border-indigo-300/30"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400/10 via-transparent to-violet-400/10 rounded-2xl" />
            </div>
          </div>

          {/* Footer */}
          <div
            className="bg-slate-800/60 rounded-2xl p-4 backdrop-blur-sm border border-blue-700/50"
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="flex items-center justify-between">
              <p className="text-slate-100 font-medium">{name}</p>
              <button
                onClick={handleContactClick}
                className="relative bg-slate-700/80 hover:bg-slate-600/80 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 border border-blue-500/50 hover:border-indigo-400/50 backdrop-blur-sm"
                style={{ transform: "translateZ(10px)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-violet-400/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">{contactText}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
