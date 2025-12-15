import React from "react";
import { Zap } from "lucide-react";

const XPCard = () => {
  const progress = 60; // 60% progress

  return (
    <div className="bg-white p-5 rounded-2xl shadow-lg mt-5 border border-gray-100 relative overflow-hidden">
      
      {/* Glow / Background Accent */}
      <div className="absolute inset-0 bg-green-100/10 blur-2xl -z-10 rounded-2xl"></div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <Zap size={16} /> XP PROGRESS
        </h3>
        <p className="text-xs font-medium text-gray-500">242 XP</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
        <div
          className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Optional XP Label */}
      <p className="text-xs text-gray-500 mt-2">Keep going! Almost there </p>
    </div>
  );
};

export default XPCard;
