import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Shield,
  Database,
  Cloud,
  Users,
  Lock,
  BarChart3,
  Globe,
  RefreshCcw,
  Link as LinkIcon,
  ChevronRight,
  ArrowRight,
  Play,
  Target,
  BarChart,
  Zap,
  Settings,
  Clock,
  DollarSign,
  TrendingUp,
} from "lucide-react";

import HeaderSection from "../../components/HeaderSection";
import FaqSection from "../../sections/contact/FaqSection";
import ContactForm from "../../sections/contact/ContactForm";

const EnterpriseAppDevelopment = () => {
  const services = [
    {
      title: "Enterprise Web Applications",
      description:
        "Scalable, secure web applications built for enterprise environments. Modern architectures with robust security, performance optimization, and seamless user experiences.",
      icon: Globe,
      color: "blue-500",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Enterprise Mobile Solutions",
      description:
        "Native and cross-platform mobile applications designed for enterprise use. Secure, scalable, and integrated with your existing enterprise systems and workflows.",
      icon: Building2,
      color: "red-500",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Enterprise Data Management",
      description:
        "Comprehensive data management solutions including data warehousing, analytics platforms, and business intelligence systems tailored for enterprise scale.",
      icon: Database,
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Cloud-Native Architecture",
      description:
        "Modern cloud-native applications built for scalability, reliability, and performance. Microservices architecture with containerization and orchestration.",
      icon: Cloud,
      color: "#3b82f6",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "Enterprise Security Solutions",
      description:
        "Comprehensive security implementations including authentication, authorization, encryption, and compliance with enterprise security standards and regulations.",
      icon: Shield,
      color: "#8b5cf6",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "User Management Systems",
      description:
        "Advanced user management and identity solutions. Role-based access control, single sign-on, and comprehensive user lifecycle management for enterprises.",
      icon: Users,
      color: "#ec4899",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const advantages = [
    {
      title: "Enterprise Expertise",
      description:
        "Deep understanding of enterprise requirements, compliance, and scalability needs.",
      icon: Building2,
      color: "blue",
    },
    {
      title: "Security First",
      description:
        "Enterprise-grade security built into every layer of the application architecture.",
      icon: Lock,
      color: "purple",
    },
    {
      title: "Scalable Solutions",
      description: "Applications designed to handle enterprise-level traffic and data volumes.",
      icon: BarChart3,
      color: "green",
    },
    {
      title: "Compliance Ready",
      description: "Built-in compliance with industry standards and regulatory requirements.",
      icon: Shield,
      color: "orange",
    },
    {
      title: "Performance Optimized",
      description: "High-performance applications with advanced caching and optimization.",
      icon: Zap,
      color: "red",
    },
    {
      title: "Seamless Integration",
      description: "Perfect integration with existing enterprise systems and workflows.",
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
            title="Enterprise App Development"
            highlight="at Scale"
            subtitle="Fyodor delivers robust, scalable enterprise applications that power large organizations with security, performance, and reliability at their core."
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
                value: "99.9%",
                label: "Application Uptime",
                icon: TrendingUp,
              },
              { value: "150+", label: "Enterprise Apps Built", icon: Target },
              { value: "100%", label: "Security Compliance", icon: Users },
              { value: "5.1x", label: "Performance Improvement", icon: BarChart },
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
                Enterprise Solutions by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Fyodor
                </span>
              </h2>

              <p className="text-left text-slate-300 text-lg max-w-2xl">
                Comprehensive enterprise application development services designed for large-scale organizations and complex business requirements
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
                  Fyodor Enterprise
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
                We combine enterprise-grade architecture with modern development practices to deliver applications that meet the highest standards of performance, security, and scalability.
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
                  Enterprise Development
                </span>{" "}
                Methodology
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-300 text-xl max-w-3xl md:mx-auto sm:mx-5"
              >
                A proven enterprise development approach that ensures security, scalability, and performance from day one
              </motion.p>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-3 gap-8 relative">
                {[
                  {
                    step: "01",
                    title: "Architecture & Planning",
                    desc: "Comprehensive enterprise architecture design with security, scalability, and compliance considerations.",
                    icon: Target,
                    color: "blue",
                  },
                  {
                    step: "02",
                    title: "Secure Development",
                    desc: "Enterprise-grade development with security best practices, testing, and quality assurance.",
                    icon: Settings,
                    color: "violet",
                  },
                  {
                    step: "03",
                    title: "Enterprise Deployment",
                    desc: "Secure deployment with monitoring, maintenance, and ongoing support for enterprise environments.",
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
              Ready to Build Your Next{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Enterprise Application?
              </span>
            </h3>

            <p className="text-slate-300 text-xl mb-8 max-w-2xl md:mx-auto sm:mx-5">
              Let's discuss how Fyodor can develop enterprise-grade applications that scale with your organization and meet the highest standards of security and performance.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button className="px-6 py-3 rounded-full bg-white text-black font-medium flex items-center gap-2 hover:bg-neutral-200 transition text-sm sm:text-base">
                Start Your Enterprise Project <ArrowRight size={18} />
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

export default EnterpriseAppDevelopment;