import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [currentStoryId, setCurrentStoryId] = useState(null);

  return (
    <PlayerContext.Provider
      value={{ currentStoryId, setCurrentStoryId }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
