import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import BlogModal from "./BlogModal";

const BlogSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [showText, setShowText] = useState<number | null>(null);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = [
    {
      id: 1,
      title: "The Future of Agentic AI",
      blog: "Agentic AI represents a transformative evolution in artificial intelligence, offering unprecedented autonomy in task execution. This technology is becoming the driving force behind modern automation across industries, enabling systems to perform complex tasks and make decisions based on real-time data analysis.",
      cta: "Read more",
      image:
        "https://images.unsplash.com/photo-1674027444485-cec3da58eef4",
      url: "/blogs/future-of-agentic-ai",
    },
    {
      id: 2,
      title: "Maximizing SaaS Efficiency",
      blog: "Discover how businesses are leveraging SaaS solutions to streamline operations and reduce costs. Our latest research shows companies can save up to 40% on operational expenses by implementing the right SaaS tools tailored to their specific needs.",
      cta: "Read more",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      url: "/blogs/maximizing-saas-efficiency",
    },
    {
      id: 3,
      title: "Hiring Tech Talent in 2023",
      blog: "The landscape for hiring technical professionals has evolved dramatically. Companies now prioritize vetted professionals, managed services, and dedicated teams to ensure project success. Learn about the latest trends in tech recruitment.",
      cta: "Read more",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      url: "/blogs/hiring-tech-talent-2023",
    },
  ];

  const truncateText = (text: string, maxChars: number) => {
    if (text.length <= maxChars) return text;

    const truncated = text.slice(0, maxChars);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    return truncated.slice(0, lastSpaceIndex) + "...";
  };

  const handleReadMore = (card: any) => {
    setSelectedBlog(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <>
      <div className="min-h-screen py-12 px-4 overflow-hidden relative">
      <div className="max-w-6xl md:mx-auto sm:mx-5 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
            <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
            <span className="text-white text-sm font-medium tracking-wider">
              BLOGS
            </span>
          </div>

          <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
            What's New at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Fyodor
            </span>
          </h2>

          <p className="text-left text-slate-300 text-lg max-w-2xl">
            Stay informed with the latest trends, ideas, and expert guidance
            from our team.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {cards.map((card) => {
            const isActive = activeCard === card.id;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => {
                  setActiveCard(null);
                  setShowText(null);
                }}
                className={`group bg-slate-800/50 backdrop-blur border border-slate-700/50 hover:border-blue-500/30 rounded-xl cursor-pointer transition-all duration-700 ease-in-out overflow-hidden flex flex-col h-[350px] relative ${
                  isActive
                    ? "md:flex-[2] hover:bg-slate-800/70"
                    : "md:flex-[1] hover:bg-slate-800/70"
                }`}
                onTransitionEnd={() => {
                  if (isActive) {
                    setTimeout(() => setShowText(card.id), 100);
                  }
                }}
              >
                <div className="p-6 h-full flex flex-col relative">
                  <h3 className="text-2xl font-bold text-white mb-4 flex-shrink-0 transition-all duration-500 ease-out group-hover:text-blue-200">
                    {card.title}
                  </h3>

                  <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0 relative">
                    {/* Content area */}
                    <div
                      className={`flex flex-col flex-1 min-h-0 transition-all duration-700 ease-in-out ${
                        isActive ? "md:w-1/2" : "w-full"
                      }`}
                    >
                      {/* Default state - Image only */}
                      <div
                        className={`flex flex-col items-center justify-center flex-1 transition-all duration-500 ease-in-out ${
                          isActive 
                            ? "opacity-0 scale-95 -translate-x-2 pointer-events-none absolute inset-0" 
                            : "opacity-100 scale-100 translate-x-0"
                        }`}
                      >
                        <div className="w-full flex-1 rounded-lg overflow-hidden shadow-lg border border-slate-700/30">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out"
                          />
                        </div>
                      </div>

                      {/* Active state - Text content */}
                      <div
                        className={`flex flex-col flex-1 min-h-0 transition-all duration-500 ease-out ${
                          showText === card.id
                            ? "opacity-100 scale-100 translate-x-0" 
                            : "opacity-0 scale-95 translate-x-2 pointer-events-none absolute inset-0"
                        }`}
                      >
                        <p className={`text-slate-300 mb-4 flex-1 overflow-hidden text-sm leading-relaxed transform transition-all duration-600 ease-out ${
                          showText === card.id ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4"
                        }`}>
                          {truncateText(card.blog, 180)}
                        </p>
                        
                        {/* Read more button */}
                        <div className={`mt-auto transition-all duration-600 ease-out ${
                          showText === card.id ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-2"
                        }`}>
                          <button 
                            onClick={() => handleReadMore(card)}
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 group/btn"
                          >
                            {card.cta} 
                            <ArrowRight 
                              size={16} 
                              className="transform transition-transform duration-300 group-hover/btn:translate-x-1" 
                            />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image area - only visible when expanded */}
                    <div
                      className={`flex-1 md:w-1/2 flex items-center justify-center min-h-0 transition-all duration-600 ease-out ${
                        isActive 
                          ? "opacity-100 scale-100 translate-x-0 delay-300" 
                          : "opacity-0 scale-95 translate-x-4 pointer-events-none absolute"
                      } hidden md:flex`}
                    >
                      <div className="w-full h-full rounded-lg overflow-hidden shadow-md border border-slate-700/30">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle border line at bottom for extra polish */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transition-opacity duration-500 ease-in-out ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>

      {/* Modal */}
      <BlogModal isOpen={isModalOpen} onClose={closeModal} blog={selectedBlog} />
    </>
  );
};

export default BlogSection;