import { useParams } from "react-router-dom";
import { stories } from "../data";
import { useRef, useState, useEffect } from "react";
import { usePlayer } from "../context/PlayerContext";

import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Heart,
  ChevronDown,
} from "lucide-react";

export default function PlayerScreen() {
  const { id } = useParams();
  const story = stories.find((s) => String(s.id) === String(id));
  const { setCurrentStoryId } = usePlayer();

  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  if (!story) return <p className="p-4 text-red-500">Story not found</p>;

  /* Register current story */
  useEffect(() => {
    setCurrentStoryId(story.id);
  }, [story.id, setCurrentStoryId]);

  /* Play / Pause */
  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  /* Progress update */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", update);

    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", update);
    };
  }, []);

  const seek = (e) => {
    const time = Number(e.target.value);
    audioRef.current.currentTime = time;
    setProgress(time);
  };

  const format = (t) => {
    if (!t) return "0:00";
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-6 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-gray-500">
            NOW PLAYING
          </p>
          <button className="text-gray-500 hover:text-black transition">
            <ChevronDown size={22} />
          </button>
        </div>

        {/* MAIN RESPONSIVE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — ARTWORK */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-60 sm:h-72 md:h-80 lg:h-[420px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — PLAYER INFO & CONTROLS */}
          <div className="flex flex-col justify-center">
            {/* Title + Like */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">
                  {story.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1 max-w-md">
                  {story.description}
                </p>
              </div>

              <button
                onClick={() => setLiked(!liked)}
                className={liked ? "text-red-500" : "text-gray-400"}
              >
                <Heart
                  size={24}
                  fill={liked ? "currentColor" : "none"}
                />
              </button>
            </div>

            {/* Progress */}
            <div className="mt-6">
              <input
                type="range"
                min="0"
                max={duration}
                value={progress}
                onChange={seek}
                className="w-full accent-black h-1 cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>{format(progress)}</span>
                <span>{format(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8 px-2 sm:px-6">
              <button className="text-gray-400 hover:text-black transition">
                <Shuffle size={22} />
              </button>

              <button className="text-gray-600 hover:text-black transition">
                <SkipBack size={26} />
              </button>

              <button
                onClick={togglePlay}
                className="bg-black text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition"
              >
                {isPlaying ? (
                  <Pause size={32} />
                ) : (
                  <Play size={32} />
                )}
              </button>

              <button className="text-gray-600 hover:text-black transition">
                <SkipForward size={26} />
              </button>

              <button className="text-gray-400 hover:text-black transition">
                <Repeat size={22} />
              </button>
            </div>

            {/* CTA */}
            <button className="mt-8 max-w-sm bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition">
              Test Your Understanding · 7 Questions
            </button>
          </div>
        </div>

        {/* Audio */}
        <audio ref={audioRef}>
          <source src={story.audio} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}
