import React from "react";
import StackCards from "../../components/StackCards";
import ScrollAnimatedCards from "../../components/ScrollAnimatedCards";
import { Award } from "lucide-react";
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
      "https://images.unsplash.com/photo-1556741533-f6acd647d2fb",
      "https://images.unsplash.com/photo-1556742042-3b6338f93b10",
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
      "https://images.unsplash.com/photo-1600185367024-7c1c0e5ed90b",
      "https://images.unsplash.com/photo-1600185367020-3d2a2f7c0d7b",
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
      "https://images.unsplash.com/photo-1581091012184-9d45d6f212e0",
      "https://images.unsplash.com/photo-1581092334651-ddf26d9d43a6",
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
    image:
      "https://images.unsplash.com/photo-1591696331110-1b38b8c1a6b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Blockchain Payments",
    description:
      "Secure and efficient transactions using blockchain technologies.",
    image:
      "https://images.unsplash.com/photo-1600185367020-3d2a2f7c0d7b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Personal Finance Management",
    description:
      "AI-powered tools provide personalized insights for budgeting and investments.",
    image:
      "https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=1200&q=80",
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
