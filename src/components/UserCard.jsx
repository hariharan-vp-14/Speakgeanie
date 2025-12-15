import React from "react";
import { User, Zap, Star, Diamond } from "lucide-react";

const UserCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl p-5 
      bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white">

      {/* Glow Effect Background */}
      <div className="absolute inset-0 opacity-25 blur-2xl bg-white/20"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Greeting */}
        <p className="text-lg font-medium opacity-90 flex items-center gap-2">
          <User size={20} /> Good Night
        </p>

        {/* Name */}
        <h2 className="font-bold text-3xl tracking-wide mt-1 drop-shadow-sm flex items-center gap-2">
          Lorenzo
        </h2>

        {/* Stats Row */}
        <div className="mt-4 flex gap-3 items-center">

          {/* Level Badge */}
          <span className="px-3 py-1.5 rounded-full text-sm font-semibold 
          bg-white/20 backdrop-blur-md border border-white/30 shadow-md flex items-center gap-1">
            <Zap size={16} /> L3
          </span>

          {/* Gems */}
          <span className="px-3 py-1.5 rounded-full text-sm font-semibold
          bg-yellow-300 text-yellow-900 shadow-md border border-yellow-400/60 flex items-center gap-1">
            <Diamond size={16} /> 30 Gems
          </span>

          {/* PRO Badge */}
          <span className="px-3 py-1.5 rounded-full text-sm font-bold 
          bg-gradient-to-r from-orange-400 to-orange-600 shadow-md 
          border border-orange-300/60 text-white flex items-center gap-1">
            <Star size={16} /> PRO
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
