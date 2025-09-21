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
