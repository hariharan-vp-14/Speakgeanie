import { Link } from "react-router-dom";
import { stories } from "../data";   // ✅ CORRECT PATH

const StoryCarousel = () => {
  return (
    <div className="mt-6">
      {/* Header */}
      <div className="flex justify-between items-center px-3">
        <h3 className="text-lg sm:text-xl font-semibold tracking-wide">
          Audio Stories
        </h3>
        <button className="text-green-600 text-sm sm:text-base font-medium hover:underline">
          Show all →
        </button>
      </div>

      {/* Carousel */}
      <div className="flex gap-3 sm:gap-4 p-3 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <Link
            key={story.id}
            to={`/player/${story.id}`}
            className="block min-w-[110px] sm:min-w-[140px] md:min-w-[150px]"
          >
            <div className="cursor-pointer">
              <img
                src={story.image}
                alt={story.title}
                className="
                  h-36 sm:h-44
                  w-28 sm:w-36
                  object-cover
                  rounded-xl
                  shadow-md
                  transition-transform
                  duration-200
                  hover:scale-105
                "
              />

              <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700">
                {story.title.length > 18
                  ? story.title.slice(0, 18) + "..."
                  : story.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StoryCarousel;
