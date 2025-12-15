import React from "react";
import { Phone } from "lucide-react";

import humanImg from "../assets/human.jpg";
import natImg from "../assets/nat.jpg";
import beachImg from "../assets/beach.jpg";
import gamesImg from "../assets/games.jpg";

const practiceCards = [
  { id: 1, title: "Practice with Humans", subtitle: "Talk about your favorite animals and pets", image: humanImg },
  { id: 2, title: "Nature Talk", subtitle: "Discuss nature and landscapes", image: natImg },
  { id: 3, title: "Beach Chat", subtitle: "Share your beach stories", image: beachImg },
  { id: 4, title: "Games", subtitle: "Talk about shells and sea", image: gamesImg },
];

const PracticeCardsRow = () => {
  return (
    <div className="mt-4 px-2">
      <h2 className="text-lg md:text-xl font-semibold mb-3">Practice Topics</h2>

      {/* Horizontal scroll + gap + bottom padding */}
      <div className="flex overflow-x-auto gap-3 pb-6">
        {practiceCards.map((card) => (
          <div
            key={card.id}
            className="
              relative 
              w-[130px] sm:w-[150px]       /* reduced width */
              h-[190px] sm:h-[220px]       /* reduced height */
              rounded-xl overflow-hidden shadow-md 
              flex-shrink-0 group bg-black
            "
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover opacity-90"
            />

            {/* Text + Button */}
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <h4 className="font-semibold text-sm sm:text-base">{card.title}</h4>

              <p className="text-[10px] sm:text-xs mt-1 leading-tight">
                {card.subtitle}
              </p>

              {/* Smaller Button */}
              <button
                className="
                  mt-2 w-full bg-green-500 py-1.5 sm:py-2
                  rounded-lg text-[10px] sm:text-xs
                  font-semibold flex items-center justify-center gap-1
                  shadow-md
                "
              >
                <Phone size={14} /> Join
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeCardsRow;
