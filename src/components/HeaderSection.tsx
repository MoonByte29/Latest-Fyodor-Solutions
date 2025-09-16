"use client";
import React from "react";
import { motion } from "framer-motion";

interface HeaderSectionProps {
  title: string;
  highlight: string;
  subtitle?: string;
  className?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  highlight,
  subtitle,
  className,
}) => {
  return (
    <section
      className={`relative flex items-center justify-center max-h-[60vh] py-20 ${className}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[15%] w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl px-6 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-400 to-violet-400">
            {highlight}
          </span>
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default HeaderSection;
