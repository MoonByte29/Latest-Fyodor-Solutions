import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Zap,
  Layers,
  Puzzle,
  Wrench,
  Lightbulb,
  BarChart3,
  Cog,
  RefreshCcw,
  Link as LinkIcon,
  ArrowRight,
  Target,
  BarChart,
  Users,
  Shield,
  TrendingUp,
} from "lucide-react";

import HeaderSection from "../../components/HeaderSection";
import FaqSection from "../../sections/contact/FaqSection";
import ContactForm from "../../sections/contact/ContactForm";

const CustomSolutions = () => {
  const services = [
    {
      title: "Bespoke Software Development",
      description:
        "Fully customized software solutions built from the ground up to match your exact business requirements. Tailored architecture, features, and workflows designed specifically for your organization.",
      icon: Code,
      color: "blue-500",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Custom API Development",
      description:
        "Robust, scalable APIs designed to integrate seamlessly with your existing systems. RESTful and GraphQL APIs with comprehensive documentation and security features.",
      icon: Layers,
      color: "red-500",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Legacy System Modernization",
      description:
        "Transform outdated systems into modern, efficient solutions. We preserve your valuable data while upgrading technology stack and improving performance.",
      icon: RefreshCcw,
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Custom Integration Solutions",
      description:
        "Seamlessly connect disparate systems and applications. Custom middleware and integration platforms that ensure smooth data flow across your entire tech ecosystem.",
      icon: Puzzle,
      color: "#3b82f6",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Workflow Automation Tools",
      description:
        "Custom automation solutions that streamline your unique business processes. Intelligent workflows that adapt to your specific operational requirements.",
      icon: Zap,
      color: "#8b5cf6",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Custom Analytics Platforms",
      description:
        "Tailored business intelligence and analytics solutions. Custom dashboards, reporting tools, and data visualization platforms designed for your specific metrics.",
      icon: BarChart3,
      color: "#ec4899",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const advantages = [
    {
      title: "Tailored Solutions",
      description:
        "Every solution is designed specifically for your unique business needs.",
      icon: Wrench,
      color: "blue",
    },
    {
      title: "Innovation Focus",
      description:
        "Cutting-edge technologies and creative approaches to solve complex challenges.",
      icon: Lightbulb,
      color: "purple",
    },
    {
      title: "Scalable Architecture",
      description: "Solutions built to grow and evolve with your business.",
      icon: BarChart3,
      color: "green",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality control throughout development.",
      icon: Shield,
      color: "orange",
    },
    {
      title: "Agile Development",
      description: "Flexible, iterative approach with regular feedback and updates.",
      icon: RefreshCcw,
      color: "red",
    },
    {
      title: "Seamless Integration",
      description: "Perfect compatibility with your existing systems and workflows.",
      icon: LinkIcon,
      color: "indigo",
    },
  ];

  return (
    <>
      <section className="relative max-w-7xl md:mx-auto sm:mx-5 flex flex-col items-center justify-center min-h-screen text-white overflow">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-white py-20 px-4">
          <HeaderSection
            title="Custom Solutions"
            highlight="Built for Your Success"
            subtitle="Fyodor creates bespoke software solutions tailored to your unique business challenges, delivering innovation and efficiency through custom-built technology."
          />
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl w-full"
          >
            {[
              {
                value: "95%",
                label: "Client Retention Rate",
                icon: TrendingUp,
              },
              { value: "300+", label: "Custom Solutions Delivered", icon: Target },
              { value: "100%", label: "Project Success Rate", icon: Users },
              { value: "4.2x", label: "Average Performance Boost", icon: BarChart },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20">
                    <stat.icon size={24} className="text-blue-400" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-slate-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Services Section */}
        <div id="services" className="py-20 px-4 w-full">
          <div className="max-w-7xl md:mx-auto sm:mx-5">
            <div className="flex flex-col md:items-start sm:items-center mb-16">
              <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
                <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
                <span className="text-white text-sm font-medium tracking-wider">
                  Services
                </span>
              </div>

              <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Custom Solutions by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Fyodor
                </span>
              </h2>

              <p className="text-left text-slate-300 text-lg max-w-2xl">
                Tailored software solutions designed to address your unique business challenges and drive exceptional results
              </p>
            </div>

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="relative group rounded-3xl p-8 bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-blue-400/30 transition-all duration-500 overflow-hidden h-full"
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10">
                        <service.icon
                          size={32}
                          className={`text-${service.color}`}
                        />
                      </div>
                    </div>

                    <h4 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h4>

                    <p className="text-slate-300 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="relative py-20 px-4 w-full">
          <div className="max-w-7xl md:mx-auto sm:mx-5">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6"
              >
                <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
                  Why Choose Us
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Fyodor Custom
                </span>{" "}
                Advantage
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-300 text-xl max-w-3xl md:mx-auto sm:mx-5"
              >
                We combine deep technical expertise with creative problem-solving to deliver custom solutions that perfectly fit your business needs.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((adv, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group bg-gradient-to-b from-slate-800/40 to-slate-900/40 rounded-2xl p-8 border border-slate-700/30 hover:border-blue-400/40 transition-all duration-500 backdrop-blur-sm relative overflow-hidden h-full"
                >
                  {/* Animated highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-violet-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-2xl" />

                  <div className="flex md:items-start sm:items-center gap-5 relative z-10 h-full">
                    <div className="flex-shrink-0">
                      <div
                        className={`p-3 rounded-xl bg-${adv.color}-500/10 border border-${adv.color}-500/20`}
                      >
                        <adv.icon
                          size={24}
                          className={`text-${adv.color}-400`}
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-white font-bold text-xl mb-3 group-hover:text-blue-200 transition-colors duration-300">
                        {adv.title}
                      </h4>
                      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20 px-4 w-full">
          <div className="max-w-7xl md:mx-auto sm:mx-5">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
                  Our Process
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Custom Development
                </span>{" "}
                Process
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-300 text-xl max-w-3xl md:mx-auto sm:mx-5"
              >
                A collaborative approach that transforms your vision into powerful, custom-built solutions
              </motion.p>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-3 gap-8 relative">
                {[
                  {
                    step: "01",
                    title: "Discover & Define",
                    desc: "Deep dive into your business requirements, challenges, and goals to define the perfect solution.",
                    icon: Target,
                    color: "blue",
                  },
                  {
                    step: "02",
                    title: "Design & Build",
                    desc: "Create custom architecture and develop tailored solutions using cutting-edge technologies.",
                    icon: Cog,
                    color: "violet",
                  },
                  {
                    step: "03",
                    title: "Test & Launch",
                    desc: "Rigorous testing, seamless deployment, and ongoing support to ensure optimal performance.",
                    icon: Zap,
                    color: "cyan",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="relative text-center"
                  >
                    {/* Step connector for mobile */}
                    <div className="absolute left-1/2 -top-8 w-1 h-8 bg-gradient-to-b from-blue-500/20 to-violet-500/20 transform -translate-x-1/2 md:hidden"></div>

                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 border border-${item.color}-500/30 flex items-center justify-center text-2xl font-bold text-${item.color}-400`}
                      >
                        {item.step}
                      </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 h-full">
                      <div className="flex justify-center mb-4">
                        <div
                          className={`p-3 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20`}
                        >
                          <item.icon
                            size={24}
                            className={`text-${item.color}-400`}
                          />
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-300">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl md:mx-auto sm:mx-5 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl"></div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Perfect Custom Solution?
              </span>
            </h3>

            <p className="text-slate-300 text-xl mb-8 max-w-2xl md:mx-auto sm:mx-5">
              Let's discuss how Fyodor can create a tailored solution that perfectly fits your business needs and drives exceptional results.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button className="px-6 py-3 rounded-full bg-white text-black font-medium flex items-center gap-2 hover:bg-neutral-200 transition text-sm sm:text-base">
                Start Your Custom Project <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <FaqSection />
      <ContactForm />
    </>
  );
};

export default CustomSolutions;