import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const Stages = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const stages = [
    {
      id: 1,
      title: "Discovery",
      description:
        "We begin by understanding your business goals, challenges, and requirements. This phase sets the foundation by aligning expectations and objectives.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      title: "Planning",
      description:
        "Our team creates a strategic roadmap, defining the scope, timelines, and resources needed. We ensure every milestone is clearly mapped out.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      title: "Execution",
      description:
        "We bring the plan to life with agile development, constant collaboration, and transparent progress tracking to ensure flawless execution.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      title: "Delivery",
      description:
        "The final product is delivered with rigorous testing and quality assurance, ensuring it meets expectations and delivers real value.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const truncateText = (text: string, maxChars: number) => {
    if (text.length <= maxChars) return text;
    const truncated = text.slice(0, maxChars);
    const lastSpaceIndex = truncated.lastIndexOf(" ");
    return truncated.slice(0, lastSpaceIndex) + "...";
  };
  return (
    <>
      <div className="py-20 px-5 min-h-screen">
        <div className="max-w-6xl md:mx-20 sm:mx-5">
          {/* Header */}
          <div className="flex flex-col md:items-start sm:items-center mb-16">
            <div className="min-w-fit border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm bg-white/10 flex items-center gap-2 mb-8">
              <span className="h-2 w-2 animate-pulse bg-violet-500 rounded-full"></span>
              <span className="text-white text-sm font-medium tracking-wider">
                STAGES
              </span>
            </div>

            <h2 className="text-center font-bold text-white text-2xl md:text-4xl lg:text-5xl leading-tight mb-6">
              Our Stages of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Success
              </span>
            </h2>

            <p className="text-left text-slate-300 text-lg max-w-2xl">
              Innovating with purpose, leading with vision
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
            {stages.map((stage) => {
              const isActive = activeCard === stage.id;
              return (
                <div
                  key={stage.id}
                  onMouseEnter={() => setActiveCard(stage.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`relative bg-gradient-to-b from-slate-900/70 to-blue-950/90 backdrop-blur shadow-xl rounded-lg cursor-pointer transition-all duration-500 ease-in-out overflow-hidden border border-blue-700/30 flex flex-col h-[350px] ${
                    isActive
                      ? "md:flex-[2] shadow-sm shadow-blue-500/30 border-blue-500/50"
                      : "md:flex-[1]"
                  }`}
                >
                  <div className="p-6 h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-4 flex-shrink-0 flex items-center gap-2">
                      <CheckCircle
                        size={22}
                        className="text-blue-400 flex-shrink-0"
                      />
                      {stage.title}
                    </h3>

                    <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0">
                      {/* Content area */}
                      <div
                        className={`flex flex-col flex-1 min-h-0 ${
                          isActive ? "md:w-1/2" : "w-full"
                        }`}
                      >
                        {isActive ? (
                          <p className="text-blue-100/90 mb-4 flex-1 overflow-hidden text-sm leading-relaxed">
                            {truncateText(stage.description, 160)}
                          </p>
                        ) : (
                          <div className="flex flex-col items-center justify-center flex-1">
                            <div className="w-full flex-1 rounded-lg overflow-hidden shadow-lg border border-blue-700/30">
                              <img
                                src={stage.image}
                                alt={stage.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Image area when expanded */}
                      {isActive && (
                        <div className="flex-1 md:w-1/2 flex items-center justify-center min-h-0">
                          <div className="w-full h-full rounded-lg overflow-hidden shadow-md border border-blue-700/30">
                            <img
                              src={stage.image}
                              alt={stage.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Glow effect overlay */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 pointer-events-none rounded-lg"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stages;
