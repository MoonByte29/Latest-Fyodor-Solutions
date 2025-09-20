"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-[80vh] md:min-h-[90vh]">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        {/* Indigo glow */}
        <motion.div
          className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[150px]"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Violet glow */}
        <motion.div
          className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Cyan center glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[180px]"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
            Welcome to Fyodor
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6"
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
          className="text-lg md:text-xl text-slate-300 max-w-3xl md:mx-auto sm:mx-5 mb-10"
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
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <div className="px-6 py-3 rounded-full bg-white text-black font-medium flex items-center gap-2 hover:bg-neutral-200 transition text-sm sm:text-base">
        <HashLink smooth to="/contact#contact-form">
Schedule a Consultation
</HashLink>
          </div>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-slate-400 text-xs sm:text-sm"
        >
          <p>Trusted by startups and enterprises across the globe 🌍</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center text-slate-300">
            <span>50+ Clients</span>
            <span>200+ Projects</span>
            <span>5 Countries</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
