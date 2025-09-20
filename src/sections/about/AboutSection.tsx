import React, { useState } from "react";

interface Section {
  id: string;
  number: string;
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    id: "history",
    number: "01",
    title: "Our History",
    content:
      "Fyodor Solutions was founded with a vision to deliver best-in-class, futuristic solutions that empower enterprises through innovation and strategy. The company quickly built strong industry networks and established expertise in areas such as Generative AI, Power Platform, Robotic Process Automation, and governance models. With a focus on automation, .NET, chatbots, and PMO services, Fyodor has grown into a trusted partner for organizations seeking digital transformation. Its commitment to scaling innovation, enabling Centers of Excellence, and enhancing governance frameworks continues to strengthen its impact. Fyodor remains dedicated to global expansion, unified enterprise solutions, and building deep, long-term client partnerships.",
  },
  {
    id: "mission",
    number: "02",
    title: "Our Mission",
    content:
      "To empower growing organizations with actionable insights, hands-on execution, and strategic clarity across finance, operations, and transformation. We combine best of consulting and Industry expertise with boutique agility to deliver high-impact solutions that simplify complexity, strengthen internal capabilities, and enable sustainable, long-term success. Our goal is to not just advise—but to partner, execute & elevate",
  },
  {
    id: "vision",
    number: "03",
    title: "Our Vision",
    content:
      "To be the most trusted strategic partner for forward-thinking businesses navigating change. We envision a world where startups, SMEs, and social enterprises operate with enterprise-grade efficiency, clarity, and confidence—driven by data, powered by people, and enabled by meaningful partnerships.Through innovation, collaboration, and consistent delivery excellence, we aim to become the go-to consulting firm across India, APAC, and emerging markets",
  },
];

const AboutSection = () => {
  const [openSection, setOpenSection] = useState<string | null>("");

  const toggleSection = (sectionId: string) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="py-20 px-5 min-h-screen">
      <div className="max-w-6xl md:mx-auto sm:mx-5">
        {/* Header */}
        <div className="flex flex-col md:items-start sm:items-center mb-16">
          <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
            <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
            <span className="text-white text-sm font-medium tracking-wider">
              ABOUT
            </span>
          </div>

          <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
            The Story of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Fyodor
            </span>
          </h2>

          <p className="text-left text-slate-300 text-lg max-w-2xl">
            Innovating with purpose, leading with vision
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 min-w-screen max-h-fit">
          {/* Left Column */}
          <div className="text-justify text-slate-300">
            Fyodor Consulting is a next-generation consulting firm specializing
            in IT transformation, Cloud, AI, QA Automation, and Data
            Engineering. With a strong focus on innovation and community-centric
            learning, Fyodor empowers businesses and professionals through a
            blend of deep technical expertise and practical, outcome-driven
            strategies. The firm’s approach is built on three core strengths.
            Strategic Insights integrate finance, operations, and technology to
            deliver agile, measurable, and sustainable growth for startups,
            SMEs, and large enterprises. Multi-Channel Mastery enhances client
            engagement through LinkedIn, referrals, thought leadership, and
            community events, ensuring brand visibility and trust across diverse
            industries and geographies. Data-Driven Precision leverages
            real-time data, dashboards, and automation to optimize performance,
            reduce inefficiencies, and enable smarter, faster, and more
            accountable decision-making. By combining innovation with proven
            methodologies, Fyodor Consulting delivers transformative solutions
            that drive sustainable growth and lasting impact, positioning itself
            as a trusted partner in the evolving digital era.
          </div>

          {/* Right Column - Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.id}
                className="bg-white/10 rounded-xl shadow-lg overflow-hidden border border-white/20 backdrop-blur-sm"
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-800 font-bold text-xl">
                        {section.number}
                      </span>
                    </div>
                    <h2
                      className={`text-xl font-semibold ${
                        openSection === section.id
                          ? "text-white/80"
                          : "text-white/60"
                      }`}
                    >
                      {section.title}
                    </h2>
                  </div>
                  <svg
                    className={`w-6 h-6 text-slate-500 transform transition-transform duration-300 ${
                      openSection === section.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Expanded Content */}
                <div
                  className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${
                    openSection === section.id
                      ? "max-h-96 opacity-100 pb-6"
                      : "max-h-0 opacity-0 pb-0"
                  }`}
                >
                  <div className="pl-16 border-t border-white/10 pt-6">
                    <p className="text-gray-200">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
