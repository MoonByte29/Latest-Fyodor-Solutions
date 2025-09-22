import React from "react";
import StackCards from "../../components/StackCards";
import ScrollAnimatedCards from "../../components/ScrollAnimatedCards";
import { Award, BarChart, Target, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import HeaderSection from "../../components/HeaderSection";
import Testimonial from "../../sections/home/Testimonial";
import ContactForm from "../../sections/contact/ContactForm";

const insuranceProjects = [
  {
    title: "Digital Claims Processing",
    description:
      "Automated claims processing reduces turnaround time and improves customer satisfaction.",
    bullets: [
      "Claims processed 50% faster.",
      "Reduced paperwork with digital submissions.",
      "AI-assisted claim validation ensures accuracy.",
    ],
    images: [
      "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
      "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
    ],
    color: "#16A085",
  },
  {
    title: "Risk Assessment AI",
    description:
      "Predictive analytics and AI models assess risk more accurately for better underwriting.",
    bullets: [
      "Underwriting speed increased by 40%.",
      "Reduced claim defaults by 25%.",
      "Real-time risk analysis for policy customization.",
    ],
    images: [
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
      "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg",
    ],
    color: "#E67E22",
  },
  {
    title: "Customer Engagement",
    description:
      "Chatbots and automated notifications enhance customer interactions and retention.",
    bullets: [
      "24/7 customer support via AI chatbots.",
      "Automated reminders for policy renewals.",
      "Higher customer satisfaction and loyalty.",
    ],
    images: [
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
    ],
    color: "#2980B9",
  },
];

const insuranceSections = [
  {
    id: 1,
    title: "Digital Claims",
    description:
      "Streamline claims processing with automated workflows and AI-assisted validation.",
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
  },
  {
    id: 2,
    title: "AI Risk Assessment",
    description:
      "Predictive models enhance risk assessment and pricing for insurance policies.",
    image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg",
  },
  {
    id: 3,
    title: "Customer Engagement",
    description:
      "AI chatbots and automated notifications increase engagement and retention.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
];
const Insurance = () => {
  return (
    <div className="relative">
      <HeaderSection
        title="Revolutionizing"
        highlight="Insurance Industry"
        subtitle="Discover AI-powered risk assessment, digital claims, and enhanced customer engagement."
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
        title="Insurance Innovation"
        gradientText="Excellence"
        icon={<Award className="w-5 h-5 text-white" />}
        description="Transforming insurance through technology"
        projects={insuranceProjects}
      />
      <ScrollAnimatedCards
        label="INNOVATION"
        title="Driving Insurance Excellence with "
        highlight="Smart Technology"
        description="From automated claims to AI-powered risk analysis"
        sections={insuranceSections}
      />
      <Testimonial />
      <ContactForm />
    </div>
  );
};

export default Insurance;
