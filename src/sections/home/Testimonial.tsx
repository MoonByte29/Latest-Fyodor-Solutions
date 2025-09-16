import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  image: string;
}

interface Props {
  testimonials: Testimonial[];
  autoplay?: boolean;
  duration?: number;
}

const TestimonialCarousel: React.FC<Props> = ({
  testimonials = [],
  autoplay = false,
  duration = 5000,
}) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      handleNext();
    }, duration);
    return () => clearInterval(interval);
  }, [autoplay, duration, active]);

  const activeTestimonialQuote = useMemo(() => {
    return testimonials[active]?.quote.split(" ") || [];
  }, [active, testimonials]);

  function handleNext() {
    setActive((prev) => (prev + 1) % testimonials.length);
  }

  function handlePrev() {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  function isActive(index: number) {
    return active === index;
  }

  function randomRotateY() {
    return Math.floor(Math.random() * 21) - 10;
  }

  if (testimonials.length === 0) return null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
        {/* Left Side - Image stack */}
        <div className="order-2 lg:order-1">
          <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full max-w-md mx-auto lg:max-w-none">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.image}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.6,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full rounded-2xl sm:rounded-3xl object-cover object-center shadow-xl"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="order-1 lg:order-2 flex flex-col justify-between py-4 sm:py-6 lg:py-8 text-center lg:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="space-y-4 sm:space-y-6"
            >
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                  {testimonials[active].name}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-blue-300">
                  {testimonials[active].designation}
                </p>
              </div>
              
              <motion.p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {activeTestimonialQuote.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex gap-3 sm:gap-4 pt-8 sm:pt-12 lg:pt-16 justify-center lg:justify-start">
            <button
              onClick={handlePrev}
              className="group flex size-10 sm:size-12 items-center justify-center rounded-full bg-blue-900/40 border border-blue-400/50 hover:bg-blue-800/60 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="size-4 sm:size-5 text-blue-200 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              className="group flex size-10 sm:size-12 items-center justify-center rounded-full bg-blue-900/40 border border-blue-400/50 hover:bg-blue-800/60 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Next testimonial"
            >
              <ArrowRight className="size-4 sm:size-5 text-blue-200 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Dots indicator for mobile */}
          <div className="flex justify-center lg:justify-start gap-2 pt-4 lg:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isActive(index) 
                    ? 'bg-blue-400 w-6' 
                    : 'bg-blue-400/30 hover:bg-blue-400/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonial() {
  const demoTestimonials: Testimonial[] = [
    {
      quote:
        "Fyodor empowers our team with cutting-edge tools and a seamless experience that truly enhances productivity.",
      name: "Alice Johnson",
      designation: "Product Manager, TechCorp",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=500&h=500&fit=crop",
    },
    {
      quote:
        "The simplicity and power of Fyodor helps us scale faster without unnecessary complexity.",
      name: "Michael Chen",
      designation: "Founder, StartupX",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&h=500&fit=crop",
    },
    {
      quote:
        "With Fyodor, our operations became more efficient and collaboration feels effortless across teams.",
      name: "Sofia Martinez",
      designation: "Head of Operations, GlobalBiz",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=500&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center lg:items-start mb-12 sm:mb-16 lg:mb-20">
          <div className="min-w-fit border border-white/30 rounded-full px-4 sm:px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-6 sm:mb-8">
            <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
            <span className="text-blue-200 text-xs sm:text-sm font-medium tracking-wider">
              TESTIMONIALS
            </span>
          </div>

          <h2 className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight mb-4 sm:mb-6 text-center lg:text-left">
            Trusted by enterprises{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Worldwide
            </span>
          </h2>

          <p className="text-center lg:text-left text-blue-200/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
            Discover how Fyodor helps organizations accelerate growth, improve
            collaboration, and achieve impactful results.
          </p>
        </div>
      </div>
      
      <TestimonialCarousel
        testimonials={demoTestimonials}
        autoplay
        duration={4000}
      />
    </div>
  );
}