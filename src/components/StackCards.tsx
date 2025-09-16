import React, { useState, useEffect } from "react";
import { Award } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  bullets: string[];
  images: string[];
  color: string;
};

type CardProps = Project & { i: number };

const Card: React.FC<CardProps> = ({ title, description, bullets, images, color, i }) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <div
        className="relative w-[80vw] h-[80vh] rounded-2xl shadow-lg flex flex-col sm:flex-row overflow-hidden"
        style={{ backgroundColor: color, top: `calc(-5vh + ${i * 25}px)` }}
      >
        {/* Left Section */}
        <div className="flex-1 p-8 flex flex-col justify-center text-white">
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="text-base opacity-90 mb-6">{description}</p>
          <ul className="space-y-3">
            {bullets.map((b, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 bg-white/20 rounded-xl px-4 py-2"
              >
                <span className="text-green-300">✔</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-6 flex flex-col gap-4 justify-center">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt=""
              className="rounded-lg object-cover w-full h-1/2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export type StackCardsProps = {
  label?: string; // e.g., ABOUT
  title: string; // main title
  gradientText?: string; // part of title with gradient
  description?: string; // small description below title
  icon?: React.ReactNode; // optional icon for title
  projects: Project[]; // cards data
};

const StackCards: React.FC<StackCardsProps> = ({
  label,
  title,
  gradientText,
  description,
  icon,
  projects,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative">
      {/* Section Header */}
       <div className="top-0 z-50 max-w-6xl mx-auto flex flex-col items-start bg-transparent py-6">
        {label && (
          <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-4">
            <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
            <span className="text-white text-sm font-medium tracking-wider">
              {label}
            </span>
          </div>
        )}

        <h2 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl text-white leading-tight">
          {title}{" "}
          {gradientText && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              {gradientText}
            </span>
          )}
        </h2>

        {description && (
          <p className="text-center text-slate-300 text-lg max-w-2xl mt-2">
            {description}
          </p>
        )}
      </div>

      {/* Cards Stack */}
      <main>
        {projects.map((project, i) => (
          <Card key={`p_${i}`} {...project} i={i} />
        ))}
      </main>
    </section>
  );
};

export default StackCards;
