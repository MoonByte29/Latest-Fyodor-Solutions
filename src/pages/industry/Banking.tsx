import React from "react";
import StackCards from "../../components/StackCards";
import ScrollAnimatedCards from "../../components/ScrollAnimatedCards";
import { Award } from "lucide-react";
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
      "https://images.unsplash.com/photo-1591696331110-1b38b8c1a6b3",
      "https://images.unsplash.com/photo-1581091012184-9d45d6f212e0",
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
      "https://images.unsplash.com/photo-1591696330921-2c5e0f6f2d3e",
      "https://images.unsplash.com/photo-1600185367024-7c1c0e5ed90b",
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
      "https://images.unsplash.com/photo-1591696330934-4c6d9c1e2d12",
      "https://images.unsplash.com/photo-1600185367020-3d2a2f7c0d7b",
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
      "https://images.unsplash.com/photo-1556742042-3b6338f93b10?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "AI-Powered Analytics",
    description:
      "Use AI and machine learning to analyze customer behavior, detect fraud, and offer personalized services.",
    image:
      "https://images.unsplash.com/photo-1556741533-f6acd647d2fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Omnichannel Banking",
    description:
      "Seamless banking experience across mobile, web, and physical branches.",
    image:
      "https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=1200&q=80",
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
