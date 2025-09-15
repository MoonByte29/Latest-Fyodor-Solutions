import React from "react";
import BlurText from "../components/BlurText";
import Particles from "../components/Particles";
import ServicesSection from "../sections/home/ServicesSection";
import Benefits from "../sections/home/Benefits";
import PartnerSection from "../sections/home/PartnerSection";
import BlogSection from "../sections/home/BlogSection";
import ChromaBackground from "../components/ChromaBackground";
import Specialities from "../sections/home/Specialities";
import ContactForm from "../sections/contact/ContactForm";
import Testimonial from "../sections/home/Testimonial";
import FaqSection from "../sections/contact/FaqSection";
import Hero from "../sections/home/Hero";

const Home = () => {
  return (
    <>
      <div className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Sections */}
        <Benefits />
        <PartnerSection />
        <ChromaBackground />
        <Specialities />
        <BlogSection />
        <Testimonial />
        <FaqSection />
        <ContactForm />
      </div>
    </>
  );
};

export default Home;