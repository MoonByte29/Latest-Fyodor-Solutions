"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

export default function Hero() {
  return (
<section className="relative flex flex-col items-center justify-center text-center px-4 min-h-[70vh] md:min-h-[90vh]">
      {/* Background Glows - Reduced size for mobile */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Indigo glow */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-500/20 rounded-full blur-[80px] md:blur-[150px]"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Violet glow */}
        <motion.div
          className="absolute bottom-[5%] right-[10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-violet-500/20 rounded-full blur-[70px] md:blur-[120px]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Cyan center glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-cyan-400/10 rounded-full blur-[100px] md:blur-[180px]"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-8 inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-white/80 text-xs md:text-sm font-medium tracking-wide uppercase">
            Welcome to Fyodor
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 px-2"
        >
          Your Vision <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-400 to-violet-400">
            Intelligently Engineered
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base md:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-6 md:mb-10 px-2 sm:px-4"
        >
          Fyodor is a next-generation consulting firm specializing in IT
          transformation, Cloud, AI, QA-Automation, and Data Engineering. Our
          innovation-driven services empower businesses and professionals alike.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12"
        >
          <HashLink 
            smooth 
            to="/contact#contact-form"
            className="px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white text-black font-medium flex items-center justify-center gap-2 hover:bg-neutral-200 transition text-sm md:text-base w-full sm:w-auto"
          >
            Schedule a Consultation
            <ArrowRight size={18} className="hidden sm:block" />
          </HashLink>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-slate-400 text-xs sm:text-sm"
        >
          <p className="mb-2 md:mb-0">Trusted by startups and enterprises across the globe 🌍</p>
          <div className="mt-3 md:mt-4 flex flex-wrap justify-center gap-3 md:gap-8 text-slate-300">
            <span>50+ Clients</span>
            <span>200+ Projects</span>
            <span>5 Countries</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}