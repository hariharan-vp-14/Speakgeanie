import React from "react";

// Auto-import all image files in characters folder (jpg, avif)
const images = import.meta.glob('../assets/characters/*.{jpg,avif}', { eager: true, query: '?url', import: 'default' });

// Helper function to get image URL by filename
const getImage = (filename) => {
  const path = Object.keys(images).find((key) => key.endsWith(filename));
  return path ? images[path] : null;
};

// Character data
const characters = [
  { name: "Doraemon", filename: "doremon.jpg" },
  { name: "Spiderman", filename: "spiderman.jpg" },
  { name: "Iron Man", filename: "ironman.jpg" },
  { name: "Goku", filename: "goku.jpg" },
];

export default function PracticeWithAI() {
  return (
    <div className="mt-6 px-4 w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-3">Practice With AI</h2>

      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-4 sm:gap-5 md:gap-6
        "
      >
        {characters.map((item, index) => (
          <div
            key={index}
            className="
              relative
              w-full
              aspect-square
              rounded-xl md:rounded-2xl
              overflow-hidden
              shadow-md hover:shadow-lg transition
            "
          >
            <img
              src={getImage(item.filename)}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-1 md:py-2">
              <p className="text-sm md:text-base font-semibold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
