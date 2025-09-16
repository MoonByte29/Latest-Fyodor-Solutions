import React from "react";
import StackCards from "../../components/StackCards";
import ScrollAnimatedCards from "../../components/ScrollAnimatedCards";
import { Award } from "lucide-react";
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
      "https://images.unsplash.com/photo-1581092334651-ddf26d9d43a6",
      "https://images.unsplash.com/photo-1581093588401-22c3c50fda51",
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
      "https://images.unsplash.com/photo-1600185367020-3d2a2f7c0d7b",
      "https://images.unsplash.com/photo-1600185367024-7c1c0e5ed90b",
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
      "https://images.unsplash.com/photo-1556742042-3b6338f93b10",
      "https://images.unsplash.com/photo-1556741533-f6acd647d2fb",
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
    image:
      "https://images.unsplash.com/photo-1581091012184-9d45d6f212e0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "AI Risk Assessment",
    description:
      "Predictive models enhance risk assessment and pricing for insurance policies.",
    image:
      "https://images.unsplash.com/photo-1600185367024-7c1c0e5ed90b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Customer Engagement",
    description:
      "AI chatbots and automated notifications increase engagement and retention.",
    image:
      "https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=1200&q=80",
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
