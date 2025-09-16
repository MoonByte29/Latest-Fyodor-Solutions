import React from "react";
import { motion } from "framer-motion";
import {
  MonitorCheck,
  GitBranch,
  Building2,
  BarChart3,
  ShieldAlert,
  CheckCircle,
  Users,
  Zap,
  Headphones,
  Briefcase,
  MessageCircle,
} from "lucide-react";

import ContactForm from "../../sections/contact/ContactForm";
import PartnerSection from "../../sections/home/PartnerSection";
import FaqSection from "../../sections/contact/FaqSection";

const ManagedDelivery = () => {
  const services = [
    {
      title: "Delivery & Operations Oversight",
      description:
        "We take charge of day-to-day automation operations — monitoring, issue resolution, upgrades, and continuous improvements.",
      icon: MonitorCheck,
    },
    {
      title: "Change Management & Governance",
      description:
        "Structured workflows, version control, and stakeholder alignment — embedded into our delivery model.",
      icon: GitBranch,
    },
    {
      title: "Center of Excellence (CoE) Enablement",
      description:
        "We help you build, run, or scale an internal CoE — or act as your extended CoE with embedded resources and process leaders.",
      icon: Building2,
    },
    {
      title: "Performance Dashboards & SLA Monitoring",
      description:
        "Real-time visibility into KPIs, uptime, ROI, and improvement areas — all under committed SLAs.",
      icon: BarChart3,
    },
    {
      title: "Resource Continuity & Risk Management",
      description:
        "Avoid attrition risk and handoff gaps — our team ensures knowledge continuity and resource redundancy at every step.",
      icon: ShieldAlert,
    },
  ];

  const engagementModes = [
    "Fully Managed AI/RPA Programs",
    "Hybrid Delivery Pods (Client + Fyodor)",
    "Transition-as-a-Service (from in-house to managed)",
    "Continuous Improvement & Value Mining Retainers",
  ];

  const outcomes = [
    "99.9%+ bot uptime and incident-free operations",
    "Up to 60% reduction in automation TCO",
    "Proactive automation pipeline execution",
    "Faster ROI realization via continuous tuning",
    "A true CoE capability without internal overhead",
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
      icon: Briefcase,
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
      icon: MessageCircle,
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
      icon: Zap,
    },
  ];

  return (
    <>
      <section className="relative max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
        {/* Hero */}
        <div className="flex flex-col items-center justify-center min-h-screen text-white py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
              Managed Delivery
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl px-6 mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-white">Managed Delivery </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-400 to-violet-400">
                for AI & Automation Programs
              </span>
            </h1>

            <p className="text-slate-300 text-xl md:text-2xl max-w-3xl mx-auto mb-10">
              Free your teams to focus on innovation while Fyodor manages your
              AI and automation delivery — with full accountability, from infra
              and SLA-backed support to proactive roadmap execution.
            </p>
          </motion.div>
        </div>

        {/* What We Deliver */}
        <div id="services" className="py-20 px-4 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-start mb-16">
              <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
                <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
                <span className="text-white text-sm font-medium tracking-wider">
                  What We Deliver
                </span>
              </div>

              <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Delivery Excellence by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-400 to-violet-400">
                  Fyodor
                </span>
              </h2>

              <p className="text-left text-slate-300 text-lg max-w-2xl">
                Our managed services cover the full lifecycle of AI & RPA
                programs — ensuring reliable, scalable, and secure outcomes.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                      <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-pink-500/10">
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

            {/* Engagement Modes */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-6">
                Engagement Modes
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-slate-300">
                {engagementModes.map((mode, i) => (
                  <li key={i}>{mode}</li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Outcomes You Can Expect
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-slate-300">
                {outcomes.map((outcome, i) => (
                  <li key={i}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <PartnerSection />
        {/* Why Choose Us */}
        <div className="relative py-20 px-4 w-full">
          <div className="max-w-7xl mx-auto">
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
                  className="group bg-gradient-to-b from-slate-800/40 to-slate-900/40 rounded-2xl p-8 border border-slate-700/30 hover:border-indigo-400/40 transition-all duration-500 backdrop-blur-sm relative overflow-hidden h-full"
                >
                  <div className="flex items-start gap-5 relative z-10 h-full">
                    <div className="flex-shrink-0">
                      <div className={`p-3 rounded-xl bg-white/10`}>
                        <adv.icon size={24} className={`text-indigo-400`} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-white font-bold text-xl mb-3 group-hover:text-indigo-200 transition-colors duration-300">
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
            className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-300/10 via-blue-400/10 to-violet-400/10 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to scale your automation programs with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-400 to-violet-400">
                Fyodor?
              </span>
            </h3>

            <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
              Let’s discuss how Fyodor can manage delivery of your AI &
              automation systems — resilient, scalable, and ROI-driven.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact */}
      <FaqSection />
      <ContactForm />
    </>
  );
};

export default ManagedDelivery;
