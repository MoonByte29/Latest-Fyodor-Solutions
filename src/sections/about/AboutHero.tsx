"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutHero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center max-h-[60vh] py-20 ">
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
          Shaping the Future with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-400 to-violet-400">
            Innovation & Vision
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
        >
          At Fyodor, we believe in empowering businesses with digital
          transformation, innovative solutions, and a vision that drives global
          success.
        </motion.p>

        {/* CTA buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#founder"
            className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all duration-300 shadow-lg shadow-indigo-600/30"
          >
            Meet the Founder
          </a>
          <a
            href="#mission"
            className="px-8 py-3 rounded-xl bg-slate-800/70 hover:bg-slate-700 text-white font-medium transition-all duration-300 border border-slate-600/50"
          >
            Our Mission
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutHero;
