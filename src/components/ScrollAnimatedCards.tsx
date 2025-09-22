import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Section {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ScrollAnimatedCardsProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  sections: Section[];
}

export default function ScrollAnimatedCards({
  label,
  title,
  highlight,
  description,
  sections,
}: ScrollAnimatedCardsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          {label && (
            <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-6 sm:mb-8">
              <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
              <span className="text-white text-sm font-medium tracking-wider">
                {label}
              </span>
            </div>
          )}

          <h2 className="font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-6">
            {title}{" "}
            {highlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                {highlight}
              </span>
            )}
          </h2>

          {description && (
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
              {description}
            </p>
          )}
        </div>

        {/* Cards Section */}
        <div className="flex flex-col lg:flex-row relative w-full">
          {/* LEFT SIDE - Scrollable Text */}
          <div className="lg:w-1/2 flex flex-col gap-24 sm:gap-40 py-16 sm:py-32">
            {sections.map((sec, index) => (
              <div
                key={sec.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                data-index={index}
                className="min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-12"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6 sm:mb-8">
                    <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-black text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                      Step {sec.id}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                      {sec.title}
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
                    {sec.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - Sticky Image */}
          <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-4 sm:p-8">
            <div className="relative w-full h-64 sm:h-96 lg:h-full max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sections[activeIndex].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <img
                    src={sections[activeIndex].image}
                    alt={sections[activeIndex].title}
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
                </motion.div>
              </AnimatePresence>

              {/* Progress indicator */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                {sections.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-blue-400 w-6 sm:w-8"
                        : "bg-white/30 w-2 sm:w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
