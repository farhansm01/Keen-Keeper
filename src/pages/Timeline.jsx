import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";
import { useTimeline } from "../context/TimelineContext";

const iconMap = {
  Call: callIcon,
  Text: textIcon,
  Video: videoIcon,
};

const Timeline = () => {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const filteredEntries =
    filter === "All"
      ? entries
      : entries.filter((entry) => entry.type === filter);

  return (
    <div className="bg-[#F8FAFC] min-h-screen px-4 py-6 sm:px-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Timeline</h1>

      {/* Dropdown Filter */}
      <div className="mb-6">
        <div className="mb-6 relative w-full sm:w-80">
          {/* Trigger */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex justify-between items-center px-5 py-3 rounded-2xl border border-gray-200 bg-gray-50 text-gray-600 shadow-sm cursor-pointer"
          >
            <span>{filter === "All" ? "Filter timeline" : filter}</span>
            <FiChevronDown
              className={`text-gray-400 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded shadow-md overflow-hidden z-10">
              {["All", "Call", "Text", "Video"].map((type) => (
                <div
                  key={type}
                  onClick={() => {
                    setFilter(type);
                    setIsOpen(false);
                  }}
                  className="px-5 py-3 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                >
                  {type === "All" ? "All" : type}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Timeline Content */}
      {filteredEntries.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          No interactions found.
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {filteredEntries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white rounded-xl px-5 py-4 flex items-center gap-4 shadow-sm"
            >
              <img
                src={iconMap[entry.type]}
                alt={entry.type}
                className="w-8 h-8 object-contain"
              />

              <div>
                <p className="text-sm font-semibold">
                  <span className="font-bold">{entry.type}</span>{" "}
                  <span className="text-gray-500 font-normal">
                    with {entry.friendName}
                  </span>
                </p>

                <p className="text-xs text-gray-400 mt-0.5">
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;
