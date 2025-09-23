import React from "react";
import Card from "../../components/Card";
import Akash from "../../assets/Akash Singhal.png";
import Utkarsh from "../../assets/Utkarsh.png";
import StackCards from "../../components/StackCards";

const teamMembers = [
  {
    name: "Akash Singhal",
    avatarUrl: Akash,
    desc: "Akash Singhal is a trusted technology leader with over 13 years of experience helping clients accelerate their digital transformation through Intelligent Automation, AI, and Microsoft Power Platform solutions. He partners with businesses across regions to design and deliver tailored automation strategies that enhance productivity, reduce costs, and drive innovation. With expertise in Power Automate, Power Apps, Power BI, Azure services, and RPA tools like Blue Prism, Akash has successfully implemented solutions for sectors such as government, healthcare, construction, and finance. A Microsoft Certified Trainer, he has empowered over 1,000 professionals globally, ensuring teams are equipped with the right skills and best practices. Akash’s client-first approach, combined with deep technical knowledge and strategic insight, enables organizations to harness the latest technologies and achieve sustainable business outcomes."
  },
  {
    name: "Utkarsh Singhal",
    avatarUrl: Utkarsh,
    desc: "Utkarsh Singhal is a forward-thinking founder and AI innovator with over a decade of experience pioneering Conversational AI, Generative AI, and Intelligent Automation solutions that redefine how enterprises engage with customers and employees. With a strong foundation in Microsoft technologies and cutting-edge AI architectures, Utkarsh is driving the next wave of digital transformation by building platforms that are scalable, secure, and human-centric. As the founder, Utkarsh brings a visionary approach to enterprise AI adoption, blending deep technical expertise with business strategy. He has spearheaded initiatives that merge Generative AI with conversational systems, enabling organizations to move beyond traditional automation toward agentic, context-aware, and proactive AI assistants. His work spans industries such as financial services, automotive, healthcare, and government, where he has introduced transformative solutions that unlock efficiency, compliance, and innovation. Recognized as a strategic leader and market shaper, Utkarsh has not only designed and delivered enterprise AI solutions but has also guided organizations through the journey of responsible AI adoption—balancing innovation with governance, security, and trust. He is passionate about creating ecosystems where AI augments human potential, empowers decision-making, and drives sustainable competitive advantage."
  }
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
              KEY MEMBERS
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              name={member.name}
              avatarUrl={member.avatarUrl}
              desc={member.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
