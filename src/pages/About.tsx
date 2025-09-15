import React from "react";
import { Users, Target, Award, Lightbulb, Heart, Globe } from "lucide-react";
import AboutSection from "../sections/about/AboutSection";
import PartnerSection from "../sections/home/PartnerSection";
import AboutFounder from "../sections/about/AboutFounder";
import Stages from "../sections/about/Stages";
import ValuesSection from "../sections/about/ValuesSection";
import TeamSection from "../sections/about/TeamSection";
import FaqSection from "../sections/contact/FaqSection";
import ContactForm from "../sections/contact/ContactForm";
import AboutHero from "../sections/about/AboutHero";

const About = () => {
  return (
    <>
      <div className="relative">

        <AboutHero />

        <AboutSection />
        <PartnerSection />
        <AboutFounder />
        <TeamSection />
        <ValuesSection />
        <Stages />
        <FaqSection />
        <ContactForm />
      </div>
    </>
  );
};

export default About;
