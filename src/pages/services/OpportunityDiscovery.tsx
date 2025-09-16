import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  Workflow,
  Bot,
  Brain,
  Settings,
  BarChart3,
  Scale,
  RefreshCcw,
  Link as LinkIcon,
  ArrowRight,
  Target,
  BarChart,
  Users,
  CheckCircle,
  ClipboardList,
  Layers,
  ListChecks,
  Headphones,
  Briefcase,
} from "lucide-react";

import GlassIcons from "../../components/GlassIcons";
import ContactForm from "../../sections/contact/ContactForm";
import PartnerSection from "../../sections/home/PartnerSection";
import FaqSection from "../../sections/contact/FaqSection";

const OpportunityDiscovery = () => {
  const services = [
    {
      title: "Process Discovery & Mapping",
      description:
        "Identify high-friction workflows through interviews, digital observation, and workflow analytics.",
      icon: ClipboardList,
      color: "blue-500",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Process Mining & Task Mining",
      description:
        "Leverage leading platforms to extract insights from system logs and user behavior for precise process visibility.",
      icon: Layers,
      color: "violet-500",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Opportunity Assessment",
      description:
        "Score automation potential across RPA, AI, and hybrid approaches based on volume, complexity, and business value.",
      icon: BarChart3,
      color: "cyan-500",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Optimization Strategy",
      description:
        "Recommend not just what to automate — but how to simplify first, reduce handoffs, and maximize ROI post-deployment.",
      icon: Settings,
      color: "purple-500",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Use Case Pipeline Design",
      description:
        "Deliver a clear, prioritized backlog of automation-ready use cases with supporting business cases.",
      icon: ListChecks,
      color: "indigo-500",
      gradient: "from-indigo-500 to-violet-500",
    },
  ];

  const advantages = [
    {
      title: "Proven Track Record",
      description:
        "We’ve built a reputation as a trusted and reliable partner in achieving business success.",
      icon: CheckCircle,
      color: "blue",
    },
    {
      title: "Tailored Solutions",
      description:
        "We offer personalised solutions tailored to your specific goals, audience, and industry.",
      icon: Brain,
      color: "violet",
    },
    {
      title: "Client-Centric Focus",
      description:
        "Your success is our priority — we prioritise understanding your business goals.",
      icon: Users,
      color: "cyan",
    },
    {
      title: "Transparent Communication",
      description:
        "We believe in open and honest communication every step of the way.",
      icon: Zap,
      color: "orange",
    },
    {
      title: "Dedicated Support",
      description:
        "Your success is our priority, and we’re here to support you every step of the way.",
      icon: Headphones,
      color: "green",
    },
    {
      title: "Expertise Across Industries",
      description:
        "Our team has extensive experience working across various industries.",
      icon: Briefcase,
      color: "red",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discover & Analyze",
      desc: "Understand business challenges and identify AI & automation opportunities through comprehensive analysis.",
      icon: Target,
      color: "blue",
    },
    {
      step: "02",
      title: "Design & Develop",
      desc: "Craft tailored solutions, choose the right models and frameworks for your needs.",
      icon: Settings,
      color: "violet",
    },
    {
      step: "03",
      title: "Deploy & Scale",
      desc: "Integrate, test, and scale solutions seamlessly into existing workflows and systems.",
      icon: BarChart3,
      color: "cyan",
    },
  ];

  return (
    <>
      <section className="relative max-w-6xl md:mx-auto sm:mx-5 flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
        {/* Hero */}
        <div className="flex flex-col items-center justify-center min-h-screen text-white py-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-gradient-to-r from-blue-500/10 to-violet-500/10 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">
              Opportunity Discovery
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
              <span className="text-white">Unlocking </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
                New Opportunities
              </span>
              <br />
              <span className="text-slate-300 text-3xl md:text-4xl font-medium">
                Driving Growth Through Discovery
              </span>
            </h1>

            <p className="text-slate-300 text-xl md:text-2xl max-w-3xl md:mx-auto sm:mx-5 mb-10">
              We help businesses identify untapped markets, optimize strategies,
              and discover high-impact opportunities that fuel innovation and
              sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <button className="px-6 py-3 rounded-full bg-white text-black font-medium flex items-center gap-2 hover:bg-neutral-200 transition text-sm sm:text-base">
                  Explore Opportunities <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats (kept same structure as AIAutomation) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl w-full"
          >
            {[
              {
                value: "Live visibility",
                label: "Understand how work gets done",
                icon: BarChart,
              },
              {
                value: "AI-ready use cases",
                label: "Prioritized backlog",
                icon: Target,
              },
              {
                value: "Data-backed ROI",
                label: "Projections per opportunity",
                icon: Users,
              },
              {
                value: "Streamlined workflows",
                label: "Pre-automation",
                icon: CheckCircle,
              },
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
                <h3 className="text-xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-slate-300 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Services section */}
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
                Opportunity Discovery by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Fyodor
                </span>
              </h2>

              <p className="text-left text-slate-300 text-lg max-w-2xl">
                Unlock process intelligence to identify automation-ready
                processes, quantify value, and create a prioritized plan to
                implement automation with measurable ROI.
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

        {/* Advantages */}
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
                  Fyodor
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
                We combine process intelligence, domain expertise, and delivery
                focus to turn discoveries into actionable automation programmes.
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

        {/* Process */}
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
                  Discovery Approach
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-300 text-xl max-w-3xl md:mx-auto sm:mx-5"
              >
                A structured methodology that transforms your business
                challenges into automation-ready opportunities.
              </motion.p>
            </div>

            <div className="relative">
              <div className="grid md:grid-cols-3 gap-8 relative">
                {processSteps.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="relative text-center"
                  >
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

        {/* CTA */}
        <div className="py-20 px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl md:mx-auto sm:mx-5 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl"></div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to discover automation opportunities with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Fyodor?
              </span>
            </h3>

            <p className="text-slate-300 text-xl mb-8 max-w-2xl md:mx-auto sm:mx-5">
              Let’s discuss how Fyodor can uncover automation-ready workflows
              and build a prioritized roadmap with measurable ROI.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button className="px-6 py-3 rounded-full bg-white text-black font-medium flex items-center gap-2 hover:bg-neutral-200 transition text-sm sm:text-base">
                Schedule a Consultation <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Partners / Platforms */}
        <PartnerSection />
      </section>
      <FaqSection />
      <ContactForm />
    </>
  );
};

export default OpportunityDiscovery;
