import React, { useState } from "react";
import { cn } from "../lib/utils";

interface CardProps {
  name: string;
  title: string;
  avatarUrl:string;
  desc:string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  title,
  avatarUrl,
  desc,
  className,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);


  return (
    <div className={cn("flex items-center justify-center relative", className)}>
      <div
        className="relative w-full h-[440px] cursor-pointer"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Card inner wrapper */}
        <div
          className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Face */}
          <div className="absolute inset-0 w-full h-full backface-hidden">
            <div
              className="relative w-full h-full bg-gradient-to-b from-slate-800/60 to-slate-900/70 
              backdrop-blur-xl rounded-lg p-8 border border-blue-600/40
              shadow-2xl shadow-indigo-500/20 transition-all duration-300 ease-out 
              flex flex-col justify-center items-center space-y-6
              hover:shadow-indigo-500/30 hover:border-indigo-500/60"
            >
              {/* Avatar */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-violet-400/20 rounded-2xl blur-lg" />
                <img
                  src={avatarUrl}
                  alt={`${name}'s avatar`}
                  className="relative w-48 h-48 rounded-2xl object-cover shadow-xl border border-indigo-300/30"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400/10 via-transparent to-violet-400/10 rounded-2xl" />
              </div>

              {/* Name */}
              <div className="text-center">
                <h2 className="text-3xl font-light text-slate-100 leading-snug tracking-wide">
                  {name}
                </h2>
              </div>

            </div>
          </div>
          {/* Back Face */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
            <div
              className="relative w-full h-full bg-gradient-to-b from-slate-900/70 to-slate-800/60 
    backdrop-blur-xl rounded-lg p-8 border border-violet-600/40
    shadow-2xl shadow-violet-500/20 transition-all duration-300 ease-out 
    flex flex-col justify-between items-center space-y-6 overflow-y-auto"
            >
              {/* Title */}
              <div className="text-center">
                <h1 className="text-3xl font-light text-slate-100 leading-snug tracking-wide mb-2">
                  {name}
                </h1>
                <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto rounded-full" />
              </div>

              {/* Description */}
              <div className="text-slate-300 text-sm leading-relaxed max-h-[200px] overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-violet-500/40">
                {desc}
              </div>

              {/* Small avatar */}
              <div className="absolute top-4 left-4">
                <img
                  src={avatarUrl}
                  alt={`${name}'s avatar`}
                  className="w-12 h-12 rounded-xl object-cover border border-violet-300/30 opacity-60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra CSS for flip effect */}
      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Card;
