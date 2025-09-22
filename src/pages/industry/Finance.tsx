import React from "react";
import StackCards from "../../components/StackCards";
import ScrollAnimatedCards from "../../components/ScrollAnimatedCards";
import { Award, BarChart, Target, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import HeaderSection from "../../components/HeaderSection";
import Testimonial from "../../sections/home/Testimonial";
import ContactForm from "../../sections/contact/ContactForm";

const financeProjects = [
{
    title: "AI Investment Analysis",
    description:
      "Leverage AI to identify profitable investment opportunities and manage portfolio risk.",
    bullets: [
      "Predictive insights improve returns by 25%.",
      "Automated portfolio management saves time.",
      "Real-time market monitoring for informed decisions.",
    ],
    images: [
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg",
    ],
    color: "#2E86AB",
  },
  {
    title: "Blockchain Payments",
    description:
      "Secure, fast, and transparent financial transactions using blockchain technology.",
    bullets: [
      "Transaction speed increased by 60%.",
      "Lower costs due to decentralized payments.",
      "Enhanced security and transparency.",
    ],
    images: [
      "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
      "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg",
    ],
    color: "#E67E22",
  },
  {
    title: "Personalized Financial Planning",
    description:
      "AI-driven insights help customers manage budgets, savings, and investments effectively.",
    bullets: [
      "Customized advice improves financial health.",
      "Automation reduces manual tracking errors.",
      "Predictive insights increase goal achievement.",
    ],
    images: [
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg",
    ],
    color: "#16A085",
  },
];

const financeSections = [
  {
    id: 1,
    title: "AI Investment Tools",
    description:
      "Automated analysis and insights to optimize investment strategies.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
  },
  {
    id: 2,
    title: "Blockchain Payments",
    description:
      "Secure and efficient transactions using blockchain technologies.",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
  },
  {
    id: 3,
    title: "Personal Finance Management",
    description:
      "AI-powered tools provide personalized insights for budgeting and investments.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
  },
];

const Finance = () => {
  return (
    <div className="relative">
      <HeaderSection
        title="Innovating"
        highlight="Finance Sector"
        subtitle="Explore AI-driven investment tools, blockchain payments, and personalized financial planning."
      />
      <div className="flex justify-center items-center mb-10">
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
      <StackCards
        label="WHY"
        title="Finance Innovation"
        gradientText="Excellence"
        icon={<Award className="w-5 h-5 text-white" />}
        description="Driving smarter financial decisions"
        projects={financeProjects}
      />
      <ScrollAnimatedCards
        label="INNOVATION"
        title="Empowering Finance through "
        highlight="Smart Technology"
        description="From AI investment tools to blockchain solutions"
        sections={financeSections}
      />
      <Testimonial />
      <ContactForm />
    </div>
  );
};

export default Finance;
