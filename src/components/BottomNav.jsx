import { Home, PlayCircle, User, BookOpen } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { usePlayer } from "../context/PlayerContext";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentStoryId } = usePlayer();

  // helper to highlight active tab
  const isActive = (path) => location.pathname === path;

  return (
    <div className="
      fixed bottom-0 left-0 right-0
      bg-white
      border-t
      shadow-lg
      py-3 px-6
      flex justify-between
      font-medium
      z-50
    ">
      {/* Home */}
      <Link
        to="/"
        className={`flex flex-col items-center gap-1 ${
          isActive("/") ? "text-black" : "text-gray-500"
        }`}
      >
        <Home size={24} />
        <span className="text-xs">Home</span>
      </Link>

      {/* Play */}
      <button
        onClick={() => {
          if (currentStoryId) {
            navigate(`/player/${currentStoryId}`);
          }
        }}
        className={`flex flex-col items-center gap-1 ${
          currentStoryId &&
          location.pathname.startsWith("/player")
            ? "text-black"
            : "text-gray-400"
        }`}
        disabled={!currentStoryId}
      >
        <PlayCircle size={24} />
        <span className="text-xs">Play</span>
      </button>

      {/* Learn */}
      <button
        onClick={() => {
          if (currentStoryId) {
            navigate(`/quiz/${currentStoryId}`);
          }
        }}
        className={`flex flex-col items-center gap-1 ${
          currentStoryId &&
          location.pathname.startsWith("/quiz")
            ? "text-black"
            : "text-gray-400"
        }`}
        disabled={!currentStoryId}
      >
        <BookOpen size={24} />
        <span className="text-xs">Learn</span>
      </button>

      {/* Profile */}
      <button
        className={`flex flex-col items-center gap-1 ${
          isActive("/profile") ? "text-black" : "text-gray-500"
        }`}
      >
        <User size={24} />
        <span className="text-xs">Profile</span>
      </button>
    </div>
  );
};

export default BottomNav;
