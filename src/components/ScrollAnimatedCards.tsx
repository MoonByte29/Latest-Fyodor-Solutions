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
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      { 
        threshold: isMobile ? 0.3 : 0.6,
        rootMargin: isMobile ? "-10% 0px -10% 0px" : "-20% 0px -20% 0px"
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [isMobile]);

  return (
    <div className="text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-12 lg:mb-16 pt-8 sm:pt-12 lg:pt-16">
          {label && (
            <div className="min-w-fit border border-white/30 rounded-full px-4 sm:px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-4 sm:mb-6 lg:mb-8">
              <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
              <span className="text-white text-xs sm:text-sm font-medium tracking-wider">
                {label}
              </span>
            </div>
          )}

          <h2 className="font-bold text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-3 sm:mb-4 lg:mb-6">
            {title}{" "}
            {highlight && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                {highlight}
              </span>
            )}
          </h2>

          {description && (
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Cards Section */}
        <div className="flex flex-col lg:flex-row relative w-full">
          {/* LEFT SIDE - Scrollable Text */}
          <div className="w-full lg:w-1/2 flex flex-col gap-16 sm:gap-24 lg:gap-32 xl:gap-40 pb-16 lg:py-16">
            {sections.map((sec, index) => (
              <div
                key={sec.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                data-index={index}
                className={`${
                  isMobile ? 'min-h-[60vh]' : 'min-h-screen'
                } flex flex-col justify-center px-2 sm:px-4 lg:px-8 xl:px-12`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="mb-4 sm:mb-6 lg:mb-8">
                    <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-black text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-2 sm:mb-3 lg:mb-4">
                      Step {sec.id}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
                      {sec.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed font-light">
                    {sec.description}
                  </p>
                </motion.div>

                {/* Mobile Image - Show inline on mobile */}
                {isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-6 sm:mt-8 mb-8 sm:mb-12"
                  >
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                      <img
                        src={sec.image}
                        alt={sec.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - Sticky Image (Desktop only) */}
          {!isMobile && (
            <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen flex items-center justify-center p-4 lg:p-6 xl:p-8">
              <div className="relative w-full max-w-2xl xl:max-w-3xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={sections[activeIndex].id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="relative w-full aspect-[4/3] lg:aspect-[16/10] xl:aspect-[4/3]"
                  >
                    <img
                      src={sections[activeIndex].image}
                      alt={sections[activeIndex].title}
                      className="w-full h-full object-cover rounded-2xl lg:rounded-3xl shadow-2xl"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl lg:rounded-3xl" />
                  </motion.div>
                </AnimatePresence>

                {/* Progress indicator */}
                <div className="absolute -bottom-8 lg:-bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {sections.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 lg:h-2.5 rounded-full transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${
                        index === activeIndex
                          ? "bg-blue-400 w-8 lg:w-10 shadow-lg shadow-blue-400/30"
                          : "bg-white/30 w-2 lg:w-2.5 hover:bg-white/50"
                      }`}
                      aria-label={`Go to step ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}