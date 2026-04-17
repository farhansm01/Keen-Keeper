import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("timeline");
    return saved ? JSON.parse(saved) : [];
  });

  const addEntry = (entry) => {
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("timeline", JSON.stringify(updated));
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);
