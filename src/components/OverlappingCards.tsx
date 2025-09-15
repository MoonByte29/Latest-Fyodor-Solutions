"use client";
import React, { useEffect, useState } from "react";

export interface CardData {
  id: number;
  color: string;
  title: string;
  content: string;
}

interface OverlappingCardsProps {
  cards: CardData[];
  overlapOffset?: number; // default: 50
  cardHeight?: number; // default: 100 (vh)
  showProgress?: boolean;
  showInstructions?: boolean;
}

const OverlappingCards: React.FC<OverlappingCardsProps> = ({
  cards,
  overlapOffset = 50,
  cardHeight = 100,
  showProgress = true,
  showInstructions = true,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Scrollable container height */}
      <div style={{ height: `${cards.length * overlapOffset + cardHeight}vh` }}>
        {cards.map((card, index) => {
          const scrollProgress = scrollY / (window.innerHeight * 0.5);
          const cardScrollStart = index * 0.8;

          let translateY = 100;
          if (scrollProgress >= cardScrollStart) {
            const progress = Math.min(1.2, scrollProgress - cardScrollStart);
            translateY = 100 - progress * 120;
          }

          const isVisible = scrollProgress >= cardScrollStart - 0.2;

          return (
            <div
              key={card.id}
              className={`fixed inset-0 w-full h-screen ${card.color} ${
                !isVisible ? "pointer-events-none" : ""
              }`}
              style={{
                transform: `translateY(${translateY}vh)`,
                zIndex: index + 1,
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.3s ease-out",
              }}
            >
              <div className="h-full w-full flex items-center justify-center p-8">
                <div className="max-w-4xl mx-auto text-center text-white">
                  <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-12 shadow-2xl">
                    <h1 className="text-6xl font-bold mb-8">{card.title}</h1>
                    <p className="text-2xl leading-relaxed mb-8 opacity-90">
                      {card.content}
                    </p>
                    <div className="flex items-center justify-center space-x-8">
                      <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-2xl font-bold">{card.id}</span>
                      </div>
                      <div className="text-left">
                        <p className="text-lg font-semibold">
                          Card {card.id} of {cards.length}
                        </p>
                        <p className="text-sm opacity-75">
                          Scroll to see overlap effect
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      {showProgress && (
        <div className="fixed bottom-8 right-8 z-50 bg-black/50 backdrop-blur-md rounded-lg p-4 text-white">
          <div className="text-center">
            <p className="text-sm font-medium mb-2">Scroll Progress</p>
            <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{
                  width: `${Math.min(
                    100,
                    (scrollY /
                      (document.body.scrollHeight - window.innerHeight)) *
                      100
                  )}%`,
                }}
              />
            </div>
            <p className="text-xs opacity-75 mt-2">
              {Math.round(
                (scrollY /
                  (document.body.scrollHeight - window.innerHeight)) *
                  100
              ) || 0}
              %
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverlappingCards;
