import React from "react";
import Card from "../../components/Card";

const teamMembers = [
  {
    name: "Nikhil Mittal",
    title: "Founder & CEO",
    contactText: "Connect",
    avatarUrl: "https://source.unsplash.com/400x400/?business,portrait,man",
    linkedinUrl: "https://www.linkedin.com/in/nikhil-mittal",
  },
  {
    name: "Viresh Gupta",
    title: "VP — Business Consulting",
    contactText: "Connect",
    avatarUrl:
      "https://source.unsplash.com/400x400/?professional,executive,man",
    linkedinUrl: "https://www.linkedin.com/in/viresh-gupta",
  },
  {
    name: "Hardic Garg",
    title: "VP - Strategy",
    contactText: "Connect",
    avatarUrl:
      "https://source.unsplash.com/400x400/?business,professional,woman", // you can change to man if you want consistency
    linkedinUrl: "https://www.linkedin.com/in/hardic-garg",
  },
];

const TeamSection = () => {
  return (
    <section className="min-h-screen py-16 px-6 relative overflow-hidden mb-16">
      <div className="max-w-6xl md:mx-auto sm:mx-5 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-6">
            <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
            <span className="text-white text-sm font-medium tracking-wider">
              TEAM
            </span>
          </div>

          <h2 className="font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-4">
            The People Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Fyodor
            </span>
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl">
            Meet the dedicated minds driving innovation, collaboration, and
            excellence at Fyodor.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              title={member.title}
              contactText={member.contactText}
              avatarUrl={member.avatarUrl}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
