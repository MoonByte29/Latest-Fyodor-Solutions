import React from "react";
import StackCards from "../../components/StackCards";
import ScrollAnimatedCards from "../../components/ScrollAnimatedCards";
import { Award } from "lucide-react";
import HeaderSection from "../../components/HeaderSection";
import Testimonial from "../../sections/home/Testimonial";
import ContactForm from "../../sections/contact/ContactForm";

const automotiveProjects = [
  {
    title: "Smart Manufacturing",
    description:
      "Robotics and IoT-driven automation streamline production lines, reduce costs, and ensure consistent quality in vehicle manufacturing.",
    bullets: [
      "Assembly line efficiency improved by 45%.",
      "Error rates reduced by 70% using real-time monitoring.",
      "Flexible production enables quick model customization.",
    ],
    images: [
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg",
      "https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg",
    ],
    color: "#8E44AD",
  },
  {
    title: "Predictive Maintenance",
    description:
      "AI-powered predictive analytics help identify potential vehicle issues before breakdowns, saving time and reducing repair costs.",
    bullets: [
      "Vehicle downtime reduced by 60%.",
      "Maintenance costs lowered by 35%.",
      "Real-time health monitoring via IoT sensors.",
    ],
    images: [
      "https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg",
      "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
    ],
    color: "#27AE60",
  },
  {
    title: "Connected Vehicles",
    description:
      "Automation enables smart, connected vehicles with real-time diagnostics, over-the-air updates, and enhanced infotainment systems.",
    bullets: [
      "Seamless OTA updates improve software reliability.",
      "Remote diagnostics reduce service visits by 50%.",
      "Enhanced driver assistance and safety features.",
    ],
    images: [
      "https://images.pexels.com/photos/376361/pexels-photo-376361.jpeg",
      "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg",
    ],
    color: "#2E86AB",
  },
  {
    title: "Supply Chain Automation",
    description:
      "Automation in supply chain management improves logistics, reduces lead times, and ensures smoother operations for automotive manufacturing.",
    bullets: [
      "Inventory accuracy improved to 98%.",
      "Faster delivery cycles with automated logistics.",
      "Reduced manual paperwork in import/export processes.",
    ],
    images: [
      "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg",
      "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg",
    ],
    color: "#F39C12",
  },
];

 const automotiveAutomationSections = [
  {
    id: 1,
    title: "Smart Manufacturing",
    description:
      "Implement robotics and AI-driven assembly lines to boost precision, reduce downtime, and accelerate production while ensuring consistent quality.",
    image:
      "https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg",
  },
  {
    id: 2,
    title: "Connected Vehicles",
    description:
      "Leverage IoT and telematics to enable real-time vehicle monitoring, predictive maintenance, and personalized in-car experiences.",
    image:
      "https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg",
  },
  {
    id: 3,
    title: "Autonomous Driving",
    description:
      "Integrate advanced driver-assistance systems (ADAS) and self-driving technologies to improve safety, reduce accidents, and transform mobility services.",
    image:
      "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg",
  },
  {
    id: 4,
    title: "Customer Experience & After-Sales",
    description:
      "Use AI chatbots, predictive analytics, and automated service scheduling to deliver personalized after-sales support and enhance customer satisfaction.",
    image:
      "https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg",
  },
];
const Automotive = () => {
  return (
    <div className="relative">
      <HeaderSection
        title="Driving Innovation in"
        highlight="Automotive Industry"
        subtitle="Explore how automation, electric vehicles, and autonomous driving are revolutionizing the automotive sector."
      />
      {/* Reusable StackCards with section heading */}
      <StackCards
        label="WHY"
        title="Automotive Automation"
        gradientText="Excellence"
        icon={<Award className="w-5 h-5 text-white" />}
        description="Accelerating innovation through smart automation"
        projects={automotiveProjects}
      />

      {/* Scroll Animated Cards section */}
      <ScrollAnimatedCards
        label="INNOVATION"
        title="Accelerating Automotive Excellence through "
        highlight="Intelligent Automation"
        description="From identifying workflows to scaling automation"
        sections={automotiveAutomationSections}
      />

      <Testimonial/>
      <ContactForm/>
    </div>
  );
};

export default Automotive;
