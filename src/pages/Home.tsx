import React from "react";
import Benefits from "../sections/home/Benefits";
import PartnerSection from "../sections/home/PartnerSection";
import BlogSection from "../sections/home/BlogSection";
import Specialities from "../sections/home/Specialities";
import ContactForm from "../sections/contact/ContactForm";
import Testimonial from "../sections/home/Testimonial";
import FaqSection from "../sections/contact/FaqSection";
import Hero from "../sections/home/Hero";
import FeatureSection from "../sections/home/FeatureSection";

const Home = () => {
  return (
    <>
      <div className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Sections */}
        <Benefits />
        <PartnerSection />
        {/* <ChromaBackground /> */}
        <FeatureSection/>
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