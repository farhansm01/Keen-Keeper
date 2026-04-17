import { FaPhoneAlt, FaVideo } from "react-icons/fa";
import { FiArchive, FiEdit } from "react-icons/fi";
import { HiMiniBellSnooze } from "react-icons/hi2";
import { MdDelete, MdMessage } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTimeline } from "../context/TimelineContext";

export default function FriendDetails() {
  const friends = useLoaderData();
  const { id } = useParams();
  const friend = friends.find((f) => f.id === Number(id));
  const { addEntry } = useTimeline();

  if (!friend) {
    return <div className="text-center mt-10">Friend not found</div>;
  }

  const {
    name,
    picture,
    days_since_contact,
    goal,
    next_due_date,
    status,
    tags,
    bio,
  } = friend;

  const handleCheckIn = (type) => {
    addEntry({
      id: Date.now(),
      type,
      friendName: name,
      date: new Date().toISOString(),
      title: `${type} with ${name}`,
    });
    toast.success(`${type} logged with ${name}!`);
  };

  const statusStyle = {
    on_track: "bg-[#244D3F] text-white",
    almost_due: "bg-[#EFAD44] text-white",
    overdue: "bg-[#EF4444] text-white",
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen px-4 py-6 sm:px-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <img
              src={picture}
              alt={name}
              className="w-20 h-20 rounded-full mx-auto"
            />

            <h2 className="font-bold text-lg sm:text-xl mt-3">{name}</h2>

            <span
              className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${
                statusStyle[status]
              }`}
            >
              {status.replace("_", " ")}
            </span>

            <div className="mt-2 flex flex-wrap justify-center gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold px-2 py-1 rounded-full bg-[#CBFADB] text-[#244D3F]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-3 italic">"{bio}"</p>
            <p className="text-xs text-gray-400 mt-1">Preferred: email</p>
          </div>

          <div className="space-y-2">
            <button className="w-full font-semibold flex items-center justify-center gap-2 bg-white border rounded-xl py-2 text-sm hover:bg-gray-50">
              <HiMiniBellSnooze className="text-xl" /> Snooze 2 Weeks
            </button>

            <button className="w-full font-semibold flex items-center justify-center gap-2 bg-white border rounded-xl py-2 text-sm hover:bg-gray-50">
              <FiArchive className="text-lg" /> Archive
            </button>

            <button className="w-full font-semibold flex items-center justify-center gap-2 bg-white border rounded-xl py-2 text-sm text-red-500 hover:bg-red-50">
              <MdDelete className="text-lg" /> Delete
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-2 space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-center">
              <h3 className="text-2xl text-[#244D3F] font-bold mb-2">
                {days_since_contact}
              </h3>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-xl p-4 text-center">
              <h3 className="text-2xl text-[#244D3F] font-bold mb-2">{goal}</h3>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-xl p-4 text-center">
              <h3 className="text-2xl text-[#244D3F] font-bold mb-2">
                {new Date(next_due_date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </h3>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-white rounded-xl p-5 flex justify-between items-center">
            <div>
              <h3 className="font-medium mb-2">Relationship Goal</h3>
              <p className="text-sm text-gray-500">
                Connect every{" "}
                <span className="font-bold text-black">{goal} days</span>
              </p>
            </div>

            <button className="flex items-center gap-1 text-sm border px-3 py-1 rounded-md hover:bg-gray-50">
              <FiEdit /> Edit
            </button>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white rounded-xl p-5">
            <h3 className="font-medium mb-3">Quick Check-In</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => handleCheckIn("Call")}
                className="bg-gray-50 border border-[#E9E9E9] rounded-xl py-6 flex flex-col items-center gap-3 hover:bg-gray-100"
              >
                <FaPhoneAlt className="text-lg" />
                <span className="text-sm">Call</span>
              </button>

              <button
                onClick={() => handleCheckIn("Text")}
                className="bg-gray-50 border border-[#E9E9E9] rounded-xl py-6 flex flex-col items-center gap-3 hover:bg-gray-100"
              >
                <MdMessage className="text-lg" />
                <span className="text-sm">Text</span>
              </button>

              <button
                onClick={() => handleCheckIn("Video")}
                className="bg-gray-50 border border-[#E9E9E9] rounded-xl py-6 flex flex-col items-center gap-3 hover:bg-gray-100"
              >
                <FaVideo className="text-lg" />
                <span className="text-sm">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
