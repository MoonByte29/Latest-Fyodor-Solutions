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
  ChevronRight,
  ArrowRight,
  Play,
  Target,
  BarChart,
  Users,
  Shield,
  Clock,
  DollarSign,
  TrendingUp,
} from "lucide-react";

import GlassIcons from "../../components/GlassIcons";
import HeaderSection from "../../components/HeaderSection";
import FaqSection from "../../sections/contact/FaqSection";
import ContactForm from "../../sections/contact/ContactForm";

const AIAutomation = () => {
  const services = [
    {
      title: "AI Strategy & Consulting",
      description:
        "Comprehensive AI roadmap development and implementation planning. We help you identify opportunities and build a tailored AI strategy aligned with your business goals.",
      icon: Brain,
      color: "blue-500",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Machine Learning Solutions",
      description:
        "Custom ML models and algorithms designed to solve your specific business challenges. From predictive analytics to pattern recognition and beyond.",
      icon: Cpu,
      color: "red-500",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Intelligent Process Automation",
      description:
        "End-to-end automation of complex business processes using AI and RPA. Streamline operations, reduce errors, and increase efficiency across your organization.",
      icon: Zap,
      color: "#06b6d4",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Data Analytics & Insights",
      description:
        "Transform raw data into actionable intelligence. Advanced analytics platforms that help you make data-driven decisions and uncover hidden opportunities.",
      icon: BarChart3,
      color: "#3b82f6",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      title: "AI-Powered Workflow Optimization",
      description:
        "Intelligent workflow systems that learn and adapt to your business needs. Automate repetitive tasks and optimize complex decision-making processes.",
      icon: Workflow,
      color: "#8b5cf6",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Conversational AI & Chatbots",
      description:
        "Advanced chatbot solutions and virtual assistants that provide seamless customer experiences and automate customer support operations.",
      icon: Bot,
      color: "#ec4899",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const advantages = [
    {
      title: "AI Expertise",
      description:
        "Deep technical knowledge in machine learning, NLP, and computer vision.",
      icon: Brain,
      color: "blue",
    },
    {
      title: "Custom Solutions",
      description:
        "Tailored AI implementations for your specific industry needs.",
      icon: Settings,
      color: "purple",
    },
    {
      title: "Scalable Architecture",
      description: "AI systems designed to grow with your business needs.",
      icon: BarChart3,
      color: "green",
    },
    {
      title: "Ethical AI Practices",
      description: "Responsible AI development with transparency and fairness.",
      icon: Scale,
      color: "orange",
    },
    {
      title: "Continuous Learning",
      description: "AI systems that improve and adapt over time.",
      icon: RefreshCcw,
      color: "red",
    },
    {
      title: "Seamless Integration",
      description: "Easy integration with your existing systems and workflows.",
      icon: LinkIcon,
      color: "indigo",
    },
  ];

  return (
    <>
      {" "}
      <section className="relative max-w-7xl mx-auto flex flex-col items-center justify-center min-h-screen text-white overflow">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-white py-20 px-4">
          <HeaderSection
            title="Intelligent Automation"
            highlight="for the Modern Enterprise"
            subtitle="Fyodor empowers businesses with AI and intelligent automation
            solutions that drive innovation, efficiency, and competitive
            advantage."
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

        {/* Services Section */}
        <div id="services" className="py-20 px-4 w-full">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-start mb-16">
              <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
                <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
                <span className="text-white text-sm font-medium tracking-wider">
                  Services
                </span>
              </div>

              <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
                AI Solutions by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Fyodor
                </span>
              </h2>

              <p className="text-left text-slate-300 text-lg max-w-2xl">
                Unlock the power of artificial intelligence to innovate,
                automate, and scale your business with Fyodor
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
                The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  Fyodor AI
                </span>{" "}
                Advantage
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-300 text-xl max-w-3xl mx-auto"
              >
                We combine technical expertise with business acumen to deliver
                AI solutions that create real value.
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

                  <div className="flex items-start gap-5 relative z-10 h-full">
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
          <div className="max-w-7xl mx-auto">
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
                  AI Implementation
                </span>{" "}
                Approach
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-300 text-xl max-w-3xl mx-auto"
              >
                A structured methodology that transforms your business
                challenges into AI-powered solutions
              </motion.p>
            </div>

            <div className="relative">
              {/* Connecting line */}

              <div className="grid md:grid-cols-3 gap-8 relative">
                {[
                  {
                    step: "01",
                    title: "Discover & Analyze",
                    desc: "Understand business challenges and identify AI opportunities through comprehensive analysis.",
                    icon: Target,
                    color: "blue",
                  },
                  {
                    step: "02",
                    title: "Design & Develop",
                    desc: "Craft tailored solutions with the right models and frameworks for your specific needs.",
                    icon: Settings,
                    color: "violet",
                  },
                  {
                    step: "03",
                    title: "Deploy & Scale",
                    desc: "Integrate, test, and scale solutions seamlessly into your existing workflows and systems.",
                    icon: BarChart3,
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
            className="max-w-5xl mx-auto bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl"></div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Artificial Intelligence?
              </span>
            </h3>

            <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how Fyodor can implement AI and automation solutions
              that drive efficiency, innovation, and competitive advantage for
              your business.
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
      </section>
      <FaqSection />
      <ContactForm />
    </>
  );
};

export default AIAutomation;
