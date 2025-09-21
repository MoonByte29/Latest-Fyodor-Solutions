import React from "react";
import { Users, Target, Award, Lightbulb, Heart, Globe } from "lucide-react";
import AboutSection from "../sections/about/AboutSection";
import PartnerSection from "../sections/home/PartnerSection";
import Stages from "../sections/about/Stages";
import ValuesSection from "../sections/about/ValuesSection";
import TeamSection from "../sections/about/TeamSection";
import FaqSection from "../sections/contact/FaqSection";
import ContactForm from "../sections/contact/ContactForm";
import HeaderSection from "../components/HeaderSection";

const About = () => {
  return (
    <>
      <div className="relative">
        <HeaderSection
          title="Shaping the Future with"
          highlight="Innovation & Vision"
          subtitle="At Fyodor, we believe in empowering businesses with digital transformation, innovative solutions, and a vision that drives global success."
        />

        <AboutSection />
        <div className="lg:relative lg:block hidden">
          <PartnerSection />
        </div>

        <TeamSection />
        <div className="lg:relative lg:block hidden">

        <ValuesSection />
        </div>
        <Stages />
        <FaqSection />
        <ContactForm />
      </div>
    </>
  );
};

export default About;
