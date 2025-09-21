import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck,
  AlertTriangle,
  Activity,
  Database,
  Lock,
  CheckCircle,
  Users,
  Zap,
  Headphones,
  Briefcase,
  TrendingUp,
  Target,
  BarChart,
} from "lucide-react";

import ContactForm from "../../sections/contact/ContactForm";
import PartnerSection from "../../sections/home/PartnerSection";
import FaqSection from "../../sections/contact/FaqSection";
import HeaderSection from "../../components/HeaderSection";

const CybersecurityCompliance = () => {
  const services = [
    {
      title: "Security Architecture & DevSecOps",
      description:
        "Hardened infra and CI/CD pipelines, secure model deployment flows, and threat modeling tailored for AI + automation workloads.",
      icon: ShieldCheck,
    },
    {
      title: "Regulatory Compliance Enablement",
      description:
        "Mapping to ISO 27001, SOC2, GDPR, HIPAA, and industry-specific frameworks — with policy design, control implementation, and audit readiness.",
      icon: FileCheck,
    },
    {
      title: "Vulnerability & Access Management",
      description:
        "Pen testing, endpoint protection, identity & access controls, and third-party risk governance across your platform and partner stack.",
      icon: AlertTriangle,
    },
    {
      title: "Security Monitoring & Incident Response",
      description:
        "Log collection, SIEM integration, and tailored response playbooks for real-time alerts and post-incident review.",
      icon: Activity,
    },
    {
      title: "Data Protection & AI Ethics Alignment",
      description:
        "Safeguards around data privacy, model interpretability, and AI governance in line with evolving global guidelines.",
      icon: Database,
    },
  ];

  const advantages = [
    {
      title: "Proven Track Record",
      description:
        "We’ve built a reputation as a trusted and reliable partner in achieving business success.",
      icon: CheckCircle,
    },
    {
      title: "Tailored Solutions",
      description:
        "We offer personalised solutions tailored to your specific goals, audience, and industry.",
      icon: Lock,
    },
    {
      title: "Client-Centric Focus",
      description:
        "Your success is our priority — we prioritise understanding your business goals.",
      icon: Users,
    },
    {
      title: "Transparent Communication",
      description:
        "We believe in open and honest communication every step of the way.",
      icon: Zap,
    },
    {
      title: "Dedicated Support",
      description:
        "Your success is our priority, and we’re here to support you every step of the way.",
      icon: Headphones,
    },
    {
      title: "Expertise Across Industries",
      description:
        "Our team has extensive experience working across various industries.",
      icon: Briefcase,
    },
  ];

  return (
    <>
      <section className="relative max-w-6xl md:mx-auto sm:mx-5 flex flex-col items-center justify-center min-h-screen text-white">
        {/* Hero */}
        <div className="flex flex-col items-center justify-center min-h-screen text-white py-20 px-4">
          <HeaderSection
            title="Cybersecurity & Compliance"
            highlight="for Digital & AI Systems"
            subtitle="AI, automation, and digital systems introduce new layers of
              complexity and risk — from data pipelines to cloud interfaces.
              Fyodor embeds security and compliance at the core of every
              deployment."
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
                value: "40%",
                label: "Average Efficiency Gain",
                icon: TrendingUp,
              },
              { value: "200+", label: "AI Projects Deployed", icon: Target },
              { value: "98%", label: "Client Satisfaction", icon: Users },
              { value: "3.2x", label: "Average ROI", icon: BarChart },
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

        {/* What We Deliver */}
        <div id="services" className="py-20 px-4 w-full">
          <div className="max-w-7xl md:mx-auto sm:mx-5">
            <div className="flex flex-col md:items-start sm:items-center mb-16">
              <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
                <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
                <span className="text-white text-sm font-medium tracking-wider">
                  What We Deliver
                </span>
              </div>

              <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Security & Compliance by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Fyodor
                </span>
              </h2>

              <p className="text-left text-slate-300 text-lg max-w-2xl">
                We help clients de-risk their transformation journey with
                proactive controls, secure architectures, and regulatory
                alignment.
              </p>
            </div>

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
                        <service.icon size={32} className={`text-blue-400`} />
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

        {/* Why Choose Us */}
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
                Why we are your best choice
              </motion.h2>
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
                  <div className="flex md:items-start sm:items-center gap-5 relative z-10 h-full">
                    <div className="flex-shrink-0">
                      <div className={`p-3 rounded-xl bg-white/10`}>
                        <adv.icon size={24} className={`text-blue-400`} />
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

        {/* CTA */}
        <div className="py-20 px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl md:mx-auto sm:mx-5 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to secure your digital & AI systems with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Fyodor?
              </span>
            </h3>

            <p className="text-slate-300 text-xl mb-8 max-w-2xl md:mx-auto sm:mx-5">
              Let’s discuss how Fyodor can embed security and compliance into
              your workflows — resilient, secure, and audit-ready.
            </p>
          </motion.div>
        </div>

        {/* Partners */}
        <PartnerSection />
      </section>
      <FaqSection />
      {/* Contact */}
      <ContactForm />
    </>
  );
};

export default CybersecurityCompliance;
