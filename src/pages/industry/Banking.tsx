import React from "react";
import StackCards from "../../components/StackCards";
import ScrollAnimatedCards from "../../components/ScrollAnimatedCards";
import { Award, BarChart3, Cpu, Smartphone } from "lucide-react";
import HeaderSection from "../../components/HeaderSection";
import Testimonial from "../../sections/home/Testimonial";
import ContactForm from "../../sections/contact/ContactForm";

const bankingProjects = [
  {
    title: "Digital Banking",
    description:
      "Seamless online banking solutions improving customer convenience and reducing branch dependency.",
    bullets: [
      "Mobile app adoption increased by 70%.",
      "Transactions completed in under 2 minutes.",
      "Enhanced security with biometric login.",
    ],
    images: [
      "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    color: "#1F618D",
  },
  {
    title: "AI Fraud Detection",
    description:
      "AI-driven monitoring systems detect and prevent fraudulent transactions in real-time.",
    bullets: [
      "Fraud detection accuracy improved by 90%.",
      "Automated alerts for suspicious activity.",
      "Reduced financial losses significantly.",
    ],
    images: [
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    color: "#117A65",
  },
  {
    title: "Customer Personalization",
    description:
      "Tailored banking products and services based on customer behavior and predictive analytics.",
    bullets: [
      "Customized loan offers increased by 50%.",
      "Personalized insights for investment planning.",
      "Higher customer retention and satisfaction.",
    ],
    images: [
      "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    color: "#F39C12",
  },
];

const bankingAutomationSections = [
  {
    id: 1,
    title: "Digital Transformation",
    description:
      "Implement advanced digital platforms to streamline banking operations and enhance customer experience.",
    image:
      "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    icon: Smartphone,
    features: [
      "Mobile Banking",
      "Digital Onboarding",
      "Cloud Infrastructure",
      "API Integration",
    ],
  },
  {
    id: 2,
    title: "AI-Powered Analytics",
    description:
      "Use AI and machine learning to analyze customer behavior, detect fraud, and offer personalized services.",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    icon: Cpu,
    features: [
      "Machine Learning",
      "Predictive Analytics",
      "Risk Assessment",
      "Real-time Processing",
    ],
  },
  {
    id: 3,
    title: "Omnichannel Banking",
    description:
      "Seamless banking experience across mobile, web, and physical branches.",
    image:
      "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    icon: BarChart3,
    features: [
      "Unified Experience",
      "Cross-platform Sync",
      "Branch Integration",
      "Customer Journey",
    ],
  },
];

const Banking = () => {
  return (
    <div className="relative">
      <HeaderSection
        title="Transforming"
        highlight="Banking Sector"
        subtitle="Explore digital banking, AI-driven fraud prevention, and personalized financial services."
      />
      <StackCards
        label="WHY"
        title="Banking Innovation"
        gradientText="Excellence"
        icon={<Award className="w-5 h-5 text-white" />}
        description="Boosting customer trust through innovation"
        projects={bankingProjects}
      />
      <ScrollAnimatedCards
        label="INNOVATION"
        title="Driving Banking Excellence through "
        highlight="Intelligent Solutions"
        description="From digital transformation to AI-powered analytics"
        sections={bankingAutomationSections}
      />
      <Testimonial />
      <ContactForm />
    </div>
  );
};

export default Banking;
