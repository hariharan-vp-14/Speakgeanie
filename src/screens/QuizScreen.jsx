import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";

const topics = [
  "My Best Friend",
  "Cricket Basics",
  "Solar System",
  "Healthy Habits",
  "Animals & Birds",
  "School Picnic",
];

export default function QuizScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [selectedTopic, setSelectedTopic] = useState("");
  const [level, setLevel] = useState("Medium");

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 flex justify-center">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-black"
          >
            <ArrowLeft size={20} />
          </button>
          <span className="text-xs tracking-widest text-gray-500">
            LEARN TAB
          </span>
        </div>

        {/* Intro Card */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-8 max-w-xl">
          <h1 className="text-lg sm:text-xl font-semibold mb-1">
            Craft a custom quiz
          </h1>
          <p className="text-sm text-gray-500">
            Pick a topic, choose difficulty, and we’ll build a fun quiz instantly.
          </p>

          <div className="flex flex-wrap gap-2 mt-3 text-xs text-green-600 font-medium">
            <span className="flex items-center gap-1">
              <Sparkles size={14} /> AI Powered
            </span>
            <span>• 4 Questions</span>
            <span>• Instant play</span>
          </div>
        </div>

        {/* MAIN RESPONSIVE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT COLUMN — TOPICS */}
          <div>
            <p className="text-xs font-semibold text-gray-400 mb-2">
              STEP 1
            </p>
            <h2 className="font-semibold mb-3 text-base sm:text-lg">
              Choose a topic
            </h2>

            <input
              placeholder='e.g. "My school day" or "Planets in space"'
              className="w-full border rounded-xl px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`border rounded-xl px-3 py-2 text-sm text-left transition ${
                    selectedTopic === topic
                      ? "border-green-500 bg-green-50"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — DIFFICULTY */}
          <div>
            <p className="text-xs font-semibold text-gray-400 mb-2">
              STEP 2
            </p>
            <h2 className="font-semibold mb-4 text-base sm:text-lg">
              Pick a challenge level
            </h2>

            <div className="space-y-4">
              {/* Easy */}
              <button
                onClick={() => setLevel("Easy")}
                className={`w-full flex justify-between items-center p-4 rounded-xl border transition ${
                  level === "Easy"
                    ? "border-green-500 bg-green-50"
                    : "bg-white"
                }`}
              >
                <div>
                  <p className="font-medium">Easy</p>
                  <p className="text-sm text-gray-500">
                    Short sentences & gentle vocabulary
                  </p>
                </div>
                <Lightbulb className="text-green-500" size={20} />
              </button>

              {/* Medium */}
              <button
                onClick={() => setLevel("Medium")}
                className={`w-full flex justify-between items-center p-4 rounded-xl border transition ${
                  level === "Medium"
                    ? "border-green-500 bg-green-50"
                    : "bg-white"
                }`}
              >
                <div>
                  <p className="font-medium">Medium</p>
                  <p className="text-sm text-gray-500">
                    Everyday situations with detail
                  </p>
                </div>
                <CheckCircle2 className="text-green-600" size={20} />
              </button>

              {/* Hard */}
              <button
                onClick={() => setLevel("Hard")}
                className={`w-full flex justify-between items-center p-4 rounded-xl border transition ${
                  level === "Hard"
                    ? "border-green-500 bg-green-50"
                    : "bg-white"
                }`}
              >
                <div>
                  <p className="font-medium">Hard</p>
                  <p className="text-sm text-gray-500">
                    Longer thinking & tricky choices
                  </p>
                </div>
                <BookOpen className="text-purple-500" size={20} />
              </button>
            </div>

            {/* Info box */}
            <div className="bg-green-500 text-white rounded-2xl p-5 mt-6">
              <h3 className="font-semibold mb-2">
                What you’ll get
              </h3>
              <ul className="text-sm space-y-1">
                <li>• Friendly quiz with instant feedback</li>
                <li>• Bite-sized explanations</li>
                <li>• Difficulty matches learner profile</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-md mt-10">
          <button
            disabled={!selectedTopic}
            className={`w-full py-3 rounded-xl font-semibold transition ${
              selectedTopic
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            Generate Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
