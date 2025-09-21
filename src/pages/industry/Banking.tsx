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
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5",
      "https://images.unsplash.com/photo-1605902711911-f22e89f5a0b3",
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
      "https://images.unsplash.com/photo-1639754391110-7ec6f64e4e6f",
      "https://images.unsplash.com/photo-1639754421893-5fcf3d3a8a30",
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
      "https://images.unsplash.com/photo-1581091870622-9d4a4fbb1e4d",
      "https://images.unsplash.com/photo-1581091012184-df4a3e5e2e0b",
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
      "https://images.unsplash.com/photo-1605902712931-d7b68b8f6f5b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "AI-Powered Analytics",
    description:
      "Use AI and machine learning to analyze customer behavior, detect fraud, and offer personalized services.",
    image:
      "https://images.unsplash.com/photo-1642690134796-6dd7f8e1b2d9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Omnichannel Banking",
    description:
      "Seamless banking experience across mobile, web, and physical branches.",
    image:
      "https://images.unsplash.com/photo-1621939514649-8e4b59d2fbb9?auto=format&fit=crop&w=1200&q=80",
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
