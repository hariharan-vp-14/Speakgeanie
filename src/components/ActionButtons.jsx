import { Video, PhoneCall, BookOpen, Bot } from "lucide-react";

const buttons = [
  { label: "Video Learning", icon: <Video size={22} /> },
  { label: "Peer Calls", icon: <PhoneCall size={22} /> },
  { label: "Stories", icon: <BookOpen size={22} /> },
  { label: "AI Calls", icon: <Bot size={22} /> },
];

function ActionButtons() {
  return (
    <div className="grid grid-cols-4 text-center mt-5 gap-4">
      {buttons.map((btn, i) => (
        <div key={i} className="flex flex-col items-center">

          <div className="
            bg-white 
            shadow-md 
            p-4 
            rounded-2xl 
            flex 
            items-center 
            justify-center 
            text-gray-700 
            hover:shadow-lg 
            transition
          ">
            {btn.icon}
          </div>

          <p className="text-sm mt-2 font-medium text-gray-700">
            {btn.label}
          </p>

        </div>
      ))}
    </div>
  );
}

export default ActionButtons;
